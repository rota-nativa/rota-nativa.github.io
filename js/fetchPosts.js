document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('post-list');
    const pageIndicator = document.getElementById('pageIndicator');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    let currentPage = 1;
    let totalPages = 1;

    function fetchPosts(page) {
        const apiURL = `https://run.mocky.io/v3/2164f274-bfa4-422c-bd43-88574d90104b?page=${page}`;
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                totalPages = data.totalPages;
                currentPage = page;
                renderPosts(data.posts);
                updatePagination();
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                postsContainer.innerHTML = '<p>Failed to load posts.</p>';
            });
    }

    function renderPosts(posts) {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            const markedContent = marked.parse(post.content);
            const cleanHTML = DOMPurify.sanitize(markedContent);
            postElement.innerHTML = `
                <h1 class="display-6">${post.title}</h1>
                <img src="${post.featuredImage}" alt="${post.title}" loading="lazy" style="width: 100%; height: auto; object-fit: cover;">
                <p>${cleanHTML}</p>
                <a href="post-details.html?id=${post.id}" class="btn btn-primary">Leia mais...</a>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function updatePagination() {
        pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) fetchPosts(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) fetchPosts(currentPage + 1);
    });

    fetchPosts(currentPage);
});
