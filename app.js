const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome !== "") {
        listaAmigos.push(nome);
        atualizarLista();
        input.value = ""; 
    }
}

function capturarEnter(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    listaAmigos.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nomeSorteado = listaAmigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}

function limparLista() {
    listaAmigos.length = 0;
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

document.getElementById("amigo").addEventListener("keydown", capturarEnter);
