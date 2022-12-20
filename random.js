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
    animatedElement.style.transform = 'translateY(0)';}
);


const element = document.getElementById('animated-element');

element.addEventListener('mouseover', function() {
    this.style.animation = 'none';
});

element.addEventListener('mouseout', function() {
    this.style.animation = 'fadeInOut 3s ease-in-out infinite';
});
