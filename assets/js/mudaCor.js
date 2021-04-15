const muda = document.querySelector('.luz')
let teste;
const elementos = [
  {
    query:document.querySelector('header.header'),
    cor:'rgb(67, 80, 88)',
    outraCor:'rgb(141, 182, 207)',
    
    muda(teste){
      if(teste == true){
        mudaCor(this.query, this.outraCor)
      }else{
        mudaCor(this.query, this.cor)
      }

    }
  }

]

function mudaCor(element, cor) {
  element.style.background = cor
}



document.addEventListener('click', e => {
  el = e.target
  if(el.classList.contains('luz')){
    if(teste == true){
      teste = false
      elementos.forEach(value => {
        value.muda(teste)
       
      })
      return
    }
    teste = true
    elementos.forEach(value =>{
      value.muda(teste)
    })
  }
})

