var containerProjetos = document.querySelector('.container-projetos')

function criaProjeto(img, texto) {
    let criaBox = document.createElement('div')
    let imge = 'url(' + '"' + img + '"' + ')'
    let imagem = document.createElement('img')
    imagem.setAttribute('src', imge)

    criaBox.appendChild(imagem)

    containerProjetos.appendChild(criaBox)
}
criaProjeto('assets/images/rmVeiculos.png', 'pagina do insta que criei')