var numeroMaca = parseInt(prompt('Numero e maçãs: '));
var custo;
var total;

if (numeroMaca < 12) {
    custo = 1.30;
    total = numeroMaca * custo;

    document.write('Total: ' + total.toFixed(2))
} else if (numeroMaca >= 12) {
    total = numeroMaca;

    document.write('Total: ' + total)
}
