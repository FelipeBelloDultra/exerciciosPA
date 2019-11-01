let valorPago = prompt('Informe o valor pago: ');
let custoProduto = prompt('Informe o valor do produto: ');

let total = (parseInt(valorPago) - parseInt(custoProduto));

alert('O troco é ' + total + ' R$');
