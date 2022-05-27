
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let btns = document.querySelectorAll('.boton');
let span = document.querySelector('span');

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e =>{
        let mostrar = e.target.textContent;
        span.textContent = mostrar;
        card2.classList.remove('ocultar');
        card1.classList.add('ocultar');
    })
})

