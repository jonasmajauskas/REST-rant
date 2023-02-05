const router = require('express').Router()
const places = require('../models/places.js')

// router.get('/', (req, res) => {
//     res.render('GET /places')
// })
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// router.get('/', (req, res) => {
//     let places = [{
//         id: 1,
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/restaurant1.jpg'
//       }, {
//         id: 2,
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/restaurant2.jpg'
//     }]      
//     res.render('places/index', { places })
//     }
// )

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

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
})

module.exports = router

// router.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })

