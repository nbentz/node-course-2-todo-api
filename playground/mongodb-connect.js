// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

 let user = {name: 'Nick', age: 30};
 let {name} = user

 console.log(name)

 MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=> {
     if(err){   
        return console.log('Unable to connect to MongoDB server.');
     }
     console.log('Connected to MongoDB Server.');
     const db = client.db('TodoApp');

    //  db.collection('Todos').insertOne({
    //     text: 'Something to do.',
    //     completed: false
    //  }, (err, result) => {
    //      if(err) {
    //          return console.log('Unable to insert to do', err);
    //      }
    //      console.log(JSON.stringify(result.ops, undefined, 2));
    //  });
    // let obj = {
    //     name: 'Nick',
    //     age: 30,
    //     location: 'Janesville, WI'
    // };
    // db.collection('Users').insertOne(obj, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
     client.close();
 });