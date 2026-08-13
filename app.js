const MODULES=[
{id:"home",name:"首页",desc:"所有功能入口与工作流总览"},
{id:"category",name:"类目指引",desc:"套装、正装、棉羽精准上款路径"},
{id:"open",name:"开款方向",desc:"三大类款式方向与图片参考库"},
{id:"visual",name:"视觉优化",desc:"人模与非人模电商主图 Prompt"},
{id:"title",name:"标题优化",desc:"男装标题关键词组合与生成"},
{id:"sourcing",name:"招品 / 回品",desc:"后续接入商品提报与回品流程"}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function go(id){
  $$(".page").forEach(x=>x.classList.toggle("active",x.id===id));
  $$(".nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.go===id));
  $("#crumb").textContent=(MODULES.find(x=>x.id===id)?.name||"首页")+" / 工作台";
  window.scrollTo({top:0,behavior:"smooth"});
}
function initNav(){
  $("#mainNav").innerHTML=MODULES.map((m,i)=>`<button class="nav-btn ${i===0?"active":""}" data-go="${m.id}">${String(i+1).padStart(2,"0")} · ${m.name}</button>`).join("");
  $("#homeModules").innerHTML=MODULES.slice(1).map((m,i)=>`<article class="module-card"><span>MODULE ${String(i+1).padStart(2,"0")}</span><h3>${m.name}</h3><p>${m.desc}</p><button class="btn ${m.id==="title"?"primary":"secondary"}" data-go="${m.id}">进入 →</button></article>`).join("");
  $$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
}
let catGroup="套装";
function renderCategoryTabs(){
  $("#categoryTabs").innerHTML=["套装","正装","棉羽"].map((x,i)=>`<button class="seg ${i===0?"active":""}" data-cat="${x}">${x}</button>`).join("");
  $$("[data-cat]").forEach(b=>b.addEventListener("click",()=>{catGroup=b.dataset.cat;$$("[data-cat]").forEach(x=>x.classList.toggle("active",x===b));renderCategoryKeywords()}));
}
function renderCategoryKeywords(){
  const items=CATEGORY_DATA[catGroup]||[];
  const keys=[...new Set(items.map(x=>x.keyword))];
  $("#categoryKeywordList").innerHTML=keys.map((k,i)=>`<button class="choice ${i===0?"active":""}" data-key="${k}">${k}</button>`).join("");
  $$(".choice").forEach(b=>b.addEventListener("click",()=>{$$(".choice").forEach(x=>x.classList.toggle("active",x===b));renderPaths(b.dataset.key)}));
  if(keys[0])renderPaths(keys[0]);
}
function renderPaths(key){
  const rows=(CATEGORY_DATA[catGroup]||[]).filter(x=>x.keyword===key);
  $("#categoryPathResult").innerHTML=rows.map(x=>`<div class="path-card"><b>${x.keyword}</b><code>${x.path}</code><span class="badge">${x.season||"未标注季节"}</span></div>`).join("")||"暂无路径";
}
let openGroup="套装";
function initOpen(){
  $("#openTabs").innerHTML=["套装","正装","棉羽"].map((x,i)=>`<button class="seg ${i===0?"active":""}" data-open="${x}">${x}</button>`).join("");
  $$("[data-open]").forEach(b=>b.addEventListener("click",()=>{openGroup=b.dataset.open;$$("[data-open]").forEach(x=>x.classList.toggle("active",x===b));renderOpen()}));
  renderOpen();
}
function renderOpen(){
  $("#openGrid").innerHTML=(OPEN_DIRECTIONS[openGroup]||[]).map(x=>`<article class="style-card"><div class="image-placeholder">IMAGE SLOT<br>${x.ref}</div><h3>${x.name}</h3><div class="en">${x.en}</div><div class="tags">${x.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`).join("");
}
function builder(container,data,prefix){
  const names={model:"人模",pose:"姿势",style:"风格",scene:"场景",accessory:"配饰",display:"展示方式",background:"背景",focus:"重点"};
  const state={};
  Object.keys(data).forEach(k=>state[k]=data[k][0][1]);
  container.innerHTML=Object.entries(data).map(([k,arr])=>`<article class="builder-group"><h3>${names[k]||k}</h3><div class="option-list">${arr.map((o,i)=>`<button class="option ${i===0?"active":""}" data-group="${prefix}-${k}" data-value="${o[1]}">${o[0]}</button>`).join("")}</div></article>`).join("");
  container.querySelectorAll(".option").forEach(b=>b.addEventListener("click",()=>{const k=b.dataset.group.replace(prefix+"-","");state[k]=b.dataset.value;container.querySelectorAll(`[data-group="${prefix}-${k}"]`).forEach(x=>x.classList.toggle("active",x===b));updateVisualPrompt()}));
  return state;
}
let humanState,nonhumanState,visualMode="human";
function updateVisualPrompt(){
  const s=visualMode==="human"?humanState:nonhumanState;
  let core=visualMode==="human"
    ? `Professional e-commerce fashion product main image, ${s.model}, wearing the user's men's clothing product, ${s.pose}, ${s.style}, ${s.scene}, ${s.accessory}, full outfit clearly visible, accurate garment proportions, realistic fabric texture and natural drape, commercial lighting, clean composition, product remains the visual focus, high resolution, no text, no watermark`
    : `Professional e-commerce product photography, the user's men's clothing product shown as ${s.display}, ${s.background}, focus on ${s.focus}, accurate product shape, realistic fabric texture, clean composition, commercial lighting, high resolution, product as the main focus, no text, no watermark`;
  $("#visualPrompt").value=core;
}
function initVisual(){
  humanState=builder($("#humanBuilder"),VISUAL_OPTIONS,"human");
  nonhumanState=builder($("#nonhumanBuilder"),NONHUMAN_OPTIONS,"nonhuman");
  $$(".seg[data-visual]").forEach(b=>b.addEventListener("click",()=>{visualMode=b.dataset.visual;$$(".seg[data-visual]").forEach(x=>x.classList.toggle("active",x===b));$("#humanVisual").classList.toggle("active",visualMode==="human");$("#nonhumanVisual").classList.toggle("active",visualMode==="nonhuman");updateVisualPrompt()}));
  $("#copyVisual").addEventListener("click",()=>copy($("#visualPrompt").value,$("#copyVisual")));
  updateVisualPrompt();
}
const titleMap={core:"核心品类词",fit:"版型",style:"风格",material:"面料 / 材质",feature:"功能特性",detail:"细节",occasion:"场景",set:"套装规格"};
const titleState={};
function initTitle(){
  const order=["core","set","fit","style","material","feature","detail","occasion"];
  order.forEach(k=>{const arr=TITLE_DATA[k]||[];titleState[k]=arr[0]?.en||"";});
  $("#titleBuilder").innerHTML=order.map(k=>{
    const arr=TITLE_DATA[k]||[];
    return `<article class="builder-group"><h3>${titleMap[k]}</h3><div class="option-list">${arr.map((o,i)=>`<button class="option ${i===0?"active":""}" data-title="${k}" data-value="${o.en}">${o.zh}</button>`).join("")}</div></article>`;
  }).join("");
  $$("#titleBuilder .option").forEach(b=>b.addEventListener("click",()=>{const k=b.dataset.title;titleState[k]=b.dataset.value;$$(`#titleBuilder [data-title="${k}"]`).forEach(x=>x.classList.toggle("active",x===b));updateTitle()}));
  $("#copyTitle").addEventListener("click",()=>copy($("#generatedTitle").value,$("#copyTitle")));
  updateTitle();
}
function updateTitle(){
  const parts=["Men's",titleState.core,titleState.set,titleState.fit,titleState.style,titleState.material,titleState.feature,titleState.detail,"for",titleState.occasion].filter(Boolean);
  let t=parts.join(" ").replace(/\s+/g," ").replace(/\bfor\s*$/,"").trim();
  $("#generatedTitle").value=t;
  $("#titleCount").textContent=t.length+" characters";
}
async function copy(text,btn){try{await navigator.clipboard.writeText(text);const old=btn.textContent;btn.textContent="已复制 ✓";setTimeout(()=>btn.textContent=old,1200)}catch(e){alert("复制失败，请手动复制")}}
initNav();renderCategoryTabs();renderCategoryKeywords();initOpen();initVisual();initTitle();
