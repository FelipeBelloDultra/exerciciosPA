var valorN = parseInt(prompt('Informe um valor: '));

while (valorN <= 0) {
    valorN = parseInt(prompt('Informe um valor MAIOR QUE ZERO: '));
}

for (var num = 1; valorN >= num; num++) {
    document.write('<br/>' + num);
}