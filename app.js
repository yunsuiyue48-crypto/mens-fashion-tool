const MODULES = [
  { id: "home", name: "首页", desc: "所有功能入口与后续扩展工作台" },
  { id: "category", name: "类目指引", desc: "套装 / 正装 / 棉羽精准上新路径" },
  { id: "open", name: "开款方向", desc: "按套装、正装、棉羽查看 PDF 款式参考" },
  { id: "visual", name: "视觉优化", desc: "人模电商图 Prompt 生成" },
  { id: "title", name: "标题优化", desc: "三大类目关键词多选组合" },
  { id: "sourcing", name: "招品 / 回品", desc: "预留招品、回品与趋势分析功能" }
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let currentOpen = "套装";
let currentTitle = "套装";


/* =========================================================
   页面切换
========================================================= */

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


/* =========================================================
   首页导航
========================================================= */

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


  $$("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
      go(button.dataset.go);
    });
  });
}


/* =========================================================
   类目指引：首页概览
========================================================= */

function renderCategoryOverview() {

  if (!$("#categoryOverview")) return;

  $("#categoryOverview").innerHTML =
    Object.entries(CATEGORY_DATA).map(([name, items]) => {

      const keywords = [
        ...new Set(
          items
            .map(x => x.keyword)
            .filter(Boolean)
        )
      ].join("、");

      return `
        <article class="overview-card">

          <h3>${name}</h3>

          <span class="count-badge">
            ${items.length} 条精准路径
          </span>

          <p>
            ${keywords || "查看全部精准路径"}
          </p>

          <button
            class="btn small cat-big-btn"
            data-cat="${name}"
          >
            查看 ${name} 路径
          </button>

        </article>
      `;

    }).join("");


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


/* =========================================================
   类目指引：详细路径
========================================================= */

function renderCategoryDetail(name, scroll) {

  const items = CATEGORY_DATA[name] || [];

  if (!$("#categoryDetail")) return;


  $("#categoryDetail").innerHTML = `

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

        ${items.map(x => `

          <div class="path-row">

            <b>
              ${x.keyword || name}
            </b>


            <div class="path">
              ${x.path || "—"}
            </div>


            <div class="season">
              ${x.season || "—"}
            </div>


            <button
              class="jump-btn cat-big-btn"
              data-open-cat="${name}"
            >
              查看${name}开款方向 →
            </button>

          </div>

        `).join("")}

      </div>

    </div>
  `;


  $$("[data-open-cat]").forEach(button => {

    button.addEventListener("click", () => {

      currentOpen = button.dataset.openCat;

      renderOpenTabs();
      renderOpenGrid();

      go("open");

    });

  });


  if (scroll && $("#categoryDetail")) {

    $("#categoryDetail").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
}


/* =========================================================
   开款方向：分类按钮
   套装 / 正装 / 棉羽
========================================================= */

function renderOpenTabs() {

  if (!$("#openTabs")) return;


  $("#openTabs").innerHTML =
    Object.keys(OPEN_DIRECTION_DATA).map(name => `

      <button
        class="tab-btn cat-big-btn ${name === currentOpen ? "active" : ""}"
        data-open-tab="${name}"
      >
        ${name}
      </button>

    `).join("");


  $$("[data-open-tab]").forEach(button => {

    button.addEventListener("click", () => {

      currentOpen = button.dataset.openTab;

      renderOpenTabs();
      renderOpenGrid();

    });

  });
}


/* =========================================================
   开款方向：PDF 款式卡片
   注意：
   不再显示 JPG / PNG / WEBP 图片
   不再显示图片占位提示
   卡片只展示 PDF 款式参考
========================================================= */

function renderOpenGrid() {

  if (!$("#openDirectionGrid")) return;


  const list = OPEN_DIRECTION_DATA[currentOpen] || [];


  if (!list.length) {

    $("#openDirectionGrid").innerHTML = `
      <div class="empty-state">
        暂无${currentOpen}款式参考，
        请在 open-direction-data.js 中添加 PDF 路径。
      </div>
    `;

    return;
  }


  $("#openDirectionGrid").innerHTML = list.map((item, index) => {

    const pdf = item.pdf || "";


    return `
      <article class="reference-card pdf-reference-card">

        <div class="pdf-card-top">

          <div class="pdf-icon">
            PDF
          </div>

          <div class="pdf-card-info">

            <span class="pdf-label">
              ${currentOpen}款式参考
            </span>

            <h3>
              ${item.name || "款式参考"}
            </h3>

            ${item.en ? `
              <p class="reference-en">
                ${item.en}
              </p>
            ` : ""}

          </div>

        </div>


        <div class="reference-body">

          <div class="tags">

            ${(item.tags || []).map(tag => `
              <span class="tag">
                ${tag}
              </span>
            `).join("")}

          </div>


          <div class="card-actions">

            ${pdf ? `

              <button
                class="view-pdf pdf-big-btn"
                data-pdf="${pdf}"
              >
                查看款式参考 PDF
              </button>

            ` : `

              <div class="pdf-empty">
                暂未绑定 PDF 文件
              </div>

            `}

          </div>

        </div>

      </article>
    `;

  }).join("");


  $$(".view-pdf").forEach(button => {

    button.addEventListener("click", () => {

      const modal = $("#pdfModal");
      const frame = $("#pdfFrame");

      if (!modal || !frame) {
        alert("PDF 预览区域未找到，请检查 index.html");
        return;
      }

      frame.src = button.dataset.pdf;
      modal.classList.add("show");

    });

  });

}


/* =========================================================
   PDF 弹窗关闭
========================================================= */

function initPdfModal() {

  const closeButton = $("#closePdf");
  const modal = $("#pdfModal");
  const frame = $("#pdfFrame");


  if (closeButton) {

    closeButton.addEventListener("click", () => {

      if (modal) {
        modal.classList.remove("show");
      }

      if (frame) {
        frame.src = "";
      }

    });

  }


  if (modal) {

    modal.addEventListener("click", event => {

      if (event.target === modal) {

        modal.classList.remove("show");

        if (frame) {
          frame.src = "";
        }

      }

    });

  }
}


/* =========================================================
   视觉优化
========================================================= */

function renderVisual() {

  if (!$("#visualControls")) return;


  $("#visualControls").innerHTML =
    Object.entries(VISUAL_DATA).map(([dim, words]) => `

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

          ${words.map(word => `

            <button
              class="choice visual-choice"
              data-dim="${dim}"
              data-word="${word}"
            >
              ${word}
            </button>

          `).join("")}

        </div>

      </section>

    `).join("");


  $$(".visual-choice").forEach(button => {

    button.addEventListener("click", () => {

      button.classList.toggle("active");

      buildVisual();

    });

  });


  buildVisual();
}


function buildVisual() {

  const selected =
    $$(".visual-choice.active")
      .map(button => button.dataset.word);


  const prompt = selected.length
    ? `
专业男装电商摄影，真实成年男性模特，${selected.join("，")}。

突出服装主体、版型结构、面料纹理与整体搭配。

真实自然光影，高级商业摄影质感，画面干净，商品主体清晰。

适合移动端电商主图与商品详情展示。

无品牌 Logo，无文字水印，无多余商品，无畸形肢体。
`.trim()
    : "请选择上方人模、姿势、风格、场景、光线、构图等选项生成 Prompt。";


  if ($("#visualOutput")) {
    $("#visualOutput").value = prompt;
  }
}


/* =========================================================
   标题优化：类目切换
========================================================= */

function renderTitleTabs() {

  if (!$("#titleCategoryTabs")) return;


  $("#titleCategoryTabs").innerHTML =
    Object.keys(TITLE_DATA).map(name => `

      <button
        class="tab-btn cat-big-btn ${name === currentTitle ? "active" : ""}"
        data-title-tab="${name}"
      >
        ${name}
      </button>

    `).join("");


  $$("[data-title-tab]").forEach(button => {

    button.addEventListener("click", () => {

      currentTitle = button.dataset.titleTab;

      renderTitleTabs();
      renderTitleControls();

    });

  });
}


/* =========================================================
   标题优化：关键词多选卡片
========================================================= */

function renderTitleControls() {

  const data = TITLE_DATA[currentTitle];

  if (!data || !$("#titleControls")) return;


  $("#titleControls").innerHTML =
    Object.entries(data).map(([dim, items]) => `

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

          ${items.map(item => `

            <button
              class="choice title-choice"
              data-dim="${dim}"
              data-en="${item.en || ""}"
              data-zh="${item.zh || ""}"
              title="${item.variants || ""}"
            >

              ${item.zh || "关键词"}

              <small>
                ${item.en || "—"}
              </small>

            </button>

          `).join("")}

        </div>

      </section>

    `).join("");


  $$(".title-choice").forEach(button => {

    button.addEventListener("click", () => {

      button.classList.toggle("active");

      buildTitle();

    });

  });


  buildTitle();
}


/* =========================================================
   标题生成
========================================================= */

function buildTitle() {

  const selected =
    $$(".title-choice.active").map(button => ({
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

    const aIndex = order.indexOf(a.dim);
    const bIndex = order.indexOf(b.dim);

    return aIndex - bIndex;

  });


  const words = [
    ...new Set(
      selected
        .map(item => item.en || item.zh)
        .filter(Boolean)
    )
  ];


  const title = words.join(", ");


  if ($("#titleOutput")) {
    $("#titleOutput").value =
      title || "请选择关键词卡片生成英文标题。";
  }


  if ($("#titleCount")) {

    $("#titleCount").textContent =
      title
        ? `当前：${words.length} 个关键词 · ${title.length} 个字符`
        : "";

  }
}


/* =========================================================
   复制内容
========================================================= */

async function copyText(id) {

  const element = $(id);

  if (!element) return;

  const text = element.value;

  if (!text) return;


  try {

    await navigator.clipboard.writeText(text);

    alert("已复制");

  } catch (error) {

    element.select();

    document.execCommand("copy");

    alert("已复制");

  }
}


/* =========================================================
   页面初始化
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initNav();

  renderCategoryOverview();

  renderOpenTabs();

  renderOpenGrid();

  initPdfModal();

  renderVisual();

  renderTitleTabs();

  renderTitleControls();


  const copyVisual = $("#copyVisual");

  if (copyVisual) {
    copyVisual.addEventListener("click", () => {
      copyText("#visualOutput");
    });
  }


  const copyTitle = $("#copyTitle");

  if (copyTitle) {
    copyTitle.addEventListener("click", () => {
      copyText("#titleOutput");
    });
  }

});
