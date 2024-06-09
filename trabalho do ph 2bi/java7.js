function compararNumeros() {
  
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;

   
    if (numero1 === '' || numero2 === '' || isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira dois números inteiros válidos.');
        return;
    }

    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    
    if (numero1 > numero2) {
        mensagem = "O primeiro número (" + numero1 + ") é maior que o segundo (" + numero2 + ").";
    } else if (numero1 < numero2) {
        mensagem = "O primeiro número (" + numero1 + ") é menor que o segundo (" + numero2 + ").";
    } else {
        mensagem = "O primeiro número (" + numero1 + ") é igual ao segundo (" + numero2 + ").";
    }

    var resultados = document.getElementById('resultados');
    resultados.innerHTML = mensagem;
}