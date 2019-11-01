// Faça um programa que leia o nome e a idade de varias pessoas, oa final de cada pessoa o programa deve exibir a mensagem: A leitura deve continuar - (S) ou parar (N).
// Caso a opção for S, lefr o proximo nome e idade, se for N, finalizar a leitura e exibir as informações:

// Nome da pessoa mais velha: xxx
// Idade: xxx
// -
// Nome da pessoa mais nova: xxx
// Idade: xxx
// -
// Media total: xxx
// -
// Pessoas lidas: xxx

var nome;
var idade;
var idadeMaior = 0;
var nomeMaisVelho
var media;

var verifica = true

var i;

while (verifica) {
    nome = prompt('Nome: ');
    idade = prompt('Idade: ');

    if (idade > idadeMaior) {
        idadeMaior = idade;
        nomeMaisVelho = nome;
    }


    
    i = prompt('Deseja continuar? (S) sim - (N) não ');
    (i == 'n' || i == 'N') ? verifica = false : verifica = true;
}