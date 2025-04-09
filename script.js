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

// Audio Player Functionality
document.querySelectorAll('.custom-audio-player').forEach(player => {
    const audio = new Audio(player.dataset.audio);
    const playButton = player.querySelector('.play-button');
    const progressBar = player.querySelector('.progress-bar');
    const progress = player.querySelector('.progress');
    const volumeControl = player.querySelector('.volume-control');
    
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = '▶';
        } else {
            // Pause all other playing audio
            document.querySelectorAll('.custom-audio-player').forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    const otherButton = otherPlayer.querySelector('.play-button');
                    if (otherButton.textContent === '⏸') {
                        otherButton.click();
                    }
                }
            });
            
            audio.play();
            playButton.textContent = '⏸';
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener('timeupdate', () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + '%';
    });

    audio.addEventListener('ended', () => {
        playButton.textContent = '▶';
        isPlaying = false;
        progress.style.width = '0%';
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percentage * audio.duration;
    });

    volumeControl.addEventListener('click', (e) => {
        const rect = volumeControl.getBoundingClientRect();
        const volume = (e.clientX - rect.left) / rect.width;
        audio.volume = Math.max(0, Math.min(1, volume));
    });
});

// Configurar volume padrão mais baixo para todos os players
document.querySelectorAll('.volume-slider').forEach(slider => {
    slider.value = 20; // Define o volume para 20%
    const audio = slider.closest('.custom-audio-player').previousElementSibling.dataset.src;
    if (audio) {
        const audioElement = new Audio(audio);
        audioElement.volume = 0.2; // Define o volume para 20%
    }
});

// Gerenciamento de comentários
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.querySelector('.comments-list');
    const showMoreBtn = document.getElementById('showMoreComments');

    // Carregar comentários do localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Mostrar/esconder comentários
    showMoreBtn.addEventListener('click', function() {
        const collapsedComments = document.querySelectorAll('.comment.collapsed');
        collapsedComments.forEach(comment => {
            comment.classList.remove('collapsed');
        });
        showMoreBtn.style.display = 'none';
    });

    // Adicionar novo comentário
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value;
        const text = document.getElementById('commentText').value;
        const date = new Date().toLocaleDateString();
        const id = Date.now();

        const newComment = {
            id: id,
            name: name,
            text: text,
            date: date
        };

        comments.unshift(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        
        // Criar e adicionar o novo comentário ao DOM
        const commentElement = createCommentElement(newComment);
        commentsList.insertBefore(commentElement, commentsList.firstChild);
        
        // Limpar o formulário
        commentForm.reset();
    });

    // Excluir comentário
    commentsList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-comment')) {
            const commentId = parseInt(e.target.dataset.id);
            const commentElement = e.target.closest('.comment');
            
            if (confirm('Tem certeza que deseja excluir este comentário?')) {
                comments = comments.filter(comment => comment.id !== commentId);
                localStorage.setItem('comments', JSON.stringify(comments));
                commentElement.remove();
            }
        }
    });

    // Função para criar elemento de comentário
    function createCommentElement(comment) {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `
            <div class="comment-header">
                <h4>${comment.name}</h4>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
            <button class="delete-comment" data-id="${comment.id}">Excluir</button>
        `;
        return div;
    }

    // Carregar comentários existentes
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.insertBefore(commentElement, showMoreBtn);
    });
});

// Função para mostrar mais comentários oficiais
document.getElementById('showMoreOfficialComments').addEventListener('click', function() {
    const collapsedComments = document.querySelectorAll('.official-comments .comment.collapsed');
    collapsedComments.forEach(comment => {
        comment.classList.remove('collapsed');
    });
    this.style.display = 'none';
}); 