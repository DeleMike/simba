const Task = require('../models/Tasks');

/**
 * create a single todo task
 */
const createATask = async (req, res) => {
   try {
      const task = await Task.create(req.body);

      res.status(201).send({
         'msg': 'Created successfully',
         'task': task
      });
   } catch (e) {
      return res.status(400).send({
         'msg': e['errors']['details']['message'],
      });
   }
}

/**
 * get all todo tasks
 */
const getAllTasks = async (req, res) => {
   try {
      const task = await Task.find({});
      res.status(200).send({
         'msg': 'All tasks gotten successfully',
         'task': task
      });
   } catch (e) {
      res.status(500).send({
         'msg': 'An error occurred'
      })
   }

}

/**
 * update a task
 */
const updateTask = async (req, res) => {
   const {
      params: {
         id
      },
      body: {
         name,
         details,
         state
      }
   } = req;

   try {

      if ((name === '' || !name) && (details === '' || !details) && (state === '' || !state)) {
         return res.status(400).send({
            'msg': 'You must update at least one value. Try again.'
         });
      }



      const task = await Task.findOneAndUpdate({
         _id: id
      }, req.body, {
         new: true
      });


      if (!task) {
         throw Error();
      }

      res.status(201).send({
         'msg': `${id} has updated successfully`,
         'task': task
      });
   } catch (e) {
      return res.status(404).send({
         'msg': `${id} not found. Try again.`
      });
   }

}

module.exports = {
   createATask,
   getAllTasks,
   updateTask
}