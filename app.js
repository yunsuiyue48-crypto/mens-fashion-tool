/* =========================================
   云岁月对接类目上新指引
   TEMU 男装工具网站 - app.js

   开款方向升级版：
   PPT / PDF / 图片款式参考展示
========================================= */


/* =========================================
01. 功能模块
========================================= */

const MODULES = [
  {
    id: "home",
    name: "首页",
    desc: "所有功能入口与后续扩展工作台"
  },
  {
    id: "category",
    name: "类目指引",
    desc: "套装 / 正装 / 棉羽精准上新路径"
  },
  {
    id: "open",
    name: "开款方向",
    desc: "套装 / 正装 / 棉羽款式参考"
  },
  {
    id: "visual",
    name: "视觉优化",
    desc: "人模电商图 Prompt 生成"
  },
  {
    id: "title",
    name: "标题优化",
    desc: "三大类目关键词多选组合"
  },
  {
    id: "sourcing",
    name: "招品 / 回品",
    desc: "预留招品、回品与趋势分析功能"
  }
];


/* =========================================
02. 基础工具
========================================= */

const $ = s => document.querySelector(s);

const $$ = s => [...document.querySelectorAll(s)];


/* =========================================
03. 三大类目映射
兼容中文和英文数据
========================================= */

const OPEN_CATEGORY_MAP = {
  "套装": {
    keys: ["套装", "sets", "set"],
    label: "套装"
  },

  "正装": {
    keys: ["正装", "formal", "formals"],
    label: "正装"
  },

  "棉羽": {
    keys: ["棉羽", "padded", "padding", "downwear"],
    label: "棉羽"
  }
};


/* =========================================
04. 当前分类
========================================= */

let currentOpen = "套装";

let currentTitle = "套装";


/* =========================================
05. 注入页面样式
不需要修改 style.css
========================================= */

function injectAppStyles() {

  const oldStyle = $("#appDynamicStyles");

  if (oldStyle) {
    oldStyle.remove();
  }

  const style = document.createElement("style");

  style.id = "appDynamicStyles";

  style.textContent = `

/* =====================================
   三大类目按钮统一放大
===================================== */

.tab-btn,
.seg,
.category-btn {
  min-width: 130px !important;
  min-height: 54px !important;
  padding: 12px 28px !important;
  font-size: 19px !important;
  font-weight: 800 !important;
  border-radius: 14px !important;
  cursor: pointer !important;
}


/* =====================================
   开款方向分类按钮
===================================== */

#openTabs {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 18px !important;
  margin: 12px 0 32px !important;
}

#openTabs .tab-btn {
  min-width: 180px !important;
  min-height: 64px !important;
  padding: 15px 36px !important;
  font-size: 22px !important;
  font-weight: 900 !important;
  border-radius: 16px !important;
}


/* =====================================
   标题优化分类按钮
===================================== */

#titleCategoryTabs {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 18px !important;
  margin-bottom: 30px !important;
}

#titleCategoryTabs .tab-btn {
  min-width: 160px !important;
  min-height: 58px !important;
  font-size: 20px !important;
  font-weight: 800 !important;
}


/* =====================================
   开款方向 PPT 展示区域
===================================== */

.open-ppt-head {
  margin-bottom: 28px;
}

.open-ppt-head h2 {
  font-size: 30px;
  margin: 0 0 10px;
}

.open-ppt-head p {
  margin: 0;
  font-size: 16px;
  opacity: 0.75;
}


/* =====================================
   PPT 卡片网格
===================================== */

#openDirectionGrid {
  display: grid !important;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)) !important;
  gap: 24px !important;
  align-items: stretch !important;
}


/* =====================================
   PPT 款式卡片
===================================== */

.reference-card {
  min-height: 520px !important;
  overflow: hidden !important;
  border-radius: 20px !important;
  display: flex !important;
  flex-direction: column !important;
}


/* =====================================
   卡片顶部标题
===================================== */

.ppt-card-header {
  padding: 20px 24px 18px !important;
  border-bottom: 1px solid rgba(128,128,128,0.18);
}

.reference-type {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 5px 12px;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 800;
  border-radius: 999px;
  background: rgba(100,100,100,0.12);
}

.ppt-card-header h3 {
  margin: 0 !important;
  font-size: 23px !important;
  line-height: 1.35 !important;
}

.reference-en {
  margin: 8px 0 0 !important;
  font-size: 14px !important;
  opacity: 0.7;
}


/* =====================================
   PDF / 图片展示区
===================================== */

.ppt-preview {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  background: #f4f4f4;
}

.ppt-preview img {
  width: 100%;
  height: 100%;
  object-fit: contain !important;
  display: block;
}

.ppt-preview iframe {
  width: 100%;
  height: 100%;
  border: none !important;
  display: block;
  background: #ffffff;
}

.pdf-preview-frame {
  width: 100%;
  height: 100%;
  border: none;
}


/* =====================================
   PDF 无法预览时的提示
===================================== */

.preview-placeholder {
  height: 100%;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
}

.preview-placeholder .pdf-icon {
  font-size: 54px;
  margin-bottom: 18px;
}

.preview-placeholder h4 {
  margin: 0 0 10px;
  font-size: 20px;
}

.preview-placeholder p {
  margin: 0;
  font-size: 14px;
  opacity: 0.7;
}


/* =====================================
   卡片底部
===================================== */

.reference-body {
  padding: 20px 24px 24px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 18px !important;
}

.reference-card .tags {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 8px !important;
  margin: 0 !important;
}

.reference-card .tag {
  padding: 7px 11px !important;
  border-radius: 999px !important;
}


/* =====================================
   PDF 按钮放大
===================================== */

.view-pdf {
  width: 100% !important;
  min-height: 62px !important;
  padding: 15px 24px !important;
  font-size: 19px !important;
  font-weight: 900 !important;
  border-radius: 14px !important;
  cursor: pointer !important;
}

.card-image-link {
  display: block;
  width: 100%;
  text-align: center;
  min-height: 56px;
  line-height: 56px;
  border-radius: 14px;
  font-weight: 800;
  text-decoration: none;
}


/* =====================================
   类目路径跳转按钮
===================================== */

.jump-btn {
  min-height: 48px !important;
  padding: 10px 20px !important;
  font-size: 17px !important;
  font-weight: 800 !important;
  border-radius: 11px !important;
  cursor: pointer !important;
}


/* =====================================
   开款方向空数据提示
===================================== */

.empty-state {
  grid-column: 1 / -1;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
  border: 1px dashed rgba(128,128,128,0.35);
}

.empty-state h3 {
  margin: 0 0 12px;
  font-size: 24px;
}

.empty-state p {
  margin: 0;
  opacity: 0.7;
}


/* =====================================
   PDF 弹窗
===================================== */

#pdfModal.show {
  display: flex !important;
}


/* =====================================
   删除旧上传区域
===================================== */

.open-upload-area,
.upload-area,
.upload-panel,
#uploadPreview,
#localImage,
#localPdf,
#repoImagePath,
#repoPdfPath,
#clearUploads {
  display: none !important;
}


/* =====================================
   手机端
===================================== */

@media (max-width: 768px) {

  .tab-btn,
  .seg,
  .category-btn {
    min-width: 105px !important;
    min-height: 50px !important;
    padding: 10px 18px !important;
    font-size: 17px !important;
  }

  #openTabs {
    gap: 10px !important;
  }

  #openTabs .tab-btn {
    flex: 1 !important;
    min-width: calc(50% - 6px) !important;
    min-height: 56px !important;
    font-size: 19px !important;
  }

  #titleCategoryTabs .tab-btn {
    min-width: calc(50% - 8px) !important;
    font-size: 18px !important;
  }

  #openDirectionGrid {
    grid-template-columns: 1fr !important;
  }

  .ppt-preview {
    height: 460px;
  }

  .view-pdf {
    min-height: 58px !important;
    font-size: 17px !important;
  }

}

`;

  document.head.appendChild(style);
}


/* =========================================
06. 页面跳转
========================================= */

function go(id) {

  $$(".page").forEach(x => {
    x.classList.toggle("active", x.id === id);
  });

  $$(".nav-btn").forEach(x => {
    x.classList.toggle("active", x.dataset.go === id);
  });

  const m = MODULES.find(x => x.id === id);

  if ($("#crumb")) {

    $("#crumb").textContent =
      id === "home"
        ? "首页 / 工作台"
        : "首页 / " + (m ? m.name : "");

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
07. 初始化导航
========================================= */

function initNav() {

  if ($("#mainNav")) {

    $("#mainNav").innerHTML = MODULES.map((m, i) => `
      <button
        class="nav-btn ${i === 0 ? "active" : ""}"
        data-go="${m.id}"
      >
        <span class="num">
          ${String(i + 1).padStart(2, "0")}
        </span>
        ${m.name}
      </button>
    `).join("");

  }


  if ($("#homeModules")) {

    $("#homeModules").innerHTML =
      MODULES.slice(1).map((m, i) => `
        <article
          class="module-card"
          data-go="${m.id}"
        >

          <div class="module-num">
            模块 ${String(i + 1).padStart(2, "0")}
          </div>

          <h3>${m.name}</h3>

          <p>${m.desc}</p>

          <button class="btn small">
            进入功能
          </button>

        </article>
      `).join("");

  }


  $$("[data-go]").forEach(b => {

    b.addEventListener("click", () => {
      go(b.dataset.go);
    });

  });

}


/* =========================================
08. 类目名称标准化
========================================= */

function normalizeOpenCategory(name) {

  const value =
    String(name || "").trim();

  const lower =
    value.toLowerCase();

  if (
    value === "套装" ||
    lower === "sets" ||
    lower === "set"
  ) {
    return "套装";
  }

  if (
    value === "正装" ||
    lower === "formal" ||
    lower === "formals"
  ) {
    return "正装";
  }

  if (
    value === "棉羽" ||
    lower === "padded" ||
    lower === "padding" ||
    lower === "downwear"
  ) {
    return "棉羽";
  }

  return value;

}


/* =========================================
09. 获取开款方向数据
兼容中文和英文 KEY
========================================= */

function getOpenDirectionList(categoryName) {

  if (
    typeof OPEN_DIRECTION_DATA === "undefined" ||
    !OPEN_DIRECTION_DATA
  ) {
    return [];
  }

  const category =
    normalizeOpenCategory(categoryName);

  const config =
    OPEN_CATEGORY_MAP[category];

  if (!config) {
    return [];
  }


  for (const key of config.keys) {

    if (
      OPEN_DIRECTION_DATA[key] &&
      Array.isArray(OPEN_DIRECTION_DATA[key])
    ) {
      return OPEN_DIRECTION_DATA[key];
    }

  }


  return [];

}


/* =========================================
10. 类目指引首页
========================================= */

function renderCategoryOverview() {

  if (
    typeof CATEGORY_DATA === "undefined" ||
    !$("#categoryOverview")
  ) {
    return;
  }


  $("#categoryOverview").innerHTML =
    Object.entries(CATEGORY_DATA)
      .map(([name, items]) => {

        const chineseName =
          normalizeOpenCategory(name);

        const safeItems =
          Array.isArray(items)
            ? items
            : [];


        const keywords = [
          ...new Set(
            safeItems
              .map(x => x.keyword)
              .filter(Boolean)
          )
        ].join("、");


        return `
          <article class="overview-card">

            <h3>${chineseName}</h3>

            <span class="count-badge">
              ${safeItems.length} 条精准路径
            </span>

            <p>
              ${keywords || "查看全部精准路径"}
            </p>

            <button
              class="btn small"
              data-cat="${name}"
            >
              查看 ${chineseName} 路径
            </button>

          </article>
        `;

      })
      .join("");


  $$("[data-cat]").forEach(b => {

    b.addEventListener("click", () => {

      renderCategoryDetail(
        b.dataset.cat,
        true
      );

    });

  });


  const firstCategory =
    CATEGORY_DATA["套装"]
      ? "套装"
      : CATEGORY_DATA["sets"]
        ? "sets"
        : Object.keys(CATEGORY_DATA)[0];


  if (firstCategory) {
    renderCategoryDetail(
      firstCategory,
      false
    );
  }

}


/* =========================================
11. 类目精准路径详情
========================================= */

function renderCategoryDetail(name, scroll) {

  if (
    typeof CATEGORY_DATA === "undefined" ||
    !$("#categoryDetail")
  ) {
    return;
  }


  const items =
    Array.isArray(CATEGORY_DATA[name])
      ? CATEGORY_DATA[name]
      : [];


  const chineseName =
    normalizeOpenCategory(name);


  $("#categoryDetail").innerHTML = `

    <div class="path-block">

      <div class="path-head">

        <h3>
          ${chineseName} · 精准上新路径
        </h3>

        <span>
          ${items.length} 条
        </span>

      </div>


      <div class="path-list">

        ${items.map(x => `

          <div class="path-row">

            <b>
              ${x.keyword || chineseName}
            </b>

            <div class="path">
              ${x.path || "—"}
            </div>

            <div class="season">
              ${x.season || "—"}
            </div>

            <button
              class="jump-btn"
              data-open-cat="${chineseName}"
            >
              查看开款方向 →
            </button>

          </div>

        `).join("")}

      </div>

    </div>

  `;


  $$("[data-open-cat]").forEach(b => {

    b.addEventListener("click", () => {

      currentOpen =
        normalizeOpenCategory(
          b.dataset.openCat
        );

      renderOpenTabs();
      renderOpenGrid();

      go("open");

    });

  });


  if (scroll) {

    $("#categoryDetail").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* =========================================
12. 开款方向分类按钮
固定显示中文
========================================= */

function renderOpenTabs() {

  if (!$("#openTabs")) {
    return;
  }


  const categories = [
    "套装",
    "正装",
    "棉羽"
  ];


  currentOpen =
    normalizeOpenCategory(currentOpen);


  $("#openTabs").innerHTML =
    categories.map(name => `

      <button
        class="tab-btn ${name === currentOpen ? "active" : ""}"
        data-open-tab="${name}"
      >
        ${name}
      </button>

    `).join("");


  $$("[data-open-tab]").forEach(b => {

    b.addEventListener("click", () => {

      currentOpen =
        normalizeOpenCategory(
          b.dataset.openTab
        );

      renderOpenTabs();
      renderOpenGrid();

    });

  });

}


/* =========================================
13. 获取图片路径
支持多个字段名称
========================================= */

function getReferenceImage(item) {

  if (!item) {
    return "";
  }

  return (
    item.image ||
    item.img ||
    item.cover ||
    item.thumbnail ||
    item.poster ||
    item.jpg ||
    item.png ||
    ""
  );

}


/* =========================================
14. 开款方向 PPT 展示页面

支持：
1. JPG
2. PNG
3. WEBP
4. PDF

优先展示图片；
没有图片则直接内嵌 PDF。
========================================= */

function renderOpenGrid() {

  if (!$("#openDirectionGrid")) {
    return;
  }


  const list =
    getOpenDirectionList(currentOpen);


  /* 开款方向标题 */

  const titleHtml = `
    <div class="open-ppt-head">

      <h2>
        ${currentOpen} · 款式参考
      </h2>

      <p>
        点击不同类目查看对应款式。支持直接浏览款式图片和 PDF 款式参考。
      </p>

    </div>
  `;


  /* 没有数据 */

  if (!list.length) {

    $("#openDirectionGrid").innerHTML = `

      <div class="empty-state">

        <h3>
          暂未读取到「${currentOpen}」款式参考
        </h3>

        <p>
          请检查 open-direction-data.js 中是否存在
          ${currentOpen} 或对应的英文分类数据。
        </p>

      </div>

    `;

    return;
  }


  /* 渲染 PPT 卡片 */

  $("#openDirectionGrid").innerHTML =
    list.map((x, index) => {

      const image =
        getReferenceImage(x);

      const pdf =
        x.pdf || x.pdfUrl || x.pdfURL || "";

      const tags =
        Array.isArray(x.tags)
          ? x.tags
          : [];


      let previewHtml = "";


      /* 第一优先级：展示图片 */

      if (image) {

        previewHtml = `

          <div class="ppt-preview">

            <img
              src="${image}"
              alt="${x.name || currentOpen + "款式参考"}"
              loading="lazy"
              onerror="
                this.style.display='none';
                this.parentElement.innerHTML=
                '<div class=&quot;preview-placeholder&quot;>' +
                '<div class=&quot;pdf-icon&quot;>🖼️</div>' +
                '<h4>图片加载失败</h4>' +
                '<p>请检查图片路径是否正确</p>' +
                '</div>';
              "
            >

          </div>

        `;

      }


      /* 第二优先级：直接展示 PDF */

      else if (pdf) {

        previewHtml = `

          <div class="ppt-preview">

            <iframe
              class="pdf-preview-frame"
              src="${pdf}#toolbar=0&navpanes=0&scrollbar=1"
              title="${x.name || currentOpen + "PDF款式参考"}"
              loading="lazy"
            >
            </iframe>

          </div>

        `;

      }


      /* 没有任何素材 */

      else {

        previewHtml = `

          <div class="ppt-preview">

            <div class="preview-placeholder">

              <div class="pdf-icon">
                📂
              </div>

              <h4>
                暂未添加款式素材
              </h4>

              <p>
                请在 open-direction-data.js
                中添加 image 或 pdf 路径
              </p>

            </div>

          </div>

        `;

      }


      return `

        <article class="reference-card">

          <div class="ppt-card-header">

            <div class="reference-type">
              ${image ? "款式图片参考" : "PDF 款式参考"}
            </div>

            <h3>
              ${x.name || currentOpen + "款式参考 " + (index + 1)}
            </h3>

            ${
              x.en
                ? `
                  <p class="reference-en">
                    ${x.en}
                  </p>
                `
                : ""
            }

          </div>


          ${previewHtml}


          <div class="reference-body">

            ${
              tags.length
                ? `
                  <div class="tags">

                    ${tags.map(t => `
                      <span class="tag">
                        ${t}
                      </span>
                    `).join("")}

                  </div>
                `
                : ""
            }


            <div class="card-actions">

              ${
                pdf
                  ? `
                    <button
                      class="view-pdf"
                      data-pdf="${pdf}"
                    >
                      全屏查看 PDF 款式参考
                    </button>
                  `
                  : ""
              }


              ${
                image
                  ? `
                    <a
                      href="${image}"
                      target="_blank"
                      class="card-image-link"
                    >
                      查看高清款式图片
                    </a>
                  `
                  : ""
              }

            </div>

          </div>

        </article>

      `;

    }).join("");


  /* PDF 弹窗按钮 */

  $$(".view-pdf").forEach(b => {

    b.addEventListener("click", () => {

      const pdf =
        b.dataset.pdf;


      if (!pdf) {
        return;
      }


      if ($("#pdfFrame") && $("#pdfModal")) {

        $("#pdfFrame").src = pdf;

        $("#pdfModal")
          .classList.add("show");

      } else {

        window.open(
          pdf,
          "_blank"
        );

      }

    });

  });

}


/* =========================================
15. 删除旧上传区域
========================================= */

function removeOpenUploadArea() {

  const selectors = [

    "#uploadPreview",
    "#localImage",
    "#localPdf",
    "#repoImagePath",
    "#repoPdfPath",
    "#clearUploads"

  ];


  selectors.forEach(selector => {

    const element =
      $(selector);

    if (!element) {
      return;
    }


    const parent =
      element.closest(
        ".upload-panel, .upload-area, .open-upload-area"
      );


    if (parent) {
      parent.remove();
    } else {
      element.remove();
    }

  });

}


/* =========================================
16. PDF 弹窗
========================================= */

function initPdfModal() {

  const closeBtn =
    $("#closePdf");


  if (closeBtn) {

    closeBtn.addEventListener(
      "click",
      closePdfModal
    );

  }


  const modal =
    $("#pdfModal");


  if (modal) {

    modal.addEventListener(
      "click",
      e => {

        if (e.target === modal) {
          closePdfModal();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    e => {

      if (
        e.key === "Escape" &&
        $("#pdfModal") &&
        $("#pdfModal").classList.contains("show")
      ) {
        closePdfModal();
      }

    }
  );

}


function closePdfModal() {

  if ($("#pdfModal")) {
    $("#pdfModal")
      .classList.remove("show");
  }


  if ($("#pdfFrame")) {
    $("#pdfFrame").src = "";
  }

}


/* =========================================
17. 视觉优化
========================================= */

function renderVisual() {

  if (
    typeof VISUAL_DATA === "undefined" ||
    !$("#visualControls")
  ) {
    return;
  }


  $("#visualControls").innerHTML =
    Object.entries(VISUAL_DATA)
      .map(([dim, words]) => `

        <section class="group-card">

          <div class="group-title">

            <h3>
              ${dim}
            </h3>

            <span>
              可多选
            </span>

          </div>


          <div class="choices">

            ${words.map(w => `

              <button
                class="choice visual-choice"
                data-dim="${dim}"
                data-word="${w}"
              >
                ${w}
              </button>

            `).join("")}

          </div>

        </section>

      `)
      .join("");


  $$(".visual-choice").forEach(b => {

    b.addEventListener(
      "click",
      () => {

        b.classList.toggle("active");

        buildVisual();

      }
    );

  });


  buildVisual();

}


function buildVisual() {

  if (!$("#visualOutput")) {
    return;
  }


  const selected =
    $$(".visual-choice.active")
      .map(b => b.dataset.word);


  const prompt =
    selected.length
      ? `
专业男装电商摄影，
真实成年男性模特，
${selected.join("，")}。
突出服装版型、面料纹理与整体搭配，
真实自然光影，
高级商业摄影质感，
商品主体清晰，
移动端电商主图构图优化，
无品牌 Logo，
无水印。
        `
        .replace(/\\n/g, " ")
        .replace(/\\s+/g, " ")
        .trim()

      : "请选择上方人模、姿势、场景、光线、构图等选项生成 Prompt。";


  $("#visualOutput").value =
    prompt;

}


/* =========================================
18. 标题优化分类 Tab
========================================= */

function renderTitleTabs() {

  if (
    typeof TITLE_DATA === "undefined" ||
    !$("#titleCategoryTabs")
  ) {
    return;
  }


  const allKeys =
    Object.keys(TITLE_DATA);


  const chineseOrder = [
    "套装",
    "正装",
    "棉羽"
  ];


  const categories = [
    ...chineseOrder.filter(x =>
      allKeys.includes(x)
    ),

    ...allKeys.filter(x =>
      !chineseOrder.includes(x)
    )
  ];


  if (!TITLE_DATA[currentTitle]) {
    currentTitle =
      categories[0];
  }


  $("#titleCategoryTabs").innerHTML =
    categories.map(x => `

      <button
        class="tab-btn ${x === currentTitle ? "active" : ""}"
        data-title-tab="${x}"
      >
        ${normalizeOpenCategory(x)}
      </button>

    `).join("");


  $$("[data-title-tab]").forEach(b => {

    b.addEventListener(
      "click",
      () => {

        currentTitle =
          b.dataset.titleTab;

        renderTitleTabs();
        renderTitleControls();

      }
    );

  });

}


/* =========================================
19. 标题关键词卡片
========================================= */

function renderTitleControls() {

  if (
    typeof TITLE_DATA === "undefined" ||
    !$("#titleControls")
  ) {
    return;
  }


  const data =
    TITLE_DATA[currentTitle];


  if (!data) {
    return;
  }


  $("#titleControls").innerHTML =
    Object.entries(data)
      .map(([dim, items]) => `

        <section class="group-card">

          <div class="group-title">

            <h3>
              ${dim}
            </h3>

            <span>
              多选
            </span>

          </div>


          <div class="choices">

            ${(Array.isArray(items) ? items : [])
              .map(x => `

                <button
                  class="choice title-choice"
                  data-dim="${dim}"
                  data-en="${x.en || ""}"
                  data-zh="${x.zh || ""}"
                  title="${x.variants || ""}"
                >

                  ${x.zh || ""}

                  <small>
                    ${x.en || "—"}
                  </small>

                </button>

              `).join("")}

          </div>

        </section>

      `)
      .join("");


  $$(".title-choice").forEach(b => {

    b.addEventListener(
      "click",
      () => {

        b.classList.toggle("active");

        buildTitle();

      }
    );

  });


  buildTitle();

}


/* =========================================
20. 生成英文标题
========================================= */

function buildTitle() {

  if (!$("#titleOutput")) {
    return;
  }


  const selected =
    $$(".title-choice.active")
      .map(b => ({
        dim: b.dataset.dim,
        en: b.dataset.en,
        zh: b.dataset.zh
      }));


  const order = [

    "品类(Category)",
    "核心品类词",
    "套装规格(Pack/Set)",
    "目标人群(Target)",
    "版型(Fit)",
    "领型(Neckline)",
    "闭合方式(Closure)",
    "袖长(Sleeve)",
    "长度(Length)",
    "面料/材质(Material)",
    "功能特性(Feature)",
    "细节(Detail)",
    "图案/花色(Pattern)",
    "风格(Style)",
    "季节(Season)",
    "节日(Holiday)",
    "场景(Occasion)",
    "颜色(Color)"

  ];


  selected.sort((a, b) => {

    const ai =
      order.indexOf(a.dim);

    const bi =
      order.indexOf(b.dim);


    return (
      (ai === -1 ? 999 : ai) -
      (bi === -1 ? 999 : bi)
    );

  });


  const words = [
    ...new Set(
      selected
        .map(x => x.en || x.zh)
        .filter(Boolean)
    )
  ];


  const title =
    words.join(", ");


  $("#titleOutput").value =
    title ||
    "请选择关键词卡片生成英文标题。";


  if ($("#titleCount")) {

    $("#titleCount").textContent =
      title
        ? `当前：${words.length} 个关键词 · ${title.length} 个字符`
        : "";

  }

}


/* =========================================
21. 复制内容
========================================= */

async function copyText(id) {

  const element =
    $(id);


  if (!element) {
    return;
  }


  const text =
    element.value;


  if (!text) {
    return;
  }


  try {

    await navigator.clipboard
      .writeText(text);

    alert("已复制");

  } catch (e) {

    element.select();

    document.execCommand("copy");

    alert("已复制");

  }

}


/* =========================================
22. 页面初始化
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* 注入页面优化样式 */

    injectAppStyles();


    /* 初始化导航 */

    initNav();


    /* 类目指引 */

    renderCategoryOverview();


    /* 开款方向 */

    renderOpenTabs();

    renderOpenGrid();


    /* 删除旧素材上传区域 */

    removeOpenUploadArea();


    /* PDF 弹窗 */

    initPdfModal();


    /* 视觉优化 */

    renderVisual();


    /* 标题优化 */

    renderTitleTabs();

    renderTitleControls();


    /* 复制视觉 Prompt */

    const copyVisual =
      $("#copyVisual");


    if (copyVisual) {

      copyVisual.addEventListener(
        "click",
        () => copyText("#visualOutput")
      );

    }


    /* 复制标题 */

    const copyTitle =
      $("#copyTitle");


    if (copyTitle) {

      copyTitle.addEventListener(
        "click",
        () => copyText("#titleOutput")
      );

    }


  }
);
