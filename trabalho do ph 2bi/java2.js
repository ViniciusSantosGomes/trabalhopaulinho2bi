function calcularIngredientes() {
    var numPessoas = document.getElementById('numPessoas').value;
    
   
    if (numPessoas === '' || isNaN(numPessoas) || numPessoas <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

   
    numPessoas = parseInt(numPessoas);

    
    var ovosNecessarios = numPessoas * 2; 
    var queijoNecessario = numPessoas * 50; 

    
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '<p>Para ' + numPessoas + ' pessoa(s), você precisará de:</p>';
    resultados.innerHTML += '<p>' + ovosNecessarios + ' ovos</p>';
    resultados.innerHTML += '<p>' + queijoNecessario + ' gramas de queijo</p>';
}function calcularIngredientes() {
    var numPessoas = document.getElementById('numPessoas').value;
    
   
    if (numPessoas === '' || isNaN(numPessoas) || numPessoas <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    
    numPessoas = parseInt(numPessoas);

   
    var ovosNecessarios = numPessoas * 2; 
    var queijoNecessario = numPessoas * 50; 

    
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '<p>Para ' + numPessoas + ' pessoa(s), você precisará de:</p>';
    resultados.innerHTML += '<p>' + ovosNecessarios + ' ovos</p>';
    resultados.innerHTML += '<p>' + queijoNecessario + ' gramas de queijo</p>';
}