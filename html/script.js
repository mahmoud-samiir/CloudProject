document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('show');

    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', function() {
        // Add your functionality for the Explore button here
        window.location.href = "table/index.html";
    });
});
