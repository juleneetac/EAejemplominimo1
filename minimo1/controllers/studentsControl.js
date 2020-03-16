'use strict';

const Students = require('../models/Students');
const mongoose = require('mongoose');
//let Students = mongoose.model('Students');
//const ObjectId = require('mongodb').ObjectID;


async function postStudent (req, res) {
    const student = new Students(req.body);
    console.log(student);
    try {
        await student.save();
        res.status(200).send({message: "Student created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

async function getStudentsS (req, res){
    let student = await Students.find();
    if(student) {
        res.status(200).json(student);
    } else {
        res.status(424).send({message: 'Grade not found'});
    }
}

async function getStudentsA (req, res){
    let student = await Students.find({studies:"Aeros"}, {name:1});
    if(student) {
        res.status(200).json(student);
    } else {
        res.status(424).send({message: 'Grade not found'});
    }
}
async function getStudentsT (req, res){
    let student = await Students.find({studies:"Telematica"}, {name:1});
    if(student) {
        res.status(200).json(student);
    } else {
        res.status(424).send({message: 'Grade not found'});
    }
}


module.exports = {getStudentsT, getStudentsA, getStudentsS, postStudent};