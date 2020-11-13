var express = require('express');
var router = express.Router();
const Contacto = require('../models/contactos');

/* GET home page. */
router.get('/', function(req, res, next) {
    //paginar usuarios 

    Contacto.find({})
        .exec((err, contacto) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al traer datos ",
                    error: err
                });
            } else {
                console.log(contacto);

                res.render('agenda/agenda', {
                    contacto: contacto,
                    title: "Lista Contactos",

                });

            }
        });
});

router.get('/create', function(req, res, next) {
    res.render('agenda/form-agenda', {
        title: 'Crear contacto '
    });
});

router.get('/delete/:id', function(req, res) {
    const id = req.params.id;
    Contacto.findByIdAndRemove({ _id: id })
        .exec((err, contacto) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al traer datos ",
                    error: err
                });
            } else {
                console.log(contacto);

                res.redirect('../');
            }
        });
});




router.post('/', (req, res) => {
    let body = req.body;



    let contacto = new Contacto({

        nombre: body.nombre,
        t_casa: body.t_casa,
        t_celular: body.t_celular,
        relacion: body.relacion


    });

    contacto.save((err, productoDB) => {
        if (err) {
            console.log(err);
        }

    });



    res.redirect('../agenda');
});




module.exports = router;