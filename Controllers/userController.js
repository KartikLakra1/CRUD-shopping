const User = require('../models/userModels.js')


// home
exports.home = (req,res) => {
    res.send('<h1>Welcome to Men and Women Dummy Data</h1>')
}

// men
exports.men = async (req,res) => {
    try{

        const user = await User.create({
            // pname,
            brand,
            price,
            Color,
            Size ,
            Category
        })

        res.status(201).json({
            success : true,
            message : "User created successfully",
            user
        })

    }catch(error){
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}


// men
exports.female = async (req,res) => {
    try{

        const user = await User.create({
            // pname,
            brand,
            price,
            Color,
            Size ,
            Category
        })

        res.status(201).json({
            success : true,
            message : "User created successfully",
            user
        })

    }catch(error){
        console.log(error);
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}


// other
exports.other = (req,res) => {
    res.send('<h1>page not found</h1>')
}
