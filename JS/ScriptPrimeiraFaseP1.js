function verificarEntrada(entrada, listaDasRespostas) {
    if (listaDasRespostas.find(i => (i === entrada.toLowerCase()))) {
        return true
    }
    else {
        return false
    }   
}

function verificarResposta(entrada) {
    if (entrada.toLowerCase() === "a") {
        return true
    }
    else {
        return false
    }
}

function entrada() {
    var entrada = prompt("Qual a maior invenção criada pelo homem?\n (Digite a Alternativa)\n a - Pote \n b - Roda \n c - Escrita \n d - Eletricidade \n e - Motores");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Qual a maior fraqueza de um Vampiro?\n (Digite a Alternativa) \n a - Pote \n b - Roda \n c - Escrita \n d - Eletricidade \n e - Motores");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, pote é a maior criação do ser humano.\nAgora a LetCaçadora pode entrar no esconderijo secreto.`)
        window.location.href = "../Segunda\ Fase/SegundaFaseP1.html";
    }
    else {
        alert(`Você errou, a resposta certa é pote.\nO GabsVampirão conseguiu escapar, para continuar disseminando o mal na Terra\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


