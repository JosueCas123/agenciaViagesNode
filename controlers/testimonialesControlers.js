import {Testimoniales} from '../models/Testimoniales.js'
const guardarTestimoniales = async( req, res ) => {

    //validar

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: 'el nombre esta vasio'})
    }
    if (correo.trim() === '') {
        errores.push({mensaje: 'el correo esta vasio'})
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: 'el mensaje esta vasio'})
    }

    if (errores.length > 0) {
        //consultar testimonial exixstente
        const testimoniales = await Testimoniales.findAll();
        // Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //agreagr a la base de datos

        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }

    // forma de leer lo que se envia
    console.log(errores)

}

export {
    guardarTestimoniales
}