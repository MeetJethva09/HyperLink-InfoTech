const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.info("Database connection success..")
})
.catch((err)=>{
    console.info("Error occured while connectiong db")
})

module.exports = mongoose.connection;