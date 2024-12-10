function Atras(){
    window.location.href = 'index.html';
}

document.getElementById('Registros').addEventListener('click',async()=>{
    try{
        const response = await fetch('/RegistroHistorico');
        const Datos = await response.json();

        while(document.getElementById('HeadRegistro').firstChild){
            document.getElementById('HeadRegistro').removeChild(document.getElementById('HeadRegistro').firstChild);
        }
        while(document.getElementById('BodyRegistro').firstChild){
            document.getElementById('BodyRegistro').removeChild(document.getElementById('BodyRegistro').firstChild);
        }
        const EtiquetaHead = document.createElement('tr');
        const EtiquetaRowid = document.createElement('th');
        const EtiquetaRowEstadoHumedad = document.createElement('th');
        const EtiquetaRowEstadoTemperatura = document.createElement('th');
        const EtiquetaRowHoraRevision = document.createElement('th');
        EtiquetaRowid.textContent = 'ID';
        EtiquetaRowEstadoHumedad.textContent = 'Humedad';
        EtiquetaRowEstadoTemperatura.textContent = 'Temperatura';
        EtiquetaRowHoraRevision.textContent = 'Hora';
        EtiquetaHead.appendChild(EtiquetaRowid);
        EtiquetaHead.appendChild(EtiquetaRowEstadoHumedad);
        EtiquetaHead.appendChild(EtiquetaRowEstadoTemperatura);
        EtiquetaHead.appendChild(EtiquetaRowHoraRevision);
        document.getElementById('HeadRegistro').appendChild(EtiquetaHead);

        Datos.forEach(valor => {
            const EtiquetaBody = document.createElement('tr');
            const EtiquetaRowid = document.createElement('td');
            const EtiquetaRowEstadoHumedad = document.createElement('td');
            const EtiquetaRowEstadoTemperatura = document.createElement('td');
            const EtiquetaRowHoraRevision = document.createElement('td');
            EtiquetaRowid.textContent = valor.id;
            EtiquetaRowEstadoHumedad.textContent = valor.estadoHumedad;
            EtiquetaRowEstadoTemperatura.textContent = valor.estadoTemperatura;
            EtiquetaRowHoraRevision.textContent = valor.horaRevision;
            EtiquetaBody.appendChild(EtiquetaRowid);
            EtiquetaBody.appendChild(EtiquetaRowEstadoHumedad);
            EtiquetaBody.appendChild(EtiquetaRowEstadoTemperatura);
            EtiquetaBody.appendChild(EtiquetaRowHoraRevision);
            document.getElementById('BodyRegistro').appendChild(EtiquetaBody);
        });
    }catch(err){
        console.log('Se produjo un error al manejar los datos',err)
    }
})