const path = require('path');

//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do Diretótio
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

//Criar um objeto path show td
console.log(path.parse(__filename));

// Juntar caminhos de arquivos e criar um arquivo test
console.log(path.join(__dirname,'test','teste.html'));
//console.log(__dirname); - mostra igual ao de cima