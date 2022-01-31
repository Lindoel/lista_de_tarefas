function novanota() {

    let listas = document.querySelector('#listas-conteiner')
    let card = document.querySelector('.lista-card')
    let titulo_dado = document.querySelector('.titulo').value
    let texto_dado = document.querySelector('#texto').value
    let botao = document.querySelector('#botao')
    
    card.style.display = 'block'
    
    if(botao.getAttribute('src') == "icons/mais.svg") {
        botao.setAttribute('src', 'icons/salvar.svg')
    } else {
        //Criando elementos do card.
        let nova = document.createElement('div')
        let titulo = document.createElement('h1')
        let texto = document.createElement('p')
        
        //inserindo dados nos elementos criados
        titulo.textContent = titulo_dado
        texto.textContent = texto_dado
        
        //Deixando o conteudo visivel.
        nova.appendChild(titulo)
        nova.appendChild(texto)
        nova.setAttribute('class', 'nova')
        listas.appendChild(nova)

        botao.setAttribute('src', 'icons/mais.svg')
        card.style.display = 'none'
    }
}

function alinhar_esquerda() {
    let conteudo = document.querySelector('.conteudo')
    if (conteudo.style.textAlign != 'left') {
        conteudo.style.textAlign = 'left'
    }
}

function centralizar () {
    let conteudo = document.querySelector('.conteudo')
    if (conteudo.style.textAlign != 'center') {
        conteudo.style.textAlign = 'center'
    }
}

function alinhar_direita() {
    let conteudo = document.querySelector('.conteudo')
    if (conteudo.style.textAlign != 'right') {
        conteudo.style.textAlign = 'right'
    }
}

function justificar() {
    let conteudo = document.querySelector('.conteudo')
    if (conteudo.style.textAlign != 'justify') {
        conteudo.style.textAlign = 'justify'
    }
}

function negrito() {
    let conteudo = document.querySelector('.conteudo')
    let botao = document.querySelector('#negrito')

    if (conteudo.style.fontWeight == 'normal') {
        conteudo.style.fontWeight = 'bolder'
        botao.style.backgroundColor = '#a7a7a7'
    } else {
        conteudo.style.fontWeight = 'normal'
        botao.style.backgroundColor = '#1c1c1c'
    }
}