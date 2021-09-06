const tecnologiasContainer = document.querySelector('#tecnologias')

function criaEl(el, classe) {
  const elemento = document.createElement(el)
  elemento.classList.add(classe)
  return elemento
}

function criaTecnologia(img, tecnologia, texto, alt) {
  const boxTecno = criaEl('div', 'box-tecnologias')
  const imge = criaEl('img', 'img')
  const h2 = criaEl('h2')
  const p = criaEl('p')

  const h2Text = document.createTextNode(tecnologia)
  const pText = document.createTextNode(texto)

  h2.appendChild(h2Text)
  p.appendChild(pText)

  imge.setAttribute('alt',alt)

  imge.src = img
  

  boxTecno.appendChild(imge)
  boxTecno.appendChild(h2)
  boxTecno.appendChild(p)

  tecnologiasContainer.appendChild(boxTecno)
}

let boxes = [
  criaTecnologia('./assets/images/html-5.png','HTML','linguagem de marcação utilizada para criação de paginas web','html'),
  criaTecnologia('./assets/images/css-3.png','CSS', 'uma tecnologia para estilização de paginas web'),
  criaTecnologia('./assets/images/javascript.png','JavaScript', 'uma das maiores linguagens de programação do mundo tem tem como objetivo criação de paginas dinamicas'),
  criaTecnologia('./assets/images/github2.png','Git','sistema de controle de verções usado para desenvolver softweres')
]