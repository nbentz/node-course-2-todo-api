const {ObjectID} = require ('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove({}).then(result => {
    console.log(result);
});

Todo.findOneAndRemove({
    _id: '5c464f829ec33e9f545fd757'
}).then(res => {
    console.log(res);
});

Todo.findByIdAndRemove('5c464f829ec33e9f545fd757').then(res => {
    console.log(res);
});

