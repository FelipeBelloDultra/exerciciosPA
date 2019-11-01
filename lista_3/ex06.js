var timeUm = prompt('Nome do primeiro time: ');
var golsUm = parseInt(prompt('Numero de gols: '));

var timeDois = prompt('Nome do segundo time: ');
var golsDois = parseInt(prompt('Numero de gols: '));

golsUm > golsDois ? document.write('O vencedor foi ' + timeUm) : golsDois > golsUm ? document.write('O vencedor foi ' + timeDois) : document.write('EMPATE');