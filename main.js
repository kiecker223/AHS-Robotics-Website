


// Makes it to where the navbar visibility will be changed on scrolling
function kSetNavbarVisibily()
{
    'use strict';
    
    // Add the event listener for the scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY < 250)
        {
            $("#kNavbar").fadeOut();
        }
        else
        {
            $("#kNavbar").fadeIn();
        }
    }, false);
}


kSetNavbarVisibily();
