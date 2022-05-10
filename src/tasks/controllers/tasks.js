/**
 * create a single todo task
 */
const createATask = async (req, res) => {
   res.status(201).send({
      'msg': 'Created successfully'
   });
}

/**
 * get all todo tasks
 */
const getAllTasks = async (req, res) => {
   res.status(200).send({
      'msg':'All tasks gotten successfully'
   });
}

/**
 * update a task
 */
const updateTask = async (req, res) => {
   const {id} = req.params;
   res.status(201).send({
      'msg': `${id} has updated successfully`
   });
}

module.exports = {
   createATask,
   getAllTasks,
   updateTask
}