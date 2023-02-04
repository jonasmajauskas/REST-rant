//Dependencies
const express = require('express')
const app = express()

//endpoint
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//listen
app.listen(3003)