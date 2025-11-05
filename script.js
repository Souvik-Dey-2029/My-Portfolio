/* ========== Typing Animation ========== */
const typingText = "Aspiring AI & ML Engineer | Turning Code into Innovation";
const typingElement = document.getElementById('typing-text');
let index = 0;
function typeWriter() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener('load', typeWriter);

/* ========== Animate Skill Bars on Scroll ========== */
const skillProgress = document.querySelectorAll('.skill-progress');
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 100) {
    skillProgress.forEach(bar => {
      bar.style.width = bar.getAttribute('data-progress');
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);

/* ========== Calculator Modal ========== */
const calcModal = document.getElementById('calc-modal');
const calcDisplay = document.getElementById('calc-display');
const calcButtons = document.getElementById('calc-buttons');
const calcClose = document.getElementById('calc-close');

document.getElementById('python-calc').addEventListener('click', () => {
  calcModal.style.display = 'flex';
  calcDisplay.value = '';
});

calcClose.addEventListener('click', () => {
  calcModal.style.display = 'none';
});

const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];
buttons.forEach(b => {
  const btn = document.createElement('button');
  btn.textContent = b;
  btn.className = 'calc-btn';
  btn.addEventListener('click', () => calculatorClick(b));
  calcButtons.appendChild(btn);
});

function calculatorClick(value){
  if(value === '='){
    try { calcDisplay.value = eval(calcDisplay.value); }
    catch { calcDisplay.value = 'Error'; }
  } else {
    calcDisplay.value += value;
  }
}

/* ========== Timeline Reveal on Scroll ========== */
const timelineItems = document.querySelectorAll('.timeline-item');
function revealTimeline() {
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      item.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline); // Ensure timeline visible on load

/* ========== Achievements Reveal on Scroll ========== */
const achievementCards = document.querySelectorAll('.achievement-card');
function revealAchievements(){
  achievementCards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealAchievements);
window.addEventListener('load', revealAchievements);

/* ========== Dark/Light Mode Toggle ========== */
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', e=>{
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
});

/* ========== Optional: Smooth Scroll for Anchors ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 200, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": ["#00ffcc", "#ff4081", "#ffcc00"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.9, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.5, "width": 1 },
    "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 120 }, "push": { "particles_nb": 5 } }
  },
  "retina_detect": true
});
