document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const animatedElement = document.querySelector('.animated-element');

// Set the initial state of the element
animatedElement.style.opacity = 0;
animatedElement.style.transform = 'translateY(-20px)';

// Animate the element when the page loads
window.addEventListener('load', () => {
    animatedElement.style.opacity = 1;
    animatedElement.style.transform = 'translateY(0)';