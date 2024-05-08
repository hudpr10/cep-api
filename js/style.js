const campo = document.querySelector('.campo-cep');
const container = document.querySelector('.campo__container');

campo.addEventListener('focus', () => {
    container.classList.add('borda-colorida');
    campo.classList.add('texto-colorido');
})

campo.addEventListener('blur', () => {
    container.classList.remove('borda-colorida');
    campo.classList.remove('texto-colorido');
})