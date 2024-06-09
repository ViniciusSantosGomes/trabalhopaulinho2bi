function classificarPorIdade() {
          
    var pessoas = [
        {
            nome: document.getElementById('nome1').value,
            anoNascimento: document.getElementById('anoNascimento1').value
        },
        {
            nome: document.getElementById('nome2').value,
            anoNascimento: document.getElementById('anoNascimento2').value
        },
        {
            nome: document.getElementById('nome3').value,
            anoNascimento: document.getElementById('anoNascimento3').value
        }
    ];

    
    for (var i = 0; i < pessoas.length; i++) {
        if (pessoas[i].nome === '' || pessoas[i].anoNascimento === '' || isNaN(pessoas[i].anoNascimento)) {
            alert('Por favor, insira um nome e um ano de nascimento válidos para todas as pessoas.');
            return;
        }
    }

   
    var anoAtual = new Date().getFullYear();
    for (var i = 0; i < pessoas.length; i++) {
        pessoas[i].idade = anoAtual - parseInt(pessoas[i].anoNascimento);
    }

    
    pessoas.sort(function(a, b) {
        return b.idade - a.idade;
    });

   
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '<p>Pessoa mais velha: ' + pessoas[0].nome + ' - ' + pessoas[0].idade + ' anos</p>';
    resultados.innerHTML += '<p>Segunda pessoa mais velha: ' + pessoas[1].nome + ' - ' + pessoas[1].idade + ' anos</p>';
    resultados.innerHTML += '<p>Terceira pessoa mais velha: ' + pessoas[2].nome + ' - ' + pessoas[2].idade + ' anos</p>';
}