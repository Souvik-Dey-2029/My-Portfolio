// ===== Particles.js =====
particlesJS("particles-js", {
  "particles": {
    "number":{"value":200,"density":{"enable":true,"value_area":800}},
    "color":{"value":["#00ffcc","#ff4081","#ffcc00"]},
    "shape":{"type":"circle"},
    "opacity":{"value":0.7,"random":true},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#00ffcc","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":3,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false}
  },
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}},"modes":{"repulse":{"distance":120},"push":{"particles_nb":5}}},
  "retina_detect":true
});

// ===== Smooth scroll for buttons =====
document.querySelectorAll('.float-btn a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// ===== Calculator =====
const calcModal = document.getElementById('calc-modal');
const calcDisplay = document.getElementById('calc-display');
const calcButtons = document.getElementById('calc-buttons');
const calcClose = document.getElementById('calc-close');
document.getElementById('python-calc').addEventListener('click', ()=>{
  calcModal.style.display='flex'; calcDisplay.value='';
});
calcClose.addEventListener('click', ()=>{calcModal.style.display='none';});

const buttons=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'];
buttons.forEach(b=>{
  const btn=document.createElement('button');
  btn.textContent=b; btn.className='calc-btn';
  btn.addEventListener('click',()=>calculatorClick(b));
  calcButtons.appendChild(btn);
});
function calculatorClick(value){
  if(value==='='){try{calcDisplay.value=eval(calcDisplay.value);}catch{calcDisplay.value='Error';}}
  else{calcDisplay.value+=value;}
}
