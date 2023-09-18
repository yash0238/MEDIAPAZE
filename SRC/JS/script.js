// script.js
function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = `${Math.random() * 100}%`; // Random horizontal position
    ball.style.backgroundColor = getRandomColor(); // Random color
    document.getElementById("intro").appendChild(ball);

    // Animation
    const animationDuration = 4000; // Adjust the duration as needed
    ball.animate(
        [
            { bottom: "0%", opacity: 1 },
            { bottom: "100%", opacity: 0 }
        ],
        {
            duration: animationDuration,
            easing: "linear",
            iterations: 1,
            fill: "forwards"
        }
    );

    // Remove the ball when the animation is finished
    setTimeout(() => {
        ball.remove();
    }, animationDuration);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomBallWithDelay() {
    setTimeout(() => {
        createBall();
        createRandomBallWithDelay(); // Create the next ball with a delay
    }, Math.random() * 5000); // Adjust the delay range as needed
}

// Start creating balls when the page loads
window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 5; i++) {
        createRandomBallWithDelay();
    }
});
