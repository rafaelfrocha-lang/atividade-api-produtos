async function carregarDados() {
    const url = "https://glowing-sniffle-77p65jrr7qgv29v7-3000.app.github.dev/";

    try {
        // Busca os dados da API de forma assíncrona
        const resposta = await fetch(url);

        // Converte a resposta em um objeto JSON
        const produtos = await resposta.json();

        // Procura o elemento HTML onde estará o produto
        const container = document.getElementById("lista-produtos");

       container.innerHTML = "";

       produtos.forEach(produto => {
        container.innerHTML += `
             <div class="card">
               <img src="${produto.imagem}" alt="${produto.nome}">
                  <h2>${produto.nome}</h2>
                  <p class="categoria">Categoria: <span>${produto.categoria}</span></p>
                  <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
             </div> 
            `;
       });

    } catch (erro) {
        console.error("Erro ao buscar dados da API:", erro);
    }
}

carregarDados();