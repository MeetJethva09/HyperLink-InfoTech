const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
   email : {
        type : String
   },
   
   password : {
        type : String,
        required : true
   },

    role : {
        type : String,
        enum : ['Teacher' , 'Student']
    },
    studentId : {
        type : String,
        default : null
    },
    studentClass : {
        type : String,
        default : null
    }

},{timestamps : true})

userSchema.pre("save" , async function(){
    const user = this;
    if(!user.isModified("password")) return;

    const hashPassword = await bcrypt.hash(user.password , 10);
    user.password = hashPassword;
})

module.exports = mongoose.model("users" , userSchema);