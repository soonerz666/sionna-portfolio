console.log("JavaScript is working!");

const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            console.log('Card visible:', entry.target); // Check which card becomes visible
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    observer.observe(card);
});
