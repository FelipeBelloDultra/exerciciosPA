var valorUm = parseInt(prompt('Primeiro valor: '));
var valorDois = parseInt(prompt('Segundo valor: '));
var valorTres = parseInt(prompt('Terceiro valor: '));

var maiorUm;
var maiorDois;

if (valorUm > valorDois && valorUm > valorTres) {
    maiorUm = valorUm;
    if (valorDois > valorTres) {
        maiorDois = valorDois;
    } else {
        maiorDois = valorTres;
    }
} else if (valorDois > valorUm && valorDois > valorTres) {
    maiorUm = valorDois;
    if (valorUm > valorTres) {
        maiorDois = valorUm;
    } else {
        maiorDois = valorTres;
    }
} else if (valorTres > valorUm && valorTres > valorDois) {
    maiorUm = valorTres;
    if (valorUm > valorDois) {
        maiorDois = valorUm;
    } else {
        maiorDois = valorDois;
    }
}

let soma = maiorUm + maiorDois;

document.write('O maior é ' + maiorUm + ' e o segundo maior é ' + maiorDois + '<br/>')
document.write('A soma dos dois maiores é: ' + soma)
