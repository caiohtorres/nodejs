const http = require("http");
const port = 8080;

//req = request
//res = response
const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" }); //200 = ok / content-type pro navegador reconhecer o html
    res.end("<h1>home page</h1>");
  }
  if (req.url == "/users") {
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
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log("Rodando na porta " + port + "!"));
