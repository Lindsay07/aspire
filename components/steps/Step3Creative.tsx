'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, SkipForward } from 'lucide-react'
import StepGuidanceUpload from './Step3/StepGuidanceUpload'
import StepGenerateEdit from './Step3/StepGenerateEdit'
import StepOptimize from './Step3/StepOptimize'
import StepPredict from './Step3/StepPredict'

interface Step3CreativeProps {
  onComplete: () => void
}

export type CreativeData = {
  uploadedAssets: UploadedAsset[]
  generatedAds: GeneratedAd[]
  optimizedAds: OptimizedAd[]
  performance: PerformancePrediction
}

export type UploadedAsset = {
  id: string
  type: 'image' | 'video'
  file: File | null
  preview: string
  name: string
}

export type GeneratedAd = {
  id: string
  variant: string
  headline: string
  description: string
  cta: string
  primaryAsset: string
  secondaryAssets: string[]
  aiGenerated: boolean
}

export type OptimizedAd = {
  id: string
  originalAdId: string
  platform: string
  format: string
  dimensions: string
  preview: string
}

export type PerformancePrediction = {
  expectedCTR: string
  expectedCPC: string
  expectedConversions: string
  fatigueHorizon: string
  budgetRecommendation: string
}

const stepNames = [
  'Guidance & Upload',
  'Generate & Edit',
  'Optimize for Platforms',
  'Performance Prediction'
]

const initialCreative: CreativeData = {
  uploadedAssets: [],
  generatedAds: [],
  optimizedAds: [],
  performance: {
    expectedCTR: '2.8%',
    expectedCPC: '$0.45',
    expectedConversions: '45-75 visits',
    fatigueHorizon: '7-10 days',
    budgetRecommendation: 'Allocate $800 to Meta, $400 to TikTok for best ROI'
  }
}

export default function Step3Creative({ onComplete }: Step3CreativeProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [creative, setCreative] = useState<CreativeData>(initialCreative)
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

  const updateCreative = (updates: Partial<CreativeData>) => {
    setCreative({ ...creative, ...updates })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepGuidanceUpload
            uploadedAssets={creative.uploadedAssets}
            onUpdate={(uploadedAssets) => updateCreative({ uploadedAssets })}
            onReview={() => handleStepReview(0)}
          />
        )
      case 1:
        return (
          <StepGenerateEdit
            uploadedAssets={creative.uploadedAssets}
            generatedAds={creative.generatedAds}
            onUpdate={(generatedAds) => updateCreative({ generatedAds })}
            onReview={() => handleStepReview(1)}
          />
        )
      case 2:
        return (
          <StepOptimize
            generatedAds={creative.generatedAds}
            optimizedAds={creative.optimizedAds}
            onUpdate={(optimizedAds) => updateCreative({ optimizedAds })}
            onReview={() => handleStepReview(2)}
          />
        )
      case 3:
        return (
          <StepPredict
            performance={creative.performance}
            onUpdate={(performance) => updateCreative({ performance })}
            onReview={() => handleStepReview(3)}
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

      {/* Fixed Navigation */}
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
                  Approve Creative
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
