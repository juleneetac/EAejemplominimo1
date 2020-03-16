'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const subjects = new Schema({
    name: String,
    students: [{ type: mongoose.Types.ObjectId, ref: 'Students' }]
});
module.exports = mongoose.model('Subjects', subjects);
