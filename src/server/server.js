import express from 'express'
import path from 'path'

const port = process.env.PORT || 8080
const app = express()
app.listen(port)


app.get('/', function (req, res) {
  console.log('home')
})
