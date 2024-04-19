document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();

    // Carregar a Navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            navbarPlaceholder.innerHTML = html;
            updateLinks(currentPage, 'navbar-placeholder'); // Atualiza os links após carregar a navbar
        });

    // Carregar o Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
            updateLinks(currentPage, 'footer-placeholder'); // Atualiza os links após carregar o footer
        });
});

function updateLinks(currentPage, selectorId) {
    document.querySelectorAll(`#${selectorId} a`).forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active'); // Adiciona a classe 'active' se estiver na página atual
        }
        // Corrige os links para referenciar corretamente as seções na página inicial
        if (link.hash && currentPage !== 'index.html') {
            link.href = '/index.html' + link.hash;
        }
    });
}
