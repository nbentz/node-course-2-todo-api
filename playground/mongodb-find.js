// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

 let user = {name: 'Nick', age: 30};
 let {name} = user;

 console.log(name);

 MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=> {
    if(err){   
        return console.log('Unable to connect to MongoDB server.');
     }
     console.log('Connected to MongoDB Server.');
     const db = client.db('TodoApp');
    
    // returns all records
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c36cee4743ecc67d865d1e8')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined, 2));
    //  }, (err) => {
    //      console.log('Unable to fetch todos.', err);
    //  });

    //  db.collection('Todos').find().count().then((count) => {
    //      console.log(`Todos count: ${count}.`);
    //  }, (err) => {
    //      console.log('Unable to count', err);
    //  });

    db.collection('Users').find({name: 'Nick'}).toArray().then( (docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Nicks', err);
    });


     //client.close();
 });