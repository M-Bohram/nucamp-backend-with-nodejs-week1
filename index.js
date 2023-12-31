
// Note-Taking app

const express = require('express')
const app = express()

const noteRouter = require('./routers/noteRouter')

const PORT = 3000

// app.get('/notes', (req, res) => {
//     res.end("Sent all notes..")
// })
app.use(express.json())
app.use('/notes', noteRouter)

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`)
})