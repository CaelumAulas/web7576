;(function() {
  
    let listaObjAjuda = [
        {
            conteudo: "Bem vindo ao ceep"
            ,cor: '#76EF40'
            ,ajuda: true
        },
        {
            conteudo: "o site é otimizado para celulares"
            ,cor: "#92C4EC"
            ,ajuda: true
        },
        {
            conteudo: "para mudar o layout clique no botao linhas no cabecalho"
            ,cor: "#F05450"
            ,ajuda: true
        }
    ]
        
    btnAjuda.addEventListener('click', function(){

        //referencia aos cartoes
        const ajudas = document.querySelectorAll('[data-ajuda]')

        if(!ajudas.length){

            /* listaObjAjuda.forEach(function(objetoAjuda){
                criarCartao(objetoAjuda)
            }) */

            //Loop que decrementa
            for(let index = listaObjAjuda.length -1; index >= 0; index--) {
                criarCartao(listaObjAjuda[index])
            }

        } else {
            ajudas.forEach(function(cartao){
                cartao.style.boxShadow = '0 0 10px 10px yellow '
            })
        }
        
        /* 
        for(let texto of textosAjuda){
            criarCartao(texto)
        }  
        */

        /* 
        for(let indice in textosAjuda){
            criarCartao(textosAjuda[indice])
        } 
        */ 

        /* 
        for(let indice = 0; indice < textosAjuda.length; indice++){
            criarCartao(textosAjuda[indice])
        } 
        */
        
    })

    btnAjuda.classList.remove('no-js')
    
})()