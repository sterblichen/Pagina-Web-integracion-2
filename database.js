const mysql = require('mysql2/promise');
let conexion;
const MostrarHumedadTemp = async()=>{
    
    try{
        conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'riego2.0'
        });
        console.log('conexion exitosa a la Base de Datos')

        const [Datos] = await conexion.execute('select * from registrohistoricoambiental');
        

        return Datos;

    }catch(err){
        console.log('No se pudo conectar a la Base de Datos',err); 
        return null; 
    }finally{
        if(conexion){
            await conexion.end();
            console.log('Conexion cerrada');
        }
    }

}

const AgregarDIA = async (Datos)=>{
    try{
        conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'riego2.0'
        });
        console.log('conexion exitosa a la Base de Datos')

        const [Registros] = await conexion.execute(`INSERT INTO calendarioderiego(fecha) VALUES(?)`,[Datos.Dia]);
        const DiaID = Registros.insertId;

        const [RegistrosHora] = await conexion.execute(`INSERT INTO horasderiego(hora,duracion,CalendarioDeRiego_id) VALUES(?,?,?)`,[Datos.Hora,Datos.Minutos,DiaID]);


        return true;
    }catch(err){
        console.log('No se pudo conectar a la Base de Datos',err); 
        return null;
    }finally{
        if(conexion){
            await conexion.end();
            console.log('Conexion cerrada');
        }
    }
}

const AgregarHistorial = async(Datos)=>{
    try{
        conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'riego2.0'
        });
        console.log('conexion exitosa a la Base de Datos')

        const Historial = [Datos.humedad, Datos.temperatura, Datos.fecha]
        console.log(Historial);

        const [Registros] = await conexion.execute(`INSERT INTO registrohistoricoambiental (estadoHumedad,estadoTemperatura,horaRevision) VALUES (?,?,?)`,Historial);

    }catch(err){
        console.log('No se pudo conectar a la Base de Datos',err); 
        return null;
    }finally{
        if(conexion){
            await conexion.end();
            console.log('Conexion cerrada');
        }
    }
}

module.exports = {
    MostrarHumedadTemp,
    AgregarDIA,
    AgregarHistorial
}
