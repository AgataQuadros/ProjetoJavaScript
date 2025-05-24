const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

function mostrarResultado(operacao, texto) {
    const input = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    const numero = parseFloat(input.value);

    if(isNaN(numero)){
        resultado.textContent = 'Por favor digite um numero valido';
        resultado.style.color = 'red';
        return;
    }

    const valor = operacao(numero);

    resultado.textContent= `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black';
}

document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O dobro');
});

document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(triplicar, 'O triplo');
});

document.getElementById('numero').addEventListener('keypress', function(enter) {
    if (enter.key === 'Enter') {
        mostrarResultado(dobrar, 'O dobro');
    }
})