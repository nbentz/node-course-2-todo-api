require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
//creates todo
app.post('/todos', authenticate, (req, res) => {
    let todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



app.get('/todos', authenticate, (req, res) => {
    Todo.find({
        //finds todos of logged in user
        _creator: req.user._id
    }).then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/12345
app.get('/todos/:id', authenticate, (req, res) => {
    let id = req.params.id;

    //valid id using isValid
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findOne({
        _id: id,
        _creator: req.user._id
    }).then( todo => {
        if(!todo) return res.status(404).send();
        res.send(todo);
    }).catch( e => {
        res.status(400).send();
    });
});


app.delete('/todos/:id', authenticate, (req, res) => {
    //get the id
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findOneAndRemove({
        _id: id,
        _creator: req.user._id
    }).then( todo => {
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch( e => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', authenticate, (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) return res.status(404).send();
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findOneAndUpdate({
        _id: id,
        _creator: req.user._id
    }, {$set : body}, {new : true}).then( todo => {
        if (!todo) return res.status(404).send();
        res.send({todo});
    }).catch(e => {
        res.status(400).send();
    });
});

// POST /users
app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    let user = new User(body);

    user.save().then( () => {
        return user.generateAuthToken();
        // res.send(user);
    }).then(token => {
        res.header('x-auth', token).send(user);
    }).catch(e => {
        res.status(400).send(e);
    });
});



app.get('/users/me', authenticate, (req, res) => {
    // let token = req.header('x-auth');
    // User.findByToken(token).then(user => {
    //     if (!user) {

    //     }
    //     res.send(user);
    // }).catch(e => {
    //     res.status(401).send();
    // });
    res.send(req.user);
});

// POST /users/login_{email, password};
app.post('/users/login', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password).then(user => {
        return user.generateAuthToken().then(token => {
            res.header('x-auth', token).send(user);
        });
    }).catch(e => {
        res.status(400).send();
    });
});


app.delete('/users/me/token' , authenticate, (req, res) => {
    req.user.removeToken(req.token).then( () => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});
app.listen(port, () => {
    console.log(`Started up on port ${port}`);
}); 

//next line === module.exports.app = app;
module.exports = {app};