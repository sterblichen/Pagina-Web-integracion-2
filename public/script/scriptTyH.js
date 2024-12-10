const MonitoreoCadaHora = async ()=>{
    let minimoT = 18;
    let maximoT = 24;
    let maximoH = 100;
    let Temperatura = Math.floor(Math.random()*(maximoT - minimoT +1))+ minimoT;
    let Humedad = Math.floor(Math.random()*((maximoH/10)+1))* 10;
    const Fecha = new Date();
    const FechaAhora = Fecha.toISOString().slice(0,10);
    const HoraAhora = Fecha.toLocaleTimeString()
    const TyH = {
        temperatura: `${Temperatura}°`,
        humedad: `${Humedad}%`,
        fecha: `${FechaAhora} ${HoraAhora}`
    }
    try{
        const response = await fetch('/AgregarHistorial',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(TyH)
        }) 
        const resultado = await response.json();
        console.log('Respuesta del servidor', resultado);
    }catch(err){
        console.error('Error al enviar los datos');
    }
}
setInterval(MonitoreoCadaHora,3600000);



document.getElementById('TyH').addEventListener('click',()=>{

    let minimoT = -1;
    let maximoT = 40;
    let maximoH = 100;
    let Temperatura = Math.floor(Math.random()*(maximoT - minimoT +1))+ minimoT;
    let Humedad = Math.floor(Math.random()*((maximoH/10)+1))* 10;

    document.getElementById('Temperatura').textContent = `${Temperatura}°`;
    document.getElementById('Humedad').textContent = `${Humedad}%`;
    
});
