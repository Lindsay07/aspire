'use client'

import { DollarSign, TrendingUp, Edit2 } from 'lucide-react'
import { useState } from 'react'

interface Budget {
  total: string
  duration: string
  dailyBudget: string
  breakdown: {
    meta: string
    tiktok: string
    reserve: string
  }
}

interface Forecast {
  impressions: string
  clicks: string
  conversions: string
  roi: string
}

interface StepBudgetProps {
  budget: Budget
  forecast: Forecast
  onUpdate: (updates: { budget?: Budget; forecast?: Forecast }) => void
  onReview: () => void
}

export default function StepBudget({ budget, forecast, onUpdate, onReview }: StepBudgetProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      {/* Budget Section */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-12 h-12 bg-bakery-100 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-bakery-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Budget & Forecast</h2>
            <p className="text-sm text-gray-500">Review your campaign investment and expected results</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Budget */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Budget</p>
              <p className="text-3xl font-bold text-bakery-600">{budget.total}</p>
              <p className="text-sm text-gray-500 mt-1">{budget.duration} campaign</p>
            </div>

            <div className="pt-4 border-t border-cream-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Meta</span>
                <span className="font-semibold text-gray-900">{budget.breakdown.meta}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">TikTok</span>
                <span className="font-semibold text-gray-900">{budget.breakdown.tiktok}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Reserve</span>
                <span className="font-semibold text-gray-900">{budget.breakdown.reserve}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-200">
              <p className="text-sm text-gray-500">Daily Budget</p>
              <p className="text-xl font-bold text-gray-900">{budget.dailyBudget}</p>
            </div>
          </div>

          {/* Forecast */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-bakery-600" />
              <h3 className="text-lg font-semibold text-gray-900">Performance Forecast</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Expected Impressions</p>
                <p className="text-lg font-semibold text-gray-900">{forecast.impressions}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Expected Clicks</p>
                <p className="text-lg font-semibold text-gray-900">{forecast.clicks}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Est. Conversions</p>
                <p className="text-lg font-semibold text-gray-900">{forecast.conversions}</p>
              </div>
              <div className="pt-4 border-t border-cream-200">
                <p className="text-sm text-gray-500 mb-1">Projected ROI</p>
                <p className="text-3xl font-bold text-green-600">{forecast.roi}</p>
              </div>
            </div>
          </div>
        </div>

        {isEditing ? (
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                setIsEditing(false)
                onReview()
              }}
              className="px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors mt-6"
          >
            <Edit2 className="w-4 h-4" />
            Adjust Budget
          </button>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Forecasts are estimates based on industry benchmarks and your target audience. Actual results may vary.
        </p>
      </div>
    </div>
  )
}

