import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { PaperAirplaneIcon, MicrophoneIcon, SpeakerWaveIcon, TrashIcon } from '@heroicons/react/24/outline'
import { getAIResponse } from '../services/ai'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Chat() {
  const { t } = useTranslation()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      let assistantMessage = ''
      for await (const chunk of getAIResponse(userMessage)) {
        assistantMessage += chunk
        setMessages(prev => {
          const newMessages = [...prev]
          const lastMessage = newMessages[newMessages.length - 1]
          if (lastMessage?.role === 'assistant') {
            lastMessage.content = assistantMessage
            return [...newMessages]
          } else {
            return [...newMessages, { role: 'assistant', content: assistantMessage }]
          }
        })
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: error instanceof Error ? error.message : t('chat.error.service'),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                    <button
                      onClick={() => copyMessage(message.content)}
                      className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      title={t('chat.copyMessage')}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg bg-white px-4 py-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                {t('chat.thinking')}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 输入区域 */}
      <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-gray-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <div className="relative flex-1">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chat.placeholder')}
                className="block w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '200px' }}
              />
              <div className="absolute bottom-2 right-2 flex gap-1">
                <button
                  type="button"
                  className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  title={t('chat.voiceInput')}
                >
                  <MicrophoneIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                  title={t('chat.voiceOutput')}
                >
                  <SpeakerWaveIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearChat}
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                title={t('chat.clear')}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-800"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 