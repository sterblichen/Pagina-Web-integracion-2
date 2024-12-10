function Atras(){
    window.location.href = 'index.html';
}


document.getElementById('Mostrar').addEventListener('click',async ()=>{
    try{
        const response = await fetch('/MostrarAgenda')
        const Datos = await response.json();
        while(document.getElementById('HeadRegistro').firstChild){
            document.getElementById('HeadRegistro').removeChild(document.getElementById('HeadRegistro').firstChild)
        }
        while(document.getElementById('BodyRegistro').firstChild){
            document.getElementById('BodyRegistro').removeChild(document.getElementById('BodyRegistro').firstChild);
        }

        const EtiquetaHead = document.createElement('tr');
        const EtiquetaHeadHora = document.createElement('th');
        const EtiquetaHeadMinutos = document.createElement('th');
        const EtiquetaHeadFecha = document.createElement('th');
        EtiquetaHeadHora.textContent = 'Hora';
        EtiquetaHeadMinutos.textContent = 'Minutos';
        EtiquetaHeadFecha.textContent = 'Fecha';
        EtiquetaHead.appendChild(EtiquetaHeadHora);
        EtiquetaHead.appendChild(EtiquetaHeadMinutos);
        EtiquetaHead.appendChild(EtiquetaHeadFecha);
        document.getElementById('HeadRegistro').appendChild(EtiquetaHead);

        Datos.forEach(valor => {
            const EtiquetaBody = document.createElement('tr');
            const EtiquetaBodyHora = document.createElement('td');
            const EtiquetaBodyMinutos = document.createElement('td');
            const EtiquetaBodyFecha = document.createElement('td');

            EtiquetaBodyHora.textContent = valor.hora;
            EtiquetaBodyMinutos.textContent = valor.duracion;
            EtiquetaBodyFecha.textContent = valor.fecha;

            EtiquetaBody.appendChild(EtiquetaBodyHora);
            EtiquetaBody.appendChild(EtiquetaBodyMinutos);
            EtiquetaBody.appendChild(EtiquetaBodyFecha);
            document.getElementById('BodyRegistro').appendChild(EtiquetaBody);
        });
    }catch(err){
        console.log('Se produjo un error al manejar los datos',err);
    }
})