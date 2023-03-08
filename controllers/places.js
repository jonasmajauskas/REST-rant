const router = require('express').Router()
// const places = require('../models/places.js')
const db = require('../models') //reference to the models folder

router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error:'
            res.render('places/new', { message })
        }
        else {
            res.render('error404')
        }
    })
})

//New
router.get('/new', (req, res) => {
    res.render('places/new')
})

//Show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//Delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//EDIT
router.get('/:id/edit', (req, res) => { //on the place's edit screen, render the details by id
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//Create the comment
router.post('/:id/comment', (req, res) => {
    console.log('post comment', req.body)
    if (req.body.author === '') { req.body.author = undefined }
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})




// router.put('/:id', (req, res) => { 
//     db.Place.findByIdandUpdate(req.params.id)
//     // let id = Number(req.params.id)
//     .then(place => {
//         res.render('places/edit', { place })
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })

// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })

// // POST the payload when the submit button is clicked
// router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) { //add default image
//         req.body.pic ='http://placekitten.com/400/400'
//     }
//     places.push(req.body) //push the payload to /places
//     res.redirect('/places') //upon submitting, take user to /places page
// })  

// //Define the ID variable
// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) { //check if id is not a number
//         res.render('error404')
//     }
//     else if (!places[id]) { //make sure it is a valid array index
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }
// })

// router.delete('/:id', (req, res) => { //delete route
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/places') //redirect user to the places page
//     }
// })

// router.get('/:id/edit', (req, res) => { //on the place's edit screen, render the details by id
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('places/edit', { place: places[id], id }) //pass the appropriate data item from the places array to the render method so that it is available for use in the view.
//     }
// })

// router.put('/:id', (req, res) => { 
//     db.Place.findByIdandUpdate(req.params.id)
//     // let id = Number(req.params.id)
//     .then(place => {
//         res.render('places/edit', { place })
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })

module.exports = router;