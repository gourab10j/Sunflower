document.addEventListener("DOMContentLoaded", () => {
    const unlockButton = document.getElementById("unlock-heart");
    const loveMessage = document.getElementById("love-message");

    // Flower grows automatically on page load
    document.querySelector(".stem").style.height = "150px";
    document.querySelectorAll(".leaf, .petals, .center").forEach((part) => {
        part.style.opacity = "1";
        part.style.transform = "scale(1)";
    });

    // Display the message when the button is clicked
    unlockButton.addEventListener("click", () => {
        loveMessage.classList.remove("hidden");
        unlockButton.style.display = "none";
    });
});