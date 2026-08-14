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

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];


/* =========================================
   03. 开款方向分类映射
   兼容中文数据和英文数据
   ========================================= */

const OPEN_CATEGORY_MAP = {
  "套装": {
    keys: ["套装", "sets"],
    label: "套装"
  },
  "正装": {
    keys: ["正装", "formal"],
    label: "正装"
  },
  "棉羽": {
    keys: ["棉羽", "padded"],
    label: "棉羽"
  }
};


/* 当前页面分类 */

let currentOpen = "套装";
let currentTitle = "套装";


/* =========================================
   04. 注入页面优化样式
   不需要修改 style.css
   ========================================= */

function injectAppStyles() {

  const style = document.createElement("style");

  style.textContent = `

    /* =====================================
       三大类目按钮统一放大
       ===================================== */

    .tab-btn,
    .seg,
    .category-btn {
      min-width: 120px !important;
      min-height: 52px !important;
      padding: 12px 26px !important;
      font-size: 18px !important;
      font-weight: 700 !important;
      border-radius: 12px !important;
      cursor: pointer;
    }


    /* =====================================
       开款方向分类按钮
       ===================================== */

    #openTabs {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 16px !important;
      margin: 10px 0 26px !important;
    }

    #openTabs .tab-btn {
      min-width: 150px !important;
      min-height: 58px !important;
      padding: 14px 32px !important;
      font-size: 20px !important;
      font-weight: 800 !important;
      border-radius: 14px !important;
    }


    /* =====================================
       标题优化分类按钮
       ===================================== */

    #titleCategoryTabs {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 16px !important;
      margin-bottom: 26px !important;
    }

    #titleCategoryTabs .tab-btn {
      min-width: 150px !important;
      min-height: 58px !important;
      font-size: 20px !important;
      font-weight: 800 !important;
    }


    /* =====================================
       开款方向 PDF 卡片
       ===================================== */

    .reference-card {
      min-height: 260px !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
    }

    .reference-body {
      padding: 26px !important;
    }

    .reference-card h3 {
      font-size: 22px !important;
      margin-bottom: 18px !important;
    }

    .reference-card .tags {
      margin-bottom: 24px !important;
    }


    /* =====================================
       PDF 按钮放大
       ===================================== */

    .view-pdf {
      width: 100% !important;
      min-height: 58px !important;
      padding: 14px 24px !important;
      font-size: 19px !important;
      font-weight: 800 !important;
      border-radius: 12px !important;
      cursor: pointer;
    }


    /* =====================================
       类目路径中的跳转按钮放大
       ===================================== */

    .jump-btn {
      min-height: 46px !important;
      padding: 10px 18px !important;
      font-size: 16px !important;
      font-weight: 700 !important;
      border-radius: 10px !important;
      cursor: pointer;
    }


    /* =====================================
       删除开款方向上传区域
       ===================================== */

    .open-upload-area,
    .upload-area,
    .upload-panel,
    #uploadPreview {
      display: none !important;
    }


    /* 手机端 */
    @media (max-width: 768px) {

      .tab-btn,
      .seg,
      .category-btn {
        min-width: 100px !important;
        min-height: 48px !important;
        padding: 10px 18px !important;
        font-size: 16px !important;
      }

      #openTabs .tab-btn,
      #titleCategoryTabs .tab-btn {
        min-width: calc(50% - 8px) !important;
        font-size: 18px !important;
      }

      .view-pdf {
        min-height: 54px !important;
        font-size: 17px !important;
      }

    }

  `;

  document.head.appendChild(style);
}


/* =========================================
   05. 页面跳转
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
        : "首页 / " + m.name;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   06. 初始化导航
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

    $("#homeModules").innerHTML = MODULES.slice(1).map((m, i) => `
      <article class="module-card" data-go="${m.id}">
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
   07. 类目名称标准化
   ========================================= */

function normalizeOpenCategory(name) {

  const value = String(name || "").trim();

  if (
    value === "套装" ||
    value.toLowerCase() === "sets"
  ) {
    return "套装";
  }

  if (
    value === "正装" ||
    value.toLowerCase() === "formal"
  ) {
    return "正装";
  }

  if (
    value === "棉羽" ||
    value.toLowerCase() === "padded"
  ) {
    return "棉羽";
  }

  return value;

}


/* =========================================
   08. 获取对应开款方向数据
   兼容：
   OPEN_DIRECTION_DATA.套装
   OPEN_DIRECTION_DATA.sets
   ========================================= */

function getOpenDirectionList(categoryName) {

  if (typeof OPEN_DIRECTION_DATA === "undefined") {
    return [];
  }

  const category = normalizeOpenCategory(categoryName);

  const config = OPEN_CATEGORY_MAP[category];

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
   09. 类目指引首页
   ========================================= */

function renderCategoryOverview() {

  if (
    typeof CATEGORY_DATA === "undefined" ||
    !$("#categoryOverview")
  ) {
    return;
  }


  $("#categoryOverview").innerHTML =
    Object.entries(CATEGORY_DATA).map(([name, items]) => {

      const chineseName = normalizeOpenCategory(name);

      const keywords = [
        ...new Set(
          items
            .map(x => x.keyword)
            .filter(Boolean)
        )
      ].join("、");


      return `
        <article class="overview-card">

          <h3>${chineseName}</h3>

          <span class="count-badge">
            ${items.length} 条精准路径
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

    }).join("");


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
      : (
          CATEGORY_DATA["sets"]
            ? "sets"
            : Object.keys(CATEGORY_DATA)[0]
        );

  if (firstCategory) {
    renderCategoryDetail(firstCategory, false);
  }

}


/* =========================================
   10. 类目精准路径详情
   ========================================= */

function renderCategoryDetail(name, scroll) {

  if (
    typeof CATEGORY_DATA === "undefined" ||
    !$("#categoryDetail")
  ) {
    return;
  }


  const items = CATEGORY_DATA[name] || [];

  const chineseName = normalizeOpenCategory(name);


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
   11. 开款方向分类按钮
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
   12. 开款方向卡片
   仅展示 PDF
   不再展示图片上传
   ========================================= */

function renderOpenGrid() {

  if (!$("#openDirectionGrid")) {
    return;
  }


  const list =
    getOpenDirectionList(currentOpen);


  if (!list.length) {

    $("#openDirectionGrid").innerHTML = `

      <div class="empty-state">

        <h3>
          暂未添加 ${currentOpen} 款式参考
        </h3>

        <p>
          请在 open-direction-data.js 中添加对应的 PDF 路径。
        </p>

      </div>

    `;

    return;
  }


  $("#openDirectionGrid").innerHTML =
    list.map(x => {

      const pdf = x.pdf || "";

      const tags =
        Array.isArray(x.tags)
          ? x.tags
          : [];


      return `

        <article class="reference-card">

          <div class="reference-body">

            <div class="reference-type">
              PDF 款式参考
            </div>


            <h3>
              ${x.name || currentOpen + "款式参考"}
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


            <div class="tags">

              ${
                tags.map(t => `
                  <span class="tag">
                    ${t}
                  </span>
                `).join("")
              }

            </div>


            <div class="card-actions">

              ${
                pdf
                  ? `
                    <button
                      class="view-pdf"
                      data-pdf="${pdf}"
                    >
                      查看 ${x.name || "款式"} PDF 参考
                    </button>
                  `
                  : `
                    <div class="pdf-empty">
                      暂未绑定 PDF 款式参考
                    </div>
                  `
              }

            </div>

          </div>

        </article>

      `;

    }).join("");


  /* PDF 查看按钮 */

  $$(".view-pdf").forEach(b => {

    b.addEventListener("click", () => {

      if ($("#pdfFrame")) {
        $("#pdfFrame").src =
          b.dataset.pdf;
      }


      if ($("#pdfModal")) {
        $("#pdfModal")
          .classList.add("show");
      }


      /*
       如果没有 PDF 弹窗结构，
       则直接打开 PDF
      */

      if (
        !$("#pdfModal") &&
        b.dataset.pdf
      ) {

        window.open(
          b.dataset.pdf,
          "_blank"
        );

      }

    });

  });

}


/* =========================================
   13. 删除开款方向上传区域
   ========================================= */

function removeOpenUploadArea() {

  /*
    删除上传预览区域
  */

  const uploadPreview =
    $("#uploadPreview");

  if (uploadPreview) {

    const parent =
      uploadPreview.closest(
        ".upload-panel, .upload-area, .group-card, section"
      );

    if (parent) {
      parent.remove();
    } else {
      uploadPreview.remove();
    }

  }


  /*
    删除图片上传 input
  */

  const localImage =
    $("#localImage");

  if (localImage) {

    const parent =
      localImage.closest(
        ".upload-panel, .upload-area, .group-card, section"
      );

    if (parent) {
      parent.remove();
    } else {
      localImage.remove();
    }

  }


  /*
    删除 PDF 本地上传 input
    因为现在统一通过
    open-direction-data.js
    绑定 GitHub PDF 路径
  */

  const localPdf =
    $("#localPdf");

  if (localPdf) {

    const parent =
      localPdf.closest(
        ".upload-panel, .upload-area, .group-card, section"
      );

    if (parent) {
      parent.remove();
    } else {
      localPdf.remove();
    }

  }


  /*
    删除素材路径输入框
  */

  [
    "repoImagePath",
    "repoPdfPath",
    "clearUploads"
  ].forEach(id => {

    const element =
      $("#" + id);

    if (element) {

      const parent =
        element.closest(
          ".upload-panel, .upload-area, .group-card, section"
        );

      if (parent) {
        parent.remove();
      } else {
        element.remove();
      }

    }

  });

}


/* =========================================
   14. PDF 弹窗关闭
   ========================================= */

function initPdfModal() {

  const closeBtn =
    $("#closePdf");

  if (!closeBtn) {
    return;
  }


  closeBtn.addEventListener(
    "click",
    () => {

      if ($("#pdfModal")) {
        $("#pdfModal")
          .classList.remove("show");
      }

      if ($("#pdfFrame")) {
        $("#pdfFrame").src = "";
      }

    }
  );

}


/* =========================================
   15. 视觉优化
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

            <h3>${dim}</h3>

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

      `).join("");


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
专业男装电商摄影，真实成年男性模特，
${selected.join("，")}。
突出服装版型、面料纹理与整体搭配，
真实自然光影，高级商业摄影质感，
商品主体清晰，移动端电商主图构图优化，
无品牌 Logo，无水印。
        `.replace(/\n/g, " ").replace(/\s+/g, " ").trim()

      : "请选择上方人模、姿势、场景、光线、构图等选项生成 Prompt。";


  $("#visualOutput").value =
    prompt;

}


/* =========================================
   16. 标题优化分类 Tab
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
    ...chineseOrder.filter(x => allKeys.includes(x)),
    ...allKeys.filter(x => !chineseOrder.includes(x))
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
   17. 标题关键词卡片
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

            <h3>${dim}</h3>

            <span>
              多选
            </span>

          </div>


          <div class="choices">

            ${items.map(x => `

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

      `).join("");


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
   18. 生成英文标题
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
   19. 复制内容
   ========================================= */

async function copyText(id) {

  const element = $(id);

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
   20. 页面初始化
   ========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* 注入按钮放大等样式 */
    injectAppStyles();


    /* 初始化导航 */
    initNav();


    /* 类目指引 */
    renderCategoryOverview();


    /* 开款方向 */
    renderOpenTabs();
    renderOpenGrid();


    /* 删除素材预览上传 */
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
