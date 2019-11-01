var salarioFixo = parseFloat(prompt('Informe seu salário fixo: '));
var valorVendas = parseFloat(prompt('Informe o valor das venda: '));
var comissao;
var total;

if (valorVendas > 1500) {
    comissao = ((valorVendas - 1500) * 0.05) + 1500 * 0.03;
    total = comissao + salarioFixo;

    document.write('Seu salário total: ' + total.toFixed(2));

} else {
    comissao = valorVendas * 0.03;
    total = comissao + salarioFixo;

    document.write('Seu salário total: ' + total.toFixed(2));
}
