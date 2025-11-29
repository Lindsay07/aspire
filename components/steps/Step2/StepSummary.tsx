'use client'

import { Check, Target, Users, Sparkles, DollarSign, TrendingUp } from 'lucide-react'
import { StrategyData } from '../Step2Strategy'

interface StepSummaryProps {
  strategy: StrategyData
  onApprove: () => void
}

export default function StepSummary({ strategy, onApprove }: StepSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Summary</h2>
          <p className="text-gray-600">Review all your campaign decisions before proceeding</p>
        </div>

        {/* Campaign Goal */}
        <div className="mb-6 pb-6 border-b border-cream-200">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-bakery-600" />
            <h3 className="text-lg font-semibold text-gray-900">Campaign Goal</h3>
          </div>
          <p className="text-gray-700">{strategy.goal}</p>
        </div>

        {/* Channels */}
        <div className="mb-6 pb-6 border-b border-cream-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 bg-bakery-500 rounded flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Selected Channels</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {strategy.selectedChannels.map((channel, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-bakery-100 text-bakery-700 rounded-lg text-sm font-medium"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="mb-6 pb-6 border-b border-cream-200">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-bakery-600" />
            <h3 className="text-lg font-semibold text-gray-900">Target Audience</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 mb-1">Demographics</p>
              <p className="text-gray-900">{strategy.audience.demographics}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Location</p>
              <p className="text-gray-900">{strategy.audience.location}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Interests</p>
              <p className="text-gray-900">{strategy.audience.interests}</p>
            </div>
            <div>
              <p className="text-gray-500 mb-1">Behaviors</p>
              <p className="text-gray-900">{strategy.audience.behaviors}</p>
            </div>
          </div>
        </div>

        {/* Creative Strategy */}
        <div className="mb-6 pb-6 border-b border-cream-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-bakery-600" />
            <h3 className="text-lg font-semibold text-gray-900">Creative Strategy</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-gray-500">Primary Format</p>
              <p className="text-gray-900">{strategy.creativeStrategy.primary}</p>
            </div>
            <div>
              <p className="text-gray-500">Hook & Messaging</p>
              <p className="text-gray-900">{strategy.creativeStrategy.hook}</p>
            </div>
          </div>
        </div>

        {/* Budget & Forecast */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-bakery-600" />
              <h3 className="text-lg font-semibold text-gray-900">Budget</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-bakery-600">{strategy.budget.total}</p>
              <p className="text-sm text-gray-500">{strategy.budget.duration} campaign</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-bakery-600" />
              <h3 className="text-lg font-semibold text-gray-900">Forecast</h3>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600">{strategy.forecast.roi}</p>
              <p className="text-sm text-gray-500">Projected ROI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

