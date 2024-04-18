document.addEventListener('DOMContentLoaded', function() {
    // Anexa o evento click ao body e delega para links na navbar
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('.navbar-nav .nav-link')) {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajuste conforme a altura da navbar
                    behavior: 'smooth'
                });
            }

            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click(); // Fecha a navbar se estiver aberta
            }
            e.preventDefault(); // Impede o comportamento padrão do link (navegação direta)
        }
    });
});
