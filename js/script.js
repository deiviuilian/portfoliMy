const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// CV Download
document.getElementById('cv-download').addEventListener('click', (e) => {
    e.preventDefault();
    // Simulação de download - substitua pela lógica real
    alert('Download do CV iniciado!');
    window.location.href = 'archive/cv.pdf';
});

// Animação de entrada para itens ao scrollar
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos que serão animados
const animatedElements = [
    ...document.querySelectorAll('.project-card'),
    ...document.querySelectorAll('.timeline-item'),
    ...document.querySelectorAll('.about-img'),
    ...document.querySelectorAll('.about-content')
];

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Adicionar estilo para elementos animados
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

var galleryImages = []; // Array para armazenar as imagens da galeria atual
var currentImageIndex = 0; // Índice da imagem atualmente exibida

// Função para abrir o modal e carregar a galeria
function openModal(clickedElement) {
    // Pega o ID da galeria do elemento clicado
    const galleryId = clickedElement.dataset.galleryId;

    // Limpa o array da galeria anterior
    galleryImages = [];

    // Adiciona a imagem clicada como a primeira da galeria
    galleryImages.push({
        src: clickedElement.dataset.imgSrc,
        alt: clickedElement.dataset.imgAlt
    });

    // Pega todas as outras imagens do mesmo galleryId (escondidas)
    const hiddenGalleryDiv = document.querySelector(`.project-gallery-hidden[data-gallery-id="${galleryId}"]`);
    if (hiddenGalleryDiv) {
        const otherImages = hiddenGalleryDiv.querySelectorAll('img');
        otherImages.forEach(img => {
            galleryImages.push({
                src: img.dataset.imgSrc,
                alt: img.dataset.imgAlt
            });
        });
    }

    // Define o índice da imagem clicada como a inicial
    currentImageIndex = 0; // Sempre começa pela primeira imagem da galeria (a clicada)

    modal.classList.add("show"); // Exibe o modal
    showSlides(currentImageIndex); // Mostra a primeira imagem
}

// Função para avançar/retroceder nas imagens da galeria
function plusSlides(n) {
    currentImageIndex += n; // Ajusta o índice

    // Lógica para loop da galeria
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0; // Volta para a primeira imagem
    }
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1; // Volta para a última imagem
    }

    showSlides(currentImageIndex); // Mostra a nova imagem
}

// Função para exibir uma imagem específica da galeria
function showSlides(index) {
    if (galleryImages.length === 0) return; // Nenhuma imagem para mostrar

    const image = galleryImages[index];
    modalImg.src = image.src;
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove("show"); // Esconde o modal
    // Limpa a galeria para a próxima vez (opcional)
    galleryImages = [];
    currentImageIndex = 0;
}

// Fechar o modal clicando fora da imagem (opcional)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Adiciona event listeners para as divs clicáveis (ao invés de onclick no HTML)
document.addEventListener('DOMContentLoaded', () => {
    const projectImgDivs = document.querySelectorAll('.project-img');
    projectImgDivs.forEach(div => {
        div.addEventListener('click', () => {
            openModal(div);
        });
    });
});