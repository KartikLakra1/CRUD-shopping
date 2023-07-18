const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    pname : {
        type : String
    },
    brand :{
        type : String,
        required : true
    },
    price : {
        type : Number
    },
    color : {
        type : String
    },
    size : {
        type : String
    },
    category : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User' , userSchema)