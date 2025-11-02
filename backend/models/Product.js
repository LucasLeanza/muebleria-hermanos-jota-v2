const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    
    descripcion: {
        type: String
    },
     
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    
    stock: {
        type: Number
    },
    
    imagenUrl: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);