const containerProjetos = document.querySelector('.container-projetos')


function criaProjeto(img, texto, linkVercel, linkGithub) {
    return(`<div class="container-projeto">
    <a target="_blanck" href="${linkVercel}">
        <div style="background:url('${img}');background-size:cover;background-position:center;" class="img-projeto">
        </div>
    </a>
    
    <p>${texto}</p>
   
    <a title="link para ${texto}" target="_blanck" href="${linkGithub}">repositorio</a>
</div>`)
}

containerProjetos.innerHTML += criaProjeto('assets/images/gitHub.png', 'clone da tela de login do gitHub', 'https://clone-login-github-git-master.matheuspython.vercel.app/indexis', 'https://github.com/matheuspython/clone-login-github')

containerProjetos.innerHTML += criaProjeto('assets/images/insta.png', 'clone da tela de login do instagram', 'https://clone-instagram-login.matheuspython.vercel.app/indexis', 'https://github.com/matheuspython/clone-instagram-login')

containerProjetos.innerHTML += criaProjeto('assets/images/rmVeiculos.png', 'site de venda de veiculos', 'https://site-para-portifolio.vercel.app/index.html', 'https://github.com/matheuspython/site-para-portifolio')

containerProjetos.innerHTML += criaProjeto('assets/images/veiculos.png', 'site de venda de veiculos', 'https://site-de-venda-de-veiculos-git-master.matheuspython.vercel.app/html', 'https://github.com/matheuspython/site-de-venda-de-veiculos')

containerProjetos.innerHTML += criaProjeto('assets/images/galeria.png', 'galeria de imagens', 'https://galeria-com-javascript-git-master.matheuspython.vercel.app/html', 'https://github.com/matheuspython/galeria-com-javascript')

containerProjetos.innerHTML += criaProjeto('assets/images/devFinances.png', 'projeto para finanças pessoais que fiz na maratona discover da rocketseat','https://dev-finance-matheuspython.vercel.app/', 'https://github.com/matheuspython/dev.finance')