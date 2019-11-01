// Faça um programa que exiba os 10 primeiros numeros da sequência de Fibonacci

var antes = 0;
var atual = 1;
var resultado = 1;
var i = 1

for (var i = 1; i <= 10; i++) {
    document.write(resultado + '</br>');
    resultado = antes + atual;
    antes = atual;
    atual = resultado;   
}
