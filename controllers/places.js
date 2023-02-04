const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// router.get('*', (req, res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })

module.exports = router