// Your JavaScript code goes here

// Example: Add a scroll event listener to change the navigation background color
window.addEventListener("scroll", function() {
  
    // Get the navigation element by its id
    let nav = document.getElementById("nav");
 
    // Check if the window has scrolled past a certain point
    if (window.pageYOffset > 100) {
 
       // Change the background color of the navigation element
       nav.style.backgroundColor = "#ccc";
 
    } else {
 
       // Restore the original background color of the navigation element
       nav.style.backgroundColor = "#eee";
 
    }
 
 })
