var express = require('express');
var router = express.Router();
const Pedido = require('../models/pedidos');
var multer = require('multer')
var upload = multer({ dest: 'public/images' });
const localstorage = require('node-localstorage');




/* GET home page. */
router.get('/', function(req, res, next) {

    res.send("Hola");
    // //paginar usuarios 
    // let desde = req.query.desde || 0;
    // let limite = req.query.limite || 10;
    // desde = Number(desde);
    // limite = Number(limite);
    // Producto.find({})
    //     .skip(desde)
    //     .limit(limite)
    //     .exec((err, producto) => {
    //         if (err) {
    //             res.status(400).json({
    //                 ok: false,
    //                 mensaje: "Error al traer datos ",
    //                 error: err
    //             });
    //         } else {

    //             Producto.count({}, (err, conteo) => {
    //                 res.render('index', {
    //                     producto: producto,
    //                     title: "Lista de productos ",
    //                     carrito: conteo
    //                 });
    //             });

    //         }
    //     });

});
// router.get('/create', function(req, res, next) {
//     res.render('form-producto');
// });


// router.get('/:id', function(req, res, next) {



//     Producto.findOne({ _id: req.params.id })
//         .exec((err, producto) => {
//             if (err) {
//                 res.status(400).json({
//                     ok: false,
//                     mensaje: "Error al traer datos ",
//                     error: err
//                 });
//             } else {
//                 Producto.count({}, (err, conteo) => {
//                     res.render('producto', {
//                         producto: producto,
//                         title: "Lista de productos "
//                     });
//                 });

//             }
//         });

// });


// const pedido = [];


// router.post('/', upload.single('imagen'), (req, res) => {
//     let body = req.body;
//     console.log(req.file.path);


//     let producto = new Producto({
//         nombre: body.nombre,
//         descripccion: body.descripccion,
//         precio: body.precio,
//         imagen: req.file.filename,
//         ruta: req.file['filename']


//     });

//     producto.save((err, productoDB) => {
//         if (err) {
//             console.log(err);
//         }

//     });

//     pedido.push(producto);
//     var carrito = localstorage.setItem('pedido', pedido);


//     res.redirect('/productos');
// });

module.exports = router;