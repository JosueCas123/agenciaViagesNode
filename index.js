// cofiguramos express
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';


const app = express();


// Conectar la base datos

db.authenticate()
    .then( () => console.log('base de datos autenticado'))
    .catch(  error => console.log(error))


// definir el puerto
const port = process.env.PORT || 4000

//abilitar Pug
app.set('view engine','pug')

//Obetener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();
})

// Agreagae body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//carpeta publica
app.use(express.static('public'))
//Agregar Router
app.use('/', router);

app.listen( port, () => {
    console.log(`el servidor se sta ejecutando en el ${port}`)
} )