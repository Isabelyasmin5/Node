
const { error } = require('console');
const fs = require('fs');
const path = require('path');

//Criar uma pasta 
/*fs.mkdir(path.join(__dirname, "/test"),(error ) =>
{
    if (error) {
        return console.log("Erro : ", error);
    }

    console.log("Pasta de arquivo criada com sucesso!");
});*/


//Criar um arquivo
fs.writeFile(
    path.join(__dirname,"/test","teste.txt"),
    "hello node!",
    (error) => {
        if (error){
            return console.log("Erro: ",error);
        }

        console.log("Arquivo criado com suceso!");
    

                        
                


 //Adc alguma coisa no arquivo
 fs.appendFile(
    path.join(__dirname, "/test", "teste.txt"),
    "Hello world!" ,
    (error) => {
        if (error){
            return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!")
        }
    );
    

    //Ler arquivos  escreveu oq tava escrito
        fs.readFile(
        path.join(__dirname, '/test', 'teste.txt') , 'utf-8' , 
        (error,data) => {
            if (error){
                return console.log("Error :", error);
            }

            console.log(data);
            }
      );

    }
);