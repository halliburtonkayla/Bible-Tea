'use strict';
const $=id=>document.getElementById(id);
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const books=BIBLE_BOOKS.map(([name,chapters],i)=>({name:name==='Song of Songs'?'Song of Solomon':name,chapters,index:i}));
const teas=[];
books.forEach(book=>{
 const intro=BOOK_INTROS.find(s=>s.book===book.name);
 teas.push({id:slug(book.name)+'-introduction',book:book.name,title:intro.title,ref:book.name+' 1–'+book.chapters,quick:intro.quick,paragraphs:[intro.first,intro.second],kind:'Book introduction'});
 ORIGINAL_STORIES.filter(s=>s.ref.startsWith(book.name+' ')).forEach(s=>{const id=s.audio.split('/').pop().replace('.mp3','');const full=FULL_STORIES.find(x=>x.id===id);teas.push({id,book:book.name,title:s.title,ref:s.ref,quick:s.recap,paragraphs:full.paragraphs,takeaway:s.takeaway,audio:s.audio,fullAudio:'detail-audio/'+id+'.mp3',kind:'Bible Tea story'});});
});
const href=(tea,full=false)=>'index.html?book='+encodeURIComponent(tea.book)+'&tea='+encodeURIComponent(tea.id)+(full?'&view=all':'');
const audio=$('voice');let current=null;
function stop(){audio.pause();audio.removeAttribute('src');audio.load();}
function render(focus=false){
 stop();const params=new URLSearchParams(location.search);const oldId=params.get('story');let tea=teas.find(s=>s.id===(params.get('tea')||oldId));
 const book=books.find(b=>b.name===params.get('book'))||books.find(b=>b.name===tea?.book)||books[0];
 if(!tea||tea.book!==book.name)tea=teas.find(t=>t.book===book.name && t.audio)||teas.find(t=>t.book===book.name);
 const full=params.get('view')==='all'||!!oldId;current=tea;
 document.title=tea.title+' · Bible Tea';$('bookName').textContent=book.name;$('testament').textContent=(book.index<39?'Old':'New')+' Testament · Book '+(book.index+1)+' of 66';
 $('storyList').replaceChildren();teas.filter(t=>t.book===book.name).forEach(t=>{const li=document.createElement('li'),a=document.createElement('a'),small=document.createElement('small');a.href=href(t);a.textContent=t.title;small.textContent=t.kind==='Book introduction'?'Start with the big picture':t.ref;a.append(small);if(t.id===tea.id)a.setAttribute('aria-current','page');li.append(a);$('storyList').append(li)});
 $('reference').textContent=tea.ref+' · '+tea.kind;$('teaTitle').textContent=tea.title;
 $('quickLink').href=href(tea);$('fullLink').href=href(tea,true);$('quickLink').setAttribute('aria-current',full?'false':'page');$('fullLink').setAttribute('aria-current',full?'page':'false');
 $('teaCopy').replaceChildren();(full?tea.paragraphs:[tea.quick]).forEach(text=>{const p=document.createElement('p');p.textContent=text;$('teaCopy').append(p)});
 if(!full&&tea.takeaway){const p=document.createElement('p');p.className='takeaway';p.textContent=tea.takeaway;$('teaCopy').append(p)}
 $('moreLink').href=href(tea,!full);$('moreLink').textContent=full?'Back to Quick Tea':'All the Tea →';
 $('scripture').href='https://www.biblegateway.com/passage/?search='+encodeURIComponent(tea.ref)+'&version=NIV';
 const src=full?tea.fullAudio:tea.audio;$('audioBlock').hidden=!src;$('writtenNote').hidden=!!src;$('writtenNote').textContent='Written book introduction · Kayla’s voice recording is not available for this section yet.';
 $('audioStatus').textContent='Kayla’s custom AI voice · '+(full?'All the Tea':'Quick Tea');$('listen').textContent='Hear me tell it';if(src)audio.src=src;
 const i=teas.indexOf(tea);$('previous').hidden=i===0;$('next').hidden=i===teas.length-1;if(i>0)$('previous').href=href(teas[i-1],full);if(i<teas.length-1)$('next').href=href(teas[i+1],full);$('pageNumber').textContent='Tea '+(i+1)+' of '+teas.length+' · One step at a time';
 document.querySelectorAll('.index-tab').forEach(a=>{a.setAttribute('aria-current',a.dataset.book===book.name?'page':'false')});$('oldTestament').setAttribute('aria-pressed',String(book.index<39));$('newTestament').setAttribute('aria-pressed',String(book.index>=39));
 if(focus){$('tea').focus({preventScroll:true});$('tea').scrollIntoView({block:'start'})}
}
books.forEach(book=>{const a=document.createElement('a');a.className='index-tab';a.dataset.book=book.name;a.textContent=book.name;a.href='index.html?book='+encodeURIComponent(book.name);$('bookTabs').append(a)});
function scrollTabs(name){const tab=[...$('bookTabs').children].find(t=>t.dataset.book===name);$('bookTabs').scrollTop=tab.offsetTop-$('bookTabs').offsetTop;}
$('oldTestament').onclick=()=>scrollTabs('Genesis');$('newTestament').onclick=()=>scrollTabs('Matthew');
$('listen').onclick=()=>{if(audio.paused)audio.play().catch(()=>{$('audioStatus').textContent='The audio could not start. Tap the player to try again.'});else audio.pause()};audio.onplay=()=>{$('listen').textContent='Pause my voice'};audio.onpause=()=>{$('listen').textContent='Keep listening'};audio.onended=()=>{$('listen').textContent='Hear it again'};audio.onerror=()=>{if(audio.getAttribute('src'))$('audioStatus').textContent='This recording could not load. Please try again.'};
addEventListener('pagehide',()=>audio.pause());addEventListener('popstate',()=>render(true));
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;const u=new URL(a.href,location.href);if(u.origin===location.origin&&u.pathname.endsWith('/index.html')&&u.search){e.preventDefault();history.pushState({},'',u);render(true)}if(a?.hash==='#about'||a?.hash==='#why')$(a.hash.slice(1)).open=true});
render();scrollTabs(current.book);
