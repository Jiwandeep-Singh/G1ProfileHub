const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express();


dotenv.config({ path: './config.env' })
const PORT = process.env.PORT
require('./db/conn.js')
app.use(express.json());



app.use(require('./router/auth'))


const middleware = (req, res, next) => {
    console.log(`I am middleware`)
    next();
}

app.get('/', (req, res) => {
    res.send(`hello jiwan `)
})

// app.get('/about',middleware,(req,res)=>{
//     console.log(`ok`)
//     res.send(`about page `)

// })

// app.get('/contact',(req,res)=>{
//     res.send(`  contact`)
// })

// app.get('/signin',(req,res)=>{
//     res.send(` signin`)
// })

// app.get('/signup',(req,res)=>{
//     res.send(`  signup`)
// })

app.listen(PORT, () => {
    console.log(`successfull connection at port ${PORT}`)
})