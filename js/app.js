(()=>{
const C=WEDDING,T=I18N,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L='en';try{L=localStorage.getItem('lang')||'en'}catch(e){}
const t=k=>(T[L]&&T[L][k])||T.en[k]||k,pick=o=>typeof o==='string'?o:(o[L]||o.en);
function petal(e,n,keep){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='pt';s.textContent=e[i%e.length];
 s.style.cssText=`left:${Math.random()*100}vw;animation-duration:${6+Math.random()*8}s;animation-delay:${Math.random()*4}s;font-size:${14+Math.random()*14}px`;
 document.body.appendChild(s);if(!keep)setTimeout(()=>s.remove(),16000)}}
function fam(){
 $('#gfl').innerHTML=C.groom.map(([r,n])=>`<li><span>${t('r_'+r)}</span><b>${n}</b></li>`).join('');
 $('#bfl').innerHTML=C.bride.map(([r,n])=>`<li><span>${t('r_'+r)}</span><b>${n}</b></li>`).join('');
 $('#late').innerHTML=`<p><span>${t('lateGP')}</span><b>${C.late[0]}</b></p><p><span>${t('lateGGP')}</span><b>${C.late[1]}</b></p>`;
 $('#steps').innerHTML=[1,2,3,4,5,6,7].map(i=>`<li>${t('s'+i)}</li>`).join('');
 $('#ft').textContent=`${C.names.groom} ❤ ${C.names.bride} · ${C.groom[0][1]} & ${C.groom[1][1]} · ${C.bride[0][1]} & ${C.bride[1][1]}`}
function g1(){const b=$('#g1');let i=0,s=0;const show=()=>{
 if(i>=C.quiz.length){b.innerHTML=`<h4>${t('score')}: ${s}/${C.quiz.length}</h4><button class="btn" id="r1">${t('again')}</button>`;$('#r1').onclick=()=>{i=0;s=0;show()};return}
 const q=C.quiz[i];b.innerHTML=`<p>${pick(q.q)}</p>`+q.o.map((o,j)=>`<button class="opt" data-j="${j}">${pick(o)}</button>`).join('');
 $$('#g1 .opt').forEach(x=>x.onclick=()=>{if(+x.dataset.j===q.a)s++;i++;show()})};show()}
function g2(){const b=$('#g2'),n=C.names;let i=0,a=0,p=0;const show=()=>{
 if(i>=C.likely.length){const m=`${n.groom} ${a} – ${p} ${n.bride}`;b.innerHTML=`<h4>${m}</h4><div class="bar2"><i style="width:${a/(a+p||1)*100}%"></i></div><a class="btn" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(m+' '+location.href)}">${t('share')}</a><button class="btn" id="r2">${t('again')}</button>`;$('#r2').onclick=()=>{i=a=p=0;show()};return}
 b.innerHTML=`<p>${pick(C.likely[i])}</p><button class="opt" data-w="a">${n.groom}</button><button class="opt" data-w="p">${n.bride}</button>`;
 $$('#g2 .opt').forEach(x=>x.onclick=()=>{x.dataset.w==='a'?a++:p++;i++;show()})};show()}
function g3(){const b=$('#g3'),O=['💍','❤️','🪔'];let st=0;const show=()=>{
 if(st>=3){b.innerHTML=`<h4>🎉 ${t('won')}</h4>`;petal(['🌸','🏵️','❤️','✨'],40);return}
 const h=Math.floor(Math.random()*12);
 b.innerHTML=`<p>${t('find')} ${O[st]} (${st+1}/3)</p><div class="grid">`+Array.from({length:12},(_,i)=>`<button class="cell" data-i="${i}" aria-label="flower">🌺</button>`).join('')+`</div><button class="btn" id="hint">${t('hint')}</button>`;
 $$('#g3 .cell').forEach(c=>c.onclick=()=>{if(+c.dataset.i===h){c.textContent=O[st];st++;setTimeout(show,800)}else{c.textContent='·';c.disabled=true}});
 $('#hint').onclick=e=>{e.target.textContent=t('row')+' '+(Math.floor(h/4)+1)}};show()}
function gal(){const g=$('#gal');if(!C.gallery.length){g.innerHTML=`<p class="note">${t('galEmpty')}</p>`;return}
 g.innerHTML=C.gallery.map(p=>`<img loading="lazy" src="${p.src}" alt="${p.cap||''}">`).join('');
 $$('#gal img').forEach(im=>im.onclick=()=>{$('#lb img').src=im.src;$('#lb').hidden=false})}
$('#lb').onclick=()=>$('#lb').hidden=true;
function lang(l){if(l)L=l;try{localStorage.setItem('lang',L)}catch(e){}
 document.documentElement.lang=L;document.body.classList.remove('l-en','l-te','l-hi');document.body.classList.add('l-'+L);
 $$('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
 $('#rf [name=name]').placeholder=t('nameph');$('#rf [name=msg]').placeholder=t('msgph');$('#bt').placeholder=t('msgph');
 fam();g1();g2();g3();gal();tick()}
$$('[data-l]').forEach(b=>b.onclick=()=>lang(b.dataset.l));
function tick(){const d=C.date-Date.now(),c=$('#cd');
 if(d<=0){c.innerHTML=`<p class="gold">${t('today')}</p>`;return}
 const v=[d/864e5,d/36e5%24,d/6e4%60,d/1e3%60].map(Math.floor),k=['dd','hh','mm','ss'];
 c.innerHTML=v.map((x,i)=>`<div><b>${String(x).padStart(2,'0')}</b>${t(k[i])}</div>`).join('')}
setInterval(tick,1000);
const au=$('#au'),bad=()=>{$('#mnote').hidden=false;$('#mt').textContent='🔇'};
function play(){au.volume=$('#vol').value;au.play().then(()=>$('#mt').textContent='🔊').catch(bad)}
au.addEventListener('error',bad);
$('#mt').onclick=()=>{if(au.paused)play();else{au.pause();$('#mt').textContent='🔇'}};
$('#vol').oninput=e=>au.volume=e.target.value;
const vn=()=>$('#vnote').hidden=false;
$('#vid').querySelector('source').addEventListener('error',vn);$('#vid').addEventListener('error',vn);
const enter=q=>{const g=$('#gate');if(q)g.remove();else{g.classList.add('open');setTimeout(()=>g.remove(),3000)}
 document.body.classList.remove('lock');play();petal(['🌸','🏵️','🪷'],14,true)};
$('#enter').onclick=()=>enter();$('#skip').onclick=()=>enter(true);
const ll=`${C.lat},${C.lng}`,link=`https://www.google.com/maps?q=${ll}`;
$('#map').src=`https://maps.google.com/maps?q=${ll}&z=16&output=embed`;
$('#om').href=link;$('#nv').href=`https://www.google.com/maps/dir/?api=1&destination=${ll}`;
$('#ws').href=`https://wa.me/?text=${encodeURIComponent(link)}`;$('#tel').href='tel:+91'+C.phone;
$('#cp').onclick=async e=>{try{await navigator.clipboard.writeText(link)}catch(x){}e.target.textContent=t('copied');setTimeout(()=>e.target.textContent=t('copy'),1800)};
$('#rf').onsubmit=async e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),m=$('#rm');
 if(C.formEndpoint){try{const r=await fetch(C.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(f)});m.textContent=r.ok?t('sent'):t('fail')}catch(x){m.textContent=t('fail')}}
 else{m.textContent=t('nostore');window.open(`https://wa.me/91${C.phone}?text=`+encodeURIComponent(`RSVP: ${f.name}, guests: ${f.guests}. ${f.msg||''}`),'_blank')}};
let B=[];try{B=JSON.parse(localStorage.getItem('b')||'[]')}catch(e){}
function wall(){const w=$('#wall');w.textContent='';B.forEach(x=>{const q=document.createElement('blockquote');q.textContent=x;w.prepend(q)})}
$('#bfm').onsubmit=e=>{e.preventDefault();const v=$('#bt').value.trim();if(!v)return;B.push(v.slice(0,200));try{localStorage.setItem('b',JSON.stringify(B))}catch(x){}$('#bt').value='';wall()};
wall();lang();
})();
