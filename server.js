const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() ); //Tells the app it can parse json
app.use( express.urlencoded({ extended: true }) );
app.use(cors()); // Allows app to share information and resources with React app


require("./server/config/pets.config");

//Require the routes below
require("./server/routes/pet.routes")(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );