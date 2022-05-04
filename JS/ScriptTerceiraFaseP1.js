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
        alert(`Você acertou, While é uma função que executa um codigo N vezes até uma condição ser cumprida.\nApós ativar o protocolo de segurança, a LetCaçadora procurou o GabsVampirão e quando encontrou ele, jogou o Console-Alho nele e ele morreu.`)
        window.location.href = "../Fim\ do\ Jogo/fimDoJogo.html";
    }
    else {
        alert(`Você errou, a resposta certa é While.\nO GabsVampirão fugiu e continuara disseminando o caos pelo mundo`)
        window.location.href = "../Game\ Over/GameOver.html";
    }
}


