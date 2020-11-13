const mongoose = require('mongoose');

let pedidoSchema = new mongoose.Schema({
        fecha: String,
        descripccion: String,
        // id: String,


    }

);

var pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = pedido;