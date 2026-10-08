const nav=document.querySelector('.nav'),burger=document.querySelector('.burger');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.q button').forEach(b=>b.addEventListener('click',()=>{
  const item=b.parentElement,was=item.classList.contains('open');
  document.querySelectorAll('.q').forEach(q=>q.classList.remove('open'));
  if(!was)item.classList.add('open');
}));

const links=[...document.querySelectorAll('nav a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
}),{threshold:.4});
document.querySelectorAll('section[id]').forEach(s=>io.observe(s));

const reveal = [
  ['.hero-title span', 'reveal-up'],
  ['.hero-bottom', 'reveal-up'],
  ['.about-text', 'reveal-left'],
  ['.head h2', 'reveal-up'],
  ['.head p', 'reveal-up'],
  ['.card', 'reveal-up'],
  ['.banner h2', 'reveal-up'],
  ['.banner p', 'reveal-up'],
  ['.faq-img', 'reveal-zoom'],
  ['.q', 'reveal-up'],
  ['.t', 'reveal-up'],
  ['.video', 'reveal-zoom'],
  ['.foot-grid > div', 'reveal-up']
];

reveal.forEach(([sel, type]) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal', type);
    el.style.setProperty('--d', (i % 4) * 0.12 + 's'); 
  });
});

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
    } else {
      e.target.classList.remove('in'); 
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

const setScrolled = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', setScrolled, { passive: true });
setScrolled();