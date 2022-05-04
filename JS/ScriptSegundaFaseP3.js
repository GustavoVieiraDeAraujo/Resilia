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
    var entrada = prompt("O que é, o que é?Quanto mais disso há, menos você vê?\n (Digite a Alternativa) \n a - maldade \n b - egoismo \n c - escuridão \n d - raiva \n e - crueldade");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("O que é, o que é?Quanto mais disso há, menos você vê?\n (Digite a Alternativa) \n a - maldade \n b - egoismo \n c - escuridão \n d - raiva \n e - crueldade");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, escuridão é a resposta certa.\nA IsaPistoleira foi libera de mais uma ilusão, agora so resta uma.`)
        window.location.href = "../Terceira\ Fase/TerceiraFaseP3.html";
    }
    else {
        alert(`Você errou, a resposta certa é relogio\nA IsaPistoleira ficou presa eternamente na ilusão, enquanto o GabsVampirão dissemina o mal no mundo\nTente Novamente`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


