document.addEventListener("DOMContentLoaded", function() {
    const path = document.getElementById("myLine");
        const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    

    document.addEventListener("click", function() {
             
        if (path.style.strokeDashoffset == '0') {
            path.style.strokeDashoffset = pathLength;
        } else {
            path.style.strokeDashoffset = '0';
        }
    });
});