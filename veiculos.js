const express = require('express');
const rotas = express.Router();

let veiculos = [];


rotas.get('/', (req, res) => {
    res.json(veiculos);
});

rotas.post('/', (req, res) => {
    const veiculo = req.body;
    veiculos.push(veiculo);
    res.status(201).json({ 
        message: 'Veículo adicionado!', 
        veiculo 
    });
});

rotas.put('/:id', (req, res) => {
    const { id } = req.params;
    const veiculoAtualizado = req.body;

    veiculos = veiculos.map(veiculo => 
        veiculo.id === id ? veiculoAtualizado : veiculo
    );

    res.json({ 
        message: 'Veículo atualizado!', 
        veiculoAtualizado 
    });
});

rotas.delete('/:id', (req, res) => {
    const { id } = req.params;

    veiculos = veiculos.filter(veiculo => veiculo.id !== id);

    res.json({ 
        message: 'Veículo removido!' 
    });
});

module.exports = rotas;
