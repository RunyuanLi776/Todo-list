'use strict';
//create schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    // titel:{
    //     type: String,
    //     required: "title is required"
    // },
    // content:{
    //     type: String
    // },
    title: {
        type: String
    },
	description:{
		type: String
	},
	dueDate:{
		type: String
	},
	dueTime:{
		type: String
	},
	isFinish:{
		type: Number
	}
}, {
    versionKey: false
});

 //var Todo = mongoose.model('Todo', todoSchema);
 //var itemOne = Todo({ "title": "eating","description": "fried chicken and milk tea!","dueDate":"20191121","dueTime":"12:45","isFinish":0}).save(function(err) {
 //   if (err) throw err;
 //});
 //var itemOne = Todo({ "title": "playing","description": "skip playing mobile phone!","dueDate":"20191121","dueTime":"13:45","isFinish":0}).save(function(err) {
 //   if (err) throw err;
 //});

todoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});
todoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Todo', todoSchema);