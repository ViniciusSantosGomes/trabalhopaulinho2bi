function verificarNota() {
   
    var nota = document.getElementById('nota').value;

   
    if (nota === '' || isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, insira uma nota válida entre 0 e 10.');
        return;
    }

   
    nota = parseFloat(nota);

    
    var mensagem;
    if (nota >= 6) {
        mensagem = "Aprovado";
    } else if (nota > 4) {
        mensagem = "Precisa fazer prova substitutiva";
    } else {
        mensagem = "Reprovado";
    }

    
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = mensagem;
}