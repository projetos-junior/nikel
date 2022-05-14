const nome= "Edson Junior";
let nome2 = "";
let pessoa = {nome:"Edson Junior", idade: "38", trabalho:"programado"} // um Objeto e JavaScript

//Criação de função sem parametros 
function alterarNome(){
    nome2 = "Jose Gabril";
    console.log("Vamos alterar:");
    console.log(nome2);
}
//Criação de função passando um parametro
function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Vamos alterar recebe um nome:");
    console.log(nome2);
}
recebeEalteraNome()

// Trabalhando com Objetos.

console.log(`Meu nome é ${pessoa.nome } Tenho ${ pessoa.idade } e trabalho como ${ pessoa.trabalho}`);