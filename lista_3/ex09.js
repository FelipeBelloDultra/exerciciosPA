var numeroEmpregado = parseInt(prompt('Numero empregado: '));
var anoNascimento = parseInt(prompt('Ano nascimento: '));
var anoIngresso = parseInt(prompt('Ano de ingresso na empresa: '));

var tempoServico = 2019 - anoIngresso;
var idade = 2019 - anoNascimento;

if (idade >= 65 && tempoServico >= 30 || idade >= 60 && tempoServico >=25) {
    document.write('Idade: ' + idade + ' | Tempo de serviço: ' + tempoServico + ' anos | Requerer aposetadoria.');
} else {
    document.write('Idade: ' + idade + ' | Tempo de serviço: ' + tempoServico + ' anos | Não requerer aposetadoria.');
}
