// Função para carregar o cabeçalho
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
}

// Função para carregar o rodapé
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o rodapé:', error));
}

// Carregar cabeçalho e rodapé quando a página for carregada
window.onload = function () {
    loadHeader();
    loadFooter();
};

// Menu Mobile
function toggleMenu() {
    var navMenu = document.querySelector("header nav");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}

// Formulário de contato
document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Mensagem enviada com sucesso!');
            // Aqui você pode adicionar lógica para enviar os dados via AJAX
        });
    }
});

// Adiciona efeito suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});