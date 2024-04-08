const express = require('express');
const router = express.Router();

const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.index);
router.get('/:id', bandasController.detalleId);
router.get('/genero/:genero', bandasController.genero);

module.exports = router;