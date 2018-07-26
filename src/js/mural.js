;(function(){

    /* 
    const conectorApi = new XMLHttpRequest()
    conectorApi.open('GET', 'https://ceep.herokuapp.com/cartoes/carregar')
    conectorApi.responseType = 'json'
    conectorApi.send()
    conectorApi.addEventListener('load', () => {
        console.log(conectorApi.response);
    }) 
    */

    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar'
        ,method: 'GET'
        ,data: {usuario: 'vanessa.tonini@caelum.com.br'}
        ,dataType: 'jsonp'
        ,success: function(resposta){

            resposta.cartoes.forEach(cartao => {
                criarCartao(cartao)
            });

        }
    })
})()