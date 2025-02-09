// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let a = document.getElementById("amigo");
    if (a.value != ""){
        amigos.push(a.value);
        a.value = "";
        actualizarLista();
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i<amigos.length;i++){
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}
function sortearAmigo(){
    if (amigos.length != 0){
        let num = Math.floor(Math.random() * amigos.length);
        let res = document.getElementById("resultado");
        res.innerHTML = amigos[num];
    } else {
        alert("No hay amigos para sortear.")
    }
}

