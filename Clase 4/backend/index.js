


const express       = require('express');
const app           = express();
const logger        = require('morgan');
var router          = require('express').Router();
const { Client }    = require('pg');

console.log("enviroment: ",process.env.DATABASE_URL)
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

app.use(router);

// inicio del servidor
app.listen(app.get('port'),() => {
    console.log("enviroment: ",process.env.DATABASE_URL)
    console.log(`server running in http://localhost:${app.get('port')}`);
});