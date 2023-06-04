//JSON PARA MOSTRAR O VIDEO NA TELA DE FUNDO SOBRE INVESTIMENTOS

let backVideo = document.getElementById("backVideo");
let btn = document.getElementById("btn");

btn.onclick = function(){
    backVideo.style.display = "block";

    if(backVideo.paused){
        backVideo.play();
        btn.src = "img/pause.png";
    }
    else{
        backVideo.pause();
        btn.src = "img/play.png";

    }
}