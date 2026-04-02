// AceVault — Minimal interactivity

// Nav scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 40);
    lastScroll = scrollY;
}, { passive: true });

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });
}

// Stagger animation on load via CSS classes
document.querySelectorAll('.product-card, .value, .stat').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
    el.classList.add('animate-in');
});

// Newsletter form
const form = document.getElementById('signup-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.cta-input');
        const btn = form.querySelector('button');
        const email = input.value;

        if (!email) return;

        btn.textContent = 'Subscribed!';
        btn.style.background = '#00D4AA';
        input.value = '';
        input.placeholder = 'You\'re in!';
        input.disabled = true;
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Subscribe';
            input.placeholder = 'you@company.com';
            input.disabled = false;
            btn.disabled = false;
        }, 3000);
    });
}
