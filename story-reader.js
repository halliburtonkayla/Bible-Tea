'use strict';
const id=new URLSearchParams(location.search).get('story')||'garden';
const story=FULL_STORIES.find(s=>s.id===id);
if(story){
 document.title=story.title+' · Bible Tea';
 document.getElementById('ref').textContent=story.ref;
 document.getElementById('title').textContent=story.title;
 document.getElementById('short').textContent=story.short;
 story.paragraphs.forEach(text=>{const p=document.createElement('p');p.textContent=text;document.getElementById('story').append(p)});
 document.getElementById('scripture').href='https://www.biblegateway.com/passage/?search='+encodeURIComponent(story.ref)+'&version=NKJV';
}else{
 document.getElementById('title').textContent='That story link needs a fresh start.';
 document.getElementById('short').textContent='Choose another story from the collection below.';
 document.querySelector('.player').hidden=true;
 document.querySelector('.end h2').textContent='Find your next Bible Tea';
 document.querySelector('.end p').textContent='The complete collection is one click away.';
 document.getElementById('scripture').hidden=true;
}
