const PetController = require("../controllers/pet.controller");


module.exports = app => {
    app.get("/api", PetController.helloworld);
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createNewPet);
    app.get("/api/pets/:_id", PetController.findOnePet);
    app.put("/api/pets/:_id", PetController.updateExistingPet);
    app.delete("/api/pets/:_id", PetController.deleteAnExistingPet);
    app.get("/api/pets/random", PetController.findRandomPet);

}