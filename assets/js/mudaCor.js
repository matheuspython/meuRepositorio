let teste;

function molde(elemento, cor, outraCor){
  return  {
    elemento,
    cor,
    outraCor,
    
    muda(teste){
      if(teste == true){
        mudaCor(this.elemento, this.outraCor)
        return
      }
        mudaCor(this.elemento, this.cor)
    }
  }
}


const elementos = [
  molde(document.querySelector('header.header'),'rgb(67, 80, 88)','rgb(141, 182, 207)'),
  molde(document.querySelector('section.topo'),'rgb(22, 21, 21)','rgb(1, 90, 97)'),
]

function mudaCor(element, cor) {
  element.style.background = cor
}



document.addEventListener('click', e => {
  el = e.target
  if(e.target.classList.contains('luz')){
    if(teste == true){
      teste = false
      elementos.forEach(value => value.muda(teste))
      return
    }
    teste = true
    elementos.forEach(value => value.muda(teste))
  }
})

