import Observable from "./observable.js"

const buttons = {
    pinkButton: document.getElementById('rosa'),
    blueButton: document.getElementById('azul')
}

buttons.pinkButton.addEventListener('click', () => {
    const data = 'Haz clickeado el boton rosa'
    Observable.notify(data)
})

buttons.blueButton.addEventListener('click', () => {
    const data = 'Haz clickeado el boton azul'
    Observable.notify(data)
})
