// Show the popup only on the homepage and only on first visit or reload
window.onload = function() {
    if (window.location.pathname === "/index.html" && !localStorage.getItem("popupShown")) {
        document.getElementById("popup").classList.add("active");
        localStorage.setItem("popupShown", "true");
    }

    // Close the popup when the button is clicked
    document.getElementById("close-popup").onclick = function() {
        document.getElementById("popup").classList.remove("active");
    };
};

// Search functionality
document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");

    // Simulate searching (replace with actual search logic)
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
});
