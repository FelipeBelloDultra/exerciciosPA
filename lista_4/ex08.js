var numeroTabuada = parseInt(prompt('Informe um numero: '));
var cont = 1;

while (cont <= 10) {
    document.write(cont + ' x ' + numeroTabuada + ' = ' + numeroTabuada*cont + '<br/>');
    cont += 1;
}
