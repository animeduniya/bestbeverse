// Show the popup only on the homepage when the site is first loaded or reloaded
window.onload = function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        document.getElementById("popup").classList.add("active");

        // Close the popup when the button is clicked
        document.getElementById("close-popup").onclick = function() {
            document.getElementById("popup").classList.remove("active");
        };
    }
};

// Debounce function to limit the rate at which search function is called
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Search functionality across all pages
document.getElementById("search").addEventListener("input", debounce(function() {
    const searchTerm = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // Mock search data (replace with actual search logic)
    const allContent = [
        { title: 'New Release 1', type: 'Drama' },
        { title: 'New Release 2', type: 'Action' },
        { title: 'Kdrama 1', type: 'Drama' },
        { title: 'Kdrama 2', type: 'Romance' },
        { title: 'Movie 1', type: 'Action' },
        { title: 'Movie 2', type: 'Comedy' },
        { title: 'Anime Movie 1', type: 'Adventure' },
        { title: 'Anime Movie 2', type: 'Fantasy' }
    ];

    const filteredContent = allContent.filter(item => item.title.toLowerCase().includes(searchTerm) || item.type.toLowerCase().includes(searchTerm));

    if (filteredContent.length > 0) {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = filteredContent.map(item => `<div>${item.title} (${item
