document.addEventListener("DOMContentLoaded", function() {
    let previousFirstLevel = null; // Variable to keep track of the previous first level

    // Make all animation elements of svgs hidden
    const animationDivs = document.querySelectorAll('.Animation');
    animationDivs.forEach(div => {
        const svgPaths = div.querySelectorAll('.Animate');
        svgPaths.forEach(path => {
            const tagType = getTagType(path);

            // Select case based on the tag type

            // If the tag type is path
            if (tagType === 'path') {
                path.style.strokeDasharray = path.getTotalLength();
                path.style.strokeDashoffset = path.getTotalLength();

                // If ns1:texconverter="pdflatex" make it transparent works for latex
                if (path.getAttribute('ns1:texconverter') === 'pdflatex') {
                    path.style.opacity = 0;    }       
                
                
            }
            
            // If the tag type text make it transparent
            if (tagType === 'text') {
                path.style.opacity = 0;
            }  
        });
    });


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
                let currentPathIndex = 0; // Variable to keep track of the current path index
                const svgPaths = div.querySelectorAll('.Animate');

                svgPaths.forEach(element => {
                    const tagType = getTagType(element);

                    // Add mouseover event listener to each path element
                    if (tagType === 'path') {
                        const originalStrokeWidth = element.style.strokeWidth; // Store the original stroke width

                        element.addEventListener('mouseover', () => {
                            element.style.strokeWidth = '1'; // Change stroke width on hover
                        });
        
                        element.addEventListener('mouseout', () => {
                            element.style.strokeWidth = originalStrokeWidth; // Reset stroke width when not hovering
                        });
                    }
                });

                div.addEventListener('click', () => {
                    if (currentPathIndex < svgPaths.length) {

                        const path = svgPaths[currentPathIndex];

                        // Select case based on the tag type
                        const tagType = getTagType(path);

                        // If the tag type is path
                        if (tagType === 'path') {
                        const pathLength = path.getTotalLength();
                        path.style.strokeDasharray = pathLength;
                        path.style.strokeDashoffset = pathLength;
                        path.getBoundingClientRect(); // Trigger a reflow to ensure the animation works
                        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
                        path.style.strokeDashoffset = '0';
                        if (path.getAttribute('ns1:texconverter') === 'pdflatex') {
                            path.style.opacity = 1;    }  
                        }

                        // If the tag type is text fade in increaseing opacity
                        if (tagType === 'text') {
                        path.style.transition = 'opacity 1s ease';   
                        path.style.opacity = 1;
                        }                        
                        currentPathIndex++; // Move to the next path
                    }
                });
            });
        }
    }

    // Function to get the type of tag an element is
    function getTagType(element) {
        return element.tagName.toLowerCase(); // Convert to lowercase for consistency
    }

    // Listen for hash changes
    window.addEventListener('hashchange', displayCurrentHashLevels);

    // Initial display of the current hash levels
    displayCurrentHashLevels();
});