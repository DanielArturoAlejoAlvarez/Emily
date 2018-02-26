'use strict'

const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config')

const app = express()
const port = process.env.PORT || 3000

//Middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)))


//Routes
app.get('/', (req,res)=>{
  res.send('Hello World!')
})

app.get('/api', (req,res)=>{
  res.json({api: true})
})
//Server
app.listen(port, ()=>{
  console.log(`Server Running in port: ${port}`)
})
