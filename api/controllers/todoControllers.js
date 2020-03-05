'use strict';

const todoServices = require('../services/todoServices');

//return all todo items in JSON
exports.list = function(req, res) {
    const resolve = (Todo) => {
        res.status(200);
        res.json(Todo);
    };

    todoServices.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//add a new to do item with the request JSON
exports.post = function(req, res) {
    const newItem = Object.assign({}, req.body);
    const resolve = (Todo) => {
        res.status(200);
        res.json(Todo);
    };

    todoServices.save(newItem)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//update a todo item
exports.put = function(req, res) {
    const item = Object.assign({}, req.body);
    const resolve = (Todo) => {
        res.status(200);
        res.json({
            message: 'Todo item Successfully updated'
        });
    }
    item._id = req.params.itemId;
    todoServices.update(item)
        .then(resolve)
        .catch(renderErrorResponse(res));
};

//delete a todo item
exports.delete = function(req, res) {
    const resolve = (Todo) => {
        res.status(200);
        res.json({
            message: 'Todo item Successfully deleted'
        });
    };

    todoServices.delete(req.params.itemId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

//Throws error if error object is present
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};