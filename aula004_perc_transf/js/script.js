const numeros = [1, 2, 3, 4, 5];

const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin'},
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Serman Oaks'},
    { nome: 'Alexandra Daddario', idade: 39, cidade: 'Nova York'},
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana'},
    { nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia'},
    { nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas'}
];


document.getElementById('botao-paraCada').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    });

    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
        <strong>Iteração com forEach:</strong>${resultado}<br>
        <small>Observação: for each não retorna um novo array</small>
    `;
});

document.getElementById('botao-mapear').addEventListener('click', function() {

    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    document.getElementById('resultado-mapear').innerHTML = `
        <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
        <strong>Array com quadrado:</strong>${JSON.stringify(quadrados)}<br>
        <small>Observação: map sempre retorna um novo array do menso tamanho</small>
    `
});

document.getElementById('botao-filtrar').addEventListener('click', function() {

    const maioresDeIdade = pessoas.filter(function(pessoa){
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-filtrar').innerHTML = `
        <strong>Array original:</strong>${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Maiores de idade (filter):</strong>${JSON.stringify(maioresDeIdade, null, 2)}<br>
        <small>Observação: filter retorna um novo array apenas com elementos que passam no teste</small>
    `
});

document.getElementById('botao-reduzir').addEventListener('click', function() {

    const somaTotal = numeros.reduce(function(acumulador, numeroAtual){
        return acumulador + numeroAtual;
    }, 0);

    document.getElementById('resultado-reduzir').innerHTML = `
        <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
        <strong>Soma total (reduce):</strong>${somaTotal}<br>
        <small>Observação: reduce pode transformar um array em qualquer tipo de valor</small>
    `
});

document.getElementById('botao-encontrar').addEventListener('click', function() {

    const menorDeIdade = pessoas.find(function(pessoa) {
        return pessoa.idade < 18;
    });

    document.getElementById('resultado-encontrar').innerHTML = `
        <strong>Array original:</strong>${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Primeiro menor de idade (find):</strong>${JSON.stringify(menorDeIdade)}<br>
        <small>Observação: find retorna apenas o primeiro elemento encontrado</small>
    `;
});

document.getElementById('botao-algum').addEventListener('click', function() {

    const existeMenor = pessoas.some(function(pessoa){
        return pessoa.idade < 18;
    });

    document.getElementById('resultado-algum').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Existe algum menor de idade?</strong>${existeMenor ? 'Sim' : 'Não'}<br>
    <small>Observação: some retorna True se pelo menos um elemento passar no teste</small>
    `;
});

document.getElementById('botao-todos').addEventListener('click', function() {

    const todosMaiores = pessoas.every(function(pessoa){
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-todos').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(pessoas, null, 2)}<br><br>
    <strong>Todos são maiores de idade?</strong>${todosMaiores ? 'Sim' : 'Não'}<br>
    <small>Observação: every retorna True se todos os elementos passarem no teste</small>
    `;
});