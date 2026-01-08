const userModel = require("../models/userModel");
const {generateToken,generateRefreshToken} = require("../utils/createTokens")
const bcrypt = require("bcrypt")

const addUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);;

    res.status(201).json({
      msg: "User created",
      data: user
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message
    });
  }
};

const getAllUsers = async(req,res) =>{
    try{
        const getUser = await userModel.find({})
        res.status(200).json({
            msg : "Data fetch..",
            data : getUser
        })
    }
    catch(err){
        res.status(500).json({msg : "internel server error occured",err})
    }
}

const loginUser = async (req,res) =>{
    const {email , password} = req.body;
    const findUser = await userModel.findOne({email})
    if(!findUser) res.status(404).json({
        msg: "user not found!!"
    })
    else{
        
        const isMatch = await bcrypt.compare(password , findUser.password);
        if(isMatch === false) return res.status(404).json({msg : "Invalid Credentials"});

        const accessToken = generateToken(findUser);
        res.cookie("accessToken" , accessToken)      //Store token in cookie.

        const refreshToken = generateRefreshToken(findUser);
        res.cookie("refreshToken" , refreshToken);    //refresh token store in cookie

        res.status(200).json({msg: "User found!!" , data : findUser})
    }
}

const getStudents = async (req,res) =>{
  try{
    const response = await userModel.find({role : "Student"})
    res.status(200).json({msg : "data fetch" , data : response})
  } catch(err) {res.status(500).json({msg : "server error",err})}
}

const getUserById = async (req,res) =>{
  try{
    const response = await userModel.findOne({_id : req.params.id});
    res.status(200).json({msg : "data fetch" , data : response})
  } catch(err) {res.status(500).json({msg : "server error",err})}
}

const logout = (re,res) =>{
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.status(200).json({msg : "Logout.."})
}

const teacherAddStudent = async (req,res) =>{
  const {name,email,password,studentId,studentClass,role} = req.body;
  const defaultPassword = "student@123";


  try{
    const addStudent = await userModel.create({
      name,
      email,
      password : defaultPassword,
      studentId,
      studentClass,
      role : "Student"
    })
   
    res.status(200).json({msg : "Student added..." , data : addStudent});
  }
  catch(err)
  {
    console.log("error occured while add student..",err)
  }

}
module.exports = { addUser , getAllUsers , loginUser ,getStudents,getUserById,logout,teacherAddStudent};
