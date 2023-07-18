const app = require("./app.js")

PORT = process.env.Port || 6000

app.listen( PORT , () => {
    console.log("Server is running at the port ${PORT}");
})