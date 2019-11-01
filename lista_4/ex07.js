var numeroTabuada = parseInt(prompt('Informe um numero: '));

for (let cont = 1; cont <= 10; cont++) {
    document.write(cont + ' x ' + numeroTabuada + ' = ' + numeroTabuada*cont + '<br/>');
}