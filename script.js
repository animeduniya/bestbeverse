// Debounce function to limit the rate at which search function is called
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Function to collect all post data from the DOM
function collectAllContent() {
    const allContent = [];
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('.post-info h3').innerText;
        const type = post.querySelector('.post-info p:nth-child(3)').innerText.split(': ')[1];
        allContent.push({ title, type });
    });

    return allContent;
}

// Search functionality across all pages
document.getElementById("search").addEventListener("input", debounce(function() {
    const searchTerm = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    const allContent = collectAllContent();

    const filteredContent = allContent.filter(item => item.title.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm));

    if (filteredContent.length > 0) {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = filteredContent.map(item => `<div>${item.title} (${item.type})</div>`).join('');
    } else {
        resultsContainer.style.display = "none";
    }
}, 300));
