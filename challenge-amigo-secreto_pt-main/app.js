//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo) {
        let listaAmigos = document.getElementById("listaAmigos");

        let li = document.createElement("li");

        li.textContent = amigo;

        listaAmigos.appendChild(li);

        document.getElementById("amigo").value = "";

        console.log(" Amigo " + amigo + " adicionado ");
    } else {
        alert ("Por favor insira um nome!");
    }

    
}

function sortearAmigo(){
    let listaAmigos = document.getElementById("listaAmigos").getElementsByTagName("li");
    numeroAmigos=listaAmigos.length;
    console.log(numeroAmigos);

    if (numeroAmigos > 0){
        let numeroSorteado = Math.floor(Math.random()* numeroAmigos);

        let amigoSorteado = listaAmigos[numeroSorteado].textContent;

        let resultado = document.getElementById("resultado");

        resultado.innerHTML = "Amigo Secreto Sorteado: " + amigoSorteado;

        console.log("Amigo Secreto Sorteado: " + amigoSorteado);
    } else {
        alert("Adicione pelo menos um amigo a lista");
    }
}

