const express = require('express')
const app = express()
const sequelize = require('sequelize')

const router = () => { 
    require('./routes/dev')(app)
}