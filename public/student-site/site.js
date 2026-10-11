const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation?.classList.toggle('open',open);menuButton.setAttribute('aria-label',open?'關閉選單':'開啟選單');});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','開啟選單');}));
const backTop=document.querySelector('.back-top');
window.addEventListener('scroll',()=>{backTop?.classList.toggle('visible',window.scrollY>500);},{passive:true});
backTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
const sections=document.querySelectorAll('main section[id]');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navigation?.querySelectorAll('a').forEach(link=>{const current=link.getAttribute('href')==='#'+entry.target.id;link.classList.toggle('active',current);if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));}