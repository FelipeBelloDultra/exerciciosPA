var valorUm = parseInt(prompt('Primeiro valor: '));
var valorDois = parseInt(prompt('Segundo valor: '));
var valorTres = parseInt(prompt('Terceiro valor: '));

if (valorUm > valorDois && valorUm > valorTres) {
    document.write('O maior número é: ' + valorUm);
} else if (valorDois > valorUm && valorDois > valorTres) {
    document.write('O maior número é: ' + valorDois);
} else if (valorTres > valorUm && valorTres > valorDois) {
    document.write('O maior número é: ' + valorTres);
}
