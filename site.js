(function(){try{if(window.__mfk)return;window.__mfk=1;var l=location,h=l.hostname,n=navigator,r='',q0='',p=l.pathname.slice(0,300),K='sb_publishable_UnQ35pj_GatInq-7lhFGgQ_DnRoUnDC',M=/(^|\.)mushafuk\.online$/;if(!M.test(h)||/^\/admin(\/|$)/.test(p)||n.webdriver||/bot|crawl|spider|slurp|preview|headless|lighthouse/i.test(n.userAgent))return;function S(t,o){fetch('https://isvqwafixlmusmuqqnyk.supabase.co/rest/v1/'+t,{method:'POST',keepalive:true,headers:{apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(o)}).catch(function(){})}try{r=new URL(document.referrer).hostname}catch(e){}if(M.test(r))r='';r=r||null;if(window.__mfk404){S('events',{host:h,kind:'404',path:p,ref_host:r});return}window.mfkS=function(q,c){q=String(q||'').trim().slice(0,100);if(q&&q!==q0){q0=q;S('events',{host:h,kind:'search',path:p,q:q,results:c|0})}};S('pageviews',{host:h,path:p,ref_host:r,lang:(document.documentElement.lang||n.language||'').slice(0,12),device:innerWidth<768?'mobile':'desktop'})}catch(e){}})();
document.querySelectorAll('.langs').forEach(function(l){var b=l.querySelector('.lbtn');b.onclick=function(e){e.stopPropagation();var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)}});
function closeL(){document.querySelectorAll('.langs.open').forEach(function(l){l.classList.remove('open');l.querySelector('.lbtn').setAttribute('aria-expanded','false')})}
document.addEventListener('click',function(e){if(!e.target.closest('.langs'))closeL()});document.addEventListener('keydown',function(e){if(e.key==='Escape')closeL()});
(function(){
  var a=document.getElementById('resume'); if(!a) return;
  var h=[]; try{h=JSON.parse(localStorage.getItem('qm-recent')||'[]')}catch(e){}
  if(!h.length||!h[0].p) return;
  var lang=document.documentElement.lang||'ar';
  var words={ar:'تابع — الصفحة ',az:'Davam et — səhifə ',tr:'Devam et — sayfa ',en:'Continue — page ',ru:'Продолжить — стр. ',id:'Lanjutkan — halaman ',ur:'جاری رکھیں — صفحہ ',fr:'Continuer — page ',bn:'চালিয়ে যান — পৃষ্ঠা ',ms:'Teruskan — muka surat '};
  a.textContent=(words[lang]||words.en)+h[0].p;
  var own={ar:1,az:1,tr:1,en:1,ru:1};
  a.href=(own[lang]?'page/':'/en/page/')+h[0].p+'/';
  a.hidden=false;
})();

;try{var qs=document.createElement("script");qs.src="https://mushafuk.online/read-shelf.js?v=3";document.head.appendChild(qs);}catch(e){}

;(function(){
  if (window.__qmHomeBtn) return;
  window.__qmHomeBtn = 1;
  function label(){
    var L={az:"Ana səhifə",tr:"Ana sayfa",en:"Home",ru:"Главная",ar:"الرئيسية",ur:"صفحہ اول",fa:"خانه",uz:"Bosh sahifa",tg:"Саҳифаи асосӣ",ky:"Башкы бет",ug:"باش بەت",ps:"کورپاڼه",ku:"Destpêk",hi:"मुखपृष्ठ",ta:"முகப்பு",fr:"Accueil",de:"Startseite",nl:"Startpagina",es:"Inicio",pt:"Início",ha:"Gida",so:"Bogga hore",ja:"ホーム",bn:"মূলপাতা",id:"Beranda",ms:"Laman utama"};
    var lang=(document.documentElement.lang||"").slice(0,2).toLowerCase();
    if(!L[lang]){var pm=location.pathname.match(/^\/([a-z]{2})(?:\/|$)/);if(pm)lang=pm[1];}
    return L[lang]||L.en;
  }
  function css(){
    if(document.getElementById("qm-home-css"))return;
    var st=document.createElement("style");
    st.id="qm-home-css";
    st.textContent="a.qm-home{display:inline-flex;align-items:center;justify-content:center;gap:.3rem;flex:none;color:#0f4d3a;font-weight:650;font-size:.78rem;line-height:1;text-decoration:none;white-space:nowrap;padding:.28rem .58rem;height:2.2rem;box-sizing:border-box;border-radius:999px;border:1px solid rgba(15,77,58,.28);background:rgba(15,77,58,.08)}a.qm-home svg{width:1.15rem;height:1.15rem;display:block;flex:none}a.qm-home:focus-visible{outline:2px solid #0f4d3a;outline-offset:2px}html.qm-theme-black a.qm-home,html.qm-night a.qm-home,html.qm-theme-black header a.qm-home,html.qm-night header a.qm-home{color:#d7b56a!important;border-color:#6a5a3a;background:#1c1c1c}html.qm-theme-white a.qm-home{color:#0b3a2c!important;border-color:#bbb;background:#fff}@media(max-width:520px){a.qm-home{width:2.2rem;padding:0;gap:0;border-radius:50%}a.qm-home .qm-home-lbl{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}}";
    document.head.appendChild(st);
  }
  function place(){
    var bar=document.querySelector("body>header, header.bar, header.tr-bar, header.nav .in");
    if(!bar||bar.querySelector("a.qm-home"))return;
    if(!bar.querySelector("a#back, a.x, a.home-brand, a.logo"))return;
    css();
    var old=bar.querySelector("a.home-brand");
    if(old&&old.parentNode)old.parentNode.removeChild(old);
    var lbl=label();
    var home=document.createElement("a");
    home.className="qm-home";
    home.href="https://mushafuk.online/";
    home.setAttribute("aria-label",lbl);
    home.title=lbl;
    home.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11.2 12 4l8 7.2"/><path d="M7 10.2V20h10V10.2"/><path d="M10 20v-6h4v6"/></svg><span class="qm-home-lbl">'+lbl+"</span>";
    var x=bar.querySelector("a#back, a.x, a.logo");
    if(x&&x.nextSibling)bar.insertBefore(home,x.nextSibling);
    else if(x)bar.appendChild(home);
    else bar.insertBefore(home,bar.firstChild);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",place);
  else place();
})();
