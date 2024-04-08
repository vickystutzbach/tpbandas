const bandas = require('../db/index');

const bandasController = {
    index: function(req, res) {
        return res.render('listadoBandas', {
            lista: bandas.lista,
            mensaje: "Todas las bandas"
        });
    },
    detalleId: function (req, res) {
        let idd = req.params.id;
        for (let i = 0; i < bandas.lista.length; i++) {
            if (idd == bandas.lista[i].id) {
                return res.render('detalleBanda', {
                    lista: bandas.lista[i],
                    mensaje: `Banda: ${bandas.lista[i].nombre}`
                });  
            }
        }
        if (idd > bandas.lista.length || idd < bandas.lista.length) {
                return res.send('No hay ninguna banda con este ID');
        
        }

    },
    genero: function (req, res) {
        let gen = req.params.genero;
        let resultado = [];
        for (let i = 0; i < bandas.lista.length; i++) {
            if(gen == bandas.lista[i].genero) {
                resultado.push(bandas.lista[i]);
            }
        }
        if (resultado.length === 0) {
            return res.send('No hay bandas en este genero');
        }
        
        return res.render('porGenero', {
            lista: resultado,
            mensaje: `Bandas del género: ${gen}`
        });
    }
};

module.exports = bandasController;