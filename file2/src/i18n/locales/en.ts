export default {
  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },

  // Navigation
  nav: {
    home: 'Home',
    chat: 'AI Chat',
    features: 'Features',
    about: 'About',
    language: 'Language',
  },

  // Home
  home: {
    title: 'Smart AI Assistant, Making Conversations More Natural',
    subtitle: 'Based on the latest AI technology, providing you with intelligent, natural, and smooth conversation experience. Whether for work or life, we can provide professional assistance.',
    startChat: 'Start Chat',
    learnMore: 'Learn More',
    features: {
      title: 'Smarter Conversation Experience',
      subtitle: 'Everything for Better Conversations',
      description: 'We are committed to providing the most natural and intelligent AI conversation experience, making every interaction valuable.',
      chat: {
        name: 'Smart Chat',
        description: 'Using the latest AI technology to provide natural and smooth conversation experience. Supports voice and text input for convenient communication.',
      },
      models: {
        name: 'Multi-Model Support',
        description: 'Supports both Google Gemini and OpenAI AI models, allowing flexible switching based on needs for the best experience.',
      },
      deploy: {
        name: 'Quick Deployment',
        description: 'Based on Vercel platform, one-click deployment with global CDN acceleration ensures the best access experience for users.',
      },
    },
    showcase: {
      title: 'Enter a New Era of Smart Conversations',
      description: 'Join us to experience cutting-edge AI conversation technology, making every interaction full of surprises.',
      items: {
        title: 'Smart Conversation Experience',
        description: 'Explore the infinite possibilities of AI conversations, making every interaction full of surprises.',
      },
    },
  },

  // Features
  features: {
    title: 'Smarter Conversation Experience',
    subtitle: 'Everything for Better Conversations',
    description: 'We are committed to providing the most natural and intelligent AI conversation experience, making every interaction valuable.',
    whyChooseUs: 'Why Choose Us?',
    whyChooseUsDesc: 'We not only provide cutting-edge AI conversation technology but also focus on user experience and practical application scenarios.',
    
    features: {
      chat: {
        name: 'Smart Chat',
        description: 'Using the latest AI technology to provide natural and smooth conversation experience. Supports voice and text input for convenient communication.',
      },
      models: {
        name: 'Multi-Model Support',
        description: 'Supports both Google Gemini and OpenAI AI models, allowing flexible switching based on needs for the best experience.',
      },
      deploy: {
        name: 'Quick Deployment',
        description: 'Based on Vercel platform, one-click deployment with global CDN acceleration ensures the best access experience for users.',
      },
      security: {
        name: 'Secure & Reliable',
        description: 'Using advanced encryption technology to ensure user data security. All conversations are encrypted to protect your privacy.',
      },
      global: {
        name: 'Global Coverage',
        description: 'Supports multi-language conversations, covering major global languages for borderless communication.',
      },
      mobile: {
        name: 'Mobile Friendly',
        description: 'Perfect support for mobile access, enjoy intelligent conversation services anytime, anywhere.',
      },
    },

    advantages: {
      tech: {
        title: 'Technical Innovation',
        description: 'Continuous investment in R&D, adopting the latest AI technology to ensure leading conversation experience.',
      },
      user: {
        title: 'User First',
        description: 'Centered on user needs, continuously optimizing product experience to make AI conversations more natural and intelligent.',
      },
    },
  },

  // Chat
  chat: {
    title: 'AI Smart Chat',
    subtitle: 'Natural Conversation with AI Assistant',
    placeholder: 'Type a message...',
    send: 'Send',
    clear: 'Clear Chat',
    thinking: 'Thinking...',
    startNewChat: 'Start New Chat',
    voiceInput: 'Voice Input',
    voiceOutput: 'Voice Output',
    copyMessage: 'Copy Message',
    deleteMessage: 'Delete Message',
    error: {
      apiKey: 'AI API Key not properly configured, please contact administrator',
      auth: 'AI API authentication failed, please check if the API Key is correct',
      service: 'AI service temporarily unavailable, please try again later',
      empty: 'Please enter a message',
      tooLong: 'Message is too long, please shorten it',
    },
    tips: {
      start: 'Start typing a message, press Enter to send',
      voice: 'Click the microphone icon to start voice input',
      clear: 'Clear current chat history',
      copy: 'Click message to copy content',
    },
  },

  // About
  about: {
    title: 'About Us',
    subtitle: 'Committed to Providing the Smartest AI Conversation Experience',
    description: 'We are a team focused on AI conversation technology, dedicated to providing users with the most natural and intelligent conversation experience. Through continuous technological innovation and user feedback optimization, we constantly improve our products to make AI conversations more humanized and intelligent.',
    mission: {
      title: 'Our Mission',
      content: 'To enable everyone to enjoy the convenience brought by intelligent AI conversations, breaking down language and technical barriers, and creating better communication experiences.',
    },
    vision: {
      title: 'Our Vision',
      content: 'To become a global leading provider of AI conversation solutions, promoting the development of AI technology and letting intelligent conversations change people\'s lifestyles.',
    },
    team: {
      title: 'Our Team',
      content: 'Composed of a group of professionals who love technology and pursue innovation, including AI engineers, product designers, and user experience experts. We believe that through team collaboration and continuous innovation, we can bring the best product experience to users.',
    },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      github: 'GitHub',
      feedback: 'Feedback',
      join: 'Join Us',
    },
  },

  // Error page
  error: {
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    backHome: 'Back to Home',
    refresh: 'Refresh Page',
  },

  // Team information
  team: {
    members: [
      {
        name: 'Zhang Ming',
        role: 'Founder & CEO',
        bio: 'With 10 years of experience in AI, has served as technical lead in several renowned tech companies. Dedicated to applying AI technology to real-world scenarios to enhance user experience.',
      },
      {
        name: 'Li Hua',
        role: 'Technical Director',
        bio: 'Specialized in natural language processing and machine learning, with extensive experience in AI model development and optimization. Leading the team to continuously push technical boundaries.',
      },
      {
        name: 'Wang Fang',
        role: 'Product Director',
        bio: 'Deep expertise in user experience design, skilled at transforming complex technology into simple and usable products. Committed to creating the most natural AI conversation experience.',
      },
    ],
  },

  // Contact form
  contact: {
    title: 'Contact Us',
    subtitle: 'If you have any questions or suggestions, please feel free to contact us. We look forward to hearing from you.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      submitting: 'Submitting...',
      success: 'Thank you for your message! We will get back to you soon.',
      error: 'An error occurred while submitting the form',
    },
  },

  // AI service error messages
  ai: {
    error: {
      apiKeyNotConfigured: 'Google AI API Key not configured. Please set VITE_GOOGLE_AI_API_KEY in .env file',
      apiKeyInvalid: 'AI API Key not properly configured, please contact administrator',
      authFailed: 'AI API authentication failed, please check if the API Key is correct',
      serviceUnavailable: 'AI service temporarily unavailable, please try again later',
      voiceNotImplemented: 'Voice-to-text feature not implemented yet',
      ttsNotImplemented: 'Text-to-speech feature not implemented yet',
    },
  },
} 