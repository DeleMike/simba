const mongoose = require('mongoose');

/**
 * Defines how task model is represented in the system
 */
const taskSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Must provide task name'],
      trim: true,
   },
   details: {
      type: String,
      required: [true, 'Must provide task details'],
      trim: true,
   },
   state: {
      type: String,
      enum: ['open', 'completed'],
      default: 'open',
   },
})

module.exports = mongoose.model('tasks', taskSchema)