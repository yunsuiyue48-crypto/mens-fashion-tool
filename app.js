const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const MODULES = [
  {id:"home",name:"首页",desc:"所有功能入口与工作流总览"},
  {id:"category",name:"类目指引",desc:"套装 / 正装 / 棉羽路径总览与精准选择"},
  {id:"open",name:"开款方向",desc:"趋势款式图片、参考 PDF 与来源入口"},
  {id:"visual",name:"视觉优化",desc:"人模 / 非人模主图 Prompt 生成"},
  {id:"title",name:"标题优化",desc:"多选关键词组合生成英文标题"},
  {id:"sourcing",name:"招品 / 回品",desc:"后续扩展选品、回品与趋势数据"}
];

let currentPage = "home";
let categoryGroup = "套装";
let openGroup = "套装";
let visualMode = "human";
const titleSelected = {};

function escapeHtml(v){ return String(v ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }

function go(id){
  currentPage=id;
  $$(".page").forEach(p=>p.classList.toggle("active",p.id===id));
  $$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
  const mod=MODULES.find(x=>x.id===id);
  $("#crumb").textContent=`首页 / ${mod?.name||""}`;
  window.scrollTo({top:0,behavior:"smooth"});
}

function initNav(){
  $("#mainNav").innerHTML=MODULES.map((m,i)=>`<button class="nav-btn ${m.id==="home"?"active":""}" data-go="${m.id}">${String(i+1).padStart(2,"0")} · ${m.name}</button>`).join("");
  $("#homeModules").innerHTML=MODULES.filter(m=>m.id!=="home").map(m=>`<article class="module-card"><span class="eyebrow">${m.id.toUpperCase()}</span><h3>${m.name}</h3><p>${m.desc}</p><button class="btn" data-go="${m.id}">进入功能</button></article>`).join("");
  $$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
}

/* 类目指引 */
function renderCategoryOverview(){
  $("#categoryOverview").innerHTML=Object.entries(CATEGORY_DATA).map(([group,data])=>`
    <button class="overview-card" data-category-jump="${group}">
      <span>${group}</span><b>${data.groups.length} 个精准方向</b><small>${data.intro}</small>
    </button>`).join("");
  $$("[data-category-jump]").forEach(b=>b.addEventListener("click",()=>{categoryGroup=b.dataset.categoryJump;renderCategory();go("category");}));
}
function renderCategory(){
  $("#categoryTabs").innerHTML=Object.keys(CATEGORY_DATA).map(g=>`<button class="seg ${g===categoryGroup?"active":""}" data-cat="${g}">${g}</button>`).join("");
  const data=CATEGORY_DATA[categoryGroup];
  $("#categoryBreadcrumb").textContent=`全部路径 / ${categoryGroup}`;
  $("#categoryList").innerHTML=data.groups.map((item,i)=>`
    <article class="path-card">
      <div><span class="index">${String(i+1).padStart(2,"0")}</span><h3>${item.name}</h3>
      <div class="path-lines">${item.paths.map(p=>`<div>${escapeHtml(p)}</div>`).join("")}</div>
      <div class="tag-list">${item.keywords.map(k=>`<span class="tag">${escapeHtml(k)}</span>`).join("")}</div></div>
      <button class="btn primary" data-open-jump="${categoryGroup}">查看开款方向</button>
    </article>`).join("");
  $$("[data-cat]").forEach(b=>b.addEventListener("click",()=>{categoryGroup=b.dataset.cat;renderCategory();}));
  $$("[data-open-jump]").forEach(b=>b.addEventListener("click",()=>{openGroup=b.dataset.openJump;renderOpenDirections();renderOpenDirectionTabs();go("open");}));
}

/* 开款方向 */
function renderOpenDirectionTabs(){
  $("#openDirectionTabs").innerHTML=Object.keys(OPEN_DIRECTIONS).map(g=>`<button class="seg ${g===openGroup?"active":""}" data-open-group="${g}">${g}</button>`).join("");
  $$("[data-open-group]").forEach(b=>b.addEventListener("click",()=>{openGroup=b.dataset.openGroup;renderOpenDirectionTabs();renderOpenDirections();}));
}
function renderOpenDirections(){
  const items=OPEN_DIRECTIONS[openGroup]||[];
  $("#openDirectionList").innerHTML=items.map(item=>`
    <article class="open-card">
      <div class="reference-image">${item.image?`<img src="${item.image}" alt="${escapeHtml(item.name)}">`:`<div class="image-placeholder">待添加图片</div>`}</div>
      <div class="open-card-body"><span class="open-category">${openGroup}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.en)}</p>
      <div class="tag-list">${(item.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
      <div class="button-row">
        ${item.pdf?`<a class="btn primary" href="${item.pdf}" target="_blank" rel="noopener">查看 PDF</a>`:""}
        ${item.source?`<a class="btn" href="${item.source}" target="_blank" rel="noopener">查看趋势来源</a>`:""}
      </div></div>
    </article>`).join("");
}

/* 标题优化 */
function renderTitleOptions(){
  $("#titleOptions").innerHTML=Object.entries(TITLE_DATA).map(([group,items])=>`
    <article class="option-group"><h3>${group}${group==="核心品类词"?" <small>可多选</small>":""}</h3>
    <div class="choice-grid">${items.map(item=>`<button class="choice ${titleSelected[group]?.has(item)?"selected":""}" data-title-group="${group}" data-title-item="${item}">${escapeHtml(item)}</button>`).join("")}</div></article>`).join("");
  $$("[data-title-group]").forEach(b=>b.addEventListener("click",()=>{
    const group=b.dataset.titleGroup,item=b.dataset.titleItem;
    titleSelected[group] ||= new Set();
    if(group==="核心品类词"){ titleSelected[group].has(item)?titleSelected[group].delete(item):titleSelected[group].add(item); }
    else { titleSelected[group].clear(); titleSelected[group].add(item); }
    renderTitleOptions();
  }));
}
function generateTitle(){
  const order=["核心品类词","版型","风格","面料/质感","季节","场景","节日/送礼"];
  const words=order.flatMap(g=>[...(titleSelected[g]||[])]);
  const title=words.length?words.join(", "):"Men's Fashion Clothing";
  $("#titleResult").value=title;
  $("#titleCount").textContent=`${title.length} characters`;
}

/* 视觉优化 */
function renderVisual(){
  $("#visualModeTabs").innerHTML=[["human","人模视觉优化"],["nonhuman","非人模视觉优化"]].map(([id,name])=>`<button class="seg ${id===visualMode?"active":""}" data-visual-mode="${id}">${name}</button>`).join("");
  const data=VISUAL_DATA[visualMode];
  $("#visualOptions").innerHTML=Object.entries(data).map(([group,items])=>`
    <article class="option-group"><h3>${group}</h3><div class="choice-grid">
    ${items.map((item,i)=>`<button class="choice ${i===0?"selected":""}" data-visual-group="${group}" data-visual-item="${item}">${escapeHtml(item)}</button>`).join("")}
    </div></article>`).join("");
  $$("[data-visual-mode]").forEach(b=>b.addEventListener("click",()=>{visualMode=b.dataset.visualMode;renderVisual();updateVisualPrompt();}));
  $$("[data-visual-group]").forEach(b=>b.addEventListener("click",()=>{
    $$(`[data-visual-group="${CSS.escape(b.dataset.visualGroup)}"]`).forEach(x=>x.classList.remove("selected"));
    b.classList.add("selected"); updateVisualPrompt();
  }));
}
function updateVisualPrompt(){
  const parts=$$("[data-visual-group].selected").map(b=>b.dataset.visualItem);
  const base=visualMode==="human"
    ?"Professional e-commerce menswear photography, real adult male model, commercial fashion photography"
    :"Professional e-commerce product photography, no human model, commercial product styling";
  $("#visualPrompt").value=[base,...parts,"high-detail fabric texture, clean product focus, realistic lighting, mobile shopping page optimized, no logos, no watermark"].join(", ");
  $("#visualPromptMeta").textContent=`${parts.length} 个视觉条件`;
}

async function copyText(text){
  try{ await navigator.clipboard.writeText(text); alert("已复制"); }
  catch(e){ alert("复制失败，请手动复制"); }
}

function init(){
  initNav();
  renderCategoryOverview(); renderCategory();
  renderOpenDirectionTabs(); renderOpenDirections();
  renderTitleOptions(); generateTitle();
  renderVisual(); updateVisualPrompt();
  $("#generateTitle").addEventListener("click",generateTitle);
  $("#copyTitle").addEventListener("click",()=>copyText($("#titleResult").value));
  $("#copyVisualPrompt").addEventListener("click",()=>copyText($("#visualPrompt").value));
}
document.addEventListener("DOMContentLoaded",init);
