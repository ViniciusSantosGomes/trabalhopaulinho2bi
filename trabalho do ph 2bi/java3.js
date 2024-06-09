function calcularOperacoes() {
           
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    
    
    if (numero1 === '' || isNaN(numero1) || numero2 === '' || isNaN(numero2)) {
        alert('Por favor, insira dois números inteiros válidos.');
        return;
    }

   s
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    
    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var multiplicacao = numero1 * numero2;
    var divisao = numero1 / numero2;

   
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '<p>Soma: ' + soma + '</p>';
    resultados.innerHTML += '<p>Subtração: ' + subtracao + '</p>';
    resultados.innerHTML += '<p>Multiplicação: ' + multiplicacao + '</p>';
    resultados.innerHTML += '<p>Divisão: ' + divisao.toFixed(2) + '</p>';
}