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
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong>${resultado}<br>
    <small>Observação: for each não retorna um novo array</small>
    `
});

document.getElementById('botao-mapear').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    })

    document.getElementById('resultado-mapear').innerHTML = `
    `
});

document.getElementById('botao-paraCada').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong>${resultado}<br>
    <small>Observação: for each não retorna um novo array</small>
    `
});

document.getElementById('botao-paraCada').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong>${resultado}<br>
    <small>Observação: for each não retorna um novo array</small>
    `
});

document.getElementById('botao-paraCada').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong>${resultado}<br>
    <small>Observação: for each não retorna um novo array</small>
    `
});

document.getElementById('botao-paraCada').addEventListener('click', function() {

    let resultado = '';

    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    })

    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong>${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong>${resultado}<br>
    <small>Observação: for each não retorna um novo array</small>
    `
});