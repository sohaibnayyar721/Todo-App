const mongoose=require('mongoose')

const schema = mongoose.Schema({

    taskName:{type:String},
    completed:{type:Boolean,default:false},
})

const todo = mongoose.model('todoList',schema)

module.exports = todo