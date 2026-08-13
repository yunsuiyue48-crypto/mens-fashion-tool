# MENSPILOT GitHub Pages 升级版

## 文件说明
- index.html：网页结构
- style.css：网页样式
- app.js：交互逻辑
- data.js：款式、分类、关键词数据

## 上传到 GitHub
1. 打开 Repository
2. 确保在 main 分支
3. 将这 4 个文件上传到和原 index.html 相同的根目录
4. 覆盖原来的 index.html、style.css、app.js
5. 新增 data.js
6. Commit changes
7. 等待 GitHub Pages 自动重新部署
8. 刷新网站

## 后续添加款式
打开 data.js，找到 APP_DATA 中的 catalog。
每增加一个产品方向，就复制一个 catalog 对象，填写：
id / name / en / group / season / price / styles / fits / fabrics / details / reference

核心赛道：
- 男式套装
- 棉羽
- 正装
