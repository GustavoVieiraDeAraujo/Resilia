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
    var entrada = prompt("Se 11 + 2 é igual a 1, quanto é 9 + 5?\n (Digite a Alternativa)\n a - 4 \n b - 95 \n c - 14 \n d - 2 \n e - 7");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Se 11 + 2 é igual a 1, quanto é 9 + 5?\n (Digite a Alternativa)\n a - 4 \n b - 95 \n c - 14 \n d - 2 \n e - 7");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, 2 é a reposta certa.\nCom sua ajuda a IsaPistoleira foi libertada das ilusões e conseguiu capturar o GabsVampirão e tortura-lo pelas suas maldades`)
        window.location.href = "../Fim\ do\ Jogo/fimDoJogo.html";
    }
    else {
        alert(`Você errou, a resposta certa é 2\nA IsaPistoleira ficou presa eternamente na ilusão, enquanto o GabsVampirão dissemina o mal no mundo\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


