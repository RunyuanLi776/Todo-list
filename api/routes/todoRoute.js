'use strict';
module.exports = function(app) {
    const todoController = require('../controllers/todoControllers');
    //route to get all to do items and add 
    app.route('/Todo')
        .get(todoController.list)
        .post(todoController.post);
    //route to update and delete to do items
    app.route('/Todo/:itemId')
        .get(todoController.list)
        .put(todoController.put)
        .delete(todoController.delete);
}