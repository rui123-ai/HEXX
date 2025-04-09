// Floating runes animation
const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚻ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛝ', 'ᛟ', 'ᛞ', 'ᚨ', 'ᚩ', 'ᚪ'];
const floatingRunesContainer = document.querySelector('.floating-runes');

function createRune() {
    const rune = document.createElement('span');
    rune.className = 'floating-rune';
    rune.textContent = runes[Math.floor(Math.random() * runes.length)];
    rune.style.left = Math.random() * 100 + 'vw';
    rune.style.animationDuration = (Math.random() * 3 + 2) + 's';
    rune.style.opacity = Math.random();
    floatingRunesContainer.appendChild(rune);

    setTimeout(() => {
        rune.remove();
    }, 5000);
}

setInterval(createRune, 300);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Cursed text effect
const cursedTexts = document.querySelectorAll('.cursed-text');
cursedTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.textShadow = `0 0 10px var(--color-crimson), 0 0 20px var(--color-neon-green)`;
    });
    text.addEventListener('mouseout', () => {
        text.style.textShadow = 'none';
    });
});

// Form submission with cursed effect
const form = document.querySelector('.cursed-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = form.querySelector('button');
    button.textContent = 'Invocação Enviada...';
    button.style.background = 'var(--color-neon-green)';
    
    setTimeout(() => {
        button.textContent = 'Enviar Invocação';
        button.style.background = 'var(--color-crimson)';
    }, 2000);
});

// Add glitch effect to images on hover
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.filter = 'contrast(150%) brightness(150%)';
    });
    item.addEventListener('mouseout', () => {
        item.style.filter = 'none';
    });
});

// Add smoke effect to sections
function createSmokeEffect() {
    const smoke = document.createElement('div');
    smoke.className = 'smoke-effect';
    smoke.style.left = Math.random() * 100 + 'vw';
    smoke.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(smoke);

    setTimeout(() => {
        smoke.remove();
    }, 5000);
}

setInterval(createSmokeEffect, 2000);

// Add custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add styles for custom cursor and smoke effect
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        background: var(--color-neon-green);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        mix-blend-mode: difference;
        z-index: 9999;
        transition: transform 0.2s ease;
    }

    .smoke-effect {
        position: fixed;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 70%);
        pointer-events: none;
        animation: smoke 5s ease-out forwards;
        z-index: 0;
    }

    @keyframes smoke {
        0% {
            transform: scale(0);
            opacity: 0.8;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .floating-rune {
        position: fixed;
        color: var(--color-neon-green);
        font-size: 2rem;
        pointer-events: none;
        animation: float-up linear forwards;
        z-index: 1;
    }

    @keyframes float-up {
        0% {
            transform: translateY(100vh) rotate(0deg);
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Set default volume for video
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-teaser video');
    if (video) {
        video.volume = 0.3; // Set volume to 30%
    }
}); 