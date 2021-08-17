const mongoose = require('mongoose');


const PetSchema = mongoose.Schema({
    name: {
        type: String,
        unique:true,//name must be unique
        dropDups:true,
        required: [ true, "A Pet name is required."],
        minLength: [3, "A Pet name must be at least 3 characters long."],
        
    },
    type : {
        type: String,
        required: [ true, "A Pet type is required."],
        minLength: [3, "A Pet type must be at least 3 characters long."],
    },
    description : {
        type: String,
        required: [ true, "A Pet description number is required."],
        minLength: [3, "A Pet description  must be at least 3 characters long."],
    },
    skill1 : {
        type: String,
        
    },
    skill2 : {
        type: String,
        
    },
    skill3 : {
        type: String,
    }  
  
    }, { timestamps:true })

//collection name and the schema are required to create a model

module.exports = mongoose.model('Pet', PetSchema);