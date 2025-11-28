'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import AIChatPanel from '@/components/AIChatPanel'
import LandingPage from '@/components/LandingPage'
import GeneratingAnimation from '@/components/GeneratingAnimation'
import Step2Strategy from '@/components/steps/Step2Strategy'
import Step3Creative from '@/components/steps/Step3Creative'
import TopBar from '@/components/TopBar'

type AppState = 'landing' | 'generating' | 'app'

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing')
  const [userIntent, setUserIntent] = useState('')
  const [currentStep, setCurrentStep] = useState(2)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([1])
  const [reviewSteps, setReviewSteps] = useState<number[]>([2, 3, 4, 5])

  const handleIntentSubmit = (intent: string) => {
    setUserIntent(intent)
    setAppState('generating')
  }

  // Simulate generation completion after animation
  useEffect(() => {
    if (appState === 'generating') {
      // Total duration of all generation steps (from GeneratingAnimation)
      const totalDuration = 1000 + 1500 + 1200 + 1300 + 1000 + 1500 + 500 // extra 500ms buffer
      
      const timer = setTimeout(() => {
        setAppState('app')
        setCurrentStep(2) // Show Strategy step
      }, totalDuration)

      return () => clearTimeout(timer)
    }
  }, [appState])

  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return <Step2Strategy onComplete={() => handleStepReview(2)} userIntent={userIntent} />
      case 3:
        return <Step3Creative onComplete={() => handleStepReview(3)} />
      case 4:
      case 5:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚧</span>
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</p>
              <p className="text-gray-500">Step {currentStep} is under construction</p>
            </div>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Step {currentStep} - Coming soon</p>
          </div>
        )
    }
  }

  const handleStepReview = (step: number) => {
    // Move from "to review" to "completed"
    setReviewSteps(reviewSteps.filter(s => s !== step))
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step])
    }
  }

  if (appState === 'landing') {
    return <LandingPage onSubmit={handleIntentSubmit} />
  }

  if (appState === 'generating') {
    return <GeneratingAnimation />
  }

  return (
    <div className="flex flex-col h-screen bg-cream-50">
      <TopBar onToggleChat={() => setIsChatOpen(!isChatOpen)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          currentStep={currentStep}
          completedSteps={completedSteps}
          reviewSteps={reviewSteps}
          onStepChange={setCurrentStep}
        />
        
        <main className={`flex-1 overflow-auto transition-all duration-300 ${isChatOpen ? 'mr-96' : ''}`}>
          <div className="max-w-5xl mx-auto p-8">
            {renderStep()}
          </div>
        </main>

        <AIChatPanel
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          currentStep={currentStep}
        />
      </div>
    </div>
  )
}

