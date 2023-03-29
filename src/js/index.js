const sliders = document.querySelectorAll(".fundo")

sliders.forEach(verificaComecoFim)

function verificaComecoFim(item,index,array){
    if (index == 0){
        const setaEsquerda = document.querySelector(".seta-esquerda")
        setaEsquerda.classList.add("seta-extrema")
    } else if (index == array.length-1){
        const setaDireita = document.querySelectorAll(".seta-direita")[index]
        setaDireita.classList.add("seta-extrema")
    }
}

const setas = document.querySelectorAll(".seta")
const setasEsquerda=document.querySelectorAll(".seta-esquerda")
const setasDireita=document.querySelectorAll(".seta-direita")

setas.forEach(verificaSetaValida)

function verificaSetaValida(item,index,array){
    if (!item.classList.contains("seta-extrema")){
        item.addEventListener("click",passarSlide)
    }
}

function passarSlide(evento){
    const arrayEsquerda = Array.from(setasEsquerda)
    const arrayDireita = Array.from(setasDireita)
    if (arrayEsquerda.includes(evento.target)){
        const indice = arrayEsquerda.indexOf(evento.target)
        sliders[indice].classList.add("voltar")
        sliders[indice].classList.remove("passar")
    } else{
        const indice = arrayDireita.indexOf(evento.target)
        sliders[indice+1].classList.add("passar") 
        sliders[indice+1].classList.remove("voltar")
    }
}