var btn = document.querySelector('#btnMudaLayout')

function mudaTexto() {

    if (this.innerText == `Linhas`) {
        this.innerText = 'Blocos'
    }
    else {
        this.innerText = 'Linhas'
    }
}

btn.onclick = mudaTexto