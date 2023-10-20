//const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config(); //faz com que possamos utilizar as variaves de username e password do mongodb para
// nao subir pro git e "vazar" dados sensiveis
connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

require("./modules/express");

//const person = new Person("Caio");
