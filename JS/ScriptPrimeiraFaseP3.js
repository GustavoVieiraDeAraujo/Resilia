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
    var entrada = prompt("Se você olhar para o mim, não encontrará treze em nenhum lugar.Quem eu sou ?\n (Digite a Alternativa)\n a - tabuada \n b - livro de C++ \n c - tabela ASCII \n d - sequencia de Finbonacci \n e - relogio");
    let listaDasRespostas = ["a", "b", "c", "d", "e"];
    while (verificarEntrada(entrada, listaDasRespostas) === false) {
        alert("Essa opção é inválida, por favor digite uma opção valida");
        var entrada = prompt("Se você olhar para o mim, não encontrará treze em nenhum lugar.Quem eu sou ?\n (Digite a Alternativa)\n a - tabuada \n b - livro de C++ \n c - tabela ASCII \n d - sequencia de Finbonacci \n e - relogio");
    }

    if (verificarResposta(entrada) === true) {
        alert(`Você acertou, relogio não tem o numero 13 nele,\nA isaPistoleira foi libertada de uma ilusão , restam duas agora ...`)
        window.location.href = "../Segunda\ Fase/SegundaFaseP3.html";
    }
    else {
        alert(`Você errou, a resposta certa é relogio\nA isaPistoleira ficou presa eternamente na ilusão, enquanto o GabsVampirão cultiva o mal no mundo`)
        window.location.href = "../Game\ Over/GameOver.html";
    }

}


