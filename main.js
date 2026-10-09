'use strict';
let active='All', currentStory=null, returnFocus=null;
const booksEl=document.getElementById('books'),grid=document.getElementById('grid'),search=document.getElementById('search'),modal=document.getElementById('modal');
const panels=['summary','dialogue','takeaway','bible'];
const tabIds=['sumBtn','diaBtn','takeBtn','bibleBtn'];
const storyId=s=>s.title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function bibleUrl(ref){return 'https://www.biblegateway.com/passage/?search='+encodeURIComponent(ref)+'&version=NKJV'}
function renderBooks(){booksEl.replaceChildren();['All',...BOOKS].forEach(b=>{const x=document.createElement('button');x.type='button';x.textContent=b;x.className=b===active?'active':'';x.setAttribute('aria-pressed',String(b===active));x.onclick=()=>{active=b;renderBooks();render()};booksEl.append(x)})}
function render(){
 const q=search.value.trim().toLowerCase();const rows=STORIES.filter(s=>(active==='All'||s.book===active)&&(!q||[s.book,s.title,s.ref,s.summary].join(' ').toLowerCase().includes(q)));
 const intro=BOOK_INTROS.find(b=>b.book===active);document.getElementById('bookIntro').innerHTML=intro?`<article class="book-intro"><div class="ref">${escapeHtml(intro.book)} · Book introduction</div><h2>${escapeHtml(intro.title)}</h2><p>${escapeHtml(intro.quick)}</p><details><summary>Give me the bigger picture</summary><p>${escapeHtml(intro.first)}</p><p>${escapeHtml(intro.second)}</p></details><a href="${bibleUrl(intro.book+' 1')}" target="_blank" rel="noopener noreferrer">Start reading ${escapeHtml(intro.book)} ↗</a></article>`:'<p>Explore 97 retellings, with introductions to all 66 books. Some books have an introduction while their individual stories are still being prepared.</p>';
 document.getElementById('count').textContent=`${rows.length} drama ${rows.length===1?'story':'stories'} shown`;grid.replaceChildren();
 if(!rows.length){const box=document.createElement('div');box.className='empty';box.textContent=q?'No stories match that search. Try another name, passage, or book.':'This book’s introduction is ready above. Individual dramatic retellings are still being prepared.';if(q){const button=document.createElement('button');button.className='clear-search';button.textContent='Clear search';button.onclick=()=>{search.value='';render();search.focus()};box.append(document.createElement('br'),button)}grid.append(box);return}
 rows.forEach(s=>{const c=document.createElement('article');c.className='card';const summary=s.summary.length>220?s.summary.slice(0,217)+'…':s.summary;c.innerHTML=`<div class="ref">${escapeHtml(s.ref)}</div><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(summary)}</p>`;const button=document.createElement('button');button.className='open-story';button.textContent='Open story →';button.setAttribute('aria-label','Open '+s.title);button.onclick=()=>openStory(s);c.append(button);grid.append(c)})
}
function stopAudio(){modal.querySelectorAll('audio').forEach(a=>a.pause())}
function audioButton(url,label){if(!url)return '<p class="audio-status">This section is ready to read. Kayla’s recording isn’t available yet.</p>';return `<div class="note"><p>${escapeHtml(label)} · Kayla’s voice</p><audio aria-label="${escapeHtml(label)}" controls preload="none" style="width:100%" src="${escapeHtml(url)}"></audio><p class="audio-status" hidden>That recording couldn’t load. You can still read the full section below.</p></div>`}
function openStory(s,updateHistory=true){
 stopAudio();if(!modal.open)returnFocus=document.activeElement;currentStory=s;
 document.getElementById('mref').textContent=s.ref;document.getElementById('mtitle').textContent=s.title;document.getElementById('msummary').textContent=s.summary;document.getElementById('mtakeaway').textContent=s.takeaway;
 ['summary','dialogue','takeaway'].forEach((name,i)=>{document.getElementById(name+'Audio').innerHTML=audioButton((s.audioSections||{})[name],['Listen to Quick Tea','Listen to The Drama','Listen to What Got Me'][i])});
 modal.querySelectorAll('audio').forEach(a=>{a.addEventListener('error',()=>{a.nextElementSibling.hidden=false});a.addEventListener('play',()=>modal.querySelectorAll('audio').forEach(other=>{if(other!==a)other.pause()}))});
 document.getElementById('bibleRef').textContent=s.ref;document.getElementById('bibleLink').href=bibleUrl(s.ref);document.getElementById('mlines').innerHTML=s.dialogue.map(x=>`<div class="line"><span class="speaker">${escapeHtml(x.speaker)}</span>${escapeHtml(x.line)}</div>`).join('');tab('summary');if(!modal.open)modal.showModal();modal.scrollTop=0;
 if(updateHistory){const url=new URL(location.href);url.searchParams.set('story',storyId(s));history.pushState({bibleTeaStory:true},'',url)}
}
function clearStoryUrl(){const url=new URL(location.href);url.searchParams.delete('story');url.searchParams.delete('view');history.replaceState(null,'',url)}
function closeModal(){if(!modal.open)return;stopAudio();modal.close();currentStory=null;if(history.state?.bibleTeaStory)history.back();else clearStoryUrl()}
modal.addEventListener('cancel',e=>{e.preventDefault();closeModal()});modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});modal.addEventListener('close',()=>{stopAudio();if(returnFocus?.isConnected)returnFocus.focus()});
function tab(t){stopAudio();panels.forEach((name,i)=>{document.getElementById(name).classList.toggle('on',t===name);const button=document.getElementById(tabIds[i]);button.classList.toggle('on',t===name);button.setAttribute('aria-pressed',String(t===name));button.setAttribute('aria-controls',name)})}
function juicyMatches(term){return STORIES.filter(s=>[s.title,s.summary,s.ref,s.book].join(' ').toLowerCase().includes(term.toLowerCase()))}
function openJuicy(term){const preferred={'Jacob':'Jacob Meets Rachel','Potiphar':'Joseph in Egypt','Delilah':'Samson','Saul':'David Spares Saul'};const s=STORIES.find(s=>s.title===preferred[term])||juicyMatches(term)[0];if(s){openStory(s);return}search.value=term;active='All';renderBooks();render();grid.scrollIntoView({behavior:'smooth'})}
function randomJuicy(){const pool=[...new Set(['Jacob','Potiphar','Delilah','Bathsheba','Esther','Saul','Ananias'].flatMap(juicyMatches))];if(pool.length)openStory(pool[Math.floor(Math.random()*pool.length)])}
function restoreLocation(){const id=new URLSearchParams(location.search).get('story');const s=STORIES.find(s=>storyId(s)===id);if(s){openStory(s,false)}else if(modal.open){stopAudio();modal.close();currentStory=null}}
window.addEventListener('popstate',restoreLocation);search.addEventListener('input',render);renderBooks();render();restoreLocation();
