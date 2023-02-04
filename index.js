const express = require('express')
const app = express()
const port = 5000

// mongodb+srv://thio123:<password>@cluster0.0gk5dq5.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://thio123:xogus123@cluster0.0gk5dq5.mongodb.net/?retryWrites=true&w=majority',{
}).then(()=> console.log('MongoDB Connceted'))
.catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})