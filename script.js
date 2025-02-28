document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-popup");

    // Show the popup after a 1-second delay
    setTimeout(() => {
        popup.classList.add("active");
    }, 1000); // Show popup after 1 second

    // Close popup when the close button is clicked
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Search functionality
    const searchInput = document.getElementById("search");
    const searchResults = document.getElementById("search-results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        if (query.length > 0) {
            searchResults.style.display = "block";
            searchResults.innerHTML = `Searching for: ${query}`;
        } else {
            searchResults.style.display = "none";
        }
    });
});
