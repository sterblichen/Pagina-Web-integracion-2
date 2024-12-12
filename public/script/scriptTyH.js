function Atras(){
    window.location.href = 'index.html';
}
const Datos = document.getElementById('TyH').addEventListener('click',()=>{

    let minimoT = 18;
    let maximoT = 24;
    let maximoH = 100;
    let Temperatura = Math.floor(Math.random()*(maximoT - minimoT +1))+ minimoT;
    let Humedad = Math.floor(Math.random()*((maximoH/10)+1))* 10;

    const Registro = [Temperatura,Humedad]; 

    document.getElementById('Temperatura').textContent = `${Temperatura}°`;
    document.getElementById('Humedad').textContent = `${Humedad}%`;
    if(Temperatura > 24){
        window.alert('La temperatura es elevada, revise las orquideas;')
    }else if(Temperatura < 18){
        window.alert('La temperatura es baja, revise las orquideas');
    }else if(Humedad > 80){
        window.alert('La humedad esta elevada, revise las orquideas');
    }else if(Humedad < 60){
        window.alert('La humedad esta baja, revise las orquideas')
    }else{
        console.log('ta bien')
    }
});

