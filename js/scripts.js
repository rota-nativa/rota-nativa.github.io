document.addEventListener('DOMContentLoaded', function() {
    // Anexa o evento click ao body e delega para links na navbar
    document.body.addEventListener('click', function(e) {
        // Verifica se o clique é em um link da navbar que não leva à página de blog
        if (e.target.matches('.navbar-nav .nav-link') && !e.target.href.includes('blog.html')) {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste conforme a altura da navbar
                    behavior: 'smooth'
                });
            }

            // Fecha a navbar se estiver aberta
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
            e.preventDefault(); // Impede o comportamento padrão do link (navegação direta)
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Função para atualizar o link ativo
    function updateActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        if (index !== 0) {
            navLinks[index]?.classList.add('active');
        }
    }

    updateActiveLink();  // Atualiza na carga da página
    document.addEventListener('scroll', updateActiveLink);
});

