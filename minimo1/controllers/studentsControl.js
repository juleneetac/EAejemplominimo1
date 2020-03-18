'use strict';

const StudentSchema = require('../models/Students');
const SubjectsSchema = require('../models/Subjects');
const mongoose = require('mongoose');
//let Students = mongoose.model('Students');
//const ObjectId = require('mongodb').ObjectID;


async function postStudent (req, res) {
    const student = new StudentSchema(req.body);
    console.log(student);
    try {
        await student.save();
        res.status(200).send({message: "Student created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

async function getStudentsOf (req, res){
    // le paso una carrera como parametro y me da los estudiantes de esta carrera
    const stu = req.params.studiesName;
    let student = await StudentSchema.find({studies: stu}, {name:1});  //con lo de name:1 hago que solo me de el nombre
    if(student) {
        res.status(200).json(student);
    } else {
        res.status(424).send({message: 'Grade not found'});
    }
}

// async function getStudentsS (req, res){
//     let student = await StudentSchema.find({studies:"Sistemas"}, {name:1});
//     console.log(student);
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }

// async function getStudentsA (req, res){
//     let student = await StudentSchema.find({studies:"Aeros"}, {name:1});
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }
// async function getStudentsT (req, res){
//     let student = await StudentSchema.find({studies:"Telematica"}, {name:1});
//     if(student) {
//         res.status(200).json(student);
//     } else {
//         res.status(424).send({message: 'Grade not found'});
//     }
// }



module.exports = {postStudent, getStudentsOf};