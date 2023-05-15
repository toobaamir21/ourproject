require("./db/conn")
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
app.use(express.json())
app.use(cors())
app.use('/api/user',require('./routes/routing'))
app.get('/', (req, res) => {
    res.send({message:'hi hru'})
  })
app.listen(port,()=>{
    console.log("listening to port 8000")
})