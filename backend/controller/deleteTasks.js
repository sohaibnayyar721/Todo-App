const todo = require('../model/todo')

const deleteTasks = async (req, res) => {
let id = req.params.id
 let deletes = await todo.findByIdAndDelete({_id:id}) 
 res.send('deleted')
}

module.exports = deleteTasks