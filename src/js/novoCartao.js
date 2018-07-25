;(function(){

    'use strict'

    let idCartao = 1

    window.criarCartao = function (objetoCartao) {
    
        const mural = document.querySelector('.mural'),
              cartao = document.createElement('article')

        if(!objetoCartao.cor){

            objetoCartao = {
                conteudo: objetoCartao.conteudo,
                cor: '#EBEF40'
            }
            
        }
    
        cartao.classList.add('cartao')
        cartao.id = `cartao_${idCartao}`
        cartao.tabIndex = 0
        
        if(objetoCartao.ajuda){
            cartao.setAttribute('data-ajuda',objetoCartao.ajuda)
        }

        cartao.style.backgroundColor = objetoCartao.cor
    
        cartao.innerHTML = `
        <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${idCartao}" value="#EBEF40" id="corPadrão-cartao${idCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${idCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>
    
            <input type="radio" name="corDoCartao${idCartao}" value="#F05450" id="corImportante-cartao${idCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${idCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
            </label>
    
            <input type="radio" name="corDoCartao${idCartao}" value="#92C4EC" id="corTarefa-cartao${idCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${idCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${idCartao}" value="#76EF40" id="corInspiração-cartao${idCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${idCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
        `
    
        cartao.addEventListener('focusin', function () {
            this.classList.add('cartao--focado')
        })
    
        cartao.addEventListener('focusout', function () {
            this.classList.remove('cartao--focado')
        })
    
        cartao.addEventListener('change', function (clickEvent) {
            this.style.backgroundColor = clickEvent.target.value
        })
    
        cartao.addEventListener('keydown', function (evento) {
            if (evento.code == 'Enter' || evento.code == 'Space') {
                evento.target.click()
            }
        })
    
        cartao.addEventListener('click', function (evento) {
    
            if (evento.target.classList.contains('opcoesDoCartao-remove')) {
                this.classList.add('cartao--some')
                this.addEventListener('transitionend', function () {
                    this.remove()
                })
            }
        })
    
        mural.insertAdjacentElement('afterbegin', cartao)    

        //seleciona o elemento que tiver a mesma cor do objeto passado por parametro e define ele como checked
        
        let cartaoTemCorDiferente = cartao.querySelector(`input[value='${objetoCartao.cor}']`)
        
        if(cartaoTemCorDiferente){
            cartao.querySelector(`input[value='${objetoCartao.cor}']`).checked = true
        } else {
            cartao.querySelector(`#corPadrão-cartao${idCartao}`).removeAttribute('checked')
        }
    
        idCartao++
    }

})()