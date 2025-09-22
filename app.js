let nomesParticipantes = []; 

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    nomesParticipantes.push(nome);
    console.log(nomesParticipantes);
    
    nomeInput.value = '';

    exibirAmigos();
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';
    
    for (let i = 0; i < nomesParticipantes.length; i++) {
        lista.innerHTML = lista.innerHTML + '<li>' + nomesParticipantes[i] + '</li>';
    }
}


function sortearAmigo() {
    
    if (nomesParticipantes.length < 2) {
        alert('Adicione pelo menos 2 amigos para o sorteio!');
        return; 
    }

    
    let indiceAleatorio = Math.floor(Math.random() * nomesParticipantes.length);

    let nomeSorteado = nomesParticipantes[indiceAleatorio];

    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `O amigo sorteado é: <span>${nomeSorteado}</span>`;
    
}