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

// Search functionality (no dynamic results, just an active placeholder)
document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    // You can add your search logic here, like filtering posts dynamically
});
