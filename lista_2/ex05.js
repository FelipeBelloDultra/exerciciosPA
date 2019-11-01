var horaTrabalhada = prompt('Horas trabalhadas: ');
var valorHoraBonus = 8.40;
var valorHoraPadrao = 5.20;

if (parseInt(horaTrabalhada) > 44) {

    let resto = parseInt(horaTrabalhada) - 44;
    let bonus = resto * valorHoraBonus;

    horaTrabalhada = ((parseInt(horaTrabalhada) - resto) * valorHoraPadrao) + bonus;

    let valor = horaTrabalhada;

    alert(valor.toFixed(2));

} else {
    horaTrabalhada = parseInt(horaTrabalhada) * valorHoraPadrao;

    let valor = horaTrabalhada;

    alert('Seu salário é de: ' + valor.toFixed(2));
}
