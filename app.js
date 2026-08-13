
// 获取按钮
const analyzeBtn = document.getElementById("analyzeBtn");


// 点击开始分析
analyzeBtn.addEventListener("click", function () {

  // 获取用户选择的数据
  const category = document.getElementById("category").value;
  const season = document.getElementById("season").value;
  const style = document.getElementById("style").value;
  const platform = document.getElementById("platform").value;
  const customer = document.getElementById("customer").value;


  // 判断是否填写完整
  if (!category || !season || !style || !platform || !customer) {

    alert("请先完整选择产品信息！");

    return;
  }


  // 隐藏默认状态
  document.getElementById("emptyState").style.display = "none";


  // 显示结果区域
  document.getElementById("resultContent").classList.remove("hidden");


  // 根据风格生成结果
  document.getElementById("resultStyle").innerText = style;


  // 根据产品生成推荐版型
  let fit = "Regular Fit";

  if (style === "Streetwear") {
    fit = "Relaxed / Oversized Fit";
  }

  if (style === "Sport") {
    fit = "Athletic Relaxed Fit";
  }

  if (style === "Vacation") {
    fit = "Loose Comfortable Fit";
  }

  document.getElementById("resultFit").innerText = fit;


  // 推荐设计
  document.getElementById("resultDesign").innerText =
    "Minimal Design + Functional Details";


  // 推荐颜色
  let colors = "Black / Grey / Khaki";

  if (season === "Summer") {
    colors = "White / Beige / Light Blue";
  }

  if (season === "Fall") {
    colors = "Black / Dark Grey / Olive";
  }

  if (season === "Winter") {
    colors = "Black / Navy / Dark Brown";
  }

  document.getElementById("resultColor").innerText = colors;


  // 生成关键词
  const keywords = [
    "Men's",
    "2 Piece Set",
    category.replace("Men's ", ""),
    style,
    season,
    "Casual",
    "Fashion"
  ];


  // 获取关键词容器
  const keywordTags = document.getElementById("keywordTags");


  // 清空原来的关键词
  keywordTags.innerHTML = "";


  // 添加关键词标签
  keywords.forEach(function (keyword) {

    const tag = document.createElement("span");

    tag.className = "keyword-tag";

    tag.innerText = keyword;

    keywordTags.appendChild(tag);

  });

});
