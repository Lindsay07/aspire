'use client'

import { useEffect, useState } from 'react'
import { Sparkles, Check } from 'lucide-react'

const generationSteps = [
  { id: 1, label: 'Analyzing your goal...', duration: 1000 },
  { id: 2, label: 'Selecting optimal channels...', duration: 1500 },
  { id: 3, label: 'Building audience profile...', duration: 1200 },
  { id: 4, label: 'Creating creative strategy...', duration: 1300 },
  { id: 5, label: 'Calculating budget & forecast...', duration: 1000 },
  { id: 6, label: 'Generating ad assets...', duration: 1500 },
]

export default function GeneratingAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    if (currentStep < generationSteps.length) {
      const timer = setTimeout(() => {
        setCompletedSteps([...completedSteps, currentStep])
        setCurrentStep(currentStep + 1)
      }, generationSteps[currentStep].duration)

      return () => clearTimeout(timer)
    }
  }, [currentStep, completedSteps])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-bakery-50 px-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-2xl mb-6 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Creating Your Campaign
          </h2>
          <p className="text-gray-600">
            Our AI is analyzing your goal and building your complete marketing strategy...
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-xl border border-cream-200 p-8 space-y-4">
          {generationSteps.map((step, idx) => {
            const isCompleted = completedSteps.includes(idx)
            const isCurrent = currentStep === idx
            const isPending = idx > currentStep

            return (
              <div
                key={step.id}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  isCurrent ? 'bg-bakery-50 border-2 border-bakery-300' :
                  isCompleted ? 'bg-green-50' :
                  'bg-gray-50 opacity-50'
                }`}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isCompleted ? 'bg-green-500' :
                  isCurrent ? 'bg-bakery-500 animate-pulse' :
                  'bg-gray-300'
                }`}>
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white font-semibold">{idx + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    isCurrent ? 'text-gray-900' :
                    isCompleted ? 'text-green-700' :
                    'text-gray-500'
                  }`}>
                    {step.label}
                  </p>
                </div>
                {isCurrent && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-bakery-500 to-bakery-600 transition-all duration-500 ease-out"
              style={{ width: `${(completedSteps.length / generationSteps.length) * 100}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            {Math.round((completedSteps.length / generationSteps.length) * 100)}% complete
          </p>
        </div>
      </div>
    </div>
  )
}

