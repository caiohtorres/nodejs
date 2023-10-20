const express = require("express");
const UserModel = require("../src/database/models/user.model");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application.html");
  res.status(200).send("<h1> home pag express </h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "caio",
      email: "caio@ufla",
    },
    {
      name: "rafael",
      email: "rafael@ufla",
    },
  ];

  res.status(200).json(users);
});

app.post("./users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () =>
  console.log("Rodando com express na porta " + port + "!")
);
