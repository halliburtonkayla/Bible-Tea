const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {chromium}=require('playwright');
const http=require('node:http');
const path=require('node:path');
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync('drama-data.js','utf8')+fs.readFileSync('book-intros.js','utf8')+';this.data={BOOKS,STORIES,BOOK_INTROS}',context);
test('all 66 books have original introductions and all story IDs are unique',()=>{const {BOOKS,STORIES,BOOK_INTROS}=context.data;assert.equal(BOOKS.length,66);assert.equal(BOOK_INTROS.length,66);assert.equal(STORIES.length,97);assert.equal(new Set(STORIES.map(s=>s.title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''))).size,97);for(const book of BOOKS)assert.ok(BOOK_INTROS.find(i=>i.book===book));for(const s of STORIES)assert.ok(s.ref&&s.summary&&s.dialogue.length&&s.takeaway)});
test('desktop/mobile reading, keyboard, audio interruption, history and legacy routes',async()=>{
 const server=http.createServer((req,res)=>{let file=path.join(process.cwd(),decodeURIComponent(req.url.split('?')[0]));if(file.endsWith('/'))file+='index.html';try{res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(fs.readFileSync(file))}catch{res.statusCode=404;res.end('not found')}}).listen(0,'127.0.0.1');
 await new Promise(r=>server.on('listening',r));const url='http://127.0.0.1:'+server.address().port;
 let browser;try{browser=await chromium.launch({...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),headless:true,args:['--no-sandbox']})}catch(error){server.close();throw error}
 try{for(const viewport of [{width:1280,height:900},{width:390,height:844}]){
 const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url);
 assert.equal(await page.locator('.card').count(),97);
 await page.getByRole('button',{name:'Romans',exact:true}).click();assert.ok((await page.locator('#bookIntro').innerText()).includes('Romans'));assert.equal(await page.locator('.card').count(),0);
 await page.getByRole('button',{name:'All',exact:true}).click();await page.getByRole('searchbox').fill('Lazarus');assert.equal(await page.locator('.card').count(),1);
 await page.getByRole('button',{name:'Open Lazarus Is Raised',exact:true}).focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('dialog').open);assert.equal(await page.locator('#mtitle').innerText(),'Lazarus Is Raised');assert.ok(page.url().includes('story=lazarus-is-raised'));
 await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('dialog').open&&!location.search);assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),'Open Lazarus Is Raised');
 await page.getByRole('searchbox').fill('Creation');await page.getByRole('button',{name:'Open Creation',exact:true}).click();await page.evaluate(()=>{window.pauses=0;document.querySelectorAll('audio').forEach(a=>{a.pause=()=>window.pauses++})});await page.getByRole('button',{name:'The Drama',exact:true}).click();assert.ok(await page.evaluate(()=>window.pauses>=3));await page.goBack();assert.equal(await page.locator('dialog').evaluate(d=>d.open),false);await page.goForward();assert.equal(await page.locator('#mtitle').innerText(),'Creation');
 await page.reload();assert.equal(await page.locator('dialog').evaluate(d=>d.open),true);await page.getByRole('button',{name:'Close story'}).click();assert.equal(await page.locator('dialog').evaluate(d=>d.open),false);
 await page.getByRole('searchbox').fill('no-match-xyz');await page.getByRole('button',{name:'Clear search'}).click();assert.equal(await page.locator('.card').count(),97);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.goto(url+'/story.html?story=garden');assert.equal(await page.locator('#title').innerText(),'The garden situation');assert.ok(await page.locator('#story p').count()>0);
 await page.goto(url+'/story.html?story=missing');assert.ok((await page.locator('#title').innerText()).includes('fresh start'));
 assert.deepEqual(errors,[]);await page.close();
 }}finally{await browser.close();server.close()}
});
