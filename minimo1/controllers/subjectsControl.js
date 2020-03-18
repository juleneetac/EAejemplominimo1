'use strict';

const SubjectsSchema = require('../models/Subjects');
const mongoose = require('mongoose');


async function getSubjects (req, res){
    let subject = await SubjectsSchema.find().select('name');
    console.log(subject);
    if(subject) {
        res.status(200).json(subject);
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}

async function getStudentfrom (req, res){
    const _id = req.params.subjectId;
    let subject = await SubjectsSchema.findById(_id).populate('students', 'name'); 
    //la asignatura de la cual quiero buscar sus estudiantes, depende de el id que le pase como parametro
    console.log(subject);
    if(subject) {
        res.status(200).json(subject);
    } else {
        res.status(424).send({message: 'Subjects error'});
    }
}

// async function getStudentEA (req, res){
//     let subject = await SubjectsSchema.findOne({name:'EA'}).populate('students', 'name'); 
//     //me da los estudiantes de la asignatura de EA con el nombre solo, si no pongo name me da toda la info del student
//     console.log(subject);
//     if(subject) {
//         res.status(200).json(subject);
//     } else {
//         res.status(424).send({message: 'Subjects error'});
//     }
// }


module.exports = {getSubjects, getStudentfrom};