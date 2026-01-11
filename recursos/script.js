let indiceAtual = 0;
const slides = document.querySelectorAll('.slide');
const texto_primario = document.querySelectorAll('.texto-primario');
const texto_secundario = document.querySelectorAll('.texto-secundario');

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function mudarSlide(n) {
    slides[indiceAtual].classList.remove('ativo');
    texto_primario[indiceAtual].classList.remove('t-ativo');
    texto_secundario[indiceAtual].classList.remove('t-ativo');

    indiceAtual = (n + 1) % slides.length;

    slides[indiceAtual].classList.add('ativo');
    texto_primario[indiceAtual].classList.add('t-ativo');
    texto_secundario[indiceAtual].classList.add('t-ativo');
}

slides[indiceAtual].classList.add('ativo');
texto_primario[indiceAtual].classList.add('t-ativo');
texto_secundario[indiceAtual].classList.add('t-ativo');

setInterval(() => {
    mudarSlide(indiceAtual);
}, 6000);


