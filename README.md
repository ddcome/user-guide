以下是构建一个 Vue 2 工程的详细步骤：

---

### **一、环境准备**
1. **安装 Node.js 和 npm**  
   确保已安装 [Node.js](https://nodejs.org)（建议 LTS 版本，如 14.x/16.x），安装后验证：
   ```bash
   node -v  # 查看 Node.js 版本
   npm -v   # 查看 npm 版本
   ```

---

### **二、创建 Vue 2 项目**
#### **方法一：使用 Vue CLI 3+ 创建（推荐）**
1. **安装 Vue CLI**  
   全局安装 Vue CLI：
   ```bash
   npm install -g @vue/cli
   ```

2. **创建项目**  
   运行以下命令并按提示选择配置：
   ```bash
   vue create my-vue2-project
   ```
   - 选择 **`Manually select features`**（手动选择特性）。  
   - 勾选 `Babel`、`Router`、`Vuex` 等需要的功能（按空格选择，回车确认）。  
   - 当提示 **`Choose a version of Vue.js`** 时，选择 **`2.x`**。  
   - 其他选项（如 ESLint、测试工具）按需选择。

3. **完成创建**  
   项目创建后，进入目录并启动开发服务器：
   ```bash
   cd my-vue2-project
   npm run serve
   ```
   访问 `http://localhost:8080` 查看效果。

---

#### **方法二：使用旧版 `vue init`（传统 webpack 模板）**
1. **安装桥接工具**  
   安装旧版 `vue-cli` 支持：
   ```bash
   npm install -g @vue/cli-init
   ```

2. **创建项目**  
   使用 `webpack` 模板初始化项目：
   ```bash
   vue init webpack my-vue2-project
   ```
   - **交互式配置**：  
     - `Vue build`：选择 **`Runtime + Compiler`**（支持模板编译）。  
     - `Install vue-router?`：按需选择（建议 Yes）。  
     - 其他选项（ESLint、测试工具等）按需配置。

3. **安装依赖并运行**  
   ```bash
   cd my-vue2-project
   npm install   # 安装依赖
   npm run dev   # 启动开发服务器
   ```
   访问 `http://localhost:8080` 查看效果。

---

### **三、项目结构说明**
生成的典型目录结构如下：
```
my-vue2-project/
├── src/
│   ├── main.js       # 入口文件
│   ├── App.vue       # 根组件
│   ├── components/   # 子组件目录
│   ├── router/       # 路由配置（如果选择安装）
│   └── store/        # Vuex 状态管理（如果选择安装）
├── public/           # 静态资源（直接复制，不经过 webpack）
├── babel.config.js   # Babel 配置
└── package.json      # 依赖和脚本管理
```

---

### **四、常用操作**
1. **添加新组件**  
   在 `src/components` 下新建 `.vue` 文件，例如 `HelloWorld.vue`：
   ```vue
   <template>
     <div>{{ message }}</div>
   </template>
   <script>
   export default {
     data() {
       return { message: "Hello Vue 2!" };
     },
   };
   </script>
   ```

2. **配置路由**  
   如果已安装 `vue-router`，在 `src/router/index.js` 中添加路由：
   ```javascript
   import Vue from 'vue'
   import Router from 'vue-router'
   import HelloWorld from '@/components/HelloWorld'

   Vue.use(Router)

   export default new Router({
     routes: [{ path: '/', component: HelloWorld }]
   })
   ```

3. **安装 Vuex（状态管理）**  
   如果未在创建时选择 Vuex，可手动安装：
   ```bash
   npm install vuex@3  # Vue 2 对应 Vuex 3.x
   ```
   在 `src/store/index.js` 中创建 Store：
   ```javascript
   import Vue from 'vue'
   import Vuex from 'vuex'

   Vue.use(Vuex)

   export default new Vuex.Store({
     state: { count: 0 },
     mutations: {
       increment(state) { state.count++ }
     }
   })
   ```

---

### **五、构建与部署**
1. **开发环境热更新**  
   ```bash
   npm run serve  # 或 npm run dev（旧版模板）
   ```

2. **生产环境构建**  
   ```bash
   npm run build  # 生成 dist 目录
   ```

3. **自定义配置**  
   在项目根目录创建 `vue.config.js` 修改 webpack 配置：
   ```javascript
   module.exports = {
     publicPath: './',     // 解决静态资源路径问题
     devServer: { port: 3000 }, // 修改开发服务器端口
   };
   ```

---

### **六、注意事项**
- **Vue 2 维护状态**：Vue 2 已于 2023 年 12 月 31 日终止维护，新项目建议使用 Vue 3。
- **依赖版本**：Vue 2 对应 `vue-router@3` 和 `vuex@3`，避免安装最新版导致兼容问题。
- **旧项目迁移**：如需升级到 Vue 3，参考官方迁移指南：[Vue 3 Migration Guide](https://v3-migration.vuejs.org/)。

---

通过以上步骤，你可以快速搭建并开发一个 Vue 2 工程。根据需求选择适合的创建方法，并遵循 Vue 2 的生态库版本要求。