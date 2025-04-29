# TodoList

一个简易的待办事项（To-Do List）应用，帮助你快速管理每日任务。
在线演示站点 https://yunwren-todolist.netlify.app/
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