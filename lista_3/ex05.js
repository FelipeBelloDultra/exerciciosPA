var ladoA = parseFloat(prompt('Medida do primeiro lado: '));
var ladoB = parseFloat(prompt('Medida do segundo lado: '));
var ladoC = parseFloat(prompt('Medida do terceiro lado: '));

var somaAB = ladoA + ladoB;
var somaBC = ladoB + ladoC;
var somaCA = ladoC + ladoA;

if (ladoC < somaAB) {
    if (ladoB < somaCA) {
        if (ladoA < somaBC) {
            document.write('Sim é um triangulo!')
        } else {
            document.write('Não é um triangulo!')
        }
    } else {
        document.write('Não é um triangulo!')
    }
} else {
    document.write('Não é um triangulo!')
}
