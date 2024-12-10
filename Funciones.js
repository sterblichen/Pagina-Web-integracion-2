const {MostrarHumedadTemp,AgregarHistorial,AgregarDIA,MostrarAgenda} = require('./database');

const TransformarAJSON = async ()=>{
    const Registros = await MostrarHumedadTemp();
    return Registros;
}


const MonitoreoCadaHora = async ()=>{
    let minimoT = 18;
    let maximoT = 24;
    let maximoH = 100;
    let Temperatura = Math.floor(Math.random()*(maximoT - minimoT +1))+ minimoT;
    let Humedad = Math.floor(Math.random()*((maximoH/10)+1))* 10;
    const Fecha = new Date();
    const FechaAhora = Fecha.toISOString().slice(0,10);
    const HoraAhora = Fecha.toLocaleTimeString('es-CL',{hour12:false});
    const TyH = {
        temperatura: `${Temperatura}°`,
        humedad: `${Humedad}%`,
        fecha: `${FechaAhora} ${HoraAhora}`
    }
    try{
        if(Object.keys(TyH).length != 0){
            if(TyH.temperatura.length != 0 && TyH.humedad.length != 0 && TyH.fecha.length != 0){
                await AgregarHistorial(TyH);
                console.log('Monitoreo Agregado')
            }else{
                console.log('Monitoreo No fue agregado')
            }
        }else{
            console.log('Monitoreo No fue agregado')
        }
    }catch(err){
        console.log('Error', err)
    }
}

const VerificarAgenda =async (Datos)=>{
    if(Object.keys(Datos).length != 0){
        if(Datos.Dia.length != 0 && Datos.Hora.length != 0 && Datos.Minutos.length != 0){
            const Veri = await AgregarDIA(Datos);
            return Veri;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

const VerificarRegistrosAgenda = async()=>{
    const Registros = await MostrarAgenda();
    if(Registros.length != 0 && Registros != null){
        return Registros;
    }else{

        return false;
    }
}

module.exports ={
    TransformarAJSON,
    MonitoreoCadaHora,
    VerificarAgenda,
    VerificarRegistrosAgenda
}