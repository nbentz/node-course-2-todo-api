const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'bentzen.nich@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access : 'auth',
        token : jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
},{
    _id: userTwoId,
    email: 'bentzen.nich1@gmail.com',
    password: 'userTwoPass'
}];

const todos = [
    {
      _id: new ObjectID(),
      text: "first test todo"
    },
    {
      _id: new ObjectID(),
      text: "second test todo",
      completed: true,
      compeltedAt: 333
    },
    {
      _id: new ObjectID(),
      text: "third test todo"
    }
  ];

  const populateUsers = (done => {
      User.deleteMany({})
        .then( () => {
            let userOne = new User(users[0]).save();
            let userTwo = new User(users[1]).save();
            Promise.all([userOne, userTwo])
        }).then(() => done());
  });

  const populateTodos = (done => {
    Todo.deleteMany({})
      .then(() => {
        return Todo.insertMany(todos);
      })
      .then(() => done());
  });

  module.exports = {todos, populateTodos, users, populateUsers  };