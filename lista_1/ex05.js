let valorAltura = prompt('Informe sua altura: ');
let sexo = prompt('Informe seu sexo: ')
sexo = 'Feminino';

let pesoIdeal = parseFloat((62.1 * parseFloat(valorAltura) - 44.7));

alert('Já que você é do sexo ' + sexo + ' e tem ' + valorAltura + ' metros, seu peso ideal é: ' + pesoIdeal.toFixed(2) + ' kg');