;(function(){
    
    const form = document.querySelector('.formNovoCartao'),
          textarea = form.querySelector('textarea')

    form.addEventListener('submit', function(evento){
        evento.preventDefault()
        
        const mensagem = document.createElement('p')

        if(textarea.value.trim() != ''){
            criarCartao(textarea.value)
            this.reset()
        }
        else {
            mensagem.innerText = 'oww preenche ai'
            mensagem.classList.add('formNovoCartao-msg')
            
            //se nao existir cria o elemento
            if(!this.querySelector('.formNovoCartao-msg')){
                textarea.insertAdjacentElement('afterend',mensagem);
            }

            this.addEventListener('animationend', function(evento){
                evento.target.remove()
            })


        }    
    })

    form.classList.remove('no-js')

})()