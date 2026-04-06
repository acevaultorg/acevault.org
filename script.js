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

// Newsletter form — Formspree AJAX
const form = document.getElementById('signup-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = form.querySelector('.cta-input');
        const btn = form.querySelector('button');
        const email = input.value.trim();

        if (!email) return;

        const action = form.getAttribute('action');
        // If Formspree ID not set yet, skip submission silently
        if (!action || action.includes('FORMSPREE_ID')) {
            btn.textContent = 'Coming soon!';
            setTimeout(() => { btn.textContent = 'Subscribe'; }, 2000);
            return;
        }

        btn.textContent = 'Sending…';
        btn.disabled = true;

        try {
            const res = await fetch(action, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (res.ok) {
                btn.textContent = 'You\'re in!';
                btn.style.background = '#00D4AA';
                input.value = '';
                input.placeholder = 'Check your inbox!';
                input.disabled = true;
            } else {
                btn.textContent = 'Try again';
                btn.disabled = false;
            }
        } catch {
            btn.textContent = 'Try again';
            btn.disabled = false;
        }
    });
}
