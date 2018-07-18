;(function(){
    
    const cartoes = document.querySelectorAll('.cartao')

    for(let i = 0; i < cartoes.length; i++){

        cartoes[i].addEventListener('focusin', function(){
            this.classList.add('cartao--focado')
        })

        cartoes[i].addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        })
    }
    
})()