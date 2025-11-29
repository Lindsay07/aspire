'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Clock, DollarSign, Sparkles, AlertCircle } from 'lucide-react'
import { PerformancePrediction } from '../Step3Creative'

interface StepPredictProps {
  performance: PerformancePrediction
  onUpdate: (performance: PerformancePrediction) => void
  onReview: () => void
}

export default function StepPredict({ performance, onUpdate, onReview }: StepPredictProps) {
  const [isPredicting, setIsPredicting] = useState(false)
  const [localPerformance, setLocalPerformance] = useState<PerformancePrediction>(performance)

  useEffect(() => {
    if (!performance.expectedCTR || performance.expectedCTR === '') {
      handlePredict()
    } else {
      setLocalPerformance(performance)
    }
  }, [performance])

  const handlePredict = () => {
    setIsPredicting(true)

    // Simulate AI prediction
    setTimeout(() => {
      const newPerformance: PerformancePrediction = {
        expectedCTR: '2.8%',
        expectedCPC: '$0.45',
        expectedConversions: '45-75 visits',
        fatigueHorizon: '7-10 days',
        budgetRecommendation: 'Allocate $800 to Meta, $400 to TikTok for best ROI. Increase budget by 20% after day 5 if CTR > 3%.'
      }

      setLocalPerformance(newPerformance)
      onUpdate(newPerformance)
      setIsPredicting(false)
      onReview()
    }, 2000)
  }

  if (isPredicting) {
    return (
      <div className="bg-white rounded-xl p-12 border border-cream-200 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-2xl mb-6 animate-pulse">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Performance</h3>
        <p className="text-gray-600 mb-6">AI is predicting performance and calculating fatigue horizon...</p>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-bakery-600" />
            <h2 className="text-2xl font-bold text-gray-900">Performance Prediction</h2>
          </div>
          <p className="text-gray-600">AI-powered forecasts based on your creative assets and target audience</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-cream-50 rounded-lg p-6 border border-cream-200">
            <p className="text-sm text-gray-500 mb-2">Expected CTR</p>
            <p className="text-3xl font-bold text-bakery-600">{localPerformance.expectedCTR}</p>
            <p className="text-xs text-gray-500 mt-2">Industry avg: 1.5%</p>
          </div>
          <div className="bg-cream-50 rounded-lg p-6 border border-cream-200">
            <p className="text-sm text-gray-500 mb-2">Expected CPC</p>
            <p className="text-3xl font-bold text-bakery-600">{localPerformance.expectedCPC}</p>
            <p className="text-xs text-gray-500 mt-2">Industry avg: $0.65</p>
          </div>
          <div className="bg-cream-50 rounded-lg p-6 border border-cream-200">
            <p className="text-sm text-gray-500 mb-2">Expected Conversions</p>
            <p className="text-3xl font-bold text-green-600">{localPerformance.expectedConversions}</p>
            <p className="text-xs text-gray-500 mt-2">Based on $1,500 budget</p>
          </div>
        </div>
      </div>

      {/* Fatigue Horizon */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-bakery-600" />
          <h3 className="text-lg font-semibold text-gray-900">Fatigue Horizon</h3>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-2">
                Refresh your creative after: {localPerformance.fatigueHorizon}
              </p>
              <p className="text-sm text-yellow-800">
                Based on industry benchmarks and your target audience size, your ads will start showing 
                diminishing returns after this period. We'll send you a reminder to refresh.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Recommendations */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6 text-bakery-600" />
          <h3 className="text-lg font-semibold text-gray-900">Budget Recommendations</h3>
        </div>
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-2">AI Recommendation</p>
              <p className="text-sm text-green-800 leading-relaxed">
                {localPerformance.budgetRecommendation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> These predictions are based on industry benchmarks, your creative quality, 
          and target audience. Actual performance may vary. Monitor your campaigns and adjust as needed.
        </p>
      </div>
    </div>
  )
}

