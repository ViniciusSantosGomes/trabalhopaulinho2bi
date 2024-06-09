function verificarMetas() {
          
    var valorVendido = document.getElementById('valorVendido').value;
    var meta = document.getElementById('meta').value;
    var metaMinima = document.getElementById('metaMinima').value;

    if (valorVendido === '' || meta === '' || metaMinima === '' || isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima) || valorVendido < 0 || meta <= 0 || metaMinima <= 0) {
        alert('Por favor, insira valores válidos para todos os campos.');
        return;
    }

  
    valorVendido = parseFloat(valorVendido);
    meta = parseFloat(meta);
    metaMinima = parseFloat(metaMinima);

    
    var status;
    if (valorVendido >= meta) {
        status = "Você atingiu a meta!";
    } else if (valorVendido >= metaMinima) {
        status = "Você atingiu a meta mínima.";
    } else {
        status = "Você não atingiu nenhuma das metas.";
    }

   
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

   
    var mensagem = status + "<br>" +
                   "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%<br>" +
                   "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";

    
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = mensagem;
}