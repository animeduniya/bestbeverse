// Show the popup when the page is loaded
window.onload = function() {
    document.getElementById("popup").classList.add("active");

    // Close the popup when the button is clicked
    document.getElementById("close-popup").onclick = function() {
        document.getElementById("popup").classList.remove("active");
    };
};
