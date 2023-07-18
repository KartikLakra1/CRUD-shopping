const mongoose = require("mongoose");


const connectToDb = async () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log("Connect to database ${MONGO_URL}");
    })
    .catch((err) => {
        console.log(err.message)
        process.exit(1);
    })
}

module.exports = connectToDb