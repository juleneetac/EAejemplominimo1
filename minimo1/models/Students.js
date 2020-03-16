'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const students = new Schema({
    name: String,
    address: String,
    phones: [{
            home: String,
            work: String
        }],
    studies: String
});
module.exports = mongoose.model('Students', students);
