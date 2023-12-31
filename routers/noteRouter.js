
const express = require('express')
const router = express.Router()

router
.all((req, res) => {
    res.statusCode = 200
})
.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end("Sent all notes from the note router..")
})
.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end("Add a note with data from request with title: " + req.body.title)
})

module.exports = router
