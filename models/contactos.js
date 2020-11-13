const mongoose = require('mongoose');

let contactoSchema = new mongoose.Schema({

        nombre: String,
        t_casa: String,
        t_celular: String,
        relacion: String



    }

);

var contacto = mongoose.model('Contacto', contactoSchema);
module.exports = contacto;