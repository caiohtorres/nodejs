const express = require("express");
const UserModel = require("../src/database/models/user.model");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application.html");
  res.status(200).send("<h1> home pag express </h1>");
});

app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("./users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("./users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log("Rodando com express na porta " + port + "!")
);
