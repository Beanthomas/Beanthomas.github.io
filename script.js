// Preloader Fade-Out
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 2000);
});

// Optional: Wait for fonts to load before fading preloader (uncomment if needed)
/*
document.fonts.ready.then(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 2000);
});
*/

// Dynamic time display
function updateTime() {
    const timeElement = document.createElement('div');
    timeElement.id = 'current-time';
    timeElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        font-size: 16px;
        color: #e0e0e0;
        background: rgba(44, 62, 80, 0.9);
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: 500;
        z-index: 1000;
        transition: opacity 0.3s ease;
        font-family: 'Roboto', sans-serif;
    `;
    document.body.appendChild(timeElement);

    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { timeZone: 'CET', hour12: true, hour: 'numeric', minute: '2-digit' });
        timeElement.textContent = `Chernarus Time: ${timeString} ⏰`;
    }, 1000);

    timeElement.addEventListener('mouseenter', () => timeElement.style.opacity = '0.7');
    timeElement.addEventListener('mouseleave', () => timeElement.style.opacity = '1');
}

updateTime();

// Server status
function updateServerStatus() {
    const status = document.getElementById('server-status');
    const isOnline = Math.random() > 0.2;
    status.textContent = isOnline ? '  ONLINE ✅  ' : 'MAINTENANCE 🚧';
    status.className = `status-box ${isOnline ? '' : 'maintenance'}`;
    status.style.color = isOnline ? '#FFFFFF' : '#FFFFFF';
    status.style.transition = 'color 0.5s ease';

    setInterval(() => {
        const isOnline = Math.random() > 0.2;
        status.textContent = isOnline ? '  ONLINE ✅  ' : 'MAINTENANCE 🚧';
        status.className = `status-box ${isOnline ? '' : 'maintenance'}`;
        status.style.color = isOnline ? '#FFFFFF' : '#FFFFFF';
        status.style.transition = 'color 0.5s ease';
    }, 8000);
}

updateServerStatus();

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll-triggered animations for server cards
function handleScrollAnimations() {
    const cards = document.querySelectorAll('.server-card');
    const triggerPoint = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations();

// Copy IP function
function copyIP() {
    const ipText = "193.25.252.66:3102"; // Updated to match the displayed IP
    navigator.clipboard.writeText(ipText).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = "Copied! ✅";
        setTimeout(() => {
            btn.textContent = "Copy IP 📋";
        }, 2000); // Revert after 2 seconds
    }).catch(err => {
        console.error('Failed to copy IP: ', err);
    });
}
