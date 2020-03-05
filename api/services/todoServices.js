'use strict';

const mongoose = require('mongoose'),
    todoItem = mongoose.model('Todo');

exports.search = function(params) {
    const promise = todoItem.find(params).exec();
    return promise;
}

//add and return
exports.save = function(item) {
    const newItem = new todoItem(item);
    const promise = newItem.save();
    return promise;
}

exports.update = function(item) {
    // item.modify = new 
    const promise = todoItem.findOneAndUpdate({ _id: item._id }, item).exec();
    return promise;
}

exports.delete = function(itemId) {
    const promise = todoItem.remove({ _id: itemId });
    return promise;
}