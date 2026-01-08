const router = require("express").Router()
const {addUser,getAllUsers,loginUser,getStudents,getUserById,logout
     , teacherAddStudent
} = require("../controllers/userController")

router.post("/add-user" , addUser);

router.get("/users" , getAllUsers);

router.post("/login" , loginUser);

router.get("/students" , getStudents)

router.get("/user/:id" , getUserById)

router.get("/logout",logout)

router.post("/add-student" , teacherAddStudent);

module.exports = router;