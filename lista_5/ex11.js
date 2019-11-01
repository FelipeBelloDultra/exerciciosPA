// Faça um programa que leia um numero qualquer e exiba se esse numero é primo ou nao (divisivel so por 1 e por eles mesmo)

var n = parseInt(prompt("Digite um valor:"));

var contador = 0;

for (var x = 1; x <= n; x++) {
    if (n % x == 0) {
        contador++;
    }
}

(contador == 2) ? document.write("Número primo") : document.write("Não é primo");