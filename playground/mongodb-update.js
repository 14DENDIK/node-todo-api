const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, {useNewUrlParser: true}, (err, database) => {
	if(err) {
		console.log('Unable to connect to MongoDB server.');
	}

	// findOneAndUpdate
	// database.db().collection('Todos').findOneAndUpdate({
	// 	text: 'Feed up a dog'
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log(err);
	// });

	database.db().collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b882f0b17c7aa025073dfb8')
	}, {
		$set: {
			name: 'Sardor'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log(err);
	});

	database.close();
});