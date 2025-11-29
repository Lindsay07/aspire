import { 
  Home, 
  Target,
  Lightbulb, 
  Image, 
  CheckCircle, 
  Rocket, 
  FileText,
  Check,
  Circle,
  ArrowRight
} from 'lucide-react'

interface SidebarProps {
  currentStep: number
  completedSteps: number[]
  reviewSteps: number[]
  onStepChange: (step: number) => void
}

const steps = [
  { id: 1, name: 'Intent', icon: Target, description: 'Review your goal' },
  { id: 2, name: 'Strategy', icon: Lightbulb, description: 'Marketing plan' },
  { id: 3, name: 'Creative', icon: Image, description: 'Ad assets' },
  { id: 4, name: 'Review', icon: CheckCircle, description: 'Approve plan' },
  { id: 5, name: 'Launch', icon: Rocket, description: 'Go live' },
  { id: 8, name: 'Postmortem', icon: FileText, description: 'Review & learn' },
]

export default function Sidebar({ currentStep, completedSteps, reviewSteps, onStepChange }: SidebarProps) {
  const getStepStatus = (stepId: number) => {
    // Active status takes priority - if it's the current step, show as active
    if (stepId === currentStep) return 'active'
    if (completedSteps.includes(stepId)) return 'completed'
    if (reviewSteps.includes(stepId)) return 'to_review'
    return 'pending'
  }

  const getStepIcon = (stepId: number) => {
    const status = getStepStatus(stepId)
    if (status === 'completed') return <Check className="w-4 h-4" />
    if (status === 'to_review') return <span className="text-xs font-semibold">!</span>
    if (status === 'active') return <ArrowRight className="w-4 h-4" />
    return <Circle className="w-4 h-4" />
  }

  return (
    <div className="w-72 bg-white border-r border-cream-200 flex flex-col">
      <div className="p-6 border-b border-cream-200">
        <button
          onClick={() => onStepChange(0)}
          className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
            currentStep === 0
              ? 'bg-bakery-50 border-2 border-bakery-300'
              : 'hover:bg-cream-50 border-2 border-transparent'
          }`}
        >
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
            currentStep === 0
              ? 'bg-bakery-100 text-bakery-600'
              : 'bg-gray-100 text-gray-400'
          }`}>
            <Home className="w-5 h-5" />
          </div>
          <span className={`font-medium ${
            currentStep === 0 ? 'text-gray-900' : 'text-gray-600'
          }`}>
            Dashboard
          </span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Campaign Steps
          </h3>
        </div>

        <nav className="space-y-1 px-3">
          {steps.map((step) => {
            const status = getStepStatus(step.id)
            const Icon = step.icon
            
            return (
              <button
                key={step.id}
                onClick={() => onStepChange(step.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                  ${status === 'active' 
                    ? 'bg-bakery-50 border-2 border-bakery-300' 
                    : 'hover:bg-cream-50 border-2 border-transparent'
                  }
                `}
              >
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-lg
                  ${status === 'completed' 
                    ? 'bg-green-100 text-green-600' 
                    : status === 'to_review'
                    ? 'bg-yellow-100 text-yellow-600'
                    : status === 'active'
                    ? 'bg-bakery-100 text-bakery-600'
                    : 'bg-gray-100 text-gray-400'
                  }
                `}>
                  <Icon className="w-4 h-4" />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className={`
                      text-sm font-medium
                      ${status === 'active' ? 'text-gray-900' : 'text-gray-600'}
                    `}>
                      {step.name}
                    </span>
                    {status === 'to_review' && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                        To Review
                      </span>
                    )}
                    <div className={`
                      ${status === 'completed' 
                        ? 'text-green-600' 
                        : status === 'to_review'
                        ? 'text-yellow-600'
                        : status === 'active'
                        ? 'text-bakery-600'
                        : 'text-gray-300'
                      }
                    `}>
                      {getStepIcon(step.id)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-cream-200">
        <div className="bg-bakery-50 rounded-lg p-4">
          <p className="text-xs text-bakery-800 font-medium mb-1">Need help?</p>
          <p className="text-xs text-bakery-600">
            Open the AI assistant to get guidance at any step.
          </p>
        </div>
      </div>
    </div>
  )
}

