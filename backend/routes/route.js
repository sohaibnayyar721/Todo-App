const express = require('express')
const router= express.Router()
const addTask = require('../controller/addTasks')
const editTask = require('../controller/editTasks')
const getTask = require('../controller/getTasks')
const deleteTasks = require('../controller/deleteTasks')
const completedTask=require('../controller/completedTasks')

router.get('/',getTask)
router.post('/add',addTask)
router.put('/edit',editTask)
router.delete('/delete/:id',deleteTasks)
router.put('/completed',completedTask)

module.exports = router