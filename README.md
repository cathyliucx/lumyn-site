# Lumyn · 景熙

独立的中英双语公司官网，使用 GitHub Pages 托管。蓝色视觉，适配桌面与移动端。

## 内容
- AI + Quantitative Investment（量化投资）
- AI + Health Management（健康管理，涵盖健康数据）
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
- `data-field.svg`：首页 AAPL 历史日 K 与健康数据融合背景，含扫描高亮；业务配图采用真实历史 K 线和实测心电波形
- `favicon.svg`：网站图标

本仓库不包含原 Sites 的项目配置、访问逻辑或部署凭据。

## 品牌标志

官网采用钴蓝 L 图形与「Lumyn 景熙 · 人工智能」双语组合。见[品牌文件](brand/README.md)。

## 行情配图

首页及量化投资卡片使用 AAPL 在 2025-01-02 至 2025-02-28 的 39 个交易日 OHLC 数据，来源 Yahoo Finance。原始开高低收和成交量保存在 `data/aapl-daily-2025-01-02-to-2025-02-28.csv`。蓝色空心表示收盘高于或等于开盘，实心表示收盘低于开盘。图表为固定历史区间，扫描高亮用于视觉展示。

## 心电配图

首页及健康管理卡片使用 PhysioNet MIT-BIH Arrhythmia Database v1.0.0 的记录 100、MLII 导联前 6 秒，共 2160 个采样点（360 Hz）。按记录头中的增益 200 ADU/mV、基线 1024 ADU 换算为 mV，逐点绘制，原始数值保存在 `data/mit-bih-100-mlii-first-6s.csv`。波形为固定历史研究记录，动画仅移动扫描高亮。

数据来源 https://physionet.org/content/mitdb/1.0.0/ ，署名 Moody GB、Mark RG。数据库许可为 Open Data Commons Attribution License v1.0，https://opendatacommons.org/licenses/by/1-0/ 。参考 Moody GB, Mark RG. The impact of the MIT-BIH Arrhythmia Database. IEEE Engineering in Medicine and Biology Magazine. 2001;20(3):45–50.
