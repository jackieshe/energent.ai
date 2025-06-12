import { GoogleGenerativeAI } from '@google/generative-ai'
import i18next from 'i18next'

// 初始化 Google AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

// 获取 AI 流式响应
export async function* getAIResponse(message: string): AsyncGenerator<string> {
  try {
    if (!import.meta.env.VITE_GOOGLE_AI_API_KEY) {
      throw new Error(i18next.t('ai.error.apiKeyNotConfigured'))
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const result = await model.generateContentStream(message)
    
    for await (const chunk of result.stream) {
      const text = chunk.text()
      if (text) {
        yield text
      }
    }
  } catch (error) {
    console.error('AI API Error:', error)
    if (error instanceof Error) {
      if (error.message.includes('API Key')) {
        throw new Error(i18next.t('ai.error.apiKeyInvalid'))
      }
      if (error.message.includes('403')) {
        throw new Error(i18next.t('ai.error.authFailed'))
      }
    }
    throw new Error(i18next.t('ai.error.serviceUnavailable'))
  }
}

export async function transcribeAudio(): Promise<string> {
  // 实现语音转文字的逻辑
  throw new Error(i18next.t('ai.error.voiceNotImplemented'))
}

export async function textToSpeech(): Promise<Blob> {
  // 实现文字转语音的逻辑
  throw new Error(i18next.t('ai.error.ttsNotImplemented'))
} 