const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:<${process.env.MONGODB_PASSWORD}>@testando.licuj75.mongodb.net/database?retryWrites=true&w=majority`
    );
    console.log("Conexão efetuada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao realizar conexão com o BD! Erro: ", error);
  }
};

module.exports = connectToDatabase;
