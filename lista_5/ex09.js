// Faça um programa que imprima a lista de conversão de polegadas para centimetros. Deseja-se que na tela, sejam exibidos os valores de 1 a 20 polegadas (somente inteiros 1, 2, 3,... 20)

const convert =  2.54
var i = 1;

while (i <= 20) {
    document.write(parseInt(convert * i) + '<br/>');
    i++;
}