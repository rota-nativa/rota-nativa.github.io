function loadComponent(url, elementId, eventName) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            document.dispatchEvent(new CustomEvent(eventName)); // Disparar um evento após carregar
        });
}

// Carregar navbar e footer com eventos customizados
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('components/navbarComponent.html', 'navbar-placeholder', 'navbarLoaded');
    loadComponent('components/footerComponent.html', 'footer-placeholder', 'footerLoaded');
});
