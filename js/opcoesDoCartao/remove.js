//IIFE
//Immediately Invoked Function Expression
//Module Pattern
;(function(){
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    //estrutura de laço
    for(let indice = 0; indice < btns.length; indice++){

        btns[indice].addEventListener('click', function(){
            //callback function: é a função de resposta qd o evento acontecer
    
            const cartao = this.parentNode.parentNode
    
            cartao.classList.add('cartao--some')
    
            cartao.addEventListener('transitionend', function(){
                this.remove()
            })
        })
    }

})()