"use strict";

const express = require("express");
const router = express.Router();
const studentsControl = require('../controllers/studentsControl');
router.get('/getSist', studentsControl.getStudentsS);
router.get('/getTel', studentsControl.getStudentsT);
router.get('/getAeros', studentsControl.getStudentsA);
router.post('/addStudent', studentsControl.postStudent);
//router.get('/getTel', studentScripts.getAllStudents);
//router.post('/add', studentScripts.addStudent);
module.exports = router;
