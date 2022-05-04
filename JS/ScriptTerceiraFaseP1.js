function verificarEntrada(entrada, listaDasRespostas) {
    if (listaDasRespostas.find(i => (i === entrada.toLowerCase()))) {
        return true
    }
    else {
        return false
    }
}

function verificarResposta(entrada) {
    if (entrada.toLowerCase() === "c") {
        return true
    }
    else {
        return false
    }
}

function entrada() {
    var entrada = prompt("Qual a função que a LetCaçadora precisa usar ?\n (Digite a Alternativa)\n a - .toLowerCase() \n b - .find() \n c - while \n d - isUpper() \n e - .replace()");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Qual a função que a LetCaçadora precisa usar ?\n (Digite a Alternativa) \n a - .toLowerCase() \n b - .find() \n c - while \n d - isUpper() \n e - .replace()");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, while é a resposta certa.\nApós ativar o protocolo de segurança, a LetCaçadora procurou o GabsVampirão e quando encontrou ele, jogou o Console-Alho nele e ele morreu.`)
        window.location.href = "../Fim\ do\ Jogo/fimDoJogo.html";
    }
    else {
        alert(`Você errou, a resposta certa é while.\nO GabsVampirão fugiu e continuou disseminando o caos pelo mundo\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }
}


