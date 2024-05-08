const campo = document.querySelector('.campo-cep');
const container = document.querySelector('.campo__container');

campo.addEventListener('focus', () => {
    container.classList.add('borda-colorida')
    campo.style.color = '#D0BFFF';
})

campo.addEventListener('blur', () => {
    container.classList.remove('borda-colorida')
    campo.style.color = '#f4f4f4'
})