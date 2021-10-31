


const express       = require('express');
const app           = express();
const logger        = require('morgan');
var router          = require('express').Router();
const { Client }    = require('pg');

//Conexion a base de datos
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
});

try {
    client.connect().then( result => {
        console.log("Conectado a la base de datos")
    }).catch(error => {
        console.log("Error al conectar con base de datos")
    });
} catch (error) {
    console.log(error)
}

//Configuracion del servidor
app.set('port', process.env.PORT || 8081);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin); //cambia esto 
    res.header("Access-Control-Allow-Headers", "x-requested-with, content-type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


// rutas del servidor
router.post('/comment', async (req, res, next) => {
    try {
        let result = await client.query('INSERT INTO public.comment (comment) VALUES ($1) returning comment.id', [
            req.body.comment
        ]).then(result =>  result.rows[0]);

        res.status(200).json(result)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Error al insertar"})
    }
});

router.get('/comment', async (req, res, next) => {
    try {
        let result = await client.query('select * from public.comment').then(result =>  result.rows);
        res.status(200).json(result)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:"Error al traer la lista"})
    }
});


router.get('/', async (req, res, next) => {
    res.status(200).send("Hola Mundo!")
});

app.use(router);

// inicio del servidor
app.listen(app.get('port'),() => {
    console.log(`server running in http://localhost:${app.get('port')}`);
});