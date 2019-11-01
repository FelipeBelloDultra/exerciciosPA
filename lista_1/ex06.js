var valorUm = prompt('Quantia de moedas de 1 real: ');
var valorCinquenta = prompt('Quantia de moedas de 0,50 centavos: ');
var valorVinteCinco = prompt('Quantia de moedas de 0,25 centavos: ');
var valorDez = prompt('Quantia de moedas de 0,10 centavos: ');
var valorCinco = prompt('Quantia de moedas de 0,05 centavos: ');

let n1 = parseInt(valorUm) * 1.0;
let n2 = parseFloat(valorCinquenta) * 0.50;
let n3 = parseFloat(valorVinteCinco) * 0.25;
let n4 = parseFloat(valorDez) * 0.10;
let n5 = parseFloat(valorCinco) * 0.05;

let soma = (n1 + n2 + n3 + n4 + n5);

console.log(soma)

alert("O valor no cofrinho é " + soma.toFixed(2) + ' R$')