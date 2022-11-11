let price__cta = document.getElementById('price__cta');
let hideText = document.getElementById('hideText');

price__cta.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('showText');

    if (hideText.classList.contains('showText')) {
        price__cta.innerHTML = 'Ocultar descripcion'
    }
    else {
        price__cta.innerHTML = 'Ordena ahora!'
    }
}