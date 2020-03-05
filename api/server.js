module.exports = function(app) {
    let todoModel = require('../api/model/todoModel');
    let todoRoute = require('../api/routes/todoRoute');
    todoRoute(app);
}