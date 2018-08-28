const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, {useNewUrlParser: true}, (err, database) => {
	if(err) {
		console.log('Unabel to connect to MongoDB.');
	}

	// deleteMany
	// database.db().collection('Todos').deleteMany({text: 'Have a dinner'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Unable to delete', err);
	// });

	//deleteOne
	// database.db().collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log(err);
	// });

	//findOneAndDelete
	// database.db().collection('Todos').findOneAndDelete({text: 'Feed up a dog'}).then((result) => {
	// 	console.log(result);
	// })

	database.db().collection('Users').deleteMany({location: 'Tashkent'}).then((result) => {
		console.log(result);
	});

	database.db().collection('Users').deleteOne({_id: new ObjectID('5b855c3668a9dc1f988402c4')}).then((result) => {
		console.log(result);
	});

	database.close();
});