require('dotenv').config();
const express = require('express');
const connectToDb = require("./config/db.js");
const app = express();
const cors = require('cors');


const {home} = require('./Controllers/userController.js')

connectToDb();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : true}))



// app.use('/' , (req,res) => {
//     res.send("<h1>Hello my server is up and running </h1>")
// })

const userRouter = require('./Routers/userRouter.js')

app.use('/' , userRouter)

module.exports = app;