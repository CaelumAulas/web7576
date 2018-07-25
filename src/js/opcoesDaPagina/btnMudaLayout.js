;(function () {
    let btn = document.querySelector('#btnMudaLayout')
    const mural = document.querySelector('section.mural')

    function mudaTexto() {

        if (this.innerText == `Linhas`) {
            this.innerText = 'Blocos'
        }
        else {
            this.innerText = 'Linhas'
        }
    }

    function mudaLayout() {
        mural.classList.toggle('mural--linha')
    }

    btn.addEventListener('click', mudaTexto)

    btn.addEventListener('click', mudaLayout)

    btn.classList.remove('no-js')
})()