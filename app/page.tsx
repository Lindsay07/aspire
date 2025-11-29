'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import AIChatPanel from '@/components/AIChatPanel'
import LandingPage from '@/components/LandingPage'
import GeneratingAnimation from '@/components/GeneratingAnimation'
import Dashboard from '@/components/Dashboard'
import Step1Intent from '@/components/steps/Step1Intent'
import Step2Strategy from '@/components/steps/Step2Strategy'
import Step3Creative from '@/components/steps/Step3Creative'
import Step4Review from '@/components/steps/Step4Review'
import Step5Launch from '@/components/steps/Step5Launch'
import Step8Postmortem from '@/components/steps/Step8Postmortem'
import TopBar from '@/components/TopBar'

type AppState = 'landing' | 'generating' | 'app'

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing')
  const [userIntent, setUserIntent] = useState('')
  const [campaignGoal, setCampaignGoal] = useState('Increase bakery sales through video showcase')
  const [currentStep, setCurrentStep] = useState(1)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [reviewSteps, setReviewSteps] = useState<number[]>([1, 2, 3, 4, 5])

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
        setCurrentStep(1) // Show Intent step
      }, totalDuration)

      return () => clearTimeout(timer)
    }
  }, [appState])

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Dashboard onEditStep={setCurrentStep} />
      case 1:
        return (
          <Step1Intent
            onComplete={() => handleStepReview(1)}
            userIntent={userIntent}
            goal={campaignGoal}
            onUpdateGoal={setCampaignGoal}
          />
        )
      case 2:
        return <Step2Strategy onComplete={() => handleStepReview(2)} userIntent={userIntent} />
      case 3:
        return <Step3Creative onComplete={() => handleStepReview(3)} />
      case 4:
        return <Step4Review onComplete={() => handleStepReview(4)} onEditStep={setCurrentStep} />
      case 5:
        return <Step5Launch onComplete={() => handleStepReview(5)} />
      case 8:
        return <Step8Postmortem onStartNext={() => setCurrentStep(1)} />
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
    // Navigate to next step after approval
    if (step === 1) {
      setCurrentStep(2) // Intent → Strategy
    } else if (step === 2) {
      setCurrentStep(3) // Strategy → Creative
    } else if (step === 3) {
      setCurrentStep(4) // Creative → Review
    } else if (step === 4) {
      setCurrentStep(5) // Review → Launch
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
        
        <main className={`flex-1 overflow-auto transition-all duration-300 ${isChatOpen ? 'mr-96' : ''} ${currentStep === 0 ? 'relative' : ''}`}>
          <div className={`${currentStep === 0 ? 'w-full p-8' : 'max-w-5xl mx-auto p-8'}`}>
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

