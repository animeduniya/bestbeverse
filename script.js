// Function to show the episode selection modal
function showEpisodeModal(dramaTitle) {
    const modal = document.getElementById('episode-modal');
    const titleElement = document.getElementById('drama-title');
    const episodeList = document.getElementById('episode-list');
    titleElement.textContent = dramaTitle;

    // Clear previous episodes
    episodeList.innerHTML = '';

    // Get the episodes for the selected drama
    const episodes = document.querySelector(`.episodes[data-title="${dramaTitle}"]`).children;
    for (const episode of episodes) {
        const button = episode.cloneNode(true);
        button.addEventListener('click', () => {
            alert(`Downloading ${button.textContent} of ${dramaTitle}`);
        });
        episodeList.appendChild(button);
    }

    modal.style.display = 'block';
}

// Function to close the episode selection modal
document.getElementById('close-modal').onclick = function() {
    document.getElementById('episode-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('episode-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

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
