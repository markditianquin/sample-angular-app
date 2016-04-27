var mongoose = require('mongoose');
var uri = 'mongodb://heroku_fn1hr8zp:7bja6taidcv8hbqhcrfdq1qnac@ds021731.mlab.com:21731/heroku_fn1hr8zp' || 'mongodb://localhost/todos';

//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todos');

console.log('Connecting to DB : ', uri);

var conn = mongoose.createConnection(uri);

var Todo = conn.model('Todo', {
	task: String,
	isCompleted: Boolean,
	isEditing: Boolean
});

module.exports.Todo = Todo;