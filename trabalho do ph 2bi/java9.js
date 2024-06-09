function dividirTurmas() {
          
    var totalAlunos = document.getElementById('totalAlunos').value;
    var numeroTurmas = document.getElementById('numeroTurmas').value;

   
    if (totalAlunos === '' || numeroTurmas === '' || isNaN(totalAlunos) || isNaN(numeroTurmas) || totalAlunos <= 0 || numeroTurmas <= 0) {
        alert('Por favor, insira números válidos para alunos e turmas.');
        return;
    }

    
    totalAlunos = parseInt(totalAlunos);
    numeroTurmas = parseInt(numeroTurmas);

   
    var alunosPorTurma = Math.floor(totalAlunos / numeroTurmas);
    var alunosSemTurma = totalAlunos % numeroTurmas;

   
    var mensagem = "Cada turma terá " + alunosPorTurma + " alunos.<br>";
    if (alunosSemTurma > 0) {
        mensagem += "Há " + alunosSemTurma + " alunos que não foram atribuídos a nenhuma turma.";
    } else {
        mensagem += "Todos os alunos foram atribuídos às turmas.";
    }

   
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}

