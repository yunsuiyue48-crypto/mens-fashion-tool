# TEMU Men's Seller Workbench V3

## 页面结构
- 首页：所有功能入口
- 类目指引：套装 / 正装 / 棉羽
- 开款方向：套装 / 正装 / 棉羽，预留图片卡片
- 视觉优化：人模 / 非人模 Prompt
- 标题优化：从上传的中英枚举词表生成选择器
- 招品 / 回品：预留后续工作流

## 数据来源
本版本已读取并转换：
1. 分维度枚举词_中英对照(1).xlsx
2. 7.5 云岁月 商家共有版yulemi-类目list(1).xlsx

## GitHub 文件结构
index.html
style.css
app.js
data/
  category-data.js
  open-direction-data.js
  visual-data.js
  title-data.js

## 上传到 GitHub
将所有文件保持原目录结构上传到 Repository 的 main 分支根目录。
GitHub Pages 已设置为 main / root 时，提交后等待部署即可刷新网站。

## 后续扩展
新增模块时：
1. 在 MODULES 中增加导航配置
2. 在 index.html 增加 section
3. 新建对应 data 文件
4. 在 app.js 注册初始化函数
