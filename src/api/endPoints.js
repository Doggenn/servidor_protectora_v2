const express = require('express')
const router = express.Router();

const { ping } = require('../controllers/pingController')
const { login } = require('../controllers/loginController')
const { getAdopcion } = require('../controllers/getAdopcion')
const { getAsociacion } = require('../controllers/getAsociacion')
const { getEventos } = require('../controllers/getEventos');
const { getFavorito } = require('../controllers/getFavoritos')
const { getFormularioAdopcion } = require('../controllers/getFormularioAdopcion');
const { postFormulario } = require('../controllers/postFormulario')
const { getMascotas } = require('../controllers/getMascotas');
const { getMascota } = require('../controllers/getMascota');
const { getNovedades } = require('../controllers/getNovedades');
const { getPersonalidad } = require('../controllers/getPersonalidad');
const { getPersonalidadid } = require('../controllers/getPersonalidadid');
const { getSalud } = require('../controllers/getSalud');
const { getSaludid } = require('../controllers/getSaludid');
const { getUsuarios } = require('../controllers/getUsuarios');
const { getMapas } = require('../controllers/getMapas');
const { registro } = require('../controllers/registroController')

router.get('/ping', ping);
router.post('/login', login);
router.get('/getAdopcion', getAdopcion);
router.get('/getAsociacion', getAsociacion);
router.get('/getEventos', getEventos);
router.get('/getFavorito', getFavorito);
router.get('/getFormularioAdopcion', getFormularioAdopcion);
router.post('/postFormulario', postFormulario);
router.get('/getMascotas', getMascotas);
router.get('/getMascota/:id', getMascota);
router.get('/getNovedades', getNovedades);
router.get('/getPersonalidad', getPersonalidad);
router.get('/getPersonalidadid/:id', getPersonalidadid);
router.get('/getSalud', getSalud);
router.get('/getSaludid/:id', getSaludid);
router.get('/getUsuarios', getUsuarios);
router.get('/getMapas', getMapas);
router.post('/registro', registro);


module.exports = router;