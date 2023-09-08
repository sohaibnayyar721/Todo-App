const { default: mongoose } = require("mongoose")

const mongo_connection = ()=>{
    let url = 'mongodb://0.0.0.0:27017'
    try{
        mongoose.connect(url)
        console.log('MongoDB is connected')

    }catch{
        console.log("MongoDB Connection Failed")
    }
}

module.exports = mongo_connection