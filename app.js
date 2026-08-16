/* =========================================
   云岁月对接类目上新指引
   TEMU 男装工具网站 - app.js
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

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];


/* =========================================
   03. 三大类目映射
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
   05. 注入开款方向优化样式
========================================= */

function injectAppStyles() {

  const oldStyle = $("#appDynamicStyles");

  if (oldStyle) {
    oldStyle.remove();
  }


  const style = document.createElement("style");

  style.id = "appDynamicStyles";


  style.textContent = `

    /* 三大类目按钮 */

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


    /* 开款方向 Tabs */

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


    /* 标题优化 Tabs */

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


    /* 开款标题 */

    .open-ppt-head {
      grid-column: 1 / -1;
      margin-bottom: 8px;
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


    /* 开款网格 */

    #openDirectionGrid {
      display: grid !important;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)) !important;
      gap: 24px !important;
      align-items: stretch !important;
    }


    /* 卡片 */

    .reference-card {
      min-height: 520px !important;
      overflow: hidden !important;
      border-radius: 20px !important;
      display: flex !important;
      flex-direction: column !important;
    }


    /* 卡片标题 */

    .ppt-card-header {
      padding: 20px 24px 18px !important;
      border-bottom: 1px solid rgba(128, 128, 128, 0.18);
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
      background: rgba(100, 100, 100, 0.12);
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


    /* 图片和 PDF 展示区 */

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


    /* 加载提示 */

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


    /* 卡片底部 */

    .reference-body {
      padding: 20px 24px 24px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 18px !important;
      flex: 1;
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


    /* PDF 按钮 */

    .view-pdf {
      width: 100% !important;
      min-height: 62px !important;
      padding: 15px 24px !important;
      font-size: 19px !important;
      font-weight: 900 !important;
      border-radius: 14px !important;
      cursor: pointer !important;
    }


    /* 图片按钮 */

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


    /* 类目跳转按钮 */

    .jump-btn {
      min-height: 48px !important;
      padding: 10px 20px !important;
      font-size: 17px !important;
      font-weight: 800 !important;
      border-radius: 11px !important;
      cursor: pointer !important;
    }


    /* 空状态 */

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
      border: 1px dashed rgba(128, 128, 128, 0.35);
    }


    .empty-state h3 {
      margin: 0 0 12px;
      font-size: 24px;
    }


    .empty-state p {
      margin: 0;
      opacity: 0.7;
    }


    /* PDF 弹窗 */

    #pdfModal.show {
      display: flex !important;
    }


    /* PDF 全屏区域 */

    #pdfModal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 30px;
      background: rgba(0, 0, 0, 0.7);
    }


    #pdfModal .modal-card {
      position: relative;
      width: min(1400px, 96vw);
      height: 90vh;
      background: #ffffff;
      border-radius: 18px;
      overflow: hidden;
    }


    #pdfFrame {
      width: 100%;
      height: 100%;
      border: none;
    }


    #closePdf {
      position: absolute;
      top: 10px;
      right: 12px;
      z-index: 10;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      font-size: 28px;
      line-height: 42px;
    }


    /* 手机端 */

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


      #pdfModal {
        padding: 10px;
      }


      #pdfModal .modal-card {
        width: 100%;
        height: 94vh;
      }

    }

  `;


  document.head.appendChild(style);

}


/* =========================================
   06. 页面跳转
========================================= */

function go(id) {

  $$(".page").forEach(page => {
    page.classList.toggle(
      "active",
      page.id === id
    );
  });


  $$(".nav-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.go === id
    );
  });


  const module = MODULES.find(item => item.id === id);


  if ($("#crumb")) {

    $("#crumb").textContent =
      id === "home"
        ? "首页 / 工作台"
        : "首页 / " + (module ? module.name : "");

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

    $("#mainNav").innerHTML =
      MODULES.map((module, index) => `

        <button
          class="nav-btn ${index === 0 ? "active" : ""}"
          data-go="${module.id}"
        >

          <span class="num">
            ${String(index + 1).padStart(2, "0")}
          </span>

          ${module.name}

        </button>

      `).join("");

  }


  if ($("#homeModules")) {

    $("#homeModules").innerHTML =
      MODULES.slice(1).map((module, index) => `

        <article
          class="module-card"
          data-go="${module.id}"
        >

          <div class="module-num">
            模块 ${String(index + 1).padStart(2, "0")}
          </div>

          <h3>${module.name}</h3>

          <p>${module.desc}</p>

          <button class="btn small">
            进入功能
          </button>

        </article>

      `).join("");

  }


  $$("[data-go]").forEach(button => {

    button.addEventListener("click", () => {
      go(button.dataset.go);
    });

  });

}


/* =========================================
   08. 类目名称标准化
========================================= */

function normalizeOpenCategory(name) {

  const value = String(name || "").trim();

  const lower = value.toLowerCase();


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
              .map(item => item.keyword)
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


  $$("[data-cat]").forEach(button => {

    button.addEventListener("click", () => {

      renderCategoryDetail(
        button.dataset.cat,
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

        ${items.map(item => `

          <div class="path-row">

            <b>
              ${item.keyword || chineseName}
            </b>

            <div class="path">
              ${item.path || "—"}
            </div>

            <div class="season">
              ${item.season || "—"}
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


  $$("[data-open-cat]").forEach(button => {

    button.addEventListener("click", () => {

      currentOpen =
        normalizeOpenCategory(
          button.dataset.openCat
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


  $$("[data-open-tab]").forEach(button => {

    button.addEventListener("click", () => {

      currentOpen =
        normalizeOpenCategory(
          button.dataset.openTab
        );


      renderOpenTabs();

      renderOpenGrid();

    });

  });

}


/* =========================================
   13. 获取图片路径
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
   14. 处理资源路径

   自动处理：
   1. 中文文件名
   2. 空格
   3. PDF #page 参数
========================================= */

function getAssetUrl(path) {

  if (!path) {
    return "";
  }


  const value = String(path).trim();


  if (!value) {
    return "";
  }


  try {

    return encodeURI(value);

  } catch (error) {

    return value;

  }

}


/* =========================================
   15. 生成图片预览
========================================= */

function createImagePreview(image, title) {

  const imageUrl = getAssetUrl(image);


  return `

    <div class="ppt-preview">

      <img
        src="${imageUrl}"
        alt="${title}"
        loading="lazy"
        onerror="
          this.style.display='none';
          this.parentElement.innerHTML=
            '<div class=&quot;preview-placeholder&quot;>' +
              '<div class=&quot;pdf-icon&quot;>🖼️</div>' +
              '<h4>图片加载失败</h4>' +
              '<p>请检查 GitHub 中的图片文件路径和文件名是否完全一致</p>' +
            '</div>';
        "
      >

    </div>

  `;

}


/* =========================================
   16. 生成 PDF 预览
========================================= */

function createPdfPreview(pdf, title) {

  const pdfUrl = getAssetUrl(pdf);


  return `

    <div class="ppt-preview">

      <iframe
        class="pdf-preview-frame"
        src="${pdfUrl}"
        title="${title}"
        loading="lazy"
      ></iframe>

    </div>

  `;

}


/* =========================================
   17. 开款方向展示
========================================= */

function renderOpenGrid() {

  if (!$("#openDirectionGrid")) {
    return;
  }


  const list =
    getOpenDirectionList(currentOpen);


  /* 没有数据 */

  if (!list.length) {

    $("#openDirectionGrid").innerHTML = `

      <div class="empty-state">

        <h3>
          暂未读取到「${currentOpen}」款式参考
        </h3>

        <p>
          请检查 data/open-direction-data.js 是否成功加载。
        </p>

      </div>

    `;

    return;

  }


  /* 正常渲染 */

  $("#openDirectionGrid").innerHTML = `

    <div class="open-ppt-head">

      <h2>
        ${currentOpen} · 款式参考
      </h2>

      <p>
        点击不同类目查看对应款式。优先显示款式图片，没有图片时直接显示 PDF 对应页面。
      </p>

    </div>


    ${list.map((item, index) => {

      const image =
        getReferenceImage(item);


      const pdf =
        item.pdf ||
        item.pdfUrl ||
        item.pdfURL ||
        "";


      const imageUrl =
        getAssetUrl(image);


      const pdfUrl =
        getAssetUrl(pdf);


      const tags =
        Array.isArray(item.tags)
          ? item.tags
          : [];


      let previewHtml = "";


      /* 第一优先级：图片 */

      if (image) {

        previewHtml =
          createImagePreview(
            image,
            item.name || currentOpen + "款式参考"
          );

      }


      /* 第二优先级：PDF */

      else if (pdf) {

        previewHtml =
          createPdfPreview(
            pdf,
            item.name || currentOpen + "PDF款式参考"
          );

      }


      /* 没有素材 */

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
                请在 open-direction-data.js 中添加 image 或 pdf 路径
              </p>

            </div>

          </div>

        `;

      }


      return `

        <article class="reference-card">


          <div class="ppt-card-header">

            <div class="reference-type">

              ${
                image
                  ? "款式图片参考"
                  : pdf
                    ? "PDF 款式参考"
                    : "待补充"
              }

            </div>


            <h3>

              ${
                item.name ||
                currentOpen + "款式参考 " + (index + 1)
              }

            </h3>


            ${
              item.en
                ? `
                  <p class="reference-en">
                    ${item.en}
                  </p>
                `
                : ""
            }

          </div>


          ${previewHtml}


          <div class="reference-body">


            ${
              item.description
                ? `
                  <p class="reference-desc">
                    ${item.description}
                  </p>
                `
                : ""
            }


            ${
              tags.length
                ? `

                  <div class="tags">

                    ${tags.map(tag => `

                      <span class="tag">
                        ${tag}
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
                      type="button"
                      data-pdf="${pdfUrl}"
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
                      href="${imageUrl}"
                      target="_blank"
                      rel="noopener"
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

    }).join("")}

  `;


  /* PDF 全屏按钮 */

  $$(".view-pdf").forEach(button => {

    button.addEventListener("click", () => {

      const pdf =
        button.dataset.pdf;


      if (!pdf) {
        return;
      }


      if (
        $("#pdfFrame") &&
        $("#pdfModal")
      ) {

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
   18. PDF 弹窗
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
      event => {

        if (event.target === modal) {
          closePdfModal();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
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
   19. 视觉优化
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
      .map(([dimension, words]) => `

        <section class="group-card">

          <div class="group-title">

            <h3>
              ${dimension}
            </h3>

            <span>
              可多选
            </span>

          </div>


          <div class="choices">

            ${words.map(word => `

              <button
                class="choice visual-choice"
                data-dim="${dimension}"
                data-word="${word}"
              >
                ${word}
              </button>

            `).join("")}

          </div>

        </section>

      `)
      .join("");


  $$(".visual-choice").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.classList.toggle("active");

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
      .map(button => button.dataset.word);


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
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim()

      : "请选择上方人模、姿势、场景、光线、构图等选项生成 Prompt。";


  $("#visualOutput").value =
    prompt;

}


/* =========================================
   20. 标题优化分类 Tab
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

    ...chineseOrder.filter(item =>
      allKeys.includes(item)
    ),

    ...allKeys.filter(item =>
      !chineseOrder.includes(item)
    )

  ];


  if (!TITLE_DATA[currentTitle]) {

    currentTitle =
      categories[0];

  }


  $("#titleCategoryTabs").innerHTML =
    categories.map(category => `

      <button
        class="tab-btn ${category === currentTitle ? "active" : ""}"
        data-title-tab="${category}"
      >
        ${normalizeOpenCategory(category)}
      </button>

    `).join("");


  $$("[data-title-tab]").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentTitle =
          button.dataset.titleTab;

        renderTitleTabs();

        renderTitleControls();

      }
    );

  });

}


/* =========================================
   21. 标题关键词卡片
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
      .map(([dimension, items]) => `

        <section class="group-card">

          <div class="group-title">

            <h3>
              ${dimension}
            </h3>

            <span>
              多选
            </span>

          </div>


          <div class="choices">

            ${
              (Array.isArray(items) ? items : [])
                .map(item => `

                  <button
                    class="choice title-choice"
                    data-dim="${dimension}"
                    data-en="${item.en || ""}"
                    data-zh="${item.zh || ""}"
                    title="${item.variants || ""}"
                  >

                    ${item.zh || ""}

                    <small>
                      ${item.en || "—"}
                    </small>

                  </button>

                `)
                .join("")
            }

          </div>

        </section>

      `)
      .join("");


  $$(".title-choice").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.classList.toggle("active");

        buildTitle();

      }
    );

  });


  buildTitle();

}


/* =========================================
   22. 生成英文标题
========================================= */

function buildTitle() {

  if (!$("#titleOutput")) {
    return;
  }


  const selected =
    $$(".title-choice.active")
      .map(button => ({

        dim: button.dataset.dim,
        en: button.dataset.en,
        zh: button.dataset.zh

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
        .map(item => item.en || item.zh)
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
   23. 复制内容
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

    await navigator.clipboard.writeText(text);

    alert("已复制");

  } catch (error) {

    element.select();

    document.execCommand("copy");

    alert("已复制");

  }

}


/* =========================================
   24. 页面初始化
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* 注入样式 */

    injectAppStyles();


    /* 导航 */

    initNav();


    /* 类目指引 */

    renderCategoryOverview();


    /* 开款方向 */

    renderOpenTabs();

    renderOpenGrid();


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


    /* 控制台检查 */

    console.log("云岁月运营工作台已启动");


    if (typeof OPEN_DIRECTION_DATA === "undefined") {

      console.error(
        "OPEN_DIRECTION_DATA 加载失败，请检查 data/open-direction-data.js"
      );

    } else {

      console.log(
        "开款方向数据加载成功：",
        OPEN_DIRECTION_DATA
      );

    }

  }
);
