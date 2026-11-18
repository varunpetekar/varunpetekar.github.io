// CURSOR
const cur=document.getElementById('cur'), curf=document.getElementById('curf');
let fx=0,fy=0,mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function aF(){fx+=(mx-fx)*.12;fy+=(my-fy)*.12;curf.style.left=fx+'px';curf.style.top=fy+'px';requestAnimationFrame(aF);})();
document.querySelectorAll('a,button,.pc,.sk,.cc,.lang-it').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='20px';cur.style.height='20px';curf.style.width='60px';curf.style.height='60px';});
  el.addEventListener('mouseleave',()=>{cur.style.width='12px';cur.style.height='12px';curf.style.width='40px';curf.style.height='40px';});
});

// NAV
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('sc',scrollY>80));

// REVEAL
const ro=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');ro.unobserve(x.target);}});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// COUNTER
function cUp(el,tgt,sfx){let v=0;const s=tgt/120;const t=setInterval(()=>{v+=s;if(v>=tgt){el.textContent=tgt+sfx;clearInterval(t);return;}el.textContent=Math.floor(v)+sfx;},30);}
const so=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.querySelectorAll('.stat-num').forEach(n=>{const originalText=n.textContent;const num=parseInt(originalText.replace(/\D/g,''));const sfx=originalText.replace(/\d/g,'');n.textContent='0';cUp(n,num,sfx);});so.unobserve(x.target);}});},{threshold:.5});
const hs=document.querySelector('.hero-stats');if(hs)so.observe(hs);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});}));

// PARALLAX
window.addEventListener('scroll',()=>{const img=document.querySelector('#hero .hero-bg img');if(img)img.style.transform=`scale(1.07) translateY(${scrollY*.28}px)`;});
