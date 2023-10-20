const path = require("path");

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Cria objeto path
console.log(path.parse(__filename));

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname));
