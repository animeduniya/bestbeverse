// Search functionality
document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            post.style.display = 'inline-block';
        } else {
            post.style.display = 'none';
        }
    });
});
