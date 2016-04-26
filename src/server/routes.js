var todosRoute = require('./todos/routes'); 

module.exports = function routes(app) {
	app.use('/todos', todosRoute);
};