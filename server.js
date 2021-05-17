const express = require('express')
const ser = express()
const route = require('./route/locate')
const path = require('path')
const { urlencoded } = require('body-parser')

const SERVER_PORT = process.env.PORT || 4444

ser.set('view engine', '.hbs')
ser.set('views', path.join(__dirname, 'public_folder'))

ser.use(express.json())
ser.use(urlencoded({extended:true}))

ser.use('/', route)

ser.listen(SERVER_PORT, () =>{
    console.log("Server Started at: http://localhost:" + SERVER_PORT)
})