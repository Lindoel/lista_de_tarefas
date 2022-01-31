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