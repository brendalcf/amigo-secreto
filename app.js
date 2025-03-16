//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo(){
    let nome = document.getElementById('amigo').value.trim();
    if (nome === ''){
       alert ("Por favor, insira um nome");
       return;
    }
amigos.push(nome);
exibirListaDeAmigos();
document.getElementById('amigo').value = '';
}
function exibirListaDeAmigos(){
let listaAmigos = document.getElementById('listaAmigos');
listaAmigos.innerHTML = "";

for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement('li');
item.textContent = amigos[i];
listaAmigos.appendChild(item);
}
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert ("Por favor, adicione um amigo antes de sortear");
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
