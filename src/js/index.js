const sliders = document.querySelectorAll(".fundo")

sliders.forEach(verificaComecoFim)

function verificaComecoFim(item,index,array){
    if (index == 0){
        const setaEsquerda = document.querySelector(".seta-esquerda")
        setaEsquerda.classList.add("seta-extrema")
    } else if (index == array.length-1){
        const setaDireita = document.querySelector(".seta-direita")
        setaDireita.classList.add("seta-extrema")
    }
}

const setas = document.querySelectorAll(".seta")

setas.forEach(verificaSetaValida)

function verificaSetaValida(item,index,array){
    if (!item.classList.contains("seta-extrema")){
        item.addEventListener("click",passarSlider)
    }
}

function passarSlider(){
    console.log ("teste")
}