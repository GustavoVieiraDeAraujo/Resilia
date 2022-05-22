$(document).ready(function () {
    $("#recarregar").click(function () {
        location.reload(true)
    })
})

$("#enviar").click(function (event) { event.preventDefault() })
$("#enviar").click(function () {
    if ($("input").val() === "")
        alert("Escolha uma data")
    else {
        $.ajax({
            url:`https://api.nasa.gov/planetary/apod?api_key=Zgy8s5AULf9FIFqecT5GwYboMQbrosfMRLNO9sAS&date=${$("input").val()}`,
            success(JSON) {
                $("#p-1").addClass("display-none")
                $("#h3-1").addClass("display-none")
                $("#h3-2").addClass("display-none")
                $("#h3-3").removeClass("display-none")
                $("#h3-3").text(JSON.title)
                $("input").addClass("display-none")
                $("#enviar").addClass("display-none")
                $("#recarregar").removeClass("display-none")
                $("p").text(JSON.explanation)
                $("title").text(JSON.title)
                $("h2").text(`Image Credit and Copyright: ${JSON.copyright}`)
                if (JSON.media_type === "video") {
                    $("iframe").attr("src", JSON.url)
                    $("iframe").removeClass("display-none")
                    $("figure").addClass("display-none")
                } else {
                    $("img").attr('src', JSON.url)
                    $("figure").removeClass("display-none")
                    $("iframe").addClass("display-none")
                }
            }
        })
    }
})