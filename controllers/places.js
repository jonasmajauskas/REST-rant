const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// POST the payload when the submit button is clicked
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) { //add default image
        req.body.pic ='http://placekitten.com/400/400'
    }
    places.push(req.body) //push the payload to /places
    res.redirect('/places') //upon submitting, take user to /places page
})  

router.get('/new', (req, res) => {
    res.render('places/new')
})

//Define the ID variable
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) { //check if id is not a number
        res.render('error404')
    }
    else if (!places[id]) { //make sure it is a valid array index
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

router.delete('/:id', (req, res) => { //delete route
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places') //redirect user to the places page
    }
})

router.get('/:id/edit', (req, res) => { //on the place's edit screen, render the details by id
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id], id }) //pass the appropriate data item from the places array to the render method so that it is available for use in the view.
    }
})

router.put('/:id', (req, res) => { 
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places[id] = req.body // Save the new data from the request’s body into into places [id]
        res.redirect(`/places/${id}`)
    }
})

module.exports = router