function novanota() {
    let card = document.querySelector('.lista-card')
    let botao = document.querySelector('#botao')
    let cards = document.querySelector('.nova')
    let titulo_dado = document.querySelector('.titulo').value
    let texto_dado = document.querySelector('#texto').value
    card.style.display = 'block'

    let b = botao.getAttribute('src')
    
    if(botao.getAttribute('src') == "icons/mais.svg") {
        botao.setAttribute('src', 'icons/salvar.svg')
    } else {
        
        let titulo = document.createElement('h1')
        let texto = document.createElement('p')
        
        titulo.textContent = titulo_dado
        texto.textContent = texto_dado
        
        let listas = document.querySelector('#listas-conteiner')
        let nova = document.createElement('div')
        let edit = document.createElement('section')
        
        nova.appendChild(titulo)
        nova.appendChild(texto)
        nova.setAttribute('class', 'nova')
        listas.appendChild(nova)
        
        
        botao.setAttribute('src', 'icons/mais.svg')
        card.style.display = 'none'
        texto_dado.value = ''
        titulo_dado.value = ''
    }
}