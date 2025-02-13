    document.getElementById('clickBox').addEventListener('click', function() {
        var letterContent = document.getElementById('letterContent');

        if (letterContent.classList.contains('show')) {
            // Reverse animation: smoothly collapse & fade out
            letterContent.classList.remove('show');

            // Wait for animation to finish before hiding the div
            setTimeout(() => {
                letterContent.style.display = 'none';
            }, 600); // Match transition time (0.6s)
        } else {
            // Expand: Make it visible first
            letterContent.style.display = 'block';

            // Apply animation after a short delay
            setTimeout(() => {
                letterContent.classList.add('show');
                letterContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    });

    // Redirect when "Yes" button is clicked
    document.querySelector('.yes-btn').addEventListener('click', function() {
    window.location.href = "yes.html"; // Replace with your desired URL
     });

    // Redirect when "ily" button is clicked
    document.querySelector('.ily-btn').addEventListener('click', function() {
        window.location.href = "ily2.html"; // Replace with your desired URL
         });
