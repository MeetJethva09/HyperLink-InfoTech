const gradeModel = require("../models/gradeModel")
const userModel = require("../models/userModel")
const {gradeCalc} = require("../utils/gradeCalculate")

const assignGrades = async (req,res) =>{
    const user = await userModel.findById(req.params.id);
    if(!user) return res.status(404).json({msg : "Useer not found"})
    try{
        const {subject,marks} = req.body;
        const gradeAssign = gradeCalc(marks)
        const response = await gradeModel.create({
            student : req.params.id,
            subject,
            marks,
            grade : gradeAssign
        })

        await userModel.updateOne({_id : req.params.id} , { $set : { gradeStatus : 'Assigned' } });
        
        res.status(201).json({msg : "grade created" , data : response})
    }
    catch(err)
    {
        res.status(500).json({msg : "Internel server error",err});
    }
}

const findById = async (req,res) =>{
    const response = await gradeModel.find({student : req.params.id})
    res.status(200).json({
        msg : "found",
        data : response
    })
}

const allGrades = async(req,res)=>{
    try{
        const allgrade = await gradeModel.find().populate("student")
        res.status(200).json({
            msg : "data fetch",
            data : allgrade
        })
    } catch(err) {res.status(500).json({msg : "server error",err})}
}

module.exports = {assignGrades,findById,allGrades}