// Faça unm programa que faça a soma dos numeros pares entre 25 e 200

var i = 25;
var soma = 0;

while (i <= 200) {
    if  ( i % 2 == 0) {
        let par = i;
        soma = soma + par;
    }
    i = i + 1
}

document.write(soma + '<br/>');
