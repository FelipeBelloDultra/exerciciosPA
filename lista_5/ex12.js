// Fazer um programa que leia um inteiro e retorne se ele é perfeito ou não
// Número perfeito é um número que a soma de todos os divisores próprios (menos ele mesmo) é igual ao próprio número
// Os 4 primeiros inteiros são: 6, 28, 496, 8128

var numero = parseInt(prompt('Digite um valor: '));
var i = 0;
var perfeito = 0;

while (i <= numero) {
    if (numero % i == 0) {
        perfeito = perfeito + i;
    }
    i++;
}

(perfeito - numero == numero) ? document.write('É perfeito') : document.write('Não é perfeito');
