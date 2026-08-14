const MODULES=[
{id:"home",name:"首页",desc:"所有功能入口与后续扩展工作台"},
{id:"category",name:"类目指引",desc:"套装 / 正装 / 棉羽精准上新路径"},
{id:"open",name:"开款方向",desc:"款式参考，支持 JPG/PNG 与 PDF"},
{id:"visual",name:"视觉优化",desc:"人模电商图 Prompt 生成"},
{id:"title",name:"标题优化",desc:"三大类目关键词多选组合"},
{id:"sourcing",name:"招品 / 回品",desc:"预留招品、回品与趋势分析功能"}
];

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
let currentOpen="套装",currentTitle="套装";
let tempImageURL="",tempPdfURL="";

function go(id){
  $$(".page").forEach(x=>x.classList.toggle("active",x.id===id));
  $$(".nav-btn").forEach(x=>x.classList.toggle("active",x.dataset.go===id));
  const m=MODULES.find(x=>x.id===id);
  $("#crumb").textContent=id==="home"?"首页 / 工作台":"首页 / "+m.name;
  window.scrollTo({top:0,behavior:"smooth"});
}
function initNav(){
  $("#mainNav").innerHTML=MODULES.map((m,i)=>`<button class="nav-btn ${i===0?"active":""}" data-go="${m.id}"><span class="num">${String(i+1).padStart(2,"0")}</span>${m.name}</button>`).join("");
  $("#homeModules").innerHTML=MODULES.slice(1).map((m,i)=>`<article class="module-card" data-go="${m.id}"><div class="module-num">模块 ${String(i+1).padStart(2,"0")}</div><h3>${m.name}</h3><p>${m.desc}</p><button class="btn small">进入功能</button></article>`).join("");
  $$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
}

function renderCategoryOverview(){
  $("#categoryOverview").innerHTML=Object.entries(CATEGORY_DATA).map(([name,items])=>{
    const keywords=[...new Set(items.map(x=>x.keyword).filter(Boolean))].join("、");
    return `<article class="overview-card"><h3>${name}</h3><span class="count-badge">${items.length} 条精准路径</span><p>${keywords||"查看全部精准路径"}</p><button class="btn small" data-cat="${name}">查看 ${name} 路径</button></article>`;
  }).join("");
  $$("[data-cat]").forEach(b=>b.addEventListener("click",()=>renderCategoryDetail(b.dataset.cat,true)));
  renderCategoryDetail("套装",false);
}
function renderCategoryDetail(name,scroll){
  const items=CATEGORY_DATA[name]||[];
  $("#categoryDetail").innerHTML=`<div class="path-block"><div class="path-head"><h3>${name} · 精准上新路径</h3><span>${items.length} 条</span></div><div class="path-list">${items.map((x,i)=>`<div class="path-row"><b>${x.keyword||name}</b><div class="path">${x.path}</div><div class="season">${x.season||"—"}</div><button class="jump-btn" data-open-cat="${name}">查看开款方向 →</button></div>`).join("")}</div></div>`;
  $$("[data-open-cat]").forEach(b=>b.addEventListener("click",()=>{currentOpen=b.dataset.openCat;renderOpenTabs();renderOpenGrid();go("open")}));
  if(scroll)$("#categoryDetail").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderOpenTabs(){
  $("#openTabs").innerHTML=Object.keys(OPEN_DIRECTION_DATA).map(x=>`<button class="tab-btn ${x===currentOpen?"active":""}" data-open-tab="${x}">${x}</button>`).join("");
  $$("[data-open-tab]").forEach(b=>b.addEventListener("click",()=>{currentOpen=b.dataset.openTab;renderOpenTabs();renderOpenGrid()}));
}
function renderOpenGrid(){
  const list=OPEN_DIRECTION_DATA[currentOpen]||[];
  $("#openDirectionGrid").innerHTML=list.map((x,i)=>{
    const image=(x.image||$("#repoImagePath").value.trim()) || (tempImageURL&&i===0?tempImageURL:"");
    const pdf=(x.pdf||$("#repoPdfPath").value.trim()) || (tempPdfURL&&i===0?tempPdfURL:"");
    return `<article class="reference-card">${image?`<img src="${image}" alt="${x.name}" onerror="this.outerHTML='<div class=&quot;placeholder&quot;>图片路径无效或尚未上传</div>'">`:`<div class="placeholder">待添加 JPG / PNG 款式图片</div>`}<div class="reference-body"><h3>${x.name}</h3><div class="tags">${x.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="card-actions">${pdf?`<button class="view-pdf" data-pdf="${pdf}">查看 PDF</button>`:`<span class="tag">待绑定 PDF</span>`}${image?`<a href="${image}" target="_blank">查看图片</a>`:""}</div></div></article>`;
  }).join("");
  $$(".view-pdf").forEach(b=>b.addEventListener("click",()=>{ $("#pdfFrame").src=b.dataset.pdf;$("#pdfModal").classList.add("show") }));
}
function initUpload(){
  $("#localImage").addEventListener("change",e=>{
    if(tempImageURL)URL.revokeObjectURL(tempImageURL);
    const f=e.target.files[0];tempImageURL=f?URL.createObjectURL(f):"";
    renderUploadPreview();renderOpenGrid();
  });
  $("#localPdf").addEventListener("change",e=>{
    if(tempPdfURL)URL.revokeObjectURL(tempPdfURL);
    const f=e.target.files[0];tempPdfURL=f?URL.createObjectURL(f):"";
    renderUploadPreview();renderOpenGrid();
  });
  ["repoImagePath","repoPdfPath"].forEach(id=>$("#"+id).addEventListener("input",renderOpenGrid));
  $("#clearUploads").addEventListener("click",()=>{if(tempImageURL)URL.revokeObjectURL(tempImageURL);if(tempPdfURL)URL.revokeObjectURL(tempPdfURL);tempImageURL="";tempPdfURL="";$("#localImage").value="";$("#localPdf").value="";$("#repoImagePath").value="";$("#repoPdfPath").value="";renderUploadPreview();renderOpenGrid()});
  $("#closePdf").addEventListener("click",()=>{$("#pdfModal").classList.remove("show");$("#pdfFrame").src=""});
}
function renderUploadPreview(){
  $("#uploadPreview").innerHTML=`${tempImageURL?`<div class="preview-box"><b>本地图片预览</b><img src="${tempImageURL}"></div>`:""}${tempPdfURL?`<div class="preview-box"><b>本地 PDF 已选择</b><br><button class="btn small" id="previewTempPdf">打开 PDF 预览</button></div>`:""}`;
  const b=$("#previewTempPdf");if(b)b.addEventListener("click",()=>{$("#pdfFrame").src=tempPdfURL;$("#pdfModal").classList.add("show")});
}

function renderVisual(){
  $("#visualControls").innerHTML=Object.entries(VISUAL_DATA).map(([dim,words])=>`<section class="group-card"><div class="group-title"><h3>${dim}</h3><span>可多选</span></div><div class="choices">${words.map(w=>`<button class="choice visual-choice" data-dim="${dim}" data-word="${w}">${w}</button>`).join("")}</div></section>`).join("");
  $$(".visual-choice").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("active");buildVisual()}));
  buildVisual();
}
function buildVisual(){
  const selected=$$(".visual-choice.active").map(b=>b.dataset.word);
  const prompt=selected.length?`专业男装电商摄影，真实成年男性模特，${selected.join("，")}。突出服装版型、面料纹理与整体搭配，真实自然光影，高级商业摄影质感，商品主体清晰，移动端电商主图构图优化，无品牌 Logo，无水印。`:"请选择上方人模、姿势、场景、光线、构图等选项生成 Prompt。";
  $("#visualOutput").value=prompt;
}

function renderTitleTabs(){
  $("#titleCategoryTabs").innerHTML=Object.keys(TITLE_DATA).map(x=>`<button class="tab-btn ${x===currentTitle?"active":""}" data-title-tab="${x}">${x}</button>`).join("");
  $$("[data-title-tab]").forEach(b=>b.addEventListener("click",()=>{currentTitle=b.dataset.titleTab;renderTitleTabs();renderTitleControls()}));
}
function renderTitleControls(){
  const data=TITLE_DATA[currentTitle];
  $("#titleControls").innerHTML=Object.entries(data).map(([dim,items])=>`<section class="group-card"><div class="group-title"><h3>${dim}</h3><span>多选</span></div><div class="choices">${items.map((x,i)=>`<button class="choice title-choice" data-dim="${dim}" data-en="${x.en}" data-zh="${x.zh}" title="${x.variants||""}">${x.zh}<small>${x.en||"—"}</small></button>`).join("")}</div></section>`).join("");
  $$(".title-choice").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("active");buildTitle()}));
  buildTitle();
}
function buildTitle(){
  const selected=$$(".title-choice.active").map(b=>({dim:b.dataset.dim,en:b.dataset.en,zh:b.dataset.zh}));
  const order=["品类(Category)","套装规格(Pack/Set)","目标人群(Target)","版型(Fit)","领型(Neckline)","闭合方式(Closure)","袖长(Sleeve)","长度(Length)","面料/材质(Material)","功能特性(Feature)","细节(Detail)","图案/花色(Pattern)","风格(Style)","季节(Season)","场景(Occasion)","颜色(Color)"];
  selected.sort((a,b)=>(order.indexOf(a.dim)+100).toString().localeCompare((order.indexOf(b.dim)+100).toString()));
  const words=[...new Set(selected.map(x=>x.en||x.zh).filter(Boolean))];
  const title=words.join(", ");
  $("#titleOutput").value=title||"请选择关键词卡片生成英文标题。";
  $("#titleCount").textContent=title?`当前：${words.length} 个关键词 · ${title.length} 个字符`:"";
}
async function copyText(id){
  const text=$(id).value;
  if(!text)return;
  try{await navigator.clipboard.writeText(text);alert("已复制");}catch(e){$(id).select();document.execCommand("copy");alert("已复制")}
}

document.addEventListener("DOMContentLoaded",()=>{
  initNav();renderCategoryOverview();renderOpenTabs();renderOpenGrid();initUpload();renderVisual();renderTitleTabs();renderTitleControls();
  $("#copyVisual").addEventListener("click",()=>copyText("#visualOutput"));
  $("#copyTitle").addEventListener("click",()=>copyText("#titleOutput"));
});
