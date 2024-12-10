const Agenda = document.getElementById('FormularioRiego');
document.getElementById('Agendar').addEventListener('click',async ()=>{
    const Riego = new FormData(Agenda);
    const ValorRiego = {};
    Riego.forEach((Valor,llave) => {
        ValorRiego[llave] = Valor;
    });
    console.log(ValorRiego)
    try{
        const response = await fetch('/AgendaRiego',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ValorRiego),
        });

        const resultado = await response.json()
        console.log('Respuesta del servidor', resultado);
    }catch(err){
        console.error('Error al enviar los datos', err)
    }
});