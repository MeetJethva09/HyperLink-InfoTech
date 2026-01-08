const express = require("express")
const app = express()
require("dotenv").config()
const userModel = require("./config/dbConn")
const userRoutes = require("./routes/userRoutes")
const gradeRoutes = require("./routes/gradeRoutes")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors({
    origin : process.env.ALLOWED_ORIGIN,
    credentials : true
}))

app.use(express.json())
app.use(cookieParser());

app.use(userRoutes);
app.use(gradeRoutes);

app.listen(process.env.PORT , () =>{
    console.info("Server started..")
})