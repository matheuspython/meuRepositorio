const tecnologiasContainer = document.querySelector('#tecnologias')

function criaEl(el, classe) {
  const elemento = document.createElement(el)
  elemento.classList.add(classe)
  return elemento
}

function criaTecnologia(img, tecnologia, texto) {
  const boxTecno = criaEl('div', 'box-tecnologias')
  const imge = criaEl('img', 'img')
  const h2 = criaEl('h2')
  const p = criaEl('p')

  const h2Text = document.createTextNode(tecnologia)
  const pText = document.createTextNode(texto)

  h2.appendChild(h2Text)
  p.appendChild(pText)

  imge.style.background = `url('${img}')`
  

  boxTecno.appendChild(imge)
  boxTecno.appendChild(h2)
  boxTecno.appendChild(p)

  tecnologiasContainer.appendChild(boxTecno)
}

let boxes = [
  criaTecnologia('https://www.flaticon.com/svg/static/icons/svg/1051/1051277.svg','HTML','linguagem de marcação utilizada para criação de paginas web'),
  criaTecnologia('https://www.flaticon.com/svg/static/icons/svg/732/732190.svg','CSS', 'uma tecnologia para estilização de paginas web'),
  criaTecnologia('https://www.flaticon.com/svg/static/icons/svg/919/919828.svg','JavaScript', 'uma das maiores linguagens de programação do mundo tem tem como objetivo criação de paginas dinamicas'),
  criaTecnologia('https://www.flaticon.com/svg/static/icons/svg/733/733553.svg','Git','sistema de controle de verções usado para desenvolver softweres')
]