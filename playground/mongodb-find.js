const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, {useNewUrlParser: true}, (err, database) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server.');
	}

	// database.db().collection('Todos').find({_id: new ObjectID('5b853bb15c39821f98e33361')}).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log(err);
	// });

	// database.db().collection('Todos').countDocuments().then((count) => {
	// 	console.log(`Todos count: ${count}.`);
	// }, (err) => {
	// 	console.log('Unabel to access collection: ', err);
	// });

	// database.db().collection('Users').find({name: 'Sardor'}).toArray().then((docs) => {
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to open: ', err);
	// });

	database.db().collection('Users').find({name: 'Sardor'}).count().then((count) => {
		console.log(`User(s) with name Sardor: ${count}`);
	}, (err) => {
		console.log('Unable to access collection: ', err);
	});

	database.close();
});