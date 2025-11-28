'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, Mic } from 'lucide-react'

interface LandingPageProps {
  onSubmit: (intent: string) => void
}

export default function LandingPage({ onSubmit }: LandingPageProps) {
  const [intent, setIntent] = useState('')

  const handleSubmit = () => {
    if (intent.trim()) {
      onSubmit(intent)
    }
  }

  const examplePrompts = [
    "I want to sell 200 cookie boxes this weekend.",
    "I want to get 30 new fitness class members this month.",
    "I want more traffic to my jewelry store for Mother's Day."
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-orange-50 px-4">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Aspire</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium">
            Solutions
          </button>
          <button className="text-gray-700 hover:text-gray-900 font-medium">
            Pricing
          </button>
          <button className="text-gray-700 hover:text-gray-900 font-medium">
            Log in
          </button>
          <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors">
            Get started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center space-y-8 mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-bakery-200 shadow-sm">
          <span className="px-2 py-0.5 bg-bakery-500 text-white text-xs font-medium rounded-full">
            New
          </span>
          <span className="text-sm text-gray-700">AI-Powered Campaign Generation</span>
          <ArrowRight className="w-4 h-4 text-gray-500" />
        </div>

        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Launch ads in{' '}
            <span className="bg-gradient-to-r from-bakery-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              minutes
            </span>
            , not days
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us your goal, and our AI creates your complete ad campaign across Meta, TikTok, and Google
          </p>
        </div>

        {/* Main Input */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200 p-2">
            <textarea
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit()
                }
              }}
              placeholder="Describe your marketing goal..."
              rows={3}
              className="w-full px-6 py-4 bg-transparent focus:outline-none resize-none text-gray-900 placeholder-gray-400 text-lg"
            />
            <div className="flex items-center justify-between px-4 pb-2">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Sparkles className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mic className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!intent.trim()}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bakery-500 to-bakery-600 hover:from-bakery-600 hover:to-bakery-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-xl font-medium transition-all shadow-lg disabled:shadow-none"
              >
                Generate Campaign
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Example Prompts */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500 font-medium">Try an example:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {examplePrompts.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setIntent(example)}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-gray-200 rounded-lg text-sm text-gray-700 transition-all hover:shadow-md"
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-bakery-600 mb-1">5min</div>
            <p className="text-sm text-gray-600">Average setup time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bakery-600 mb-1">3x</div>
            <p className="text-sm text-gray-600">Faster than manual</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-bakery-600 mb-1">180%</div>
            <p className="text-sm text-gray-600">Average ROI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

