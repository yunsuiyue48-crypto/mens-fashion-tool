# 云岁月对接类目上新指引（中文版）

## 直接部署
把整个文件夹内容上传到 GitHub 仓库根目录，然后在：
Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save。

## 主要功能
1. 首页：所有功能入口。
2. 类目指引：数据来自《7.5 云岁月 商家共有版yulemi-类目list(1).xlsx》“新版 (2)”。
3. 点击精准路径：自动跳转到对应“开款方向”。
4. 开款方向：支持 JPG/PNG 图片路径、PDF 路径、本地临时上传预览。
5. 标题优化：词库基础来自《分维度枚举词_中英对照.xlsx》，套装/正装/棉羽独立展示，多选生成英文标题。
6. 视觉优化：中文版多选项生成 Prompt。

## 永久添加开款素材
GitHub Pages 不能把访客上传的文件自动写回仓库。
请把图片/PDF上传到：
assets/styles/sets/
assets/styles/formal/
assets/styles/padded/

然后在 data/open-direction-data.js 对应卡片填写：
image: "assets/styles/sets/你的图片.jpg"
pdf: "assets/styles/sets/你的资料.pdf"

## 注意
source-files/ 内保留了用户提供的两份原始 Excel，供网页下载和后续核对。
