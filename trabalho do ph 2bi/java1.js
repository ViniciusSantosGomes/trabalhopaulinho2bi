function calcular() {
    var cotacaoAtual = document.getElementById('cotacao').value;
    
    
    if (cotacaoAtual === '' || isNaN(cotacaoAtual)) {
        alert('Por favor, insira um valor válido para a cotação do dólar.');
        return;
    }

   
    cotacaoAtual = parseFloat(cotacaoAtual);

   
    var valor1 = cotacaoAtual * 1.01;
    var valor2 = cotacaoAtual * 1.02; 
    var valor5 = cotacaoAtual * 1.05; 
    var valor10 = cotacaoAtual * 1.10; 

    document.getElementById('resultado1').innerText = 'Se a cotação subir 1%, o valor será de $' + valor1.toFixed(2);
    document.getElementById('resultado2').innerText = 'Se a cotação subir 2%, o valor será de $' + valor2.toFixed(2);
    document.getElementById('resultado5').innerText = 'Se a cotação subir 5%, o valor será de $' + valor5.toFixed(2);
    document.getElementById('resultado10').innerText = 'Se a cotação subir 10%, o valor será de $' + valor10.toFixed(2);
}