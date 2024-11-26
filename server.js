const express = require('express');
const app = express();
const clienteRotas = require('./routes/Clientes');
const veiculoRotas = require('./routes/Veiculos');

app.use(express.json());

// Rotas
app.use('/clientes', clienteRotas);
app.use('/veiculos', veiculoRotas);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}/`);
});
