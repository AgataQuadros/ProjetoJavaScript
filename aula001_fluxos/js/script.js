document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('btnVerificar');

    const input = document.getElementById('idade');

    const resultado = document.getElementById('resultado');

    btn.addEventListener('click', function(){

        const idade = parseInt(input.value)

        if (idade < 18) {
            resultado.textContent = 'Menor Idade!';
        } else if (idade === 18) {
            resultado.textContent = 'Tem exatamente 18 anos!';
        } else {
            resultado.textContent = 'Maior de idade';
        }
    })
});