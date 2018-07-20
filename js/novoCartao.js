let idCartao = 1

function criarCartao(textoCartao) {

    mural = document.querySelector('.mural'),
    cartao = document.createElement('article')

    cartao.classList.add('cartao')
    cartao.id = `cartao_${idCartao}`
    cartao.tabIndex = 0

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
        <p class="cartao-conteudo" contenteditable tabindex="0">${textoCartao}</p>
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

    idCartao++
}