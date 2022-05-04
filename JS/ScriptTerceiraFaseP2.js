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
    var entrada = prompt("Qual foi o codigo usado pelo HudPadre?\n (Digite a Alternativa)\n a - ASCII \n b - Binario \n c -  ISO 8859 \n d - Unicode \n e - Mainframes IBM");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Qual foi o codigo usado pelo HudPadre?\n (Digite a Alternativa)\n a - ASCII \n b - Binario \n c -  ISO 8859 \n d - Unicode \n e - Mainframes IBM");
    }
    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, ASCII é o codigo certo para desvendar a carta.\nCom a mensagem descriptografada o HudPadre achou o GabsVampirão e exorcizou ele, fazendo com que sua alma fosse limpa do ritual, assim ele foi transformando em humano`)
        window.location.href = "../Fim\ do\ Jogo/fimDoJogo.html";
    }
    else {
        alert(`Você errou, a resposta certa é ASCII\nO HudPadre nunca encontrou o GabsVampirão e foi expulso da igreja quando retornou à ela\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


