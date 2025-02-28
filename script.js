// Rotating post image on hover
function rotateImage(post) {
  post.querySelector('img').style.transform = 'rotate(15deg)';
}

function resetRotation(post) {
  post.querySelector('img').style.transform = 'rotate(0deg)';
}

// Pop-up welcome message
window.onload = function() {
  setTimeout(function() {
    document.getElementById('welcome-popup').style.display = 'flex';
  }, 1000); // Delay the popup appearance
};

function closePopup() {
  document.getElementById('welcome-popup').style.display = 'none';
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  const posts = document.querySelectorAll('.post');
  
  posts.forEach(function(post) {
    let postName = post.querySelector('.details').textContent.toLowerCase();
    if (postName.includes(query)) {
      post.style.display = 'inline-block';
    } else {
      post.style.display = 'none';
    }
  });
});

// Open post details
function openPostDetails(type) {
  alert(`This is a ${type} post with more details about the show/movie. Add further functionality here!`);
}

// Dynamically set the image links
function setPostImage(post, imageUrl) {
  const imageElement = post.querySelector('.image');
  imageElement.src = imageUrl;
}

// Example: Set images using external URLs (you can replace these with your own links)
document.addEventListener("DOMContentLoaded", function() {
  // Replace with actual URLs for Kdrama, Movies, Anime Movies
  setPostImage(document.querySelector('#kdrama .post'), 'https://example.com/kdrama1.jpg');
  setPostImage(document.querySelector('#movies .post'), 'https://example.com/movie1.jpg');
  setPostImage(document.querySelector('#anime-movies .post'), 'https://example.com/anime1.jpg');
});
