//Sistema de Seleção

document.getElementById("codificaOuDecodifica").addEventListener("click", function () {
    var select= document.getElementById('opções');
    var option = select.options[select.selectedIndex];
    
    if (option.value === "Cifra de Cesar") {
        if (document.getElementById('html').checked == true) {
            document.getElementById("CifraDeCesarCodifica").className = "flex-div"
            document.getElementById("CifraDeCesarDecodifica").className = "display-none"
            document.getElementById("Base64Decodifica").className = "display-none"
            document.getElementById("Base64Codifica").className = "display-none"
        } else if (document.getElementById('css').checked == true) {
            document.getElementById("CifraDeCesarDecodifica").className = "flex-div"
            document.getElementById("CifraDeCesarCodifica").className = "display-none"
            document.getElementById("Base64Decodifica").className = "display-none"
            document.getElementById("Base64Codifica").className = "display-none"
        }
    } else if (option.value === "Base64") {
        if (document.getElementById('html').checked == true) {
            document.getElementById("Base64Codifica").className = "flex-div"
            document.getElementById("Base64Decodifica").className = "display-none"
            document.getElementById("CifraDeCesarDecodifica").className = "display-none"
            document.getElementById("CifraDeCesarCodifica").className = "display-none"
        } else if (document.getElementById('css').checked == true) {
            document.getElementById("Base64Decodifica").className = "flex-div"
            document.getElementById("Base64Codifica").className = "display-none"
            document.getElementById("CifraDeCesarDecodifica").className = "display-none"
            document.getElementById("CifraDeCesarCodifica").className = "display-none"
        }
    }
})

//Cifra de Cesar (codificação)

document.getElementById("codificarCifraDeCesar").addEventListener("click", function (event) { event.preventDefault()})
document.getElementById("codificarCifraDeCesar").addEventListener("click", function () {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
    var mensagem = entradaCifraDeCesarCodifica.value
    var mensagemCodificada = []
    for (var i = 0; i < mensagem.length; i++){
        if (mensagem[i] === " ") {
            mensagemCodificada.push(mensagemCodificada[i])
        }
        else if ((mensagem[i].toLowerCase().charCodeAt() + Number(document.getElementById("deslocamentoCodifica").value)) > 122) {
            if (mensagem[i] !== mensagem[i].toLowerCase()) {
                var ASCII = 65 + Number(document.getElementById("deslocamentoCodifica").value) - (123 - mensagem[i].toLowerCase().charCodeAt())
                mensagemCodificada.push(String.fromCharCode(ASCII))
            } else {
                mensagemCodificada.push(String.fromCharCode(97 + Number(document.getElementById("deslocamentoCodifica").value) - (123 - mensagem[i].toLowerCase().charCodeAt())))
            }
        } else {
            var letraEmAsciiCodificada = mensagem[i].charCodeAt() + Number(document.getElementById("deslocamentoCodifica").value)
            mensagemCodificada.push(String.fromCharCode(letraEmAsciiCodificada))
        }
    }
    console.log(mensagemCodificada)
    for (var j = 0; j < mensagemCodificada.length; j++) {
        if (mensagemCodificada[j] !== undefined) {
            if (alfabeto.includes(mensagemCodificada[j].toLowerCase())) {
                /* pass */
            } else {
                mensagemCodificada.splice(mensagemCodificada.indexOf(mensagemCodificada[j]), 1);
            } 
        } else {
            mensagemCodificada[j]= " "
        }
    }
    document.getElementById("saidaCifraDeCesarCodifica").setAttribute("placeholder", mensagemCodificada.join(""))
})

//Cifra de Cesar (decodificação)

document.getElementById("decodificarCifraDeCesar").addEventListener("click", function (event) { event.preventDefault() })
document.getElementById("decodificarCifraDeCesar").addEventListener("click", function () {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
    var mensagem = entradaCifraDeCesarDecodifica.value
    var mensagemCodificada = []
    for (var i = 0; i < mensagem.length; i++) {
        if (mensagem[i] === " ") {
            mensagemCodificada.push(mensagemCodificada[i])
        }
        else if ((mensagem[i].toLowerCase().charCodeAt() - Number(document.getElementById("deslocamentoDecodifica").value) < 97)) {
            if (mensagem[i] !== mensagem[i].toLowerCase()) {
                var ASCII = 91 - Number(document.getElementById("deslocamentoDecodifica").value) + (mensagem[i].toLowerCase().charCodeAt()-97)
                mensagemCodificada.push(String.fromCharCode(ASCII))
            }else {
                mensagemCodificada.push(String.fromCharCode(123 - Number(document.getElementById("deslocamentoDecodifica").value) + (mensagem[i].toLowerCase().charCodeAt() - 97)))
            }
        } else {
            var letraEmAsciiCodificada = mensagem[i].charCodeAt() - Number(document.getElementById("deslocamentoDecodifica").value)
            mensagemCodificada.push(String.fromCharCode(letraEmAsciiCodificada))
        }
    }
    for (var j = 0; j < mensagemCodificada.length; j++) {
        if (mensagemCodificada[j] !== undefined) {
            if (alfabeto.includes(mensagemCodificada[j].toLowerCase())) {
                /* pass */
            } else {
                mensagemCodificada.splice(mensagemCodificada.indexOf(mensagemCodificada[j]), 1);
            }
        } else {
            mensagemCodificada[j] = " "
        }
    }
    document.getElementById("saidaCifraDeCesarDecodifica").setAttribute("placeholder", mensagemCodificada.join(""))
})

//Base64(codificação)

document.getElementById("codificarBase64").addEventListener("click", function (event) { event.preventDefault() })
document.getElementById("codificarBase64").addEventListener("click", function () {
    document.getElementById("saidaBase64Codifica").setAttribute("placeholder", btoa(entradaBase64Codifica.value))
})


//Base64(decodificação)

document.getElementById("decodificarBase64").addEventListener("click", function (event) { event.preventDefault() })
document.getElementById("decodificarBase64").addEventListener("click", function () {
    document.getElementById("saidaBase64Decodifica").setAttribute("placeholder", atob(entradaBase64Decodifica.value))
})



