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

// Survival tip rotator
const survivalTips = [
    "Search quiet towns for vital supplies to endure the harsh days ahead 🏘️.",
    "Stay vigilant as night falls—danger hides in every shadow 🌙.",
    "Forge alliances to face the lawless threats roaming the land 🤝.",
    "Gear up meticulously before venturing into the unpredictable wilds 🎒."
];

const navigationTips = [
    "Explore Chernarus’ coastal towns for loot and danger 🌊.",
    "Scout inland ruins for hidden supplies and solitude 🏚️.",
    "Navigate by landmarks like factories and castles 🏭🏰.",
    "Avoid roads at night to evade bandit ambushes 🌌."
];

let survivalTipIndex = 0;
let navigationTipIndex = 0;
const survivalGuideCard = document.querySelector('.guide-card p');
const navigationGuideCard = document.querySelector('.guide-card.map-preview p');

function rotateTip() {
    survivalGuideCard.style.opacity = 0;
    setTimeout(() => {
        survivalGuideCard.textContent = survivalTips[survivalTipIndex];
        survivalGuideCard.style.opacity = 1;
    }, 300);
    survivalTipIndex = (survivalTipIndex + 1) % survivalTips.length;

    navigationGuideCard.style.opacity = 0;
    setTimeout(() => {
        navigationGuideCard.textContent = navigationTips[navigationTipIndex];
        navigationGuideCard.style.opacity = 1;
    }, 300);
    navigationTipIndex = (navigationTipIndex + 1) % navigationTips.length;
}

setInterval(rotateTip, 7000);
rotateTip();

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
