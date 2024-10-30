document.addEventListener("DOMContentLoaded", function() {
    let previousFirstLevel = null; // Variable to keep track of the previous first level

    // Function to display the current hash levels in a message
    function displayCurrentHashLevels() {
        const currentHash = window.location.hash;
        if (currentHash) {
            const hashLevels = currentHash.slice(1).split('/'); // Remove the '#' and split by '/'
            const currentFirstLevel = hashLevels[1]; // Get the first level of the hash

            // Get section handle associated with current hash
            const sectionHandle = document.getElementById(currentFirstLevel);

            // Get a list of child div elements that are class Animation
            const animationDivs = sectionHandle.querySelectorAll('.Animation');

            // Add click event listener to each div with class Animation
            animationDivs.forEach(div => {
                const svgPaths = div.querySelectorAll('path');
                div.addEventListener('click', () => {
                    // Trigger the animation on the SVG elements inside the div
                    
                    svgPaths.forEach(path => {
                        const pathLength = path.getTotalLength();
                        path.style.strokeDasharray = pathLength;
                        path.style.strokeDashoffset = pathLength;
                        path.getBoundingClientRect(); // Trigger a reflow to ensure the animation works
                        path.style.transition = 'stroke-dashoffset 1s ease-in-out';
                        path.style.strokeDashoffset = '0';
                    });
                });
            });
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', displayCurrentHashLevels);

    // Initial display of the current hash levels
    displayCurrentHashLevels();
});