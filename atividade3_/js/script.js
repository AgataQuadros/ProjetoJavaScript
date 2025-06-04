document.addEventListener('DOMContentLoaded', function(){
    const tudo = document.getElementById('td');
    const alimento = document.getElementById('al');
    const cosmetico = document.getElementById('cos');

    const produtos = [
        { nome: 'Sabonete natural', preco: 15.00, categoria: 'Cosméticos'},
        { nome: 'Shampoo orgânico', preco: 25.00, categoria: 'Cosméticos'},
        { nome: 'Granola artezanal', preco: 18.50, categoria: 'Alimentos'},
        { nome: 'Mel puro', preco: 22.00, categoria: 'Alimentos'},
    ];

    let calcular = 0

    document.getElementById('td').addEventListener('select', function(){
        let valores = produtos.preco

        let calculo = calcular + valores

        document.getElementById('resultado').innerHTML = `
        ${calculo}`;
    });
});