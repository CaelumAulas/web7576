;(() => {

    btnSync.addEventListener('click', () => {

        btnSync.classList.add('botaoSync--esperando')
        btnSync.classList.remove('botaoSync--sincronizado')
        
        const cartoes = document.querySelectorAll('.cartao')
             ,cartoesObj = []

        cartoes.forEach(cartao => {
            
            let conteudo = cartao.querySelector('.cartao-conteudo').innerText
                ,cor = cartao.querySelector('.opcoesDoCartao-radioTipo:checked').value

            cartoesObj.push({
                conteudo,
                cor
            })
                      
        })

        const conectorApi = new XMLHttpRequest()

        const usuarioDados = {
            usuario: 'vanessa.tonini@caelum.com.br',
            cartoes: cartoesObj
        }

        conectorApi.open('POST','https://ceep.herokuapp.com/cartoes/salvar')
        
        conectorApi.setRequestHeader('Content-Type', 'application/json')

        conectorApi.send(JSON.stringify(usuarioDados))
        
        conectorApi.addEventListener('load', () => {

            let resposta = JSON.parse(conectorApi.response)
            console.log(`${resposta.quantidade} cartões salvos com sucesso!`);

            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--sincronizado')
        })

        conectorApi.addEventListener('error', (evento) => {    
           
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--deuRuim')
        
            throw(`${evento.type} deu ruim`);
        })


    })

    btnSync.classList.remove('no-js')
})()