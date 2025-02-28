// JavaScript for Dynamic Search
const searchInput = document.getElementById('searchInput');
const posts = document.querySelectorAll('.post');

searchInput.addEventListener('input', function() {
    const searchQuery = searchInput.value.toLowerCase();
    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});
