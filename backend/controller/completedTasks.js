const todo = require('../model/todo')



const completedTask = async (req, res) => {
    let { _id} = req.body
    let update = await todo.findOneAndUpdate({ _id: _id}, {completed:true})
    res.send(update)

}


module.exports=completedTask