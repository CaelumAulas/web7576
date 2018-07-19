;(function(){
    
    const form = document.querySelector('.formNovoCartao')

    form.addEventListener('submit', function(evento){
        evento.preventDefault()
        
        const textarea = form.querySelector('textarea'),
              //btn = form.querySelector('.formNovoCartao-salvar'),
              mensagem = document.createElement('p')

        if(textarea.value.trim() != ''){
            console.log('vou criar um cartao com',textarea.value);
        }
        else {
            mensagem.innerText = 'oww preenche ai'
            //form.insertBefore(mensagem, btn)
            textarea.insertAdjacentElement('afterend',mensagem);

            //textarea.insertAdjacentHTML('beforebegin', '<h1>heheh errou</h1>')
            //textarea.insertAdjacentText('afterbegin', 'oww digitaqui manee')
        }    
    })

    form.classList.remove('no-js')

})()