# AI 对话平台

这是一个基于React和TypeScript构建的现代化AI对话平台，支持Google Gemini和OpenAI的AI模型。

## 功能特点

- 🎨 现代化的UI设计，使用Tailwind CSS构建
- 🤖 支持Google Gemini和OpenAI AI模型
- 💬 实时AI语音对话功能
- 📱 响应式设计，支持所有设备
- 🚀 使用Vite构建，性能优异
- 🔒 安全的API密钥管理
- 📊 集成了Vercel Analytics

## 技术栈

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Framer Motion
- Google Gemini API
- OpenAI API
- Vercel Analytics

## 开始使用

1. 克隆项目
```bash
git clone [repository-url]
cd file2
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
```bash
cp .env.example .env
```
然后编辑.env文件，填入你的API密钥。

4. 启动开发服务器
```bash
npm run dev
```

5. 构建生产版本
```bash
npm run build
```

## 部署

项目已配置为可以轻松部署到Vercel：

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署！

## 项目结构

```
src/
  ├── components/     # 可复用组件
  ├── hooks/         # 自定义React Hooks
  ├── layouts/       # 布局组件
  ├── pages/         # 页面组件
  ├── services/      # API服务
  ├── store/         # 状态管理
  ├── types/         # TypeScript类型定义
  ├── utils/         # 工具函数
  └── App.tsx        # 应用入口
```

## 贡献指南

1. Fork项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
