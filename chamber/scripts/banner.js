document.addEventListener("DOMContentLoaded", function () {
    const currentDay = new Date().getDay();

    if (currentDay >= 1 && currentDay <= 3) {
        // Display the banner
        document.getElementById("chamberBanner").style.display = "block";
    } else {
        document.getElementById("chamberBanner").style.display = "none";
    }
});

function closeBanner() {
    document.getElementById("chamberBanner").style.display = "none";
}
