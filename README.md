# Lumyn · 景熙

独立的中英双语公司官网，使用 GitHub Pages 托管。蓝色视觉，适配桌面与移动端。

## 内容
- AI + Finance & Investment
- AI + Personal Health
- Public Market Strategies
- Lumyn Lab 内部实验室

品牌：Enduring vision bears the light. / 景熙惟永，睿图载光。

## 部署
GitHub Pages 从 `main` 分支的根目录发布。无需构建、第三方运行依赖、数据库、平台账户登录或付费域名。`.nojekyll` 用于直接提供静态文件。

更新根目录的 HTML、CSS、JavaScript 或 SVG 后推送到 `main`，GitHub Pages 会自动发布。

## 本地预览
```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

## 检查
```sh
node --check app.js
```
已检查桌面及移动布局、语言切换、导航、详情弹窗、键盘退出及本地资源。正式注册全称、业务联系方式和适用备案信息仍待所有者确认。

## 源码
- `index.html`：页面与双语内容
- `style.css`：响应式样式
- `app.js`：语言切换、导航与详情弹窗
- `light-field.svg` / `favicon.svg`：本地品牌视觉

本仓库不包含原 Sites 的项目配置、访问逻辑或部署凭据。

## 品牌标志

新标志「景熙 · 日光印」从「景」的日光与「熙」的四点底提取日出之窗与四束光。可编辑 SVG、单色及反白版本和设计说明位于 [brand](brand/README.md)。字标已转为轮廓，网站使用本地矢量资源。
