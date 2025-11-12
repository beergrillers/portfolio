// Simple JS to load projects from data/projects.json and render them
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  fetch('data/projects.json')
    .then(r => r.json())
    .then(data => renderProjects(data))
    .catch(err => {
      console.error('Errore caricamento progetti:', err);
      const el = document.getElementById('projects-list');
      if(el) el.innerHTML = '<p style="color:#f88">Impossibile caricare i progetti.</p>';
    });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // simple contact form feedback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      // let the form submit normally to the configured endpoint; show a small message
      const submitBtn = form.querySelector('button[type="submit"]');
      if(submitBtn){
        submitBtn.disabled = true;
        submitBtn.textContent = 'Invio...';
      }
      // graceful fallback: re-enable after 3s in case endpoint not configured
      setTimeout(()=>{
        if(submitBtn){submitBtn.disabled=false;submitBtn.textContent='Invia'}
      }, 3000);
    });
  }
});

function renderProjects(projects){
  const list = document.getElementById('projects-list');
  if(!list) return;
  list.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.description)}</p>
      <div class="project-tags">${(p.stack||[]).map(s=>`<span class="tag">${escapeHtml(s)}</span>`).join('')}</div>
      <div class="project-actions">
        ${p.link?`<a href="${escapeHtmlAttr(p.link)}" target="_blank" rel="noopener">Visita</a>`:''}
      </div>
    `;
    list.appendChild(card);
  });
}

function escapeHtml(str){
  if(!str) return '';
  return str.replace(/[&<>"']/g, (c)=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]);
}
function escapeHtmlAttr(s){return escapeHtml(s)}
