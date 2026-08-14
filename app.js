// ======================================================
// 云岁月对接类目上新指引
// 主程序 app.js
// ======================================================


// ======================================================
// 01. 网站模块
// ======================================================

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
    desc: "款式参考，支持 JPG / PNG / WEBP 与 PDF"
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


// ======================================================
// 02. 基础工具
// ======================================================

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];


// ======================================================
// 03. 开款方向分类映射
//
// 兼容两种数据格式：
//
// 中文：
// "套装"
// "正装"
// "棉羽"
//
// 英文：
// sets
// formal
// padded
// ======================================================

const OPEN_CATEGORY_MAP = {
  "套装": "sets",
  "正装": "formal",
  "棉羽": "padded",

  "sets": "sets",
  "formal": "formal",
  "padded": "padded"
};

const OPEN_CATEGORY_NAME = {
  "sets": "套装",
  "formal": "正装",
  "padded": "棉羽",

  "套装": "套装",
  "正装": "正装",
  "棉羽": "棉羽"
};


// ======================================================
// 04. 当前状态
// ======================================================

let currentOpen = "sets";
let currentTitle = "套装";

let tempImageURL = "";
let tempPdfURL = "";


// ======================================================
// 05. 获取 DOM
// 避免元素不存在时直接报错
// ======================================================

function getElement(selector) {
  return document.querySelector(selector);
}


// ======================================================
// 06. 页面跳转
// ======================================================

function go(id) {

  $$(".page").forEach(page => {
    page.classList.toggle("active", page.id === id);
  });

  $$(".nav-btn").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.go === id
    );
  });

  const module = MODULES.find(item => item.id === id);

  const crumb = $("#crumb");

  if (crumb) {

    if (id === "home") {
      crumb.textContent = "首页 / 工作台";
    } else if (module) {
      crumb.textContent = "首页 / " + module.name;
    }

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ======================================================
// 07. 初始化导航
// ======================================================

function initNav() {

  const mainNav = $("#mainNav");
  const homeModules = $("#homeModules");

  if (mainNav) {

    mainNav.innerHTML = MODULES.map((module, index) => {

      return `
        <button
          class="nav-btn ${index === 0 ? "active" : ""}"
          data-go="${module.id}"
        >
          <span class="num">
            ${String(index + 1).padStart(2, "0")}
          </span>

          ${module.name}
        </button>
      `;

    }).join("");

  }


  if (homeModules) {

    homeModules.innerHTML = MODULES
      .slice(1)
      .map((module, index) => {

        return `
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
        `;

      })
      .join("");

  }


  $$("[data-go]").forEach(button => {

    button.addEventListener("click", () => {

      go(button.dataset.go);

    });

  });

}


// ======================================================
// 08. 类目指引
// ======================================================

function renderCategoryOverview() {

  const categoryOverview = $("#categoryOverview");

  if (!categoryOverview) return;


  categoryOverview.innerHTML = Object
    .entries(CATEGORY_DATA || {})
    .map(([name, items]) => {

      const safeItems = Array.isArray(items) ? items : [];

      const keywords = [
        ...new Set(
          safeItems
            .map(item => item.keyword)
            .filter(Boolean)
        )
      ].join("、");


      return `
        <article class="overview-card">

          <h3>${name}</h3>

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
            查看 ${name} 路径
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


  renderCategoryDetail("套装", false);

}


// ======================================================
// 09. 类目详细路径
// ======================================================

function renderCategoryDetail(name, scroll) {

  const categoryDetail = $("#categoryDetail");

  if (!categoryDetail) return;


  const items =
    (CATEGORY_DATA && CATEGORY_DATA[name])
      ? CATEGORY_DATA[name]
      : [];


  categoryDetail.innerHTML = `

    <div class="path-block">

      <div class="path-head">

        <h3>
          ${name} · 精准上新路径
        </h3>

        <span>
          ${items.length} 条
        </span>

      </div>


      <div class="path-list">

        ${items.map(item => {

          return `

            <div class="path-row">

              <b>
                ${item.keyword || name}
              </b>


              <div class="path">
                ${item.path || "—"}
              </div>


              <div class="season">
                ${item.season || "—"}
              </div>


              <button
                class="jump-btn"
                data-open-cat="${name}"
              >
                查看开款方向 →
              </button>

            </div>

          `;

        }).join("")}

      </div>

    </div>

  `;


  $$("[data-open-cat]").forEach(button => {

    button.addEventListener("click", () => {

      // 将中文类目转换为数据实际 Key
      currentOpen =
        OPEN_CATEGORY_MAP[button.dataset.openCat]
        || button.dataset.openCat;

      renderOpenTabs();

      renderOpenGrid();

      go("open");

    });

  });


  if (scroll) {

    categoryDetail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


// ======================================================
// 10. 获取开款方向实际数据 Key
// ======================================================

function getOpenDataKey(category) {

  if (
    typeof OPEN_DIRECTION_DATA === "undefined"
  ) {
    return "";
  }


  // 如果当前 Key 本身存在
  if (OPEN_DIRECTION_DATA[category]) {
    return category;
  }


  // 中文转换
  const mappedKey =
    OPEN_CATEGORY_MAP[category];


  if (
    mappedKey &&
    OPEN_DIRECTION_DATA[mappedKey]
  ) {
    return mappedKey;
  }


  // 如果英文 Key 对应的中文数据存在
  const chineseName =
    OPEN_CATEGORY_NAME[category];


  if (
    chineseName &&
    OPEN_DIRECTION_DATA[chineseName]
  ) {
    return chineseName;
  }


  return Object.keys(OPEN_DIRECTION_DATA)[0] || "";

}


// ======================================================
// 11. 获取开款方向显示名称
// ======================================================

function getOpenDisplayName(key) {

  return OPEN_CATEGORY_NAME[key] || key;

}


// ======================================================
// 12. 渲染开款方向 Tabs
// ======================================================

function renderOpenTabs() {

  const openTabs = $("#openTabs");

  if (!openTabs) return;


  if (
    typeof OPEN_DIRECTION_DATA === "undefined"
  ) {
    openTabs.innerHTML =
      `<div class="empty-state">
        暂未加载开款方向数据
      </div>`;

    return;
  }


  const dataKeys =
    Object.keys(OPEN_DIRECTION_DATA);


  // 自动修正当前分类
  const actualKey =
    getOpenDataKey(currentOpen);


  if (actualKey) {
    currentOpen = actualKey;
  }


  openTabs.innerHTML = dataKeys
    .map(key => {

      return `

        <button
          class="tab-btn ${key === currentOpen ? "active" : ""}"
          data-open-tab="${key}"
        >
          ${getOpenDisplayName(key)}
        </button>

      `;

    })
    .join("");


  $$("[data-open-tab]").forEach(button => {

    button.addEventListener("click", () => {

      currentOpen =
        button.dataset.openTab;

      renderOpenTabs();

      renderOpenGrid();

    });

  });

}


// ======================================================
// 13. 获取开款图片
// ======================================================

function getReferenceImage(item, index) {

  // 1. 数据中已有图片
  if (item.image) {
    return item.image;
  }


  // 2. 手动填写 GitHub 图片路径
  const repoImagePath =
    $("#repoImagePath");

  if (
    repoImagePath &&
    repoImagePath.value.trim()
  ) {
    return repoImagePath.value.trim();
  }


  // 3. 本地临时上传
  // 仅用于当前浏览器预览
  if (
    tempImageURL &&
    index === 0
  ) {
    return tempImageURL;
  }


  return "";

}


// ======================================================
// 14. 获取 PDF
// ======================================================

function getReferencePdf(item, index) {

  // 1. 数据文件中的 PDF
  if (item.pdf) {
    return item.pdf;
  }


  // 2. 手动填写 GitHub PDF 路径
  const repoPdfPath =
    $("#repoPdfPath");

  if (
    repoPdfPath &&
    repoPdfPath.value.trim()
  ) {
    return repoPdfPath.value.trim();
  }


  // 3. 本地临时 PDF
  if (
    tempPdfURL &&
    index === 0
  ) {
    return tempPdfURL;
  }


  return "";

}


// ======================================================
// 15. 渲染开款方向卡片
// ======================================================

function renderOpenGrid() {

  const openDirectionGrid =
    $("#openDirectionGrid");

  if (!openDirectionGrid) return;


  if (
    typeof OPEN_DIRECTION_DATA === "undefined"
  ) {

    openDirectionGrid.innerHTML = `
      <div class="empty-state">
        未找到 OPEN_DIRECTION_DATA，
        请检查 data/open-direction-data.js 是否已正确加载。
      </div>
    `;

    return;

  }


  const actualKey =
    getOpenDataKey(currentOpen);


  const list =
    OPEN_DIRECTION_DATA[actualKey]
    || [];


  currentOpen = actualKey;


  if (!list.length) {

    openDirectionGrid.innerHTML = `
      <div class="empty-state">
        当前类目暂时没有款式参考
      </div>
    `;

    return;

  }


  openDirectionGrid.innerHTML =
    list.map((item, index) => {

      const image =
        getReferenceImage(item, index);

      const pdf =
        getReferencePdf(item, index);

      const tags =
        Array.isArray(item.tags)
          ? item.tags
          : [];


      const description =
        item.description || "";


      const englishName =
        item.en || "";


      return `

        <article class="reference-card">


          ${
            image

              ? `

                <img
                  src="${image}"
                  alt="${item.name || "款式参考"}"
                  loading="lazy"

                  onerror="
                    this.outerHTML=
                    '<div class=&quot;placeholder&quot;>
                    图片路径无效或尚未上传
                    </div>'
                  "
                >

              `

              : `

                <div class="placeholder">
                  待添加 JPG / PNG / WEBP 款式图片
                </div>

              `
          }


          <div class="reference-body">


            <h3>
              ${item.name || "未命名款式"}
            </h3>


            ${
              englishName

                ? `
                  <div class="en-name">
                    ${englishName}
                  </div>
                `

                : ""
            }


            ${
              description

                ? `
                  <p class="reference-desc">
                    ${description}
                  </p>
                `

                : ""
            }


            <div class="tags">

              ${tags.map(tag => {

                return `
                  <span class="tag">
                    ${tag}
                  </span>
                `;

              }).join("")}

            </div>


            <div class="card-actions">


              ${
                pdf

                  ? `

                    <button
                      class="view-pdf"
                      data-pdf="${pdf}"
                    >
                      查看 PDF 参考
                    </button>

                  `

                  : `

                    <span class="tag">
                      待绑定 PDF
                    </span>

                  `
              }


              ${
                image

                  ? `

                    <a
                      href="${image}"
                      target="_blank"
                      rel="noopener"
                    >
                      查看图片
                    </a>

                  `

                  : ""
              }


            </div>


          </div>


        </article>

      `;

    })
    .join("");


  // 绑定 PDF 打开事件
  $$(".view-pdf").forEach(button => {

    button.addEventListener("click", () => {

      openPdf(button.dataset.pdf);

    });

  });

}


// ======================================================
// 16. 打开 PDF
// ======================================================

function openPdf(pdfPath) {

  if (!pdfPath) {

    alert("暂未绑定 PDF 文件");

    return;

  }


  const pdfFrame =
    $("#pdfFrame");

  const pdfModal =
    $("#pdfModal");


  if (
    pdfFrame &&
    pdfModal
  ) {

    pdfFrame.src = pdfPath;

    pdfModal.classList.add("show");

  } else {

    // 如果你的 index.html 没有 PDF 弹窗
    // 自动使用新窗口打开
    window.open(
      pdfPath,
      "_blank"
    );

  }

}


// ======================================================
// 17. 本地上传与 GitHub 路径
// ======================================================

function initUpload() {

  const localImage =
    $("#localImage");

  const localPdf =
    $("#localPdf");


  // ----------------------------
  // 本地图片
  // ----------------------------

  if (localImage) {

    localImage.addEventListener(
      "change",
      event => {

        if (tempImageURL) {
          URL.revokeObjectURL(
            tempImageURL
          );
        }


        const file =
          event.target.files[0];


        tempImageURL =
          file
            ? URL.createObjectURL(file)
            : "";


        renderUploadPreview();

        renderOpenGrid();

      }
    );

  }


  // ----------------------------
  // 本地 PDF
  // ----------------------------

  if (localPdf) {

    localPdf.addEventListener(
      "change",
      event => {

        if (tempPdfURL) {

          URL.revokeObjectURL(
            tempPdfURL
          );

        }


        const file =
          event.target.files[0];


        tempPdfURL =
          file
            ? URL.createObjectURL(file)
            : "";


        renderUploadPreview();

        renderOpenGrid();

      }
    );

  }


  // ----------------------------
  // GitHub 图片 / PDF 路径
  // ----------------------------

  [
    "repoImagePath",
    "repoPdfPath"
  ].forEach(id => {

    const input =
      $("#" + id);


    if (input) {

      input.addEventListener(
        "input",
        () => {

          renderOpenGrid();

        }
      );

    }

  });


  // ----------------------------
  // 清空上传
  // ----------------------------

  const clearUploads =
    $("#clearUploads");


  if (clearUploads) {

    clearUploads.addEventListener(
      "click",
      () => {

        if (tempImageURL) {

          URL.revokeObjectURL(
            tempImageURL
          );

        }


        if (tempPdfURL) {

          URL.revokeObjectURL(
            tempPdfURL
          );

        }


        tempImageURL = "";

        tempPdfURL = "";


        if ($("#localImage")) {
          $("#localImage").value = "";
        }


        if ($("#localPdf")) {
          $("#localPdf").value = "";
        }


        if ($("#repoImagePath")) {
          $("#repoImagePath").value = "";
        }


        if ($("#repoPdfPath")) {
          $("#repoPdfPath").value = "";
        }


        renderUploadPreview();

        renderOpenGrid();

      }
    );

  }


  // ----------------------------
  // 关闭 PDF
  // ----------------------------

  const closePdf =
    $("#closePdf");


  if (closePdf) {

    closePdf.addEventListener(
      "click",
      () => {

        const pdfModal =
          $("#pdfModal");

        const pdfFrame =
          $("#pdfFrame");


        if (pdfModal) {
          pdfModal.classList.remove(
            "show"
          );
        }


        if (pdfFrame) {
          pdfFrame.src = "";
        }

      }
    );

  }

}


// ======================================================
// 18. 上传预览
// ======================================================

function renderUploadPreview() {

  const uploadPreview =
    $("#uploadPreview");

  if (!uploadPreview) return;


  let html = "";


  if (tempImageURL) {

    html += `

      <div class="preview-box">

        <b>
          本地图片预览
        </b>

        <img
          src="${tempImageURL}"
          alt="本地上传图片"
        >

      </div>

    `;

  }


  if (tempPdfURL) {

    html += `

      <div class="preview-box">

        <b>
          本地 PDF 已选择
        </b>

        <br>

        <button
          class="btn small"
          id="previewTempPdf"
        >
          打开 PDF 预览
        </button>

      </div>

    `;

  }


  uploadPreview.innerHTML = html;


  const previewTempPdf =
    $("#previewTempPdf");


  if (previewTempPdf) {

    previewTempPdf.addEventListener(
      "click",
      () => {

        openPdf(tempPdfURL);

      }
    );

  }

}


// ======================================================
// 19. 视觉优化
// ======================================================

function renderVisual() {

  const visualControls =
    $("#visualControls");

  if (
    !visualControls ||
    typeof VISUAL_DATA === "undefined"
  ) {
    return;
  }


  visualControls.innerHTML =
    Object.entries(VISUAL_DATA)
      .map(([dimension, words]) => {

        const safeWords =
          Array.isArray(words)
            ? words
            : [];


        return `

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

              ${safeWords.map(word => {

                return `

                  <button
                    class="choice visual-choice"
                    data-dim="${dimension}"
                    data-word="${word}"
                  >
                    ${word}
                  </button>

                `;

              }).join("")}

            </div>

          </section>

        `;

      })
      .join("");


  $$(".visual-choice").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.classList.toggle(
          "active"
        );

        buildVisual();

      }
    );

  });


  buildVisual();

}


// ======================================================
// 20. 生成视觉 Prompt
// ======================================================

function buildVisual() {

  const selected =
    $$(".visual-choice.active")
      .map(button => button.dataset.word);


  const visualOutput =
    $("#visualOutput");


  if (!visualOutput) return;


  if (!selected.length) {

    visualOutput.value =
      "请选择上方人模、姿势、场景、光线、构图等选项生成 Prompt。";

    return;

  }


  const prompt =

    `专业男装电商摄影，真实成年男性模特，` +

    `${selected.join("，")}。` +

    `重点突出男装商品主体、服装版型、面料纹理和细节工艺，` +

    `人物姿态自然，商品清晰可见，` +

    `真实自然光影，高级商业摄影质感，` +

    `画面层次清晰，主体精准对焦，` +

    `适合 TEMU 男装电商主图及详情页展示，` +

    `移动端电商构图优化，无品牌 Logo，无文字，无水印。`;


  visualOutput.value =
    prompt;

}


// ======================================================
// 21. 标题优化分类 Tabs
// ======================================================

function renderTitleTabs() {

  const titleCategoryTabs =
    $("#titleCategoryTabs");

  if (
    !titleCategoryTabs ||
    typeof TITLE_DATA === "undefined"
  ) {
    return;
  }


  const keys =
    Object.keys(TITLE_DATA);


  if (
    !TITLE_DATA[currentTitle]
  ) {

    currentTitle =
      keys[0] || "";

  }


  titleCategoryTabs.innerHTML =
    keys.map(key => {

      return `

        <button
          class="tab-btn ${key === currentTitle ? "active" : ""}"
          data-title-tab="${key}"
        >
          ${key}
        </button>

      `;

    })
    .join("");


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


// ======================================================
// 22. 标题关键词卡片
// ======================================================

function renderTitleControls() {

  const titleControls =
    $("#titleControls");

  if (!titleControls) return;


  const data =
    TITLE_DATA[currentTitle]
    || {};


  titleControls.innerHTML =
    Object.entries(data)
      .map(([dimension, items]) => {

        const safeItems =
          Array.isArray(items)
            ? items
            : [];


        return `

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

              ${safeItems.map(item => {

                return `

                  <button
                    class="choice title-choice"
                    data-dim="${dimension}"
                    data-en="${item.en || ""}"
                    data-zh="${item.zh || ""}"
                    title="${item.variants || ""}"
                  >

                    ${item.zh || item.en || "未命名"}

                    <small>
                      ${item.en || "—"}
                    </small>

                  </button>

                `;

              }).join("")}

            </div>

          </section>

        `;

      })
      .join("");


  $$(".title-choice").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        button.classList.toggle(
          "active"
        );

        buildTitle();

      }
    );

  });


  buildTitle();

}


// ======================================================
// 23. 生成标题
// ======================================================

function buildTitle() {

  const selected =
    $$(".title-choice.active")
      .map(button => {

        return {

          dim:
            button.dataset.dim,

          en:
            button.dataset.en,

          zh:
            button.dataset.zh

        };

      });


  const order = [

    "品类(Category)",
    "核心品类词",
    "套装规格(Pack/Set)",
    "套装数量",
    "目标人群(Target)",
    "性别",
    "版型(Fit)",
    "版型",
    "领型(Neckline)",
    "领型",
    "闭合方式(Closure)",
    "闭合方式",
    "袖长(Sleeve)",
    "袖长",
    "长度(Length)",
    "长度",
    "面料/材质(Material)",
    "面料",
    "材质",
    "功能特性(Feature)",
    "功能",
    "细节(Detail)",
    "细节",
    "图案/花色(Pattern)",
    "图案",
    "花色",
    "风格(Style)",
    "风格",
    "季节(Season)",
    "季节",
    "节日",
    "节日(Holiday)",
    "场景(Occasion)",
    "场景",
    "颜色(Color)",
    "颜色"

  ];


  selected.sort((a, b) => {

    let indexA =
      order.indexOf(a.dim);

    let indexB =
      order.indexOf(b.dim);


    if (indexA === -1) {
      indexA = 999;
    }


    if (indexB === -1) {
      indexB = 999;
    }


    return indexA - indexB;

  });


  const words = [

    ...new Set(

      selected
        .map(item =>
          item.en || item.zh
        )
        .filter(Boolean)

    )

  ];


  const title =
    words.join(", ");


  const titleOutput =
    $("#titleOutput");

  const titleCount =
    $("#titleCount");


  if (titleOutput) {

    titleOutput.value =
      title ||
      "请选择关键词卡片生成英文标题。";

  }


  if (titleCount) {

    titleCount.textContent =
      title

        ? `当前：${words.length} 个关键词 · ${title.length} 个字符`

        : "";

  }

}


// ======================================================
// 24. 复制文本
// ======================================================

async function copyText(id) {

  const element =
    $(id);

  if (!element) return;


  const text =
    element.value;

  if (!text) return;


  try {

    await navigator.clipboard.writeText(
      text
    );

    alert("已复制");

  } catch (error) {

    element.select();

    document.execCommand("copy");

    alert("已复制");

  }

}


// ======================================================
// 25. 页面加载完成
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {


    // --------------------------
    // 导航
    // --------------------------

    initNav();


    // --------------------------
    // 类目指引
    // --------------------------

    if (
      typeof CATEGORY_DATA !== "undefined"
    ) {

      renderCategoryOverview();

    }


    // --------------------------
    // 开款方向
    // --------------------------

    if (
      typeof OPEN_DIRECTION_DATA !== "undefined"
    ) {

      // 自动设置第一个存在的分类
      const firstOpenKey =
        Object.keys(OPEN_DIRECTION_DATA)[0];


      if (firstOpenKey) {

        currentOpen =
          firstOpenKey;

      }


      renderOpenTabs();

      renderOpenGrid();

    }


    // --------------------------
    // 上传功能
    // --------------------------

    initUpload();


    // --------------------------
    // 视觉优化
    // --------------------------

    if (
      typeof VISUAL_DATA !== "undefined"
    ) {

      renderVisual();

    }


    // --------------------------
    // 标题优化
    // --------------------------

    if (
      typeof TITLE_DATA !== "undefined"
    ) {

      renderTitleTabs();

      renderTitleControls();

    }


    // --------------------------
    // 复制视觉 Prompt
    // --------------------------

    const copyVisual =
      $("#copyVisual");


    if (copyVisual) {

      copyVisual.addEventListener(
        "click",
        () => {

          copyText(
            "#visualOutput"
          );

        }
      );

    }


    // --------------------------
    // 复制标题
    // --------------------------

    const copyTitle =
      $("#copyTitle");


    if (copyTitle) {

      copyTitle.addEventListener(
        "click",
        () => {

          copyText(
            "#titleOutput"
          );

        }
      );

    }


  }
);
