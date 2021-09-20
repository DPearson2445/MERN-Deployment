const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: [3, "Name must be at least three characters!"],
        required:[true, "Name is required!"]
    },
    petType:{
        type: String,
        minlength: [3, "Type must be at least three characters!"],
        required:[true, "Type is required!"]
    },
    description:{
        type: String,
        minlength: [3, "Description must be at least three characters!"],
        required:[true, "Description is required!"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String

    },
    skill3:{
        type: String
    }
});

//Create table
const Pet = mongoose.model('Pet', PetSchema);

//Export model
module.exports = Pet;

