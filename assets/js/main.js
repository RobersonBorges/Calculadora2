function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaCliques() //arrow function de 1 linha pode ser simplificada assim.
        this.capturaEnter()

    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target //nesse trexo, estamos capturando qualquer evento de click
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.realizaConta()
        })
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)
            if (!conta) {
                alert('conta inválida')
                return
            }
            this.display.value = conta
        } catch (e) {
            alert('conta invalida')
            return
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()  //mantém o foco no display
    }

    this.del = () => this.display.value = this.display.value.slice(0, -1)
    this.clear = () => this.display.value = ''

}

const calculadora = new Calculadora()
calculadora.inicia()