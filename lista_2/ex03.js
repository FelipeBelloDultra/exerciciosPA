var media = 0

for (var i = 0; i < 4; i++){
    let nota = prompt('Informe a nota');

    media = media + parseFloat(nota); 
}

media = (media / i);

let condicao = (media >= 5) ? 'Aprovado ! ' : 'Reprovado ! ';

alert('Como a média foi ' + media + ' o aluno está: ' + condicao); 
