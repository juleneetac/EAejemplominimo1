"use strict";

//Import libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//Import routes
const studentsRouter = require("./routes/StudentsRoutes"); //variable con la ruta
//Server variable initialization
const app = express();
app.use(cors());
app.use('/students', studentsRouter);
//Mongo database connection
mongoose.connect("mongodb://127.0.0.1:27017/dbminimo1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function () {
    console.log('Connection to the database successful');
}).catch(function (err) {
    console.log("Database error: " + err.message);
});


//Make app listen on port 3000
const port = 3000; // en el puerto que vamos a escuchar
app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
module.exports = app;
