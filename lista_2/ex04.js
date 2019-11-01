let sexo = prompt('Digite "M" para Masculino e "F" para Feminino: ');
let altura = prompt('Informe sua altura: ');
var pesoIdeal;

let condicao = (sexo == 'm' || sexo == 'M') ? pesoIdeal = (72.7 * parseFloat(altura) - 58.0) : pesoIdeal = (62.1 * parseFloat(altura) - 44.7);

alert('Como seu sexo é ' + sexo + '. Seu peso ideal é: ' + condicao.toFixed(2));