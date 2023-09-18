// Add a class to each timeline item on scroll for animations
const timelineItems = document.querySelectorAll('.timeline-item');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addClassOnScroll() {
    timelineItems.forEach((item) => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
}

// Listen for the scroll event to trigger the animation
window.addEventListener('scroll', addClassOnScroll);

// Initially add the class for items in the viewport on page load
addClassOnScroll();
