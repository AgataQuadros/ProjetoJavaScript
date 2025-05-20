document.addEventListener('DOMContentLoaded', function(){
    const resultado = document.getElementById('resultado');
    const subtrair = document.getElementById('subtrair')
    const zerar = document.getElementById('zerar')


    document.getElementById('somar').addEventListener('click', function(){
        let i = 1;
        resultado.textContent = +i;
    });
    document.getElementById('subitrair').addEventListener('click', function(){
        let i = 1;
        resultado.textContent = -i;
    });
    document.getElementById('zerar').addEventListener('click', function(){
    });
});