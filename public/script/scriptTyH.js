function Atras(){
    window.location.href = 'index.html';
}
document.getElementById('TyH').addEventListener('click',()=>{

    let minimoT = 18;
    let maximoT = 24;
    let maximoH = 100;
    let Temperatura = Math.floor(Math.random()*(maximoT - minimoT +1))+ minimoT;
    let Humedad = Math.floor(Math.random()*((maximoH/10)+1))* 10;

    document.getElementById('Temperatura').textContent = `${Temperatura}°`;
    document.getElementById('Humedad').textContent = `${Humedad}%`;
    
});
