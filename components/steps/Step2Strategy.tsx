'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, SkipForward } from 'lucide-react'
import StepChannels from './Step2/StepChannels'
import StepAudience from './Step2/StepAudience'
import StepCreative from './Step2/StepCreative'
import StepBudget from './Step2/StepBudget'
import StepSummary from './Step2/StepSummary'

interface Step2StrategyProps {
  onComplete: () => void
  userIntent?: string
}

export type StrategyData = {
  goal: string
  selectedChannels: string[]
  audience: {
    demographics: string
    interests: string
    location: string
    behaviors: string
  }
  creativeStrategy: {
    primary: string
    secondary: string
    hook: string
    cta: string
  }
  budget: {
    total: string
    duration: string
    dailyBudget: string
    breakdown: {
      meta: string
      tiktok: string
      reserve: string
    }
  }
  forecast: {
    impressions: string
    clicks: string
    conversions: string
    roi: string
  }
}

const initialStrategy: StrategyData = {
  goal: 'Increase bakery sales through video showcase',
  selectedChannels: ['Meta (Facebook & Instagram)', 'TikTok'],
  audience: {
    demographics: 'White collar tech workers, 25-45 years old',
    interests: 'Japanese cuisine, French patisserie, artisanal foods, not overly sweet desserts',
    location: 'Los Altos and surrounding areas (5-mile radius)',
    behaviors: 'High income, health-conscious, quality-focused consumers'
  },
  creativeStrategy: {
    primary: 'Video showcase of bakery and cakes',
    secondary: 'Carousel ads with close-up cake photography',
    hook: 'Emphasize authentic Japanese/French techniques and balanced sweetness',
    cta: 'Visit our store or order online'
  },
  budget: {
    total: '$1,500',
    duration: '14 days',
    dailyBudget: '$107',
    breakdown: {
      meta: '$800 (53%)',
      tiktok: '$400 (27%)',
      reserve: '$300 (20%)'
    }
  },
  forecast: {
    impressions: '25,000 - 35,000',
    clicks: '750 - 1,200',
    conversions: '45 - 75 visits/purchases',
    roi: '180% - 240%'
  }
}

const stepNames = [
  'Recommended Channels',
  'Target Audience',
  'Creative Strategy',
  'Budget & Forecast',
  'Review Summary'
]

export default function Step2Strategy({ onComplete, userIntent }: Step2StrategyProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [strategy, setStrategy] = useState<StrategyData>(initialStrategy)
  const [reviewedSteps, setReviewedSteps] = useState<number[]>([])

  const totalSteps = stepNames.length
  const isLastStep = currentStep === totalSteps - 1
  const isFirstStep = currentStep === 0

  const handleNext = () => {
    if (isLastStep) {
      onComplete()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleStepReview = (stepIndex: number) => {
    if (!reviewedSteps.includes(stepIndex)) {
      setReviewedSteps([...reviewedSteps, stepIndex])
    }
  }

  const updateStrategy = (updates: Partial<StrategyData>) => {
    setStrategy({ ...strategy, ...updates })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepChannels
            selectedChannels={strategy.selectedChannels}
            onUpdate={(selectedChannels) => updateStrategy({ selectedChannels })}
            onReview={() => handleStepReview(0)}
          />
        )
      case 1:
        return (
          <StepAudience
            audience={strategy.audience}
            onUpdate={(audience) => updateStrategy({ audience })}
            onReview={() => handleStepReview(1)}
          />
        )
      case 2:
        return (
          <StepCreative
            creativeStrategy={strategy.creativeStrategy}
            onUpdate={(creativeStrategy) => updateStrategy({ creativeStrategy })}
            onReview={() => handleStepReview(2)}
          />
        )
      case 3:
        return (
          <StepBudget
            budget={strategy.budget}
            forecast={strategy.forecast}
            onUpdate={(updates) => updateStrategy(updates)}
            onReview={() => handleStepReview(3)}
          />
        )
      case 4:
        return (
          <StepSummary
            strategy={strategy}
            onApprove={onComplete}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* Fixed Progress Indicator */}
      <div className="sticky top-0 z-10 bg-white border-b border-cream-200 shadow-sm mb-6">
        <div className="max-w-5xl mx-auto px-8 py-4">
          <div className="flex items-center justify-center gap-2">
            {stepNames.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx < currentStep
                    ? 'bg-green-500 flex-1'
                    : idx === currentStep
                    ? 'bg-bakery-500 flex-1'
                    : 'bg-gray-300 flex-1'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Current Step Content */}
      <div className="pb-24">
        {renderStep()}
      </div>

      {/* Fixed Navigation - Full width of canvas area */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-cream-200 shadow-lg z-10 -mx-8 -mb-8 px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={isFirstStep}
            className="flex items-center gap-2 px-6 py-3 border border-cream-300 hover:bg-cream-50 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="flex gap-3">
            {!isLastStep && (
              <button
                onClick={handleSkip}
                className="flex items-center gap-2 px-6 py-3 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors"
              >
                <SkipForward className="w-5 h-5" />
                Skip
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              {isLastStep ? (
                <>
                  <Check className="w-5 h-5" />
                  Approve Strategy
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
