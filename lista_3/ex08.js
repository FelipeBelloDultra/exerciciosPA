var litrosVendidos = parseFloat(prompt('Informe os litros: '));
var tipoCombustivel = prompt('[A] para Álcool | [G] para Gasolina');
var preco;
var desconto;
var resultado;

if (tipoCombustivel == 'A') {
    if (litrosVendidos > 20) {
        preco = 2.90;
        desconto = 0.05;

        let valor = ((litrosVendidos - 22) * desconto) + 22 * 0.03;

        resultado = (litrosVendidos * preco) - valor;

        document.write('Valor a ser pago: ' + resultado);

    } else {
        preco = 3.30;
        desconto = 0.03;

        let valor = (litrosVendidos * preco) * desconto;

        resultado = (litrosVendidos * preco) - valor;
        
        document.write('Valor a ser pago: ' + resultado);

    }
} else if (tipoCombustivel == 'G') {
    if (litrosVendidos > 20) {
        preco = 3.30;
        desconto = 0.06;

        let valor = ((litrosVendidos - 22) * desconto) + 22 * 0.03;

        resultado = (litrosVendidos * preco) - valor;

        document.write('Valor a ser pago: ' + resultado);

    } else {
        preco = 2.90;
        desconto = 0.04;

        let valor = (litrosVendidos * preco) * desconto;

        resultado = (litrosVendidos * preco) - valor;
        
        document.write('Valor a ser pago: ' + resultado);

    }
}
