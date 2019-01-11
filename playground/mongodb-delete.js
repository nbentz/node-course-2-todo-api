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

     //delete many - deletes all objs with text === 'Eat lunch'
    //  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => {
    //      console.log(result);
    //  }, (err) => {
    //      console.log(err)
    // });

     //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result=>{
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

     //find one and delete
    //  db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    //  }, err => {
    //     console.log(err);
    //  });

    //challenge
    // db.collection('Users').deleteMany({name: 'Nick'}).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID('')}).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

     //client.close();
 });