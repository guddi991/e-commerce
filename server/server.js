
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')
dotenv.config();
const app = express();
const PORT = process.env.PORT;


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// server
app.listen(PORT,()=>{
    console.log('server running on PORT: '+PORT)
})

