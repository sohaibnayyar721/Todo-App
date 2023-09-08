const todo = require('../model/todo')

const getTask = async(req,res) =>{
    let getTask = await todo.find({})
    res.send(getTask)
    // res.send('hello')
}

module.exports=getTask