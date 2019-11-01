let valorAltura = prompt('Informe sua altura: ');
let sexo = prompt('Informe seu sexo: ')
sexo = 'Masculino';

let pesoIdeal = parseFloat((72.7 * parseFloat(valorAltura) - 58));

alert('Já que você é do sexo ' + sexo + ' e tem ' + valorAltura + ' metros, seu peso ideal é: ' + pesoIdeal.toFixed(2) + ' kg');