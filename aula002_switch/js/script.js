document.addEventListener('DOMContentLoaded', function() {

    const botao = document.getElementById('btnMostrarDia');

    const entrada = document.getElementById('numeroDia');

    const saida = document.getElementById('respostaDia');

    botao.addEventListener('click', function() {

        const numero = parseInt(entrada.value);

        switch (numero) {
            case 1: 
            saida.textContent = 'Domingo'
                break;

            case 2: 
            saida.textContent = 'Segunda-Feira'
                break;

            case 3: 
            saida.textContent = 'Terça-Feira'
                break;

            case 4: 
            saida.textContent = 'Quarta-Feira'
                break;

            case 5: 
            saida.textContent = 'Quinta-Feira'
                break;

            case 6: 
            saida.textContent = 'Sexta-Feira'
                break;

            case 7: 
            saida.textContent = 'Sabado'
                break;

            default:
                saida.textContent = 'Número Inválido!'
                break;
        }
    })
})