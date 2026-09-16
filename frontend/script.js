async function carregarDados() {
    const url = "http://localhost:3000"; //Endereço da API

    try {
        // Busca os dados da API de forma assíncrona
        const resposta = await fetch(url);

        // Converte a resposta em um objeto JSON
        const produto = await resposta.json();

        // Procura o elemento HTML onde estará o produto
        const container = document.getElementById("lista-produtos");

        // Cria o card usando Template Strings e injeta no HTML
        container.innerHTML = `
             <div class="card">
                <h2>${produto.nome}</h2>
                <p class="categoria">Categoria: <span>${produto.categoria}</span></p>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
             </div>
             `;
    } catch (erro) {
        console.error("Erro so buscar dados da API:", erro);
    }
}

// Executa a função automaticamente assim que a página abre
carregarDados();