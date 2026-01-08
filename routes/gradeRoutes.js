const router = require("express").Router()
const {assignGrades,findById,allGrades} = require("../controllers/gradeController")

router.post("/add-grades/:id" , assignGrades)

router.get("/findgrade/:id" , findById);

router.get("/all-grades" , allGrades)

module.exports = router;