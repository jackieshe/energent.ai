# AI 对话平台

这是一个基于现代Web技术栈构建的AI对话平台，支持Google Gemini和OpenAI的AI模型，提供流畅的对话体验和优雅的用户界面。

## 🌟 主要特性

- 🤖 **多模型支持**
  - Google Gemini API 集成
  - OpenAI API 集成
  - 支持模型切换和参数配置

- 💬 **对话功能**
  - 实时AI对话
  - 语音对话支持
  - 对话历史记录
  - 上下文管理

- 🎨 **用户界面**
  - 现代化UI设计
  - 响应式布局
  - 深色/浅色主题
  - 流畅的动画效果
  - 多语言支持

- 🔒 **安全特性**
  - 安全的API密钥管理
  - 环境变量配置
  - 请求限流保护

## 🛠️ 技术栈详情

### 核心框架
- React 19.1.0
- TypeScript 5.8.3
- Vite 6.3.5

### UI/样式
- Tailwind CSS 4.1.10
- Headless UI 2.2.4
- Heroicons 2.2.0
- Framer Motion 12.17.0

### 路由与状态
- React Router DOM 7.6.2
- 自定义状态管理

### AI集成
- @google/generative-ai 0.24.1
- OpenAI SDK 5.3.0

### 工具库
- Axios 1.9.0 (HTTP客户端)
- i18next 25.2.1 (国际化)
- Vercel Analytics 1.5.0

### 开发工具
- ESLint 9.25.0
- PostCSS 8.5.5
- TypeScript ESLint 8.30.1

## 📁 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 图片、字体等资源
│   ├── components/        # 可复用组件
│   │   ├── common/       # 通用组件
│   │   ├── chat/         # 聊天相关组件
│   │   └── ui/           # UI组件
│   ├── hooks/            # 自定义React Hooks
│   ├── i18n/             # 国际化配置
│   ├── layouts/          # 布局组件
│   ├── pages/            # 页面组件
│   ├── services/         # API服务
│   │   ├── ai/          # AI服务集成
│   │   └── api/         # API客户端
│   ├── store/            # 状态管理
│   ├── types/            # TypeScript类型定义
│   ├── utils/            # 工具函数
│   ├── App.tsx           # 应用入口
│   └── main.tsx          # 主入口文件
├── .env.example          # 环境变量示例
├── index.html            # HTML模板
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript配置
├── vite.config.ts        # Vite配置
└── tailwind.config.js    # Tailwind配置
```

## 🚀 快速开始

### 环境要求
- Node.js 18.0.0 或更高版本
- npm 9.0.0 或 yarn 1.22.0

### 安装步骤

1. **克隆项目**
```bash
git clone [repository-url]
cd file2
```

2. **安装依赖**
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

3. **配置环境变量**
```bash
cp .env.example .env
```
编辑 `.env` 文件，配置以下变量：
```
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. **启动开发服务器**
```bash
npm run dev
# 或
yarn dev
```

5. **构建生产版本**
```bash
npm run build
# 或
yarn build
```

## 📦 部署

### Vercel部署
1. Fork项目到你的GitHub账户
2. 在Vercel中导入项目
3. 配置环境变量
4. 点击部署

### 其他部署方式
项目也可以部署到其他支持静态网站托管的平台：
- Netlify
- GitHub Pages
- 阿里云OSS
- 腾讯云COS

## 🤝 贡献指南

1. Fork项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

### 开发规范
- 遵循TypeScript严格模式
- 使用ESLint进行代码检查
- 遵循组件设计规范
- 编写必要的测试用例
- 保持代码文档更新

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 支持与反馈

如有问题或建议，请通过以下方式联系我们：
- 提交Issue
- 发送邮件至[项目维护者邮箱]
- 在Discussions中讨论

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！
