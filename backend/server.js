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
    { nome: "Teclado Mecânico RGB", preco: 350.00, categoria: "Periféricos", imagem: "https://www.lognetinfo.com.br/imagens/720x720/24024A1.jpg" },
    { nome: "Mouse Gamer", preco: 180.00, categoria: "Periféricos", imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/vztogtli/file.png"},
    { nome: "Monitor 144Hz", preco: 1200.00, categoria: "Monitores", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhlUYieSW2EJnrvSWHkSqmhRXenhhomisGKLIPkG2ysxl1biBFnw1A2U-&s=10"},
    { nome: "Headset", preco: 290.00, categoria: "Áudio", imagem: "https://resource.logitechg.com/w_416,h_312,ar_4:3,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g325-pdp/gallery/g325-lightspeed-3qtr-front-left-angle-black-gallery-1.png"},
    ];
    res.json(produto);
});

// Iniciando o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});