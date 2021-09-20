const Pet = require("../models/pet.model");


module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello Pet Shelter API with mongoose!" });
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets =>{
            res.json({results: allPets})
        })
        .catch(err=>{
            res.json({err: err})
        })

}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newPetObj => {
            res.json({results: newPetObj})
        })
        .catch(err => {
            res.json({err:err})
        })
}


module.exports.findOnePet = (req, res) => {
    console.log(req.params);
    Pet.findOne({_id:req.params._id})
        .then(foundPet => {
            res.json({results: foundPet})
        })
        .catch(err => {
            res.json({err:err})
        })

}


module.exports.findRandomPet = (req, res) => {
    Pet.find()
        .then(allPets=>{
            let lengthOfAllPets = allPets.length;

            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }

            let randomIndex = getRandomInt(lengthOfAllPets)

            res.json({results: allPets[randomIndex]})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', err: err }));
}


module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', err: err }));
}
