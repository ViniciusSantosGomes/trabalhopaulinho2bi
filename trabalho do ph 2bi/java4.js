function calcularPedido() {
            
    var sabor1 = document.getElementById('sabor1').value;
    var sabor2 = document.getElementById('sabor2').value;
    var sabor3 = document.getElementById('sabor3').value;
    var sabor4 = document.getElementById('sabor4').value;

    var refrigerantes = document.getElementById('refrigerantes').value;

    
    if (!sabor1 || !sabor2 || !sabor3 || !sabor4) {
        alert('Por favor, insira todos os sabores de pizza.');
        return;
    }
    
    if (refrigerantes === '' || isNaN(refrigerantes) || refrigerantes < 0) {
        alert('Por favor, insira uma quantidade válida de refrigerantes.');
        return;
    }

   
    refrigerantes = parseInt(refrigerantes);

    
    var precoPizza = 12.00;
    var precoRefrigerante = 7.00;
    var totalPizzas = 4 * precoPizza;
    var totalRefrigerantes = refrigerantes * precoRefrigerante;
    var valorTotal = totalPizzas + totalRefrigerantes;

    
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '<p>Sabores escolhidos:</p>';
    resultados.innerHTML += '<ul>';
    resultados.innerHTML += '<li>' + sabor1 + '</li>';
    resultados.innerHTML += '<li>' + sabor2 + '</li>';
    resultados.innerHTML += '<li>' + sabor3 + '</li>';
    resultados.innerHTML += '<li>' + sabor4 + '</li>';
    resultados.innerHTML += '</ul>';
    resultados.innerHTML += '<p>Quantidade de refrigerantes: ' + refrigerantes + '</p>';
    resultados.innerHTML += '<p>Valor total a pagar: R$ ' + valorTotal.toFixed(2) + '</p>';
}