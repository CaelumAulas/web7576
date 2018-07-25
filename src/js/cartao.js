;(function(){
    
    const cartoes = document.querySelectorAll('.cartao')

    for(let i = 0; i < cartoes.length; i++){

        let cartao = cartoes[i]

        cartao.addEventListener('focusin', function(){
            this.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(clickEvent){
            this.style.backgroundColor = clickEvent.target.value
        })

        cartao.addEventListener('keydown', function(evento){
            if(evento.code == 'Enter' || evento.code == 'Space' ){
                evento.target.click()
            }
        })

        cartao.addEventListener('click', function(evento){

            if(evento.target.classList.contains('opcoesDoCartao-remove')){
                this.classList.add('cartao--some')
                this.addEventListener('transitionend', function(){
                    this.remove()
                })
            }
        })

    }
    
})()