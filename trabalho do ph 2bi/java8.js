function verificarParOuImpar() {
   
    var numero = document.getElementById('numero').value;

    
    if (numero === '' || isNaN(numero)) {
        alert('Por favor, insira um número inteiro válido.');
        return;
    }

   
    numero = parseInt(numero);

    
    var mensagem;
    if (numero % 2 === 0) {
        mensagem = "O número " + numero + " é Par.";
    } else {
        mensagem = "O número " + numero + " é Ímpar.";
    }

   
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}