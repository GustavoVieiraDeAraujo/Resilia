function verificarEntrada(entrada, listaDasRespostas) {
    if (listaDasRespostas.find(i => (i === entrada.toLowerCase()))) {
        return true
    }
    else {
        return false
    }   
}

function verificarResposta(entrada) {
    if (entrada.toLowerCase() === "b") {
        return true
    }
    else {
        return false
    }
}

function entrada() {
    var entrada = prompt("O que é, o que é?Você tira a minha pele.Eu não choro.Você, sim?\n (Digite a Alternativa)\n a - alho \n b - cebola \n c - laranja \n d - abacaxi \n e - limão");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("O que é, o que é?Você tira a minha pele.Eu não choro.Você, sim?\n (Digite a Alternativa)\n a - alho \n b - cebola \n c - laranja \n d - abacaxi \n e - limão");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, cebola é a resposta da charada.\nCom sua ajuda o HudPadre conseguiu avançar para proxima armadilha.`)
        window.location.href = "../Segunda\ Fase/SegundaFaseP2.html";
    }
    else {
        alert(`Você errou, a resposta certa é cebola.\nO HudPadre não conseguiu encontrar o GabsVampirão e foi expulso da igreja\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


