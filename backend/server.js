// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configurações obrigatórias
app.use(cors());
app.use(express.json());

// Rota que retorna o produto
app.get('/', (req, res) => {
    const produto = [
    { nome: "Teclado Mecânico RGB", preco: 350.00, categoria: "Periféricos" },
    { nome: "Mouse Gamer", preco: 180.00, categoria: "Periféricos"},
    { nome: "Monitor 144Hz", preco: 1200.00, categoria: "Monitores"},
    { nome: "Headset", preco: 290.00, categoria: "Áudio"},
    ];
    res.json(produto);
});

// Iniciando o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});