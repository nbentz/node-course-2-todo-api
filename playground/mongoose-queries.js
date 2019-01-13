const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5c3953b32cab21765c3511dc';
let userId = '5c37ee7ec6436c1b50a67c5f';

// if(!ObjectId.isValid(id)){
//     console.log('ID is not valid');
// }
// 
// //returns an arr
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log( 'Todos: ', todos);
// });

// //returns an object or null
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) console.log('Id not found');
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then(todo => {
//     if(!todo) console.log('Id not found');
//     console.log('Todo by id: ', todo);
// }).catch(e => {
//      console.log(e);
// });

User.findById(userId).then( user => {
    if(!user) return console.log('User not found');
    console.log(JSON.stringify(user, undefined, 2));
}, e => {
    console.log(e)
});