document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has already accepted cookies during this session
    if (!sessionStorage.getItem("cookiesAccepted")) {
        // Show the cookie banner
        showCookieBanner();
    }

    // Event listener for the "Accept" button
    document.getElementById("acceptCookies").addEventListener("click", function() {
        // Set a flag in sessionStorage to indicate that cookies are accepted during this session
        sessionStorage.setItem("cookiesAccepted", "true");
        
        // Hide the cookie banner
        hideCookieBanner();
    });
});

function showCookieBanner() {
    // Show the cookie banner
    document.getElementById("cookieBanner").style.display = "block";

    // Darken the background probably
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function hideCookieBanner() {
    // Hide the cookie banner
    document.getElementById("cookieBanner").style.display = "none";

    // Restore the original background color
    document.body.style.backgroundColor = "";
}