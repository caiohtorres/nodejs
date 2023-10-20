const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}>@testando.licuj75.mongodb.net/database?retryWrites=true&w=majority`,
      console.log("conectado com sucesso")
    );
  } catch (error) {
    console.log("Conectado com sucesso ao banco de dados");
  }
};

module.exports = connectToDatabase;
