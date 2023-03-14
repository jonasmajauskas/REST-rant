//Modules and Globals
const express = require('express')
const methodOverride = require('method-override')

//Configuration
require('dotenv').config()
// const PORT = process.env.PORT
const app = express()

//Express Settings/Middleware
// app.set('views', '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) //middleware for setting up static assets
app.use(express.urlencoded({ extended: true })) //body-parser
app.use(methodOverride('_method'))

//Controllers and Routes
app.use('/places', require('../controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

//Listen for connections
app.listen(process.env.PORT)

module.exports = app;