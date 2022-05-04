function verificarEntrada(entrada, listaDasRespostas) {
    if (listaDasRespostas.find(i => (i === entrada.toLowerCase()))) {
        return true
    }
    else {
        return false
    }
}

function verificarResposta(entrada) {
    if (entrada.toLowerCase() === "d") {
        return true
    }
    else {
        return false
    }
}

function entrada() {
    var entrada = prompt("Quantos gatos tem na sala?\n (Digite a Alternativa)\n a - 2 \n b - 16 \n c - 6 \n d - 4 \n e - 8");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Quantos gatos tem na sala?\n (Digite a Alternativa) \n a - 2 \n b - 16 \n c - 6 \n d - 4 \n e - 8");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, tem 4 gatos na sala.\nVoce ajudou a LetCaçadora a escapar da armadilha.`)
        window.location.href = "../Terceira\ Fase/TerceiraFaseP1.html";
    }
    else {
        alert(`Você errou, a resposta certa é 4.\nA LetCaçadora morreu furada pelos espinhos.\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


