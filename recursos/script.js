/* FUNÇÃO DE SLEEP */
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));


/* LÓGICA DO SLIDESHOW */
let indiceAtual = 0;
let tempoIndice = [7000, 10000, 10000, 10000, 10000];
const slides = document.querySelectorAll('.slide');
const texto_primario = document.querySelectorAll('.texto-primario');
const texto_secundario = document.querySelectorAll('.texto-secundario');


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

async function iniciarSlideshow() {
    while (true) {
        await esperar(tempoIndice[indiceAtual]);
        mudarSlide(indiceAtual);
    }
}

iniciarSlideshow();


/* EXIBIR INFORMAÇÕES OCULTAS */
const btnEtapas = document.getElementById('btn-etapas');
const btnLocalizacao = document.getElementById('btn-localizacao');

const etapasContainer = document.getElementById('etapas');
const localizacaoContainer = document.getElementById('localizacao');

let etapas = false;
let localizacao = false;

function mostrarEtapas() {
    etapas = true;
    
    ocultarMapa();
    etapasContainer.classList.add('ativo');
}

function mostrarMapa() {
    localizacao = true;

    ocultarEtapas();
    localizacaoContainer.classList.add('ativo');
}

function ocultarEtapas() {
    if (!etapas) return;

    etapas = false;
    etapasContainer.classList.remove('ativo');
}

function ocultarMapa() {
    if (!localizacao) return;

    localizacao = false;
    localizacaoContainer.classList.remove('ativo');
}

btnEtapas.addEventListener('click', () => {
    if (!etapas)
        mostrarEtapas();
    else
        ocultarEtapas();
});

btnLocalizacao.addEventListener('click', () => {
    if (!localizacao)
        mostrarMapa();
    else 
        ocultarMapa();
});