/**
 * Router for all todo tasks
 */
const router = require('express').Router();

const {getAllTasks, createATask, updateTask} = require('../controllers/tasks')

// the tasks routes
router.route('/tasks').get(getAllTasks);
router.route('/create-task').post(createATask);
router.route('/:id').patch(updateTask);

module.exports = router;