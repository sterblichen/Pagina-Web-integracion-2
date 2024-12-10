const {TransformarAJSON,VerificarAgregadoHistorial} = require('./Funciones')
const {AgregarDIA} = require('./database')

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));



app.get('/PaginaInicio',async (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    
});

app.get('/RegistroHistorico',async(req,res)=>{
    const Registros = await TransformarAJSON();

    if(Registros.length === 0){
        res.status(400).send('No se encontraron Datos')
    }else{
        res.json(Registros);
        console.log(Registros);
    }
});

app.post('/AgendaRiego',async (req,res)=>{
    const Datos = req.body;
    console.log(Datos);
    const Registros = await AgregarDIA(Datos);
    res.json({mensaje: 'Datos recibidos'})
})

app.post('/AgregarHistorial',async (req,res)=>{
    const Datos = req.body;
    const Registros = await VerificarAgregadoHistorial(Datos)
    if(Registros == true){
        res.status(200).json({mensaje: 'Datos recibidos'})
    }else{
        res.status(400).json({mensaje: 'Datos no registrados'})
    }
    
})



















app.listen(3000,()=>{
    console.log('Se levanto el servidor en el puerto http://localhost:3000');
});

