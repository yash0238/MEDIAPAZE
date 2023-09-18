// Get all buttons and content sections
const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.content');

// Function to hide all content sections
function hideAllContent() {
    contents.forEach(content => {
        content.style.display = 'none';
    });
}

// Event listener for button clicks
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all content sections
        hideAllContent();

        // Reset background colors of all buttons to white
        buttons.forEach(btn => {
            btn.style.backgroundColor = 'white';
        });

        // Set background color of the clicked button to a different color
        button.style.backgroundColor = '#0078d4';

        // Show the corresponding content
        contents[index].style.display = 'flex';
    });
});

// Initially, show the content for the first button
buttons[0].click();
