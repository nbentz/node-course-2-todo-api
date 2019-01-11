// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

let user = { name: "Nick", age: 30 };
let { name } = user;

console.log(name);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB Server.");
    const db = client.db("TodoApp");

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("5c379e07dc9704a44d44e735")},
    //     {
    //         $set: {
    //             completed: false
    //         }
    //     },
    //     { returnOriginal: false}
    // ).then( result => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID("5c379a1427ee234b28bb2b57")},
        {
            $set: {
                name: 'Heather'
            },
            $inc : {
                age: 1
            }
        },
        { returnOriginal: false}
    ).then( result => {
        console.log(result);
    }); 
    //client.close();
  }
);
