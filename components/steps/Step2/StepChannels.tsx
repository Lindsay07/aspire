'use client'

import { Check, X } from 'lucide-react'
import { useState } from 'react'

interface Channel {
  name: string
  recommended: boolean
  reason: string
  budget: string
  expectedReach: string
  confidence: 'High' | 'Medium' | 'Low'
}

interface StepChannelsProps {
  selectedChannels: string[]
  onUpdate: (channels: string[]) => void
  onReview: () => void
}

const availableChannels: Channel[] = [
  {
    name: 'Meta (Facebook & Instagram)',
    recommended: true,
    reason: 'Visual platform ideal for food content, precise demographic targeting for tech workers',
    budget: '$800',
    expectedReach: '15,000 - 20,000',
    confidence: 'High'
  },
  {
    name: 'TikTok',
    recommended: true,
    reason: 'Strong performance for food videos, growing audience in your area',
    budget: '$400',
    expectedReach: '10,000 - 15,000',
    confidence: 'Medium'
  },
  {
    name: 'Google Search',
    recommended: false,
    reason: 'Better for intent-based searches, less effective for brand discovery',
    budget: '$300',
    expectedReach: '5,000 - 8,000',
    confidence: 'Low'
  },
]

export default function StepChannels({ selectedChannels, onUpdate, onReview }: StepChannelsProps) {
  const [localSelection, setLocalSelection] = useState<string[]>(selectedChannels)

  const handleToggle = (channelName: string) => {
    const newSelection = localSelection.includes(channelName)
      ? localSelection.filter(c => c !== channelName)
      : [...localSelection, channelName]
    
    setLocalSelection(newSelection)
    onUpdate(newSelection)
    onReview()
  }

  return (
    <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommended Channels</h2>
        <p className="text-gray-600">Select which platforms you'd like to advertise on</p>
      </div>

      <div className="space-y-4">
        {availableChannels.map((channel, idx) => {
          const isSelected = localSelection.includes(channel.name)
          
          return (
            <div
              key={idx}
              className={`relative p-6 rounded-xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-bakery-500 bg-bakery-50 shadow-md'
                  : channel.recommended
                  ? 'border-bakery-200 bg-bakery-50 hover:border-bakery-300'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => handleToggle(channel.name)}
            >
              {/* Selection Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isSelected
                    ? 'bg-bakery-500 border-bakery-500'
                    : 'bg-white border-gray-300'
                }`}>
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>

              <div className="pr-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{channel.name}</h3>
                    {channel.recommended && (
                      <span className="px-3 py-1 bg-bakery-500 text-white text-xs font-medium rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-bakery-600">{channel.budget}</p>
                    <p className="text-xs text-gray-500">suggested budget</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{channel.reason}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Expected Reach</p>
                    <p className="font-medium text-gray-900">{channel.expectedReach}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Confidence</p>
                    <p className={`font-medium ${
                      channel.confidence === 'High' ? 'text-green-600' :
                      channel.confidence === 'Medium' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {channel.confidence}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Selection Summary */}
      {localSelection.length > 0 && (
        <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-800">
            <strong>Selected:</strong> {localSelection.join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}

