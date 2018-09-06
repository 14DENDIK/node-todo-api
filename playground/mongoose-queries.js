const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b902b5387c85e267c8acc65';

// if(!ObjectID.isValid(id)) {
// 	console.log('Id is not valid.');
// }

// Todo.find({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo)
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found.');
// 	}

// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5b917aa4de620a275cb40914';

User.findById(id).then((user) => {
	if(!user) {
		console.log('User not found.');
	}

	console.log('User', user);
}).catch((e) => console.log(e));

