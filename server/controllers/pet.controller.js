const Pet = require('../models/pet.model');

module.exports.getAll = (req,res) => {
    Pet.find().sort("type")  //find and list according to field "type"
    .then((pets) => {
        console.log("inside get all");
        console.log(pets);
        res.json(pets);
    })
    .catch((err) => {
        console.log(err);
        res.json({errMsg: err});
    })
};

module.exports.create = (req,res) => {
    console.log("inside create");
    console.log(req.body); //holds the json object that we use for create
    Pet.create(req.body)
    .then((newPet)=> {
        console.log(newPet);
        res.json(newPet);
    })
    .catch((err)=> {
        console.log(err);
       res.status(400).json(err);
        
    })
}

module.exports.getOne = (req,res) => {
    console.log("inside getOne");
    console.log("looking for id "+ req.params.id);
    Pet.findById(req.params.id)
    .then((onePet)=> {
        console.log(onePet);
        res.json(onePet);

    })
    .catch((err)=> {
        console.log(err);
        //change the response object status to 400 so the client can see the error then send
        //the err in json back to the client
        res.status(400).json(err);
    })
}

module.exports.update = (req,res) => {
    console.log("Inside update");
    console.log("looking for id "+ req.params.id);
    console.log(req.body); 
    Pet.findByIdAndUpdate(req.params.id, req.body,{
        
            new: true,//return the updated object
            runValidators: true,//use the same validation that was used for create
          
    })
    .then(updatedPet => {
        console.log(updatedPet);
        res.json(updatedPet);
    })
    .catch((err)=> {
        console.log(err);
        //change the response object status to 400 so the client can see the error then send
        //the err in json back to the client
        res.status(400).json(err);
    })


}

 //delete a single restaurant
 module.exports.delete = (req,res) => {
    console.log("inside the delete");
    console.log("looking for id "+ req.params.id);
    Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ errMsg: err }));
    
}