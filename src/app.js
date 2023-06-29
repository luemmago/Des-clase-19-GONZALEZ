import express from 'express';
import 'dotenv/config.js'
import morgan from 'morgan'

const server = express()

//middleware
server.use('/', express.static('public'))
server.use('/otra', express.static('otra'))
server.use(express.json())
server.use(express.urlencoded({ extended:true}))
server.use(morgan('dev'))




export default server