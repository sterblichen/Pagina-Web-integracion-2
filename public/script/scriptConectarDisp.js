function Atras(){
    window.location.href = 'index.html';
}

document.getElementById('Conectar').addEventListener('click',()=>{
    document.getElementById('limpiador').reset();
    document.getElementById('LabelConect').textContent = 'Conectado';
})
document.getElementById('Desconectar').addEventListener('click',()=>{
    document.getElementById('LabelConect').textContent = 'Desconectado';
})

