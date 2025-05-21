document.addEventListener('DOMContentLoaded', function(){
    const cordefundo = document.getElementById('cordefundo');
    const cordetexto = document.getElementById('cordetexto');
    const cordecaixa = document.getElementById('cordecaixa');
    const fundo = document.getElementById('fundo')
    const texto1 = document.getElementById('texto1')
    const caixa = document.getElementById('caixa')

    cordefundo.addEventListener('change', () => {
        const cor = cordefundo.value;
        fundo.style.backgroundColor = cor;
    });

    cordetexto.addEventListener('change', () => {
        const cor = cordetexto.value;
        texto.style.color = cor;
    });
    cordecaixa.addEventListener('change', () => {
        const cor = cordecaixa.value;
        caixa.style.backgroundColor = cor;
    });
});