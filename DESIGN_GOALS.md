# untitled-space — Design Goals

## 设计理念

> 千禧年前后的科幻前卫作品 × 早期互联网的原始质感

这是一个高度定制的静态个人博客，由 Astro 驱动，部署在 GitHub Pages。

## 视觉风格

### 核心调性
- **Y2K 科幻前卫** — 参考《攻壳机动队》《Serial Experiments Lain》《黑客帝国》等作品的视觉语言
- **原始互联网质感** — 避免 2020s 之后的"AI 风格"UI（圆角巨大、毛玻璃、柔光阴影、极简主义）
- **DIY / Homepage 气息** — 像是 1999 年一个人用 FrontPage 或 Dreamweaver 手写的个人主页

### 设计元素
| 元素 | 方向 |
|------|------|
| 边框 | 虚线边框（dotted/dashed），作为主要装饰 |
| 配色 | 蓝绿为主（#00FFCC, #0066FF, #00CCFF），纯色/高饱和 |
| 字体 | Monospace 为主（JetBrains Mono / Iosevka），可混搭无衬线 |
| 背景 | ASCII-art 风格处理过的图片 / 扫描线纹理 / CRT 效果 |
| 排版 | 扁平、无层级落差过大，保持原始感 |
| 装饰 | 下划线、闪烁效果、ASCII 分割线、原始 `<hr>` 样式 |
| 光标 | 自定义块状光标（仿终端） |
| 链接 | 经典蓝色带下划线，访问后紫色（#00FFCC hover） |

### 避免的样式
- ❌ 毛玻璃（backdrop-filter: blur）
- ❌ 巨大的 border-radius（> 8px）
- ❌ Tailwind 风格的 utility-first 过度设计
- ❌ 柔光阴影
- ❌ 过于平滑的动画曲线
- ❌ Inter / SF Pro 等"现代"字体

## 技术栈

| 层 | 选择 |
|---|------|
| 框架 | Astro |
| 内容 | Markdown / MDX |
| 样式 | CSS（手写, CSS Variables） |
| 构建 | Astro 原生 |
| 部署 | GitHub Pages |
| 评论 | 暂定（后续可考虑 Giscus） |

## 功能清单

- [x] RSS / Atom feed
- [x] Dark / Light 模式切换（系统偏好 + 手动）
- [x] 阅读时间估算
- [x] 文章 Table of Contents
- [ ] 标签 / 分类
- [ ] ASCII-art 分割线装饰
- [ ] CRT 扫描线叠加效果
- [ ] 自定义 404 页面
- [ ] Sitemap
- [ ] OG 图片

## 内容结构

```
src/
  content/
    blog/       # 长文博客
    notes/      # 短文/想法
  pages/
    about.astro # 关于页
```
