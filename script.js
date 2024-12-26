// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', event => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        event.preventDefault();
        alert('Please fill in all fields before submitting the form.');
    } else if (!validateEmail(email.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Skills Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('#skills .progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 500);
    });
});

// Scroll Animation for Education Section
const timelineEvents = document.querySelectorAll('#education .timeline-event');
window.addEventListener('scroll', () => {
    timelineEvents.forEach(event => {
        const position = event.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            event.classList.add('visible');
        }
    });
});
