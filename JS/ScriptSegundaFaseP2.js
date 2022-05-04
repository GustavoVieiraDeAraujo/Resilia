function verificarEntrada(entrada, listaDasRespostas) {
    if (listaDasRespostas.find(i => (i === entrada.toLowerCase()))) {
        return true
    }
    else {
        return false
    }   
}

function verificarResposta(entrada) {
    if (entrada.toLowerCase() === "e") {
        return true
    }
    else {
        return false
    }
}

function entrada() {
    var entrada = prompt("Qual o proximo numero da sequencia 291, 296, 302, 309, 317, ...?\n (Digite a Alternativa)\n a - 330 \n b - 326 \n c - 325 \n d - 324 \n e - 329");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Qual o proximo numero da sequencia 291, 296, 302, 309, 317, ...?\n(Digite a Alternativa) \n a - 330 \n b - 326 \n c - 325 \n d - 324 \n e - 329");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, 329 é o proximo numero da sequencia.\nGraças a sua ajuda o HudPadre conseguiu passar a ponte em segurança e chegar na armadilha final.`)
        window.location.href = "../Terceira\ Fase/TerceiraFaseP2.html";
    }
    else {
        alert(`Você errou, a resposta certa é 329.\nO HudPadre caiu enquanto estava atravessando a ponte.\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


