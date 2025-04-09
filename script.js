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

// Gerenciamento de comentários
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.querySelector('.comments-list');
    
    // Carregar comentários salvos
    loadComments();
    
    // Adicionar novo comentário
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value;
        const text = document.getElementById('commentText').value;
        const date = new Date().toLocaleDateString('pt-BR');
        
        addComment(name, text, date);
        
        // Limpar formulário
        commentForm.reset();
    });
    
    // Função para adicionar comentário
    function addComment(name, text, date) {
        const comment = {
            name,
            text,
            date,
            id: Date.now() // ID único para cada comentário
        };
        
        // Salvar no localStorage
        const comments = JSON.parse(localStorage.getItem('userComments') || '[]');
        comments.push(comment);
        localStorage.setItem('userComments', JSON.stringify(comments));
        
        // Adicionar à interface
        displayComment(comment);
    }
    
    // Função para exibir comentário
    function displayComment(comment) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.dataset.id = comment.id;
        
        commentElement.innerHTML = `
            <div class="comment-header">
                <h4>${comment.name}</h4>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
            <button class="delete-comment" onclick="deleteComment(${comment.id})">×</button>
        `;
        
        // Inserir após os comentários oficiais
        const officialComments = document.querySelector('.official-comments');
        officialComments.appendChild(commentElement);
    }
    
    // Função para carregar comentários salvos
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('userComments') || '[]');
        comments.forEach(comment => displayComment(comment));
    }
});

// Função para deletar comentário
function deleteComment(id) {
    if (confirm('Tem certeza que deseja excluir este comentário?')) {
        // Remover do localStorage
        const comments = JSON.parse(localStorage.getItem('userComments') || '[]');
        const updatedComments = comments.filter(comment => comment.id !== id);
        localStorage.setItem('userComments', JSON.stringify(updatedComments));
        
        // Remover da interface
        const commentElement = document.querySelector(`.comment[data-id="${id}"]`);
        if (commentElement) {
            commentElement.remove();
        }
    }
}

// Comments functionality
const commentsList = document.querySelector('.comments-list');
const hiddenComments = document.querySelector('.hidden-comments');

// Show all comments by default
if (hiddenComments) {
    hiddenComments.classList.add('visible');
    const comments = hiddenComments.querySelectorAll('.comment');
    comments.forEach(comment => {
        comment.classList.remove('collapsed');
        comment.classList.add('fade-in');
    });
}

// Gallery popup functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const popup = document.querySelector('.gallery-popup');
const popupImage = popup ? popup.querySelector('.popup-image') : null;
const popupCaption = popup ? popup.querySelector('.popup-caption') : null;
const closeButton = popup ? popup.querySelector('.close-popup') : null;

const openPopup = (imageSrc, caption) => {
    if (popup && popupImage && popupCaption) {
        popupImage.src = imageSrc;
        popupCaption.textContent = caption;
        popup.classList.add('popup-visible');
        document.body.style.overflow = 'hidden';
    }
};

const closePopup = () => {
    if (popup) {
        popup.classList.remove('popup-visible');
        document.body.style.overflow = '';
    }
};

if (galleryItems && popup) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');
            if (img && caption) {
                openPopup(img.src, caption.textContent);
            }
        });
    });
    
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('popup-visible')) {
            closePopup();
        }
    });
} 