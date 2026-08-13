(function(){
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const toggle=document.querySelector('.nav-toggle'), menu=document.getElementById('nav-menu');
  if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));}
  if(window.gsap&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.registerPlugin(ScrollTrigger);gsap.utils.toArray('.reveal').forEach((el)=>{gsap.to(el,{opacity:1,y:0,duration:.75,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})});}
  else document.querySelectorAll('.reveal').forEach(el=>{el.style.opacity='1';el.style.transform='none'});
})();
