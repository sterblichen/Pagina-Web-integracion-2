const {TransformarAJSON,VerificarAgenda,MonitoreoCadaHora,VerificarRegistrosAgenda} = require('./Funciones')

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

setInterval(MonitoreoCadaHora,3600000)


app.get('/PaginaInicio',async (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
    
});

app.get('/RegistroHistorico',async(req,res)=>{
    const Registros = await TransformarAJSON();

    if(Registros.length === 0){
        res.status(500).send('No se encontraron Datos')
    }else{
        res.json(Registros);
    }
});

app.post('/AgendaRiego',async (req,res)=>{
    const Datos = req.body;
    const Registros = await VerificarAgenda(Datos);
    if(Registros == true){
        res.status(200).json({mensaje: 'Datos recibidos'})
    }else{
        res.status(400).json({mensaje: 'Datos no recibidos'})
    }
    
});

app.get('/MostrarAgenda',async (req,res)=>{
    const Registros = await VerificarRegistrosAgenda();

    if(Registros == false){
        res.status(500).json({mensaje: 'datos no pudieron ser enviados'})

    }else{
        res.status(200).json(Registros);

    }
});


















app.listen(3000,()=>{
    console.log('Se levanto el servidor en el puerto http://localhost:3000');
});

