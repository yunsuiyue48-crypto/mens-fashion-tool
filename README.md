# 云岁月对接类目上新指引

## 直接替换方式
1. 解压 ZIP。
2. 将所有文件上传到 GitHub 仓库根目录。
3. 保持目录结构不变。
4. GitHub Pages 发布分支选择 `main` 或你的测试分支。
5. 如果只测试，请先放到 `copy` 分支确认。

## 图片
assets/styles 内已放入原创 SVG 参考占位图，网站可以直接显示。
如需替换为自己的图片，只要保持文件名，或修改 data/open-direction-data.js 中的 image 路径即可。

## PDF
上传 PDF 后，在 data/open-direction-data.js 对应项目填写：
pdf: "assets/styles/sets/your-file.pdf"

## 当前功能
- 首页工作台
- 类目路径总览与精准选择
- 类目 -> 开款方向跳转
- 套装 / 正装 / 棉羽本地参考图
- 标题多选核心品类词
- 季节、场景、节日/送礼词
- 人模 / 非人模视觉 Prompt
- Prompt 与标题复制
