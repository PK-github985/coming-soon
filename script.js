document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const typewriter = document.querySelector('.typewriter');
    const thankYou = document.querySelector('.thank-you');

    function startAnimation() {
        // Reset and hide text
        typewriter.style.width = '0';
        thankYou.style.width = '0';
        thankYou.style.display = 'none';

        // Start typing "COMING SOON"
        typewriter.style.animation = 'typing 3s steps(15) forwards 1s';

        setTimeout(() => {
            // After typing, move the line
            const line = document.createElement('div');
            line.classList.add('line-moving');
            container.appendChild(line);

            line.addEventListener('animationend', () => {
                container.removeChild(line);

                // Show and type "THANK YOU"
                thankYou.style.display = 'block';
                thankYou.style.animation = 'typing 3s steps(9) forwards 1s';

                // Repeat the whole animation
                setTimeout(startAnimation, 6000);
            });
        }, 4000); // Timing for "COMING SOON" typing
    }

    startAnimation();
});
