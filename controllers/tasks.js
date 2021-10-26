const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (request, response) => {
  const tasks = await Task.find()
  return response.status(200).json({success: true, data:{tasks}})
})
const createTask = asyncWrapper(async (request, response) => {
  const task = await Task.create(request.body)
  response.status(201).json({success: true, data: {task}})
})
const getTask = asyncWrapper(async (request, response) => {
  const {id:taskID} = request.params
  const task = await Task.findById(taskID)
  if(!task) {
    return next(createCustomError(`No task with id- ${taskID}`, 404))
  }
  response.status(200).json({success: true, data: {task}})
})
const updateTask = asyncWrapper(async (request, response) => {
  const {id:taskID} = request.params
  const updatedTask = request.body
  const task = await Task.findOneAndUpdate(taskID, updatedTask, {new: true, runValidators: true})
  if(!task) {
    return next(createCustomError(`No task with id- ${taskID}`, 404))
  }
  response.status(200).json({success: true, data: {task}})
})
const deleteTask = asyncWrapper(async (request, response) => {
  const {id:taskID} = request.params
  const task = await Task.findByIdAndDelete(taskID)
  if(!task) {
    return next(createCustomError(`No task with id- ${taskID}`, 404))
  }
  return response.status(200).json({success: true, data: {task}})
})

module.exports = {getAllTasks, createTask, getTask,updateTask,deleteTask}