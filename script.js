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

// Search functionality
document.getElementById("search").addEventListener("input", debounce(function() {
    const searchTerm = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    if (searchTerm.length > 0) {
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML = `
            <div>Searching for: ${searchTerm}</div>
            <div>Result 1</div>
            <div>Result 2</div>
        `;
    } else {
        resultsContainer.style.display = "none";
    }
}, 300));
