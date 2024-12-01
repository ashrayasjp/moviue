 const flags = [
    "fi.jpg", "quen.jpg", "hi.jpg"
];


let currentIndex = 0;
        const flagContainer = document.getElementById('flag-container');
        const prevButton = document.getElementById('prev-btn');
        const nextButton = document.getElementById('next-btn');
        const flagLink = document.getElementById('flag-link');
        const targetSections = document.querySelectorAll('.target-section');

        function changeFlag(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = flags.length - 1;
            } else if (currentIndex >= flags.length) {
                currentIndex = 0;
            }
            flagContainer.style.backgroundImage = `url('${flags[currentIndex]}')`;

            // Hide all target sections
            targetSections.forEach(section => section.style.display = 'none');
        }

        // Initial flag display
        flagContainer.style.backgroundImage = `url('${flags[currentIndex]}')`;

        // Event listeners for buttons
        prevButton.addEventListener('click', () => changeFlag(-1));
        nextButton.addEventListener('click', () => changeFlag(1));

        // Event listener for the flag link
        flagLink.addEventListener('click', () => {
            // Hide all target sections
            targetSections.forEach(section => section.style.display = 'none');
            // Display the target section corresponding to the current flag
            const targetSection = document.getElementById(`target-section-${currentIndex}`);
            targetSection.style.display = 'block';
            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });

        // Event listener for scroll event
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                // Hide all target sections when scrolled to the top
                targetSections.forEach(section => section.style.display = 'none');
            }
        });

// Audio hover functionality
document.querySelectorAll('.image-hoverf4, .image-hoverq1, .image-hoverq2, .image-hoverq3, .image-hoverq4, .image-hoverq5, .image-hoverq6, .image-hoverq7, .image-hoverq8, .image-hoverq9, .image-hoverq10').forEach((item) => {
    let firstHoverTime = null;
    let isHovered = false;

    item.addEventListener('mouseover', function() {
        const audio = this.querySelector('audio');
        audio.volume = 0.24; // 
        audio.play();
        
        isHovered = true; // Mouse is hovered

        // Only set the first hover timestamp once
        if (firstHoverTime === null) {
            firstHoverTime = Date.now();

            // Set a timeout to check and reset `currentTime` after 30 seconds
            setTimeout(() => {
                // Reset `currentTime` only if 30 seconds have passed and the mouse is not hovered
                if (Date.now() - firstHoverTime >= 30000 && !isHovered) {
                    audio.currentTime = 0;
                }
                firstHoverTime = null; // Reset for future hovers
            }, 30000);
        }
    });

    item.addEventListener('mouseout', function() {
        const audio = this.querySelector('audio');
        audio.pause();
        
        isHovered = false; // Mouse is no longer hovered
    });
});
