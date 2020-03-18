"use strict";

const express = require("express");
const router = express.Router();
const subjectsControl = require('../controllers/subjectsControl');  //subjects

router.get('/getSubjects', subjectsControl.getSubjects);
router.get('/getEA/:subjectId', subjectsControl.getStudentfrom);


module.exports = router;
