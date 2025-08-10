//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // limpa o campo
    input.focus();
}

// Atualiza a lista exibida no HTML
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes de recriar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}