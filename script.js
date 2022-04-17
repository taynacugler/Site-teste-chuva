function leiaMais () {
    var pontos=document.getElementById ("pontos");
    var maisTexto=document.getElementById ("mais");
    var botaoleiamais=document.getElementById("botaoleiamais");

    if (pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        botaoleiamais.innerHTML="ver mais";
    }
    else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        botaoleiamais.innerHTML="ver menos";
    }
}