const {MostrarHumedadTemp,AgregarHistorial,AgregarDIA} = require('./database');

const TransformarAJSON = async ()=>{
    const Registros = await MostrarHumedadTemp();
    return Registros;
}

const VerificarAgregadoHistorial =  async(Datos)=>{
    if(Object.keys(Datos).length > 0){
        if(Datos.temperatura.length != 0 && Datos.humedad.length != 0){
            await AgregarHistorial(Datos);
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}





module.exports ={
    TransformarAJSON,
    VerificarAgregadoHistorial
}