;(function() {
  
    let textosAjuda = [
        "Bem vindo ao ceep",
        "o site é otimizado para celulares",
        "para mudar o layout clique no botao linhas no cabecalho"
    ]
        
    btnAjuda.addEventListener('click', function(){

        textosAjuda.forEach(function(texto){
            criarCartao(texto)
        })
        
        /* for(let texto of textosAjuda){
            criarCartao(texto)
        }  */
        

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