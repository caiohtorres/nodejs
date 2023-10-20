const fs = require("fs");
const path = require("path");

//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//  if (error) return console.log("Erro: ", error);
//  console.log("Pasta criada com sucesso!");
//});

//escreve no arquivo
fs.writeFile(path.join(__dirname, "/test/texto.txt"), "hello node", (error) => {
  if (error) return console.log("Erro: ", error);
  console.log("Arquivo criado com sucesso!");
  //modifica o conteudo do arquivo
  fs.appendFile(
    path.join(__dirname, "/test/texto.txt"),
    ", hello node 2",
    (error) => {
      if (error) return console.log("Erro: ", error);
      console.log("Arquivo modificado com sucesso!");
      //le o conteudo do arquivo
      fs.readFile(
        path.join(__dirname, "/test", "texto.txt"),
        "utf8",
        (error, data) => {
          if (error) return console.log("Erro: ", error);
          console.log(data);
          //colocou um dentro do outro pq note é assincrono, se demorar a execução de um comando
          //ele passa pro proximo, se deixar separado ele faz readfile antes de appendfile
        }
      );
    }
  );
});
