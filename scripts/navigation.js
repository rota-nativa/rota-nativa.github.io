function setupEventListeners() {
    // Pega todos os links que começam com '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const logoLink = document.querySelector('a.navbar-brand'); // Selecione a Logo se ela tiver a classe 'navbar-brand'
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            if (this.getAttribute('href') === '#') {
                // Se o href é apenas '#', trate como um scroll para o topo
                window.scrollTo({
                    top: 0, // Volta para o topo da página
                    behavior: 'smooth' // Efeito de scroll suave
                });
            } else {
                let target = document.querySelector(this.getAttribute('href')); // Pega o elemento destino
                const navbarHeight = 60; // Altura da barra de navegação

                // Calcula a posição necessária para o topo do elemento destino ficar visível
                const position = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: position, // Posição de scroll ajustada
                    behavior: 'smooth' // Efeito de scroll suave
                });
            }
        });
    });

    // Adiciona comportamento de scroll para a Logo
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            window.scrollTo({
                top: 0, // Volta para o topo da página
                behavior: 'smooth' // Efeito de scroll suave
            });
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show'); // Fecha o menu dropdown ao clicar em um item
        });
    });
}

// Esperar pelo carregamento completo da navbar e footer antes de adicionar listeners
document.addEventListener('navbarLoaded', setupEventListeners);
document.addEventListener('footerLoaded', setupEventListeners);