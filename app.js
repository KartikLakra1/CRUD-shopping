require('dotenv').config();
const express = require('express');
const connectToDb = require("./config/db.js");
const cors = require('cors');


// const {home} = require('./Controllers/userController.js')

const app = express();

connectToDb();

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors());



const userRouter = require('./Routers/userRouter.js')

app.use('/' , userRouter)

module.exports = app;