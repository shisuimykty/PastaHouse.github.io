// JS object for animations
const box = document.querySelector('.box');
var restaurant = {
    name: "Pasta House",
    description: "Restaurant for good people"
};

// Event listener for hover animation
box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)'; // Scale up on hover
    animateBackgroundColor(box); // Animate background color
});

box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)'; // Restore the original size
    stopBackgroundColorAnimation(); // Stop the background color animation
});



// Function to animate background color
let animationInterval;
function animateBackgroundColor(element) {
    let isYellow = false;
    animationInterval = setInterval(() => {
        if (isYellow) {
            element.style.backgroundColor = 'white';
        } else {
            element.style.backgroundColor = 'yellow';
        }
        isYellow = !isYellow;
    }, 500); // Toggle every 500 milliseconds
}

// Function to stop background color animation
function stopBackgroundColorAnimation() {
    clearInterval(animationInterval);
}

// Play a sound when the page loads
const sound = document.getElementById('sound');
sound.play();

// Section 5: Event Listener to Play Sound
const playSoundButton = document.getElementById("playSound");

playSoundButton.addEventListener("click", function () {
    // Create an audio element and set its source
    const audio = new Audio("mouth-slurps-3.mp3");
    // Play the audio
    audio.play();
});

const animatedBox = document.querySelector(".box");

animatedBox.addEventListener("mouseover", function () {
    // Apply CSS styles for the animation on mouseover
    animatedBox.style.transform = "scale(1.1)";
    animatedBox.style.transition = "transform 0.5s";

    // Change background color to yellow
    animatedBox.style.backgroundColor = "yellow";
});

animatedBox.addEventListener("mouseout", function () {
    // Reset the CSS styles on mouseout
    animatedBox.style.transform = "scale(1)";
    animatedBox.style.backgroundColor = "";
});