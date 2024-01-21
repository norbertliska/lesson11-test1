require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World from container!')
})

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}`)
})
