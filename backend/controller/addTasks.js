const tasks = require('../model/todo')

const addTasks = async (req, res) => {
    let { taskName } = req.body
    let addTask = await new tasks({ taskName:taskName })
    addTask.save()
    res.send('Task added')
}

module.exports=addTasks