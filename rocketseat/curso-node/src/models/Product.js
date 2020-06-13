const mongoose = require('mongoose');

// Cria o schema do documento
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    }
});

// Registra a model com nome Product, referenciando o Schema ProductSchema
mongoose.model('Product', ProductSchema);