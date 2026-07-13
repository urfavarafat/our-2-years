/* ==========================================================================
   PROJECT STARLIGHT — script.js
   Vanilla JS. No dependencies. No build step. GitHub Pages ready.
   ========================================================================== */
(() => {
'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   DATA
   ========================================================================== */
const TIMELINE = [
  { date:'21 June 2024',      title:'First Conversation', place:'Messenger', desc:'The very first message. Neither of us knew it was the beginning of everything.', img:null },
  { date:'14 July 2024',      title:'First Meet',         place:'College',   desc:'We finally stood in front of each other, no screen between us.', img:'images/image1.jpg' },
  { date:'16 July 2024',      title:'Love Confession',    place:'Messenger', desc:'Two days later, I said it. And you said it back.', img:null },
  { date:'13 November 2024',  title:'First Date',         place:'Rana Park', desc:'Onekkhon silam prothombarer moto, onek happy.', img:'images/image2.jpg' },
  { date:'22 January 2025',   title:'Second Date',        place:'Rupkotha Eco Resort', desc:'A whole day that felt like a whole season.', img:'images/image3.jpg' },
  { date:'13 May 2025',       title:'Birthday Date',      place:'Rupkotha Eco Resort', desc:'Your birthday, spent exactly where we wanted to be — together.', img:'images/image3.jpg' },
  { date:'24 June 2025',      title:'Fourth Date',        place:'Rupkotha Eco Resort', desc:'Accidentally kissed her lips.', img:'images/image4.jpg' },
  { date:'1 September 2025',  title:'Fifth Date',         place:'Rana Park', desc:'She cooked biryani for me. Lip kiss. Warm hug.', img:'images/image5.jpg' },
  { date:'14 October 2025',   title:'Sixth Date',         place:'Rana Park', desc:'Another quiet afternoon that meant everything.', img:'images/image6.jpg' },
  { date:'28 October 2025',   title:'Seventh Date',       place:'Rana Park', desc:'The park was starting to feel like ours.', img:'images/image7.jpg' },
  { date:'22 December 2025',  title:'Eighth Date',        place:'Rana Park', desc:'Winter, and still nothing felt cold.', img:'images/image8.jpg' },
  { date:'29 March 2026',     title:'Ninth Date',         place:'',          desc:'A 15 minute date 😂. Bought tickets for Rupkotha. Couldn\u2019t even hold her hand properly.', img:null },
  { date:'31 March 2026',     title:'Tenth Date',         place:'',          desc:'Finally 🤗', img:null },
  { date:'5 April 2026',      title:'Eleventh Date',      place:'Khalek Park', desc:'The funniest date ever. We laughed all day.', img:'images/image9.jpg' },
  { date:'23 April 2026',     title:'Tong Tee Cafe',      place:'Tong Tee Cafe', desc:'First time sitting together in a restaurant. We both felt blessed.', img:'images/image10.jpg' },
  { date:'13 May 2026',       title:'My Birthday',        place:'',          desc:'She surprised me with a cake. Best day of my life. Every moment felt magical.', img:'images/image11.jpg' },
  { date:'20 June 2026',      title:'Twelfth Date',       place:'',          desc:'Everything went differently than planned. Still beautiful.', img:null },
];

const REASONS = [
  'তোমার চোখ','তোমার লাজুক হাসি','তোমার ঠোঁটের কোণে হাসি','তোমার মিষ্টি রাগ',
  'তোমার আদুরে অভিমান','তোমার কণ্ঠস্বর','তোমার যত্নশীল মন','তোমার নিঃস্বার্থ ভালোবাসা',
  'তুমি যেভাবে আমার কথা মন দিয়ে শোনো','তোমার হাতের স্পর্শ','তুমি যখন হাসতে হাসতে কেঁদে ফেলো',
  'তোমার এলোমেলো চুল','তুমি রান্না করে যত্ন করে খাওয়াও','তোমার ধৈর্য','তুমি যেভাবে আমাকে বোঝো',
  'তোমার সততা','তুমি ছোট ছোট বিষয়ে খুশি হও','তোমার সাহস','তুমি আমাকে ভালো মানুষ হতে শেখাও',
  'তোমার হাসির শব্দ','তুমি রাগ করেও নিজেই মিষ্টি করে কথা বলো','তোমার চিন্তাশীলতা',
  'তুমি আমার পাশে থাকো, যেভাবেই হই না কেন','তোমার হাতের লেখায় মায়া','তুমি সহজে কাউকে ঠকাও না',
  'তোমার সরলতা','তুমি ছোট ছোট চমক দিতে ভালোবাসো','তোমার কপালের টিপ',
  'তুমি হাঁটার সময় আমার হাত ধরো','তুমি রাগ হলেও চলে যাও না','তোমার হাসিতে আমার সব ক্লান্তি কেটে যায়',
  'তুমি আমার পরিবারকে আপন করে নিয়েছ','তোমার সাজে থাকা সাধারণত্ব','তুমি নিজের চেয়ে আমাকে বেশি ভাবো',
  'তোমার ছোট ছোট অভিমান ভাঙানো মজার','তুমি ভুল করলে স্বীকার করো','তোমার হাসির মধ্যে লুকানো নিষ্পাপতা',
  'তুমি আমার স্বপ্নগুলোকে সম্মান করো','তোমার কণ্ঠে আমার নাম ডাকার ধরন','তুমি বিরিয়ানি রান্না করে খাইয়েছিলে সেদিন',
  'তোমার আলিঙ্গনে নিরাপত্তা খুঁজে পাই','তুমি অভিমান করেও ফিরে আসো','তোমার হাসিমাখা সকালের শুভেচ্ছা',
  'তুমি প্রতিদিন আমাকে ভালো থাকতে শেখাও','তোমার চোখে আমার জন্য ভরসা দেখি','তুমি ঝগড়ার পরেও প্রথম কথা বলো',
  'তোমার সাধারণ কথাতেও গভীরতা আছে','তুমি আমার প্রতিটা ভুল ক্ষমা করে দাও','তুমি আমার জীবনের সবচেয়ে সুন্দর অভ্যাস',
  'তুমি শুধু তুমি, আর সেটাই যথেষ্ট'
];

const LETTERS = [
  { id:'pagli', title:'Dear Pagli ❤️', body:[
    'You do the most ridiculous things and somehow I never get tired of them.',
    'You argue about the smallest things and then act like you won even when you didn\u2019t.',
    'You laugh at your own jokes before you finish telling them.',
    'You get jealous over things that don\u2019t even matter and I find it strangely adorable.',
    'You call me pagla, but pagli, you started it first.',
    'Nobody else gets away with the things you get away with.',
    'I don\u2019t think I want someone calm and predictable. I want this — you, exactly like this.',
    'Stay a little crazy. It looks good on you.'
  ]},
  { id:'jaan', title:'Dear Jaan ❤️', body:[
    'There are days I don\u2019t say much, but you\u2019re still the first thing I think of when something good happens.',
    'You\u2019ve seen me tired, irritated, quiet, and you never once made me feel like I had to perform for you.',
    'I like that I can just exist around you. No explaining, no adjusting.',
    'When you\u2019re upset with me, the whole day feels off, even if I don\u2019t say it out loud.',
    'You worry about me in ways I don\u2019t always notice until later.',
    'I\u2019ve never had to wonder if you meant what you said. That\u2019s rarer than people think.',
    'Two years in, and you\u2019re still the person I want to tell things to first.',
    'Jaan, thank you for being this steady.'
  ]},
  { id:'babe', title:'Dear Babe ❤️', body:[
    'It\u2019s never the big days I remember most, it\u2019s the ordinary ones.',
    'A fifteen-minute date where I couldn\u2019t even hold your hand properly, and I still smiled about it for a week.',
    'You cooking biryani and watching me eat like it was the most important thing happening that day.',
    'Sitting in that cafe for the first time, both of us a little unsure how to just be normal in public.',
    'The park has become a character in our story at this point.',
    'You surprising me with a cake on my birthday, like you\u2019d been planning it for weeks.',
    'None of it was cinematic. All of it mattered.',
    'I\u2019d take a hundred more ordinary days with you over one perfect one without you.'
  ]},
  { id:'priyotoma', title:'Priyotoma ❤️', body:[
    'Priyotoma — the word feels too small for what I mean when I say it to you.',
    'Before you, I didn\u2019t understand what people meant by feeling settled around someone.',
    'You didn\u2019t just enter my life, you rearranged it, quietly, without asking.',
    'I think about June 21st sometimes, that first conversation, having no idea what it would turn into.',
    'Two years later, and it still doesn\u2019t feel like routine. It feels like something I keep choosing.',
    'You\u2019ve made an ordinary town, an ordinary park, an ordinary Tuesday, feel worth remembering.',
    'I don\u2019t have a grand way of saying this. I just know I want you around for a very long time.',
    'Priyotoma, thank you for staying.'
  ]},
  { id:'meghna', title:'Meghna ❤️', body:[
    'Meghna — I\u2019m writing this one using your actual name, because some things deserve to be said plainly.',
    'Two years ago I was a stranger sending you a message with no idea where it would go.',
    'Now you\u2019re the person I plan my Fridays, my birthdays, my ordinary evenings around.',
    'I\u2019m not going to pretend it\u2019s all been smooth. We\u2019ve had bad timing, short dates, mixed-up plans.',
    'But every version of us has still ended in you and me, choosing to stay.',
    'You make me want to be someone worth staying for, too.',
    'So here\u2019s to the third year, the fourth, and every ordinary one after that.',
    'Happy two years, Meghna. I will always choose you.'
  ]}
];

/* ==========================================================================
   INTRO SEQUENCE
   ========================================================================== */
const introEl = document.getElementById('intro');
const siteWrap = document.getElementById('siteWrap');
const enterBtn = document.getElementById('enterBtn');
const scrollHint = document.querySelector('.intro-scroll-hint');

function runIntroTypewriter(){
  const lines = document.querySelectorAll('.intro-line, .intro-date');
  const delay = prefersReducedMotion ? 150 : 900;
  lines.forEach((el, i) => {
    setTimeout(() => el.classList.add('show'), i * delay + 300);
  });
  setTimeout(() => {
    enterBtn.classList.add('show');
    scrollHint.classList.add('show');
  }, lines.length * delay + 600);
}

let musicStarted = false;
function startExperience(){
  if (introEl.classList.contains('leaving')) return;
  introEl.classList.add('leaving');
  startMusic();
  setTimeout(() => {
    introEl.style.display = 'none';
    siteWrap.hidden = false;
    document.body.style.overflow = '';
    initRevealObserver();
    initNavSpy();
  }, 900);
}

introEl.style.transition = 'opacity .9s ease, transform .9s ease';
introEl.addEventListener('click', (e) => {
  if (e.target.closest('#enterBtn')) return;
  startExperience();
});
enterBtn.addEventListener('click', startExperience);
document.addEventListener('keydown', (e) => {
  const introStillShowing = siteWrap.hidden === true;
  if ((e.key === 'Enter' || e.key === ' ') && introStillShowing && document.activeElement === document.body){
    startExperience();
  }
});

function leavingStyles(){
  introEl.addEventListener('transitionend', function handler(){
    introEl.removeEventListener('transitionend', handler);
  });
}
const style = document.createElement('style');
style.textContent = `.intro.leaving{ opacity:0; transform:scale(1.04); pointer-events:none; }`;
document.head.appendChild(style);

runIntroTypewriter();

/* ==========================================================================
   MUSIC
   ========================================================================== */
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const volumeSlider = document.getElementById('volumeSlider');
bgMusic.volume = volumeSlider.value / 100;

function startMusic(){
  if (musicStarted) return;
  musicStarted = true;
  bgMusic.play().then(() => {
    musicToggle.setAttribute('aria-pressed', 'true');
    musicToggle.setAttribute('aria-label', 'Pause background music');
  }).catch(() => { /* autoplay blocked or no file provided yet — fine */ });
}
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused){
    bgMusic.play().catch(()=>{});
    musicToggle.setAttribute('aria-pressed', 'true');
    musicToggle.setAttribute('aria-label', 'Pause background music');
  } else {
    bgMusic.pause();
    musicToggle.setAttribute('aria-pressed', 'false');
    musicToggle.setAttribute('aria-label', 'Play background music');
  }
});
volumeSlider.addEventListener('input', () => { bgMusic.volume = volumeSlider.value / 100; });

/* ==========================================================================
   LIVE COUNTER
   ========================================================================== */
const ANNIV = new Date('2024-07-14T00:00:00');
function pad(n){ return String(n).padStart(2,'0'); }
function updateCounter(){
  const now = new Date();
  let diffMs = now - ANNIV;
  if (diffMs < 0) diffMs = 0;

  let years = now.getFullYear() - ANNIV.getFullYear();
  let months = now.getMonth() - ANNIV.getMonth();
  let days = now.getDate() - ANNIV.getDate();
  let hours = now.getHours() - ANNIV.getHours();
  let minutes = now.getMinutes() - ANNIV.getMinutes();
  let seconds = now.getSeconds() - ANNIV.getSeconds();

  if (seconds < 0){ seconds += 60; minutes--; }
  if (minutes < 0){ minutes += 60; hours--; }
  if (hours < 0){ hours += 24; days--; }
  if (days < 0){
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0){ months += 12; years--; }

  document.getElementById('cYears').textContent = pad(years);
  document.getElementById('cMonths').textContent = pad(months);
  document.getElementById('cDays').textContent = pad(days);
  document.getElementById('cHours').textContent = pad(hours);
  document.getElementById('cMinutes').textContent = pad(minutes);
  document.getElementById('cSeconds').textContent = pad(seconds);
}
updateCounter();
setInterval(updateCounter, 1000);

/* ==========================================================================
   IMAGE FALLBACK — swap broken/missing photos for a soft placeholder
   ========================================================================== */
function attachImgFallback(img, label){
  img.addEventListener('error', () => {
    const wrap = img.parentElement;
    wrap.classList.add('placeholder');
    img.remove();
    const span = document.createElement('span');
    span.textContent = label || 'Photo coming soon';
    wrap.appendChild(span);
  }, { once:true });
}

/* ==========================================================================
   TIMELINE RENDER
   ========================================================================== */
const timelineTrack = document.getElementById('timelineTrack');
TIMELINE.forEach((item, i) => {
  const li = document.createElement('li');
  li.className = 'tl-item reveal';
  li.innerHTML = `
    <button class="tl-star-btn" type="button" data-index="${i}" aria-haspopup="dialog">
      <span class="tl-star" aria-hidden="true"></span>
      <span class="tl-date">${item.date}</span>
      <span class="tl-name">${item.title}</span>
      ${item.place ? `<span class="tl-place">${item.place}</span>` : ''}
    </button>`;
  timelineTrack.appendChild(li);
});

const memoryModal = document.getElementById('memoryModal');
const modalImgWrap = document.getElementById('modalImgWrap');
const modalDate = document.getElementById('modalDate');
const modalTitle = document.getElementById('modalTitle');
const modalPlace = document.getElementById('modalPlace');
const modalDesc = document.getElementById('modalDesc');
let lastFocused = null;

function openModal(backdrop){
  lastFocused = document.activeElement;
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  const closeBtn = backdrop.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
  document.addEventListener('keydown', escCloser);
}
function closeModal(backdrop){
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', escCloser);
  if (lastFocused) lastFocused.focus();
}
function escCloser(e){
  if (e.key === 'Escape'){
    document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
  }
}
document.querySelectorAll('.modal-backdrop').forEach(bd => {
  bd.addEventListener('click', (e) => { if (e.target === bd) closeModal(bd); });
});

timelineTrack.addEventListener('click', (e) => {
  const btn = e.target.closest('.tl-star-btn');
  if (!btn) return;
  const item = TIMELINE[+btn.dataset.index];
  modalDate.textContent = item.date;
  modalTitle.textContent = item.title;
  modalPlace.textContent = item.place || '';
  modalDesc.textContent = item.desc;
  modalImgWrap.innerHTML = '';
  modalImgWrap.classList.remove('empty');
  if (item.img){
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    attachImgFallback(img, 'Photo coming soon');
    modalImgWrap.appendChild(img);
  } else {
    modalImgWrap.classList.add('empty');
  }
  openModal(memoryModal);
});
document.getElementById('modalClose').addEventListener('click', () => closeModal(memoryModal));

/* ==========================================================================
   GALLERY RENDER (from timeline photos)
   ========================================================================== */
const masonryGrid = document.getElementById('masonryGrid');
const galleryPhotos = TIMELINE.filter(t => t.img);
galleryPhotos.forEach((item) => {
  const fig = document.createElement('figure');
  fig.className = 'masonry-item reveal';
  fig.innerHTML = `
    <img src="${item.img}" alt="${item.title}" loading="lazy">
    <figcaption class="masonry-caption">${item.title} — ${item.date}</figcaption>`;
  const img = fig.querySelector('img');
  attachImgFallback(img, item.title);
  fig.addEventListener('click', () => openImgModal(item.img, item.title));
  masonryGrid.appendChild(fig);
});

const imgModal = document.getElementById('imgModal');
const imgModalPic = document.getElementById('imgModalPic');
function openImgModal(src, alt){
  imgModalPic.src = src;
  imgModalPic.alt = alt;
  openModal(imgModal);
}
document.getElementById('imgModalClose').addEventListener('click', () => closeModal(imgModal));

/* ==========================================================================
   REASONS RENDER
   ========================================================================== */
const reasonsGrid = document.getElementById('reasonsGrid');
REASONS.forEach((reason, i) => {
  const card = document.createElement('div');
  card.className = 'reason-card reveal';
  card.innerHTML = `<span class="reason-num">${String(i+1).padStart(2,'0')}</span>${reason}`;
  reasonsGrid.appendChild(card);
});

/* ==========================================================================
   LETTERS RENDER
   ========================================================================== */
const envelopesGrid = document.getElementById('envelopesGrid');
LETTERS.forEach((letter, i) => {
  const btn = document.createElement('button');
  btn.className = 'envelope reveal';
  btn.type = 'button';
  btn.dataset.index = i;
  btn.setAttribute('aria-haspopup', 'dialog');
  btn.innerHTML = `
    <div class="envelope-body">
      <span class="envelope-title">${letter.title}</span>
      <span class="wax-seal" aria-hidden="true">M&A</span>
    </div>`;
  envelopesGrid.appendChild(btn);
});

const letterModal = document.getElementById('letterModal');
const letterTitle = document.getElementById('letterTitle');
const letterBody = document.getElementById('letterBody');
envelopesGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.envelope');
  if (!btn) return;
  const letter = LETTERS[+btn.dataset.index];
  letterTitle.textContent = letter.title;
  letterBody.innerHTML = letter.body.map(line => `<p>${line}</p>`).join('');
  openModal(letterModal);
});
document.getElementById('letterClose').addEventListener('click', () => closeModal(letterModal));

/* ==========================================================================
   SECRET ENDING / PASSCODE
   ========================================================================== */
const PASSCODE = '14july';
const passcodeForm = document.getElementById('passcodeForm');
const passcodeInput = document.getElementById('passcodeInput');
const passcodeError = document.getElementById('passcodeError');
const endingPre = document.getElementById('endingPre');
const finale = document.getElementById('finale');

passcodeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = passcodeInput.value.trim().toLowerCase().replace(/\s+/g,'');
  if (val === PASSCODE){
    passcodeError.textContent = '';
    triggerFinale();
  } else {
    passcodeError.textContent = 'Not quite. Think about the date it all began.';
    passcodeInput.classList.add('shake');
    setTimeout(() => passcodeInput.classList.remove('shake'), 500);
  }
});

function triggerFinale(){
  endingPre.style.transition = 'opacity .6s ease';
  endingPre.style.opacity = '0';
  setTimeout(() => { endingPre.style.display = 'none'; }, 600);
  finale.classList.add('show');
  finale.setAttribute('aria-hidden', 'false');
  runHeartBurst();
}

/* ==========================================================================
   CANVAS: STARFIELD
   ========================================================================== */
function setupCanvas(id){
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  function resize(){
    canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);
  return { canvas, ctx };
}

const isMobile = window.innerWidth < 700;

/* Stars */
(() => {
  const { canvas, ctx } = setupCanvas('starfield');
  const count = isMobile ? 90 : 220;
  let stars = [];
  function build(){
    stars = Array.from({length: count}, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));
  }
  build();
  window.addEventListener('resize', build);
  let t = 0;
  function draw(){
    t += 1;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach(s => {
      const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.phase) * 0.3;
      ctx.beginPath();
      ctx.fillStyle = `rgba(248,250,252,${Math.max(0, Math.min(1, alpha))})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  if (!prefersReducedMotion) draw(); else draw();
})();

/* Nebula — soft drifting blobs */
(() => {
  const { canvas, ctx } = setupCanvas('nebula');
  if (prefersReducedMotion) return;
  const blobs = [
    { x:.2, y:.3, r:260, c:'124,58,237' },
    { x:.8, y:.6, r:320, c:'59,130,246' },
    { x:.5, y:.85, r:220, c:'168,85,247' },
  ];
  let t = 0;
  function draw(){
    t += 0.003;
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    blobs.forEach((b, i) => {
      const x = (b.x + Math.sin(t + i) * 0.04) * window.innerWidth;
      const y = (b.y + Math.cos(t + i) * 0.03) * window.innerHeight;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r);
      grad.addColorStop(0, `rgba(${b.c},.10)`);
      grad.addColorStop(1, `rgba(${b.c},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* Fireflies */
(() => {
  const { canvas, ctx } = setupCanvas('fireflies');
  if (prefersReducedMotion) return;
  const count = isMobile ? 10 : 24;
  const flies = Array.from({length: count}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random()-0.5) * 0.3,
    vy: (Math.random()-0.5) * 0.3,
    r: Math.random()*1.5 + 1,
    phase: Math.random()*Math.PI*2,
  }));
  let t = 0;
  function draw(){
    t += 0.03;
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    flies.forEach(f => {
      f.x += f.vx; f.y += f.vy;
      if (f.x < 0 || f.x > window.innerWidth) f.vx *= -1;
      if (f.y < 0 || f.y > window.innerHeight) f.vy *= -1;
      const alpha = 0.4 + Math.sin(t + f.phase) * 0.4;
      ctx.beginPath();
      ctx.fillStyle = `rgba(249,168,212,${Math.max(0,alpha)})`;
      ctx.shadowColor = 'rgba(249,168,212,.8)';
      ctx.shadowBlur = 8;
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* Floating hearts (ambient, gentle) */
(() => {
  const { canvas, ctx } = setupCanvas('hearts-canvas');
  if (prefersReducedMotion) return;
  const count = isMobile ? 6 : 12;
  function heart(){
    return {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random()*200,
      size: Math.random()*10 + 8,
      speed: Math.random()*0.4 + 0.15,
      drift: Math.random()*0.6 - 0.3,
      alpha: Math.random()*0.25 + 0.08,
    };
  }
  let hearts = Array.from({length: count}, heart);
  function drawHeart(x,y,size,alpha){
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#F9A8D4';
    ctx.translate(x,y);
    ctx.scale(size/16, size/16);
    ctx.beginPath();
    ctx.moveTo(0,4);
    ctx.bezierCurveTo(0,-2,-8,-2,-8,4);
    ctx.bezierCurveTo(-8,10,0,14,0,18);
    ctx.bezierCurveTo(0,14,8,10,8,4);
    ctx.bezierCurveTo(8,-2,0,-2,0,4);
    ctx.fill();
    ctx.restore();
  }
  function draw(){
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    hearts.forEach(h => {
      h.y -= h.speed;
      h.x += h.drift * 0.1;
      if (h.y < -40) Object.assign(h, heart(), { y: window.innerHeight + 40 });
      drawHeart(h.x, h.y, h.size, h.alpha);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* Rain toggle — subtle, off by default, enabled during scroll through "letters" as mood (optional ambient) */
(() => {
  const rain = document.getElementById('rain');
  const dropCount = isMobile ? 25 : 60;
  for (let i=0; i<dropCount; i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + '%';
    s.style.animationDuration = (0.6 + Math.random()*0.8) + 's';
    s.style.animationDelay = Math.random()*2 + 's';
    s.style.opacity = (0.2 + Math.random()*0.4).toFixed(2);
    rain.appendChild(s);
  }
  const lettersSection = document.getElementById('letters');
  if ('IntersectionObserver' in window && lettersSection){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => rain.classList.toggle('active', entry.isIntersecting));
    }, { threshold:0.3 });
    io.observe(lettersSection);
  }
})();

/* Cursor glow (desktop only) */
if (!isMobile && !prefersReducedMotion){
  const glow = document.getElementById('cursorGlow');
  window.addEventListener('pointermove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

/* Heart burst — finale "M ❤ A" formation + confetti */
function runHeartBurst(){
  const { canvas, ctx } = setupCanvas('heartBurstCanvas');
  const W = window.innerWidth, H = window.innerHeight;
  const cx = W/2, cy = H/2 - 40;

  function heartPoint(t, scale){
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t);
    return { x: x*scale, y: -y*scale };
  }
  const target = [];
  for (let i=0; i<220; i++){
    const t = (i/220) * Math.PI * 2;
    const p = heartPoint(t, Math.min(W,H) * 0.014);
    target.push({ tx: cx + p.x, ty: cy + p.y });
  }
  const particles = target.map(p => ({
    x: Math.random()*W, y: Math.random()*H,
    tx: p.tx, ty: p.ty,
    vx:0, vy:0,
    color: Math.random() > .5 ? '168,85,247' : '249,168,212',
    r: Math.random()*2.4 + 1.6,
  }));

  const confetti = Array.from({length: isMobile ? 40 : 90}, () => ({
    x: Math.random()*W, y: -20 - Math.random()*H,
    vy: Math.random()*2 + 1.5, vx: (Math.random()-0.5)*1.5,
    r: Math.random()*4 + 2,
    color: ['#3B82F6','#7C3AED','#A855F7','#F9A8D4','#F8FAFC'][Math.floor(Math.random()*5)],
    rot: Math.random()*Math.PI,
  }));

  let frame = 0;
  function draw(){
    frame++;
    ctx.clearRect(0,0,W,H);

    particles.forEach(p => {
      p.vx += (p.tx - p.x) * 0.02;
      p.vy += (p.ty - p.y) * 0.02;
      p.vx *= 0.85; p.vy *= 0.85;
      p.x += p.vx; p.y += p.vy;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color},.9)`;
      ctx.shadowColor = `rgba(${p.color},1)`;
      ctx.shadowBlur = 10;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    if (frame > 40){
      confetti.forEach(c => {
        c.y += c.vy; c.x += c.vx; c.rot += 0.05;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.r/2, -c.r/2, c.r, c.r*2);
        ctx.restore();
        if (c.y > H + 20){ c.y = -20; c.x = Math.random()*W; }
      });
    }

    if (frame > 60 && frame < 90){
      ctx.font = `700 ${Math.min(W,H)*0.09}px "Playfair Display", serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = `rgba(248,250,252,${(frame-60)/30})`;
      ctx.fillText('M ❤ A', cx, cy + Math.min(W,H)*0.03);
    } else if (frame >= 90){
      ctx.font = `700 ${Math.min(W,H)*0.09}px "Playfair Display", serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(248,250,252,1)';
      ctx.fillText('M ❤ A', cx, cy + Math.min(W,H)*0.03);
    }

    requestAnimationFrame(draw);
  }
  if (prefersReducedMotion){
    ctx.font = `700 ${Math.min(W,H)*0.09}px "Playfair Display", serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText('M ❤ A', cx, cy);
  } else {
    draw();
  }
}

/* ==========================================================================
   SCROLL REVEAL
   ========================================================================== */
function initRevealObserver(){
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || prefersReducedMotion){
    targets.forEach(t => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12, rootMargin:'0px 0px -60px 0px' });
  targets.forEach(t => io.observe(t));

  // newly-injected reveal elements after this call (reasons/letters were added synchronously above)
}

/* ==========================================================================
   NAV SPY + SMOOTH SCROLL
   ========================================================================== */
function initNavSpy(){
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = ['hero','timeline','gallery','reasons','letters','ending'].map(id => document.getElementById(id));
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        navDots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === '#' + id));
      }
    });
  }, { threshold:0.5 });
  sections.forEach(s => s && io.observe(s));
}

/* Body scroll lock during intro */
document.body.style.overflow = 'hidden';

})();
