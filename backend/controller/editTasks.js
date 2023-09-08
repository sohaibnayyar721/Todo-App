const todo = require('../model/todo')

const editTasks = async (req, res) => {
    let { id,taskName1 } = req.body

    let update = await todo.findByIdAndUpdate({ _id: id}, { taskName: taskName1 })
    res.send('update')
}

module.exports = editTasks