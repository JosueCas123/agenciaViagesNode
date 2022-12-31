import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje} from '../controlers/paginasControlers.js'

import {guardarTestimoniales} from '../controlers/testimonialesControlers.js';

const router = express.Router();
//ROUTING O CONTROLADOR DEFINE LO SE MOSTRARA Y Q VISTA SE MOSTRARA

router.get('/',paginaInicio )

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)
// comodines para accerder a otras paginas
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimoniales )

export default router;