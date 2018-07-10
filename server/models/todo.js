var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: null
  },
  completedAt: {
    type: Number,
    default: 0
  }
});

var Todo = mongoose.model('Todo', TodoSchema);


module.exports = {Todo};
