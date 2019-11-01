// (com switch case) Desenvolva um programa que exiba um "menu" com as seguintes opções:
// [ 1 - Reais para Dolores 2 - Dolares para Reais  3 - Reais para Libras ]
// [ 4 - Libras para Reais 5 - Dolares para libras 6 - Libras para Dolares 7 - Sair]
// Em seguinda solicitar um valor em Reais para ser convertido, utilizando como referencia os valores:
// Libras = 5.14
// Dolares = 4.44
// E exibir a mensagem (exemplo): 'O RESULTADO DO SEU CALCULO: xxx DOLARES EQUIVALEM A xxx REAIS'


function calcularMoeda() {

    var valorLibras = 5.14;
    var valorDolar = 4.44;
    var opc = parseInt(document.getElementById('opc').value);
    var valor;
    let resultado;
    const troca = document.getElementById('troca');

    switch (opc) {
        case 1:
            valor = prompt('Informe um valor em Reais a ser convertido para Dolares: ');
            resultado = ((valor * 1) / valorDolar).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 2:
            valor = prompt('Informe um valor em Dolares a ser convertido para Reais: ');
            resultado = ((valor * valorDolar) / 1).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 3:
            valor = prompt('Informe um valor em Reais a ser convertido para Libras: ');
            resultado = ((valor * 1) / valorLibras).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 4:
            valor = prompt('Informe um valor em Libras a ser convertido para Reais: ');
            resultado = ((valor * valorLibras) / 1).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 5:
            valor = prompt('Informe um valor em Dolares a ser convertido para Libras: ');
            resultado = ((valor * valorDolar) / valorLibras).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 6:
            valor = prompt('Informe um valor em Libras a ser convertido para Dolares: ');
            resultado = ((valor * valorLibras) / valorDolar).toFixed(2);
            troca.innerHTML = ('O resultado é: ' + resultado);
            document.getElementById('opc').value = '';

            break;
        case 7:
            document.getElementById('moeda-conversor').classList.add('d-none');
            document.getElementById('oculto').classList.remove('d-none');
            document.getElementById('opc').value = '';            

            break;
        default:
            alert('Digite um valor VÁLIDO');

            break;
    }
}


function mostrarOpcoes() {

    document.getElementById('moeda-conversor').classList.remove('d-none');
            
    document.getElementById('oculto').classList.add('d-none');
}
