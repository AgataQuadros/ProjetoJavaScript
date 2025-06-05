document.addEventListener('DOMContentLoaded', function(){
    const saida = document.getElementById('saida');
    const total = document.getElementById('resultado');
    const limpar = elemento => elemento.innerHTML = '';

    const produtos = [
        { nome: 'Sabonete natural', preco: 15.00, categoria: 'Cosméticos'},
        { nome: 'Shampoo orgânico', preco: 25.00, categoria: 'Cosméticos'},
        { nome: 'Granola artezanal', preco: 18.50, categoria: 'Alimentos'},
        { nome: 'Mel puro', preco: 22.00, categoria: 'Alimentos'},
    ];

    document.getElementById('opcoes').addEventListener('change', function(){
        
        if (opcoes.value === 'al') {
            limpar(saida);

            let calcular = 0

            let produtoFiltrado = produtos.filter(function (valores) {
                return valores.categoria === 'Alimentos'; 
            });

            produtoFiltrado.forEach(function (valores) {

                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valores.nome}</strong><br>
                R$: ${valores.preco}`;

                saida.appendChild(elemento);

                calcular = calcular + valores.preco
            });
            
            total.innerHTML = `Total: ${calcular}`;

        }

        else if (opcoes.value === 'cos') {
            limpar(saida);

            let calcular = 0

            let produtoFiltrado = produtos.filter(function (valores) {
                return valores.categoria === 'Cosméticos'; 
            });

            produtoFiltrado.forEach(function (valores) {

                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valores.nome}</strong><br>
                R$: ${valores.preco}`;

                saida.appendChild(elemento);

                calcular = calcular + valores.preco
            });
            
            total.innerHTML = `Total: ${calcular}`;

        }

        else {
            limpar(saida);

            let calcular = 0

            produtos.forEach(function (valores) {

                const elemento = document.createElement('li');

                elemento.innerHTML = `<strong>${valores.nome}</strong><br>
                R$: ${valores.preco}`;

                saida.appendChild(elemento);

                calcular = calcular + valores.preco
            });
            
            total.innerHTML = `Total: ${calcular}`;
        }
    });
});