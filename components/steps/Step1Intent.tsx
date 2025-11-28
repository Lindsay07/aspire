'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

interface Step1IntentProps {
  onComplete: () => void
}

export default function Step1Intent({ onComplete }: Step1IntentProps) {
  const [intent, setIntent] = useState(
    "I want to increase sales of our bakery. In the ad, I want to showcase our delicious cakes in the campaign. I am thinking maybe a video of our shop will help. In terms of audience, we typically attract people who are white collar tech workers who prefer Japanese/French bakery that is not too sweet."
  )
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    onComplete()
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 1000)
  }

  const examplePrompts = [
    "I want to sell 200 cookie boxes this weekend.",
    "I want to get 30 new fitness class members this month.",
    "I want more traffic to my jewelry store for Mother's Day."
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          What's your marketing goal?
        </h1>
        <p className="text-gray-600">
          Describe what you want to achieve in your own words. Be as specific as possible.
        </p>
      </div>

      {/* Examples */}
      <div className="bg-cream-50 rounded-xl p-5 border border-cream-200">
        <p className="text-sm font-medium text-gray-700 mb-3">Example prompts:</p>
        <div className="space-y-2">
          {examplePrompts.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setIntent(example)}
              className="block w-full text-left text-sm text-gray-600 hover:text-bakery-600 transition-colors"
            >
              • {example}
            </button>
          ))}
        </div>
      </div>

      {/* Main Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your marketing intent
        </label>
        <textarea
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          placeholder="Tell us what you want to achieve..."
          rows={8}
          className="w-full px-4 py-3 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-bakery-500 focus:border-transparent resize-none text-gray-900"
        />
        <p className="mt-2 text-sm text-gray-500">
          Tip: Include your goal, target audience, timeline, and any creative ideas you have.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleAnalyze}
          disabled={!intent.trim() || isAnalyzing}
          className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 disabled:bg-gray-300 text-white rounded-lg font-medium transition-colors"
        >
          {isAnalyzing ? (
            <>
              <Sparkles className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Analyze & Continue
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
        
        <button className="px-6 py-3 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors">
          Save Draft
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-lg p-4 border border-cream-200">
          <div className="text-bakery-600 text-2xl font-bold mb-1">1</div>
          <p className="text-sm text-gray-600">Express your goal in natural language</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-cream-200">
          <div className="text-bakery-600 text-2xl font-bold mb-1">2</div>
          <p className="text-sm text-gray-600">AI analyzes and creates strategy</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-cream-200">
          <div className="text-bakery-600 text-2xl font-bold mb-1">3</div>
          <p className="text-sm text-gray-600">Review and launch in minutes</p>
        </div>
      </div>
    </div>
  )
}

