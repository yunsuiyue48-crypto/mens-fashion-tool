
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const catalog = APP_DATA.catalog;
const bank = APP_DATA.keywordBank;

function fillSelect(el, options, placeholder='请选择'){
  el.innerHTML = `<option value="">${placeholder}</option>` + options.map(x=>`<option value="${x}">${x}</option>`).join('');
}
function unique(arr){ return [...new Set(arr.filter(Boolean))]; }
function currentProduct(){ return catalog.find(x=>x.id === $('#productFilter').value) || catalog[0]; }

function initTabs(){
  $$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.nav-btn').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    $$('.tab-page').forEach(x=>x.classList.remove('active')); $('#'+btn.dataset.tab).classList.add('active');
  }));
}
function initFilters(){
  const group = $('#groupFilter'), product = $('#productFilter'), style = $('#styleFilter');
  function refreshProducts(){
    const list = catalog.filter(x=>group.value==='全部'||x.group===group.value);
    product.innerHTML = list.map(x=>`<option value="${x.id}">${x.name}</option>`).join('');
    refreshStyles();
  }
  function refreshStyles(){
    const p=currentProduct();
    fillSelect(style,p.styles,'全部风格');
  }
  group.addEventListener('change',refreshProducts);
  product.addEventListener('change',refreshStyles);
  refreshProducts();
}
function renderDashboardCards(){
  $('#catCount').textContent=catalog.length;
  $('#kwCount').textContent=Object.values(bank).flat().length;
  const groups=['男式套装','棉羽','正装'];
  $('#trackCards').innerHTML=groups.map(g=>{
    const items=catalog.filter(x=>x.group===g);
    return `<article class="track-card"><span class="badge">${g}</span><h3>${g}开发方向</h3><p>${items.map(x=>x.name).join('、')}</p><ul class="track-list">${items.slice(0,4).map(x=>`<li>${x.en}</li>`).join('')}</ul></article>`;
  }).join('');
}
function analyze(){
  const p=currentProduct();
  const selectedStyle=$('#styleFilter').value || p.styles[0];
  $('#resultEmpty').classList.add('hidden'); $('#resultContent').classList.remove('hidden');
  $('#resultGroup').textContent=p.group; $('#resultName').textContent=p.name; $('#resultEn').textContent=p.en;
  $('#resultFit').textContent=p.fits.slice(0,3).join(' / ');
  $('#resultStyle').textContent=selectedStyle;
  $('#resultFabric').textContent=p.fabrics.slice(0,3).join(' / ');
  $('#resultDetails').textContent=p.details.slice(0,3).join(' / ');
  $('#referenceTags').innerHTML=p.reference.map(x=>`<span class="chip">${x}</span>`).join('');
  const kws=unique([p.en.split('/')[0].trim(),'Men\'s 2 Piece Set',selectedStyle,...p.fits.slice(0,2),...p.fabrics.slice(0,2),...p.details.slice(0,2)]);
  $('#keywordTags').innerHTML=kws.map(x=>`<span class="chip">${x}</span>`).join('');
}
function renderReferences(filter='全部'){
  const list=catalog.filter(x=>filter==='全部'||x.group===filter);
  $('#referenceGrid').innerHTML=list.map(p=>`<article class="reference-card">
    <span class="badge">${p.group}</span><h3>${p.name}</h3><div class="meta">${p.en} · ${p.season} · ${p.price}</div>
    <h4>风格</h4><div class="chips">${p.styles.map(x=>`<span class="chip">${x}</span>`).join('')}</div>
    <h4>款式组合</h4><ul>${p.reference.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h4>面料 / 功能</h4><div class="chips">${p.fabrics.map(x=>`<span class="chip">${x}</span>`).join('')}</div>
  </article>`).join('');
}
function initReferenceFilters(){
  const groups=['全部','男式套装','棉羽','正装'];
  $('#referenceFilters').innerHTML=groups.map((g,i)=>`<button class="filter-chip ${i===0?'active':''}" data-g="${g}">${g}</button>`).join('');
  $$('#referenceFilters .filter-chip').forEach(b=>b.addEventListener('click',()=>{
    $$('#referenceFilters .filter-chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderReferences(b.dataset.g);
  }));
  renderReferences();
}
function renderKeywordGroups(){
  const dimNames={category:'品类 Category',fit:'版型 Fit',style:'风格 Style',fabric:'面料/功能 Fabric',details:'细节 Details',occasion:'场景 Occasion',selling:'营销词 Selling'};
  $('#keywordDimension').innerHTML='<option value="全部">全部维度</option>'+Object.keys(bank).map(k=>`<option value="${k}">${dimNames[k]}</option>`).join('');
  function render(){
    const q=$('#keywordSearch').value.trim().toLowerCase(), dim=$('#keywordDimension').value;
    const keys=dim==='全部'?Object.keys(bank):[dim];
    $('#keywordGroups').innerHTML=keys.map(k=>{
      const vals=bank[k].filter(v=>v.toLowerCase().includes(q));
      return `<section class="keyword-group"><h3>${dimNames[k]}</h3><div class="chips">${vals.map(v=>`<span class="chip" title="点击复制">${v}</span>`).join('')||'<span class="eyebrow">暂无匹配</span>'}</div></section>`;
    }).join('');
    $$('#keywordGroups .chip').forEach(c=>c.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(c.textContent);c.textContent='已复制 ✓';setTimeout(()=>location.reload(),500)}catch(e){}}));
  }
  $('#keywordSearch').addEventListener('input',render);$('#keywordDimension').addEventListener('change',render);render();
}
function initTitleBuilder(){
  const product=$('#titleProduct'), fit=$('#titleFit'), style=$('#titleStyle'), fabric=$('#titleFabric'), details=$('#titleDetails');
  product.innerHTML=catalog.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
  function refresh(){
    const p=catalog.find(x=>x.id===product.value);
    fillSelect(fit,p.fits); fillSelect(style,p.styles); fillSelect(fabric,p.fabrics); fillSelect(details,p.details);
  }
  product.addEventListener('change',refresh);refresh();
  fillSelect($('#titleOccasion'),bank.occasion);
  $('#generateTitleBtn').addEventListener('click',()=>{
    const p=catalog.find(x=>x.id===product.value);
    const platform=$('#titlePlatform').value, f=fit.value,s=style.value,fa=fabric.value,d=details.value,o=$('#titleOccasion').value;
    let title='';
    if(platform==='SHEIN') title=`${p.en}, ${s} ${f}, ${fa}, ${d}, ${o}`;
    else if(platform==='TEMU') title=`Men's ${p.en.replace("Men's ","")}, ${f} ${s} ${fa} ${d}, ${o} Outfit`;
    else title=`${p.en} - ${f} ${s} ${fa} with ${d}, Perfect for ${o}`;
    title=title.replace(/\s+/g,' ').trim();
    $('#generatedTitle').textContent=title;
    $('#titleMeta').innerHTML=`字符数：${title.length}<br>核心词：${[p.en,f,s,fa,d,o].join(' · ')}`;
  });
  $('#copyTitleBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#generatedTitle').textContent);$('#copyTitleBtn').textContent='已复制 ✓';setTimeout(()=>$('#copyTitleBtn').textContent='复制标题',1200)}catch(e){}});
}
$('#analyzeBtn').addEventListener('click',analyze);
$('#toTitleBtn').addEventListener('click',()=>{document.querySelector('[data-tab="titles"]').click();});
initTabs();initFilters();renderDashboardCards();initReferenceFilters();renderKeywordGroups();initTitleBuilder();
