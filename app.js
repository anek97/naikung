// ═══════════════════════════════════════════════════════════
// APP.JS — All logic lives here. No need to touch this
// file unless adding new features.
// ═══════════════════════════════════════════════════════════

// ── STATE ──────────────────────────────────────────────────
let currentLevel = null;
let completed    = JSON.parse(localStorage.getItem('nk_completed') || '[]');

// ── PARTICLES ──────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx    = canvas.getContext('2d');
  let pts      = [];
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  pts = Array.from({ length: 55 }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    r:  Math.random() * 1.4 + 0.3,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    a:  Math.random() * 0.42 + 0.08
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,170,100,${p.a})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
})();

// ── RENDER DAILY ───────────────────────────────────────────
function renderDaily() {
  document.getElementById('daily-items').innerHTML = DAILY.map(d => `
    <div class="daily-item">
      <div class="daily-time">${d.time}</div>
      <div class="daily-body">
        <div class="daily-name">${d.name}</div>
        <div class="daily-desc">${d.desc}</div>
      </div>
    </div>
  `).join('');
}

// ── RENDER LEVEL LIST ──────────────────────────────────────
function renderList() {
  const reversed = [...LEVELS].reverse();
  document.getElementById('level-list').innerHTML = reversed.map((lv, ri) => {
    const origIdx = LEVELS.length - 1 - ri;
    const done    = completed.includes(lv.id);
    const side    = origIdx % 2 === 0 ? 'left' : 'right';
    return `
      <div class="level-row ${side}" onclick="openLevel(${lv.id})">
        <div class="spine-node ${done ? 'done' : ''}"
          style="border-color:${lv.accent};color:${lv.accent};
          ${done ? `background:${lv.accent};` : ''}"></div>
        <div class="level-card"
          style="border-color:${done ? lv.accent : 'rgba(200,168,122,0.1)'};
          ${done ? `box-shadow:0 0 20px ${lv.glow};` : ''}">
          <div class="card-gate" style="color:${lv.accent}">${lv.gate}</div>
          <div class="card-name">${lv.name}</div>
          <div class="card-chinese" style="color:${lv.accent}">${lv.chinese}</div>
          <div class="card-subtitle">${lv.subtitle}</div>
          ${lv.prerequisite ? `<div class="card-prereq">⟳ Requires: ${lv.prerequisite}</div>` : ''}
          <div class="card-footer">
            <span class="card-element">${lv.element}</span>
            <span class="card-symbol" style="color:${lv.accent}">${lv.symbol}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── OPEN LEVEL ─────────────────────────────────────────────
function openLevel(id) {
  currentLevel = LEVELS.find(l => l.id === id);
  renderDetail();
  switchTab('unclog', document.querySelector('.tab-btn[data-tab="unclog"]'));
  showScreen('detail');
  document.getElementById('screen-detail').scrollTop = 0;
}

// ── RENDER DETAIL HEADER ───────────────────────────────────
function renderDetail() {
  const lv = currentLevel;
  const header = document.getElementById('detail-header');

  header.style.background =
    `linear-gradient(135deg, ${lv.glow} 0%, rgba(8,8,8,0.93) 65%)`;

  document.getElementById('d-eyebrow').textContent  = lv.gate;
  document.getElementById('d-eyebrow').style.color  = lv.accent;
  document.getElementById('d-title').textContent    = lv.name;
  document.getElementById('d-chinese').textContent  = lv.chinese;
  document.getElementById('d-chinese').style.color  = lv.accent;
  document.getElementById('d-subtitle').textContent = lv.subtitle;
  document.getElementById('d-location').textContent = lv.location;

  const pct = ((lv.id + 1) / LEVELS.length) * 100;
  const bar = document.getElementById('progress-fill');
  bar.style.width      = pct + '%';
  bar.style.background = lv.accent;

  renderTabContent();
}

// ── RENDER ALL TAB CONTENT ─────────────────────────────────
function renderTabContent() {
  const lv   = currentLevel;
  const done = completed.includes(lv.id);

  // UNCLOG
  document.getElementById('tab-unclog').innerHTML = `
    <div class="section-eyebrow" style="color:${lv.accent}">${lv.unclog.title}</div>
    ${lv.unclog.steps.map((s, i) => `
      <div class="step-item">
        <div class="step-num" style="border-color:${lv.accent}55;color:${lv.accent}">${i + 1}</div>
        <div class="step-text">${s}</div>
      </div>`).join('')}
  `;

  // CULTIVATE
  document.getElementById('tab-cultivate').innerHTML = `
    <div class="section-eyebrow" style="color:${lv.accent}">${lv.cultivate.title}</div>
    ${lv.cultivate.steps.map((s, i) => `
      <div class="step-item">
        <div class="step-num filled" style="background:${lv.accent}18;border-color:${lv.accent}33;color:${lv.accent}">${i + 1}</div>
        <div class="step-text">${s}</div>
      </div>`).join('')}
  `;

  // SENSATIONS
  document.getElementById('tab-sensations').innerHTML = `
    <div class="section-eyebrow" style="color:${lv.accent}">What You Will Feel — Stage by Stage</div>
    ${lv.sensations.map(s => `
      <div class="sensation-card" style="border-left-color:${lv.accent}">
        <div class="sensation-phase" style="color:${lv.accent}">${s.phase}</div>
        <div class="sensation-text">${s.text}</div>
      </div>`).join('')}
    <div class="warning-box">
      <div class="warning-label">⚠ Warning</div>
      <div class="warning-text">${lv.warning}</div>
    </div>
  `;

  // PASSING
  document.getElementById('tab-passing').innerHTML = `
    <div class="section-eyebrow" style="color:${lv.accent}">How to Know You Have Passed</div>
    <div class="passing-box" style="border-color:${lv.accent}22">${lv.passing}</div>
    <button class="mark-btn" onclick="toggleComplete(${lv.id})"
      style="border-color:${lv.accent};
             color:${done ? '#080808' : lv.accent};
             background:${done ? lv.accent : 'transparent'}">
      ${done ? '✓ Marked as Passed' : 'Mark This Gate Passed'}
    </button>
    ${lv.prerequisite ? `
      <div class="prereq-box">
        <span class="prereq-label">PREREQUISITE</span>
        ${lv.prerequisite}
      </div>` : ''}
  `;
}

// ── SWITCH TAB ─────────────────────────────────────────────
function switchTab(name, btn) {
  const lv = currentLevel;

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.style.borderBottomColor = 'transparent';
    b.style.color = '#2A1A0A';
  });

  if (btn) {
    btn.classList.add('active');
    btn.style.borderBottomColor = lv.accent;
    btn.style.color = lv.accent;
  }

  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById('tab-' + name);
  if (target) target.classList.add('active');
}

// ── TOGGLE COMPLETE ────────────────────────────────────────
function toggleComplete(id) {
  const idx = completed.indexOf(id);
  if (idx === -1) completed.push(id);
  else completed.splice(idx, 1);
  localStorage.setItem('nk_completed', JSON.stringify(completed));
  renderList();
  renderTabContent();
}

// ── DAILY TOGGLE ───────────────────────────────────────────
function toggleDaily() {
  const panel = document.getElementById('daily-panel');
  const btn   = document.querySelector('.toggle-btn');
  const open  = panel.classList.toggle('open');
  btn.textContent = open ? '↑ Hide Daily Sequence' : '↓ Daily Practice Sequence';
}

// ── NAVIGATION ─────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('home');
  renderList(); // refresh pass markers
}

// ── SERVICE WORKER REGISTRATION ────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ── INIT ───────────────────────────────────────────────────
renderDaily();
renderList();
