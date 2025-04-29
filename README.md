# TodoList

一个简易的待办事项（To-Do List）应用，帮助你快速管理每日任务。

在线演示站点 https://yunwren-todolist.netlify.app/

## 技术栈

| 分类         | 使用内容                                                                 |
| ------------ | ------------------------------------------------------------------------ |
| **前端框架** | [Vue 3](https://vuejs.org/)（`<script setup>` Composition API）          |
| **构建工具** | [Vite](https://vitejs.dev/) - 快速冷启动、模块热更新                     |
| **CSS**      | 原生 CSS（使用 scoped 样式封装）                                         |
| **部署平台** | [Netlify](https://www.netlify.com/) - 免费托管，支持自动化部署与持续集成 |
| **运行环境** | Node.js + npm                                                            |

✨ 技术亮点
1. 现代前端架构
Vue 3 + Composition API，结构清晰，逻辑复用性强。

使用 Vite 构建，开发体验极佳，打包速度快。

2. 功能完善的 ToDo 应用
支持任务添加、删除、状态切换。

使用 ref 和响应式渲染，数据与 UI 实时联动。

使用 v-model 双向绑定，简洁高效。

3. 细节体验优化
输入框首次聚焦自动清除 placeholder。

禁止添加空任务。

任务完成后自动加删除线。

总任务数统计实时更新。

4. 精致 UI 设计
自定义 checkbox：大号灰色填充框，无系统默认对勾。

使用 box-shadow 和边框圆角让整体界面更有立体感。

每项任务使用灰色下划线分隔，界面清晰有层次。

所有元素高度居中、对齐规范，适配性好。

5. 云端部署与访问
使用 Netlify 免费部署，支持自动化构建。

项目上线后可通过 URL 直接访问、分享。

可通过配置 vite.config.js 实现局域网联调。

## 功能概览

- **背景换肤**  
  支持上传自定义背景图，并可一键恢复默认。 

- **背景半透明**  
  当使用自定义背景时，主体内容会自动添加半透明样式，保证可读性。 

- **本地存储**  
  所有待办事项会自动保存到浏览器的 `localStorage`，刷新或重启浏览器也能保留任务列表。  

- **添加任务**  
  
- **删除任务**  

- **标记已完成**  
完成的任务自动沉底显示。  


---

## 快速开始

克隆仓库

git clone https://github.com/YunWren/todoList.git
cd todoList

安装依赖

npm install
### 或者使用 Yarn
yarn install

启动开发服务器

npm run dev
### 或者
yarn dev

### 访问应用

打开浏览器，访问 http://localhost:3000（或终端里给出的本地地址），即可查看并使用你的 TodoList 应用。

构建生产环境

如果需要将项目打包发布：

npm run build
### 或者
yarn build

构建完成后，生成的静态文件会输出到 dist 目录，可部署到任意静态服务器。