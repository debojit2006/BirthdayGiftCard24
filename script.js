document.addEventListener('DOMContentLoaded', () => {
    const runawayBtn = document.getElementById('runaway-btn');
    const letterModal = document.getElementById('letter-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const bgMusic = document.getElementById('bg-music');
    
    let hasBeenClicked = false;

    // Start music on the first interaction with the page
    document.body.addEventListener('mousemove', () => {
        if (bgMusic.paused) {
            bgMusic.volume = 0.2;
            bgMusic.play().catch(() => {});
        }
    }, { once: true });


    // --- The "Runaway" Logic ---
    runawayBtn.addEventListener('mouseover', () => {
        if (hasBeenClicked) return; // Stop moving if it has been clicked

        // Get window dimensions
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        // Get random positions, ensuring the button stays within the viewport
        const newTop = Math.random() * (winHeight - 150); // -150 to stay away from edges
        const newLeft = Math.random() * (winWidth - 200);

        // Apply the new position
        runawayBtn.style.top = `${newTop}px`;
        runawayBtn.style.left = `${newLeft}px`;
    });


    // --- The "Catch" and Reveal Logic ---
    runawayBtn.addEventListener('click', () => {
        hasBeenClicked = true; // Mark as clicked to stop the running
        
        // Center the button and show a checkmark
        runawayBtn.style.top = '50%';
        runawayBtn.style.left = '50%';
        runawayBtn.innerHTML = '✅ Got it!';
        
        bgMusic.pause();
        letterModal.style.display = 'block';
    });


    // --- Close the Letter Logic ---
    const hideLetter = () => {
        letterModal.style.display = 'none';
        bgMusic.play();
    };

    closeModalBtn.addEventListener('click', hideLetter);
    
    // Close if user clicks on the dark background
    window.addEventListener('click', (event) => {
        if (event.target === letterModal) {
            hideLetter();
        }
    });
});
