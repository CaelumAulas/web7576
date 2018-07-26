;(function(){
    
    const form = document.querySelector('.formNovoCartao'),
          textarea = form.querySelector('textarea')

    form.addEventListener('submit', function(evento){
        evento.preventDefault()
        
        const mensagem = document.createElement('p')

        if(textarea.value.trim() != ''){
            criarCartao({conteudo: textarea.value})
            this.reset()
            textarea.focus()
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