export default {
  // 通用
  common: {
    loading: '加载中...',
    error: '出错了',
    retry: '重试',
    confirm: '确认',
    cancel: '取消',
  },

  // 导航
  nav: {
    home: '首页',
    chat: 'AI对话',
    features: '功能',
    about: '关于',
    language: '语言',
  },

  // 首页
  home: {
    title: 'AI助手',
    subtitle: '智能对话，无限可能',
    startChat: '开始对话',
    learnMore: '了解更多',
  },

  // 功能页
  features: {
    title: '更智能的对话体验',
    subtitle: '一切为了更好的对话',
    description: '我们致力于提供最自然、最智能的AI对话体验，让每一次交流都充满价值。',
    whyChooseUs: '为什么选择我们？',
    whyChooseUsDesc: '我们不仅提供最先进的AI对话技术，更注重用户体验和实际应用场景。',
    
    features: {
      chat: {
        name: '智能对话',
        description: '使用最新的AI技术，提供自然流畅的对话体验。支持语音输入和文本输入，让交流更加便捷。',
      },
      models: {
        name: '多模型支持',
        description: '同时支持Google Gemini和OpenAI的AI模型，可以根据需求灵活切换，获得最佳体验。',
      },
      deploy: {
        name: '快速部署',
        description: '基于Vercel平台，一键部署，全球CDN加速，确保用户获得最佳访问体验。',
      },
      security: {
        name: '安全可靠',
        description: '采用先进的加密技术，确保用户数据安全。所有对话内容都经过加密处理，保护您的隐私。',
      },
      global: {
        name: '全球覆盖',
        description: '支持多语言对话，覆盖全球主要语言，让交流无国界。',
      },
      mobile: {
        name: '移动适配',
        description: '完美支持移动端访问，随时随地享受智能对话服务。',
      },
    },

    advantages: {
      tech: {
        title: '技术创新',
        description: '持续投入研发，采用最新的AI技术，确保对话体验始终领先。',
      },
      user: {
        title: '用户至上',
        description: '以用户需求为中心，不断优化产品体验，让AI对话更自然、更智能。',
      },
    },
  },

  // 聊天页
  chat: {
    title: 'AI 智能对话',
    subtitle: '与 AI 助手进行自然对话',
    placeholder: '输入消息...',
    send: '发送',
    clear: '清空对话',
    thinking: '思考中...',
    startNewChat: '开始新对话',
    voiceInput: '语音输入',
    voiceOutput: '语音输出',
    copyMessage: '复制消息',
    deleteMessage: '删除消息',
    error: {
      apiKey: 'AI API Key 未正确配置，请联系管理员',
      auth: 'AI API 认证失败，请检查 API Key 是否正确',
      service: 'AI 服务暂时不可用，请稍后重试',
      empty: '请输入消息内容',
      tooLong: '消息内容过长，请适当缩短',
    },
    tips: {
      start: '开始输入消息，按回车键发送',
      voice: '点击麦克风图标开始语音输入',
      clear: '清空当前对话历史',
      copy: '点击消息可复制内容',
    },
  },

  // 关于页面
  about: {
    title: '关于我们',
    subtitle: '致力于提供最智能的 AI 对话体验',
    description: '我们是一个专注于 AI 对话技术的团队，致力于为用户提供最自然、最智能的对话体验。通过持续的技术创新和用户反馈优化，我们不断改进产品，让 AI 对话更加人性化、智能化。',
    mission: {
      title: '我们的使命',
      content: '让每个人都能享受到智能 AI 对话带来的便利，打破语言和技术的障碍，创造更美好的交流体验。',
    },
    vision: {
      title: '我们的愿景',
      content: '成为全球领先的 AI 对话解决方案提供商，推动 AI 技术的发展，让智能对话改变人们的生活方式。',
    },
    team: {
      title: '我们的团队',
      content: '由一群热爱技术、追求创新的专业人士组成，包括 AI 工程师、产品设计师、用户体验专家等。我们相信，通过团队协作和持续创新，能够为用户带来最好的产品体验。',
    },
    contact: {
      title: '联系我们',
      email: '邮箱',
      github: 'GitHub',
      feedback: '问题反馈',
      join: '加入我们',
    },
  },

  // 团队信息
  team: {
    members: [
      {
        name: '张明',
        role: '创始人 & CEO',
        bio: '拥有10年AI领域经验，曾在多家知名科技公司担任技术负责人。致力于将AI技术应用于实际场景，提升用户体验。',
      },
      {
        name: '李华',
        role: '技术总监',
        bio: '专注于自然语言处理和机器学习，拥有丰富的AI模型开发和优化经验。带领团队不断突破技术边界。',
      },
      {
        name: '王芳',
        role: '产品总监',
        bio: '深耕用户体验设计，擅长将复杂的技术转化为简单易用的产品。致力于打造最自然的AI对话体验。',
      },
    ],
  },

  // 联系表单
  contact: {
    title: '联系我们',
    subtitle: '如果您有任何问题或建议，请随时与我们联系。我们期待听到您的声音。',
    form: {
      name: '姓名',
      email: '邮箱',
      message: '消息',
      submit: '提交',
      submitting: '提交中...',
      success: '感谢您的留言！我们会尽快回复您。',
      error: '提交表单时发生错误',
    },
  },

  // AI 服务错误消息
  ai: {
    error: {
      apiKeyNotConfigured: 'Google AI API Key 未配置。请在 .env 文件中设置 VITE_GOOGLE_AI_API_KEY',
      apiKeyInvalid: 'AI API Key 未正确配置，请联系管理员',
      authFailed: 'AI API 认证失败，请检查 API Key 是否正确',
      serviceUnavailable: 'AI 服务暂时不可用，请稍后重试',
      voiceNotImplemented: '语音转文字功能尚未实现',
      ttsNotImplemented: '文字转语音功能尚未实现',
    },
  },
} 