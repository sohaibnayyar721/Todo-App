const express = require('express')
const cors = require('cors')
const route = require('./routes/route')
const mongo_connection = require('./MongodbCon')

const app=express()
app.use(cors())
app.use(express.json())


mongo_connection()

const port=8000

app.use(route)

app.listen(port,()=>console.log(`Server is running on ${port}`))