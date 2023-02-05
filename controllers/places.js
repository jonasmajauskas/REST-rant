const router = require('express').Router()

// router.get('/', (req, res) => {
//     res.render('GET /places')
// })

router.get('/', (req, res) => {
    let places = [{
        id: 1,
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant1.jpg'
      }, {
        id: 2,
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant2.jpg'
    }]      
    res.render('places/index', { places })
    }
)

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router

// router.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })

