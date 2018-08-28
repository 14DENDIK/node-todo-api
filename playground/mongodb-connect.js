// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, database) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connnected to MongoDB server.');

	// database.db().collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Can\'t write to the MongoDB server.', err);
	// 	}

	// 	console.log(JSON.stringify(result, undefined, 2));

	// });

	// database.db().collection('Users').insertOne({
	// 	name: 'Sardor',
	// 	age: 20,
	// 	location: 'Tashkent'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert.', err);
	// 	}

	// 	console.log(result.ops);
	// });

	database.close();
});