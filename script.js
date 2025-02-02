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

    // Inicializar o carrossel
    $(document).ready(function(){
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    // ---------- GALERIA DE IMAGENS EM TELA CHEIA COM ZOOM ----------
    const images = document.querySelectorAll(".gallery img"); 
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const img = document.createElement("img");
    modal.appendChild(img);
    document.body.appendChild(modal);

    // Evento para abrir a imagem em tela cheia ao clicar
    images.forEach(image => {
        image.addEventListener("click", function() {
            img.src = this.src;
            modal.style.display = "flex";
        });
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});// Função para carregar o cabeçalho
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

    // Inicializar o carrossel
    $(document).ready(function(){
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

    // ---------- GALERIA DE IMAGENS EM TELA CHEIA COM ZOOM ----------
    const images = document.querySelectorAll(".gallery img"); 
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const img = document.createElement("img");
    modal.appendChild(img);
    document.body.appendChild(modal);

    // Evento para abrir a imagem em tela cheia ao clicar
    images.forEach(image => {
        image.addEventListener("click", function() {
            img.src = this.src;
            modal.style.display = "flex";
        });
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
