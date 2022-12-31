import {Viajes} from '../models/Viajes.js'
import {Testimoniales} from '../models/Testimoniales.js';

const paginaInicio =  async(req, res) => { // req -lo que enviamos : res - lo que express responde

    //consultar 3 viajes

    const promiseDB = [];

    promiseDB.push(Viajes.findAll({limit:3}))
    promiseDB.push(Testimoniales.findAll({limit:3}))
    try {
        
        const resultado = await Promise.all(promiseDB)


        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes:resultado[0],
            testimoniales:resultado[1]
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros =  (req, res) => {
    res.render('nosotros',{
        pagina:'Nosotros'
    });
} 

const paginaViajes = async (req,res) => {

    //Consulta a la DB

    const viajes = await Viajes.findAll();
    console.log(viajes);

    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes:viajes
    })
}

const paginaTestimoniales = async(req,res) => {

    try {

        const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales',{
            pagina: 'testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res ) => {
    const {slug} = req.params
    //console.log(viaje)
    try {
        const viaje = await Viajes.findOne( {where: {slug}} )

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}   

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}