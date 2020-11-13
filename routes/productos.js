var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');
var multer = require('multer')
var upload = multer({ dest: 'public/images' });
const localstorage = require('node-localstorage');




/* GET home page. */
router.get('/', function(req, res, next) {
    //paginar usuarios 
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 15;
    desde = Number(desde);
    limite = Number(limite);
    Producto.find({})
        .skip(desde)
        .limit(limite)
        .exec((err, producto) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al traer datos ",
                    error: err
                });
            } else {

                Producto.count({}, (err, conteo) => {
                    res.render('index', {
                        producto: producto,
                        title: "Lista de productos ",
                        carrito: conteo
                    });
                });

            }
        });

});
router.get('/create', function(req, res, next) {
    res.render('form-producto');
});
router.get('/update/:id', function(req, res, next) {
    const id = req.params.id;
    Producto.find({ _id: id })
        .exec((err, producto) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al traer datos ",
                    error: err
                });
            } else {
                console.log(producto);
                res.render('form-product-update', {
                    producto: producto,
                    title: "Actualizar productos ",

                });

            }


        });



});



router.get('/:id', function(req, res, next) {



    Producto.findOne({ _id: req.params.id })
        .exec((err, producto) => {
            if (err) {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al traer datos ",
                    error: err
                });
            } else {
                Producto.count({}, (err, conteo) => {
                    res.render('producto', {
                        producto: producto,
                        title: "Lista de productos "
                    });
                });

            }
        });

});


const pedido = [];


router.post('/', upload.single('imagen'), (req, res) => {
    let body = req.body;
    console.log(req.file.path);


    let producto = new Producto({

        nombre: body.nombre,
        descripccion: body.descripccion,
        precio: body.precio,
        imagen: req.file.filename,
        ruta: req.file['filename']
    });

    producto.save((err, productoDB) => {
        if (err) {
            console.log(err);
        }

    });



    res.redirect('/productos');
});

module.exports = router;