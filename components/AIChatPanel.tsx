'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Sparkles } from 'lucide-react'

interface AIChatPanelProps {
  isOpen: boolean
  onClose: () => void
  currentStep: number
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const stepSuggestions = [
  {
    step: 1,
    prompts: [
      'Can you give me examples of good intent prompts?',
      'What makes a clear marketing goal?',
    ]
  },
  {
    step: 2,
    prompts: [
      'Why Meta over Google for my bakery?',
      'How is this budget calculated?',
    ]
  },
  {
    step: 3,
    prompts: [
      'What makes a good ad creative?',
      'Generate 5 headline variations for my cookie box ad',
    ]
  },
]

export default function AIChatPanel({ isOpen, onClose, currentStep }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI assistant. I can help you at any step of your campaign. What would you like to know?"
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: getAIResponse(input, currentStep)
      }
      setMessages(prev => [...prev, aiResponse])
    }, 500)

    setInput('')
  }

  const handleSuggestionClick = (prompt: string) => {
    setInput(prompt)
  }

  const getAIResponse = (userInput: string, step: number): string => {
    // Simulate contextual responses based on step
    if (step === 1) {
      return "Great question! For the Intent step, focus on being specific about your goal, target audience, and timeline. For example, 'I want to sell 200 cookie boxes this weekend to tech workers in Los Altos' is much better than 'I want more sales.'"
    } else if (step === 2) {
      return "For your bakery targeting tech workers who prefer Japanese/French style pastries, Meta (Facebook/Instagram) is ideal because of its visual nature and precise demographic targeting. The budget is calculated based on your local market CPM rates and estimated reach needed to achieve your goals."
    } else if (step === 3) {
      return "High-quality visuals are crucial for bakery ads. Make sure your images are well-lit, show texture and detail, and feature your best-selling items. Videos of your shop create authenticity and trust. For your audience, emphasize the artisanal, not-too-sweet qualities."
    }
    return "I'm here to help! Could you be more specific about what you'd like to know?"
  }

  const currentSuggestions = stepSuggestions.find(s => s.step === currentStep)?.prompts || []

  if (!isOpen) return null

  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-white border-l border-cream-200 shadow-2xl flex flex-col z-50 animate-slide-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-bakery-500 to-bakery-600 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-white" />
          <h2 className="text-white font-semibold">AI Assistant</h2>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-bakery-700 rounded transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Suggested prompts */}
      {currentSuggestions.length > 0 && (
        <div className="p-4 bg-cream-50 border-b border-cream-200">
          <p className="text-xs text-gray-600 mb-2 font-medium">Suggested questions:</p>
          <div className="space-y-2">
            {currentSuggestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(prompt)}
                className="w-full text-left text-xs p-2 bg-white border border-cream-200 rounded-lg hover:border-bakery-300 hover:bg-bakery-50 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-bakery-500 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-cream-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
            className="flex-1 px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500 text-sm"
          />
          <button
            onClick={handleSend}
            className="bg-bakery-500 hover:bg-bakery-600 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

