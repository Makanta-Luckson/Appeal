const mongoose = require('mongoose');

const Schema = mongoose.Schema;



studentSchema = new Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    computerNumber : {
        type : String,
        required : true
    },
    dep : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },

    school : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }

},{timestamps : true});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;


