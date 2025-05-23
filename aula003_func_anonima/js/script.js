const saudacao = function (nome) {
    return `Ola. ${nome}! Seja bem-vindo(a)`;
};

const mostrarResultado = (mensagem) => {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

document.addEventListener('DOMContentLoaded', () => {
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    saudarBtn.addEventListener('click', function() {
        const mensagem = saudacao("João");
        mostrarResultado(mensagem);
    });

    limparBtn.addEventListener('click', () => {
        document.getElementById('resultado').innerHTML = '';
    });
});