//Dependencies
require('dotenv').config()
const express = require('express')
const app = express()

//endpoint
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status('404').send('<h1>404 page</h1>') 
})

//listen
app.listen(process.env.PORT)