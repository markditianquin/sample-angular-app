var mongoose = require('mongoose');
var uri = process.env.MONGOLAB_URI || 'mongodb://localhost/todos';

//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/todos');

console.log('Connecting to DB : ', uri);

var conn = mongoose.createConnection(uri);

var Todo = conn.model('Todo', {
	task: String,
	isCompleted: Boolean,
	isEditing: Boolean
});

module.exports.Todo = Todo;