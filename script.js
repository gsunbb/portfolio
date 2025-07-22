// Animated background
function createFloatingElements() {
    const bgAnimation = document.getElementById('bgAnimation');
    if (!bgAnimation) return;
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 6 + 's';
        element.style.animationDuration = (Math.random() * 4 + 4) + 's';
        bgAnimation.appendChild(element);
    }
}

// Ghost interaction
const ghostContainer = document.querySelector('.ghost-container');
if (ghostContainer) {
    ghostContainer.addEventListener('click', function() {
        this.style.animation = 'ghostFloat 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = 'ghostFloat 4s ease-in-out infinite';
        }, 500);
    });
}

// Contact button interaction
const contactBtn = document.querySelector('.contact-btn');
const contactSection = document.querySelector('.contact-section');
if (contactBtn && contactSection) {
    contactBtn.addEventListener('click', function() {
        contactSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// Menu button functionality
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        const sections = document.querySelectorAll('section');
        if (sections.length === 0) return;

        let currentSection = 0;
        
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = index;
            }
        });
        
        const nextSection = (currentSection + 1) % sections.length;
        sections[nextSection].scrollIntoView({ behavior: 'smooth' });
    });
}

// Modal functionality
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const targetModalId = item.getAttribute('data-modal-target');
        const modal = document.getElementById(targetModalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

document.querySelectorAll('.modal .close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});


// Initialize
createFloatingElements(); 