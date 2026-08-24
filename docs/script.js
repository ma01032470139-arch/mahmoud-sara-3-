/* =====================================================================
   Mahmoud × Sara — script.js
   Everything Mahmoud might want to change later lives in SITE_CONFIG
   right below. Edit freely — the rest of the file just reads from it.
   ===================================================================== */

const SITE_CONFIG = {

  mahmoudName: "Mahmoud",
  saraName: "Sara",

  // Both dates are kept here so Mahmoud can adjust either one later.
  firstConversationDate: "2023-04-21", // "The beginning of our story."
  relationshipStartDate: "2025-08-28", // "The day we became us." — the counter counts from this one.

  nickname: "نور عيني",
  funnyNickname: "أبو الصراصير",

  // Little things I love about you — edit, add, or remove freely.
  favoriteThings: [
    "ضحكتك",
    "عيونك",
    "طيبتك",
    "طريقتك في الكلام",
    "التفاصيل الصغيرة اللي إنتي نفسك متاخديش بالك منها",
    "إنك بتخليني أحس إن أبسط يوم ممكن يبقى حلو"
  ],

  songTitle: "أنت عمري",
  songArtist: "Umm Kulthum",

  // Keep the whole letter here — one variable, easy to find and edit.
  letter: `يمكن مهما اتكلمت مش هعرف أوصفلك قد إيه إنتي غالية عندي وقد إيه وجودك في حياتي فرق معايا، بس في حاجة أنا متأكد منها إن حبي ليكي مش بس عشان حاجة معينة فيكي، أنا بحبك إنتي بكل تفاصيلك الصغيرة قبل الكبيرة.

بحب طريقتك في الكلام وضحكتك ونظرة عيونك والحاجات اللي يمكن إنتي نفسك متاخديش بالك منها، بحب التفاصيل اللي بتخصك حتى لو كانت بسيطة جدًا، وبحب إني أكون الشخص اللي فاكرها وبيلاحظها وبيسأل عنها.

أنا بهتم بيكي مش عشان لازم أهتم، لكن عشان أي حاجة تخصك بقت تهمني لوحدها، فرحتك بتفرحني وزعلك بيزعلني، وحتى أبسط حاجة بتحصل في يومك بحب أعرفها.

ومهما قابلت ناس ومهما عرفت ناس أكتر، عندي إحساس جوايا إني مش هلاقي حد شبهك، لأن كل واحد ممكن يكون جميل بطريقته، لكن إنتي بالنسبة لي ليكي مكان مختلف محدش يقدر ياخده.

أنا مش بحب صورة معينة منك ولا نسخة معينة بتحاولي تكوني عليها، أنا بحبك إنتي زي ما إنتي، بكل تفاصيلك وحاجاتك الصغيرة اللي يمكن غيري يعدي عليها من غير ما ياخد باله، وأنا أفضل شخص في الدنيا بالنسبة لي هو الشخص اللي يعرف يقدّر كل ده فيكي.

ولو في حاجة واحدة نفسي تفضلي عارفاها دايمًا، فهي إنك مش مجرد شخص بحبه، إنتي شخص وجوده بقى جزء جميل من حياتي، وأنا ممتن لكل لحظة وكل ذكرى وكل تفصيلة جمعتني بيكي.

وبجد مهما حاولت أوصفلك مكانتك عندي، هفضل حاسس إن الكلام أقل بكتير من اللي جوايا.

بحبك… مش بس عشان إنتي مين، لكن عشان إنتي إنتي. ❤️`,

  // Vertical timeline — add more milestones any time.
  timeline: [
    {
      date: "21.04.2023",
      title: "The first conversation",
      description: "The day our story quietly started."
    },
    {
      date: "28.08.2025",
      title: "The day we became us",
      description: "The day everything became a little more special."
    }
  ],

  // Random messages for the "Make Sara smile" button.
  smileMessages: [
    "Okay Sara, mission accomplished. Did you smile? 😂",
    "Reminder: Mahmoud is very lucky.",
    "You are officially today's favorite person.",
    "This button exists for one very important reason: you.",
    "If you smiled just now, I win. ✨",
    "A tiny reminder that someone is thinking about you.",
    "Hey نور عيني, just checking in on you. ❤",
    "Somewhere right now, Mahmoud is smiling just thinking about you.",
    "Warning: extreme cuteness detected. That's just you though.",
    "Yes, this button is silly. Yes, I'd tap it a hundred times for you.",
    "أبو الصراصير says hi 😂",
    "نور عيني، إنتي أحلى حاجة حصلتلي."
  ],

  // Memories grid — photo, title, date, description. Add new ones any time.
  memories: [
    {
      photo: "images/sara-collage.jpg",
      title: "Just you, being you",
      date: "our favorite kind of night",
      description: "A little collage of moments — the roses, the laugh, the look you give the camera."
    },
    {
      photo: "images/sara-2.jpg",
      title: "By the water",
      date: "a quiet, sunny afternoon",
      description: "One of those days that didn't need to be special to feel special."
    },
    {
      photo: "images/mahmoud-1.jpg",
      title: "Mahmoud, on a normal day",
      date: "just another day thinking of you",
      description: "She always gives me positive energy and makes me happy."
    },
    {
      photo: "images/mahmoud-2.jpg",
      title: "Somewhere green",
      date: "a good day",
      description: "One of the many days you make better, even from a distance."
    }
  ]

};

/* =====================================================================
   Utility helpers
   ===================================================================== */

function $(selector, scope = document){ return scope.querySelector(selector); }
function $all(selector, scope = document){ return Array.from(scope.querySelectorAll(selector)); }

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =====================================================================
   Ambient floating particles
   ===================================================================== */
function initAmbientParticles(){
  const ambient = $('#ambient');
  if (!ambient || prefersReducedMotion) return;

  const count = window.innerWidth < 480 ? 10 : 16;
  for (let i = 0; i < count; i++){
    const p = document.createElement('span');
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (4 + Math.random() * 5) + 'px';
    p.style.animationDuration = (14 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 16) + 's';
    ambient.appendChild(p);
  }
}

/* =====================================================================
   Opening screen → main site
   ===================================================================== */
function initOpening(){
  const opening = $('#opening');
  const site = $('#site');
  const enterBtn = $('#enterBtn');

  enterBtn.addEventListener('click', () => {
    opening.style.transition = 'opacity .6s ease';
    opening.style.opacity = '0';
    setTimeout(() => {
      opening.hidden = true;
      site.hidden = false;
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      initScrollReveal(); // re-check reveal targets now that they're visible
    }, prefersReducedMotion ? 0 : 550);
  });
}

/* =====================================================================
   Scroll reveal (IntersectionObserver)
   ===================================================================== */
let revealObserver;
function initScrollReveal(){
  const targets = $all('.reveal-on-scroll');
  if (!targets.length) return;

  if (prefersReducedMotion){
    targets.forEach(t => t.classList.add('is-visible'));
    return;
  }

  if (!revealObserver){
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  }

  targets.forEach(t => {
    if (!t.classList.contains('is-visible')) revealObserver.observe(t);
  });
}

/* =====================================================================
   Timeline
   ===================================================================== */
function renderTimeline(){
  const list = $('#timelineList');
  list.innerHTML = SITE_CONFIG.timeline.map(item => `
    <div class="timeline-item">
      <p class="timeline-date">${item.date}</p>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-desc">${item.description}</p>
    </div>
  `).join('');
}

/* =====================================================================
   Letter / envelope
   ===================================================================== */
function initLetter(){
  const envelope = $('#envelope');
  const openBtn = $('#openLetterBtn');
  const paper = $('#letterPaper');
  const body = $('#letterBody');
  let opened = false;

  function openLetter(){
    if (opened) return;
    opened = true;
    envelope.classList.add('is-open');
    openBtn.textContent = 'Reading… ❤';
    openBtn.disabled = true;

    setTimeout(() => {
      paper.hidden = false;
      typewriterReveal(body, SITE_CONFIG.letter);
    }, prefersReducedMotion ? 0 : 500);
  }

  envelope.addEventListener('click', openLetter);
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLetter(); }
  });
  openBtn.addEventListener('click', openLetter);
}

// Gentle typewriter-style reveal, paragraph by paragraph (kinder to Arabic text
// and to screen readers than a strict character-by-character reveal).
function typewriterReveal(el, text){
  const paragraphs = text.split('\n\n');
  el.textContent = '';

  if (prefersReducedMotion){
    el.textContent = text;
    return;
  }

  let pIndex = 0;
  function nextParagraph(){
    if (pIndex >= paragraphs.length) return;
    const p = document.createElement('span');
    p.style.display = 'block';
    p.style.marginBottom = '1.1em';
    p.style.opacity = '0';
    p.style.transition = 'opacity .8s ease';
    p.textContent = paragraphs[pIndex];
    el.appendChild(p);
    requestAnimationFrame(() => { p.style.opacity = '1'; });
    pIndex++;
    setTimeout(nextParagraph, 550);
  }
  nextParagraph();
}

/* =====================================================================
   Little things I love about you
   ===================================================================== */
function renderReasons(){
  const grid = $('#reasonsGrid');
  grid.innerHTML = SITE_CONFIG.favoriteThings.map(reason => `
    <div class="reason-card">
      <span class="reason-mark">❤</span>
      <p class="reason-text" lang="ar" dir="rtl">${reason}</p>
    </div>
  `).join('');
}

/* =====================================================================
   Make Sara smile
   ===================================================================== */
function initSmileButton(){
  const btn = $('#smileBtn');
  const msg = $('#smileMessage');
  let lastIndex = -1;

  btn.addEventListener('click', () => {
    let index;
    do {
      index = Math.floor(Math.random() * SITE_CONFIG.smileMessages.length);
    } while (index === lastIndex && SITE_CONFIG.smileMessages.length > 1);
    lastIndex = index;

    msg.style.opacity = '0';
    setTimeout(() => {
      msg.textContent = SITE_CONFIG.smileMessages[index];
      msg.style.transition = 'opacity .4s ease';
      msg.style.opacity = '1';
    }, prefersReducedMotion ? 0 : 150);
  });
}

/* =====================================================================
   Memories + lightbox
   ===================================================================== */
function renderMemories(){
  const grid = $('#memoriesGrid');
  grid.innerHTML = SITE_CONFIG.memories.map((m, i) => `
    <figure class="memory-card">
      <div class="memory-photo">
        <img src="${m.photo}" alt="${m.title}" loading="lazy" data-index="${i}">
      </div>
      <figcaption class="memory-info">
        <p class="memory-date">${m.date}</p>
        <p class="memory-title">${m.title}</p>
        <p class="memory-desc">${m.description}</p>
      </figcaption>
    </figure>
  `).join('');

  $all('.memory-photo img', grid).forEach(img => {
    img.addEventListener('click', () => openLightbox(Number(img.dataset.index)));
  });
}

function openLightbox(index){
  const memory = SITE_CONFIG.memories[index];
  if (!memory) return;
  const lightbox = $('#lightbox');
  $('#lightboxImg').src = memory.photo;
  $('#lightboxImg').alt = memory.title;
  $('#lightboxCaption').textContent = `${memory.title} — ${memory.date}`;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function initLightbox(){
  const lightbox = $('#lightbox');
  const closeBtn = $('#lightboxClose');

  function close(){
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
}

/* =====================================================================
   Our song player
   ===================================================================== */
function initPlayer(){
  const audio = $('#audioEl');
  const playBtn = $('#playBtn');
  const iconPlay = $('#iconPlay');
  const iconPause = $('#iconPause');
  const bar = $('#playerBar');
  const barFill = $('#playerBarFill');
  const currentEl = $('#playerCurrent');
  const durationEl = $('#playerDuration');
  const disc = $('#playerDisc');
  const hint = $('#playerHint');

  function formatTime(sec){
    if (!isFinite(sec) || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function togglePlay(){
    if (audio.paused){
      audio.play().catch(() => {
        hint.textContent = 'Add our-song.mp3 to public/audio/ so this can play.';
      });
    } else {
      audio.pause();
    }
  }

  playBtn.addEventListener('click', togglePlay);

  audio.addEventListener('play', () => {
    iconPlay.hidden = true;
    iconPause.hidden = false;
    if (!prefersReducedMotion) disc.classList.add('spinning');
    hint.style.display = 'none';
  });

  audio.addEventListener('pause', () => {
    iconPlay.hidden = false;
    iconPause.hidden = true;
    disc.classList.remove('spinning');
  });

  audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    currentEl.textContent = formatTime(audio.currentTime);
    if (audio.duration){
      barFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
      bar.setAttribute('aria-valuenow', Math.round(audio.currentTime / audio.duration * 100));
    }
  });

  audio.addEventListener('ended', () => {
    iconPlay.hidden = false;
    iconPause.hidden = true;
    disc.classList.remove('spinning');
  });

  function seekFromClientX(clientX){
    if (!audio.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = ratio * audio.duration;
  }

  bar.addEventListener('click', (e) => seekFromClientX(e.clientX));
  bar.addEventListener('keydown', (e) => {
    if (!audio.duration) return;
    if (e.key === 'ArrowRight'){ audio.currentTime = Math.min(audio.currentTime + 5, audio.duration); }
    if (e.key === 'ArrowLeft'){ audio.currentTime = Math.max(audio.currentTime - 5, 0); }
  });

  // If the audio file is missing, keep the friendly hint visible instead of erroring loudly.
  audio.addEventListener('error', () => {
    hint.style.display = 'block';
    hint.textContent = 'Add our-song.mp3 to public/audio/ to hear it play.';
  });
}

/* =====================================================================
   Relationship counter
   ===================================================================== */
function initCounter(){
  const start = new Date(SITE_CONFIG.relationshipStartDate + 'T00:00:00');
  const daysEl = $('#countDays');
  const hoursEl = $('#countHours');
  const minutesEl = $('#countMinutes');
  const secondsEl = $('#countSeconds');

  function update(){
    const now = new Date();
    let diff = Math.max(0, now - start);

    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    daysEl.textContent = days.toLocaleString();
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  update();
  setInterval(update, 1000);
}

/* =====================================================================
   Easter egg — five taps on the quiet little star
   ===================================================================== */
function initEasterEgg(){
  const star = $('#secretStar');
  const modal = $('#secretModal');
  const closeBtn = $('#secretCloseBtn');
  let taps = 0;

  star.addEventListener('click', () => {
    taps++;
    star.style.transform = `scale(${1 + taps * 0.06})`;
    if (taps >= 5){
      modal.hidden = false;
      taps = 0;
      star.style.transform = '';
    }
  });

  closeBtn.addEventListener('click', () => { modal.hidden = true; });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
}

/* =====================================================================
   Start over
   ===================================================================== */
function initStartOver(){
  $('#startOverBtn').addEventListener('click', () => {
    const site = $('#site');
    const opening = $('#opening');

    site.hidden = true;
    opening.hidden = false;
    opening.style.opacity = '1';
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Reset the letter so it can be opened again from scratch
    const envelope = $('#envelope');
    const paper = $('#letterPaper');
    const openBtn = $('#openLetterBtn');
    envelope.classList.remove('is-open');
    paper.hidden = true;
    paper.querySelector ? null : null;
    $('#letterBody').textContent = '';
    openBtn.disabled = false;
    openBtn.textContent = 'Open my letter';

    // Pause the song if it was playing
    const audio = $('#audioEl');
    if (audio && !audio.paused) audio.pause();
  });
}

/* =====================================================================
   Boot
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initAmbientParticles();
  initOpening();
  renderTimeline();
  initLetter();
  renderReasons();
  initSmileButton();
  renderMemories();
  initLightbox();
  initPlayer();
  initCounter();
  initEasterEgg();
  initStartOver();
  initScrollReveal();
});
