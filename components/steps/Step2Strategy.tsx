'use client'

import { useState } from 'react'
import { 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Edit2
} from 'lucide-react'

interface Step2StrategyProps {
  onComplete: () => void
  userIntent?: string
}

export default function Step2Strategy({ onComplete, userIntent }: Step2StrategyProps) {
  const [isEditing, setIsEditing] = useState(false)

  const strategy = {
    goal: 'Increase bakery sales through video showcase',
    channels: [
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
    ],
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

  const handleApprove = () => {
    onComplete()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Your Marketing Strategy
              </h1>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
                To Review
              </span>
            </div>
            <p className="text-gray-600">
              AI-generated plan based on your goals and audience
            </p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:bg-cream-50 rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
        </div>

        {/* User Intent Recap */}
        {userIntent && (
          <div className="bg-cream-50 rounded-xl p-4 border border-cream-200">
            <p className="text-sm font-medium text-gray-600 mb-1">Your Goal:</p>
            <p className="text-gray-900">{userIntent}</p>
          </div>
        )}
      </div>

      {/* Campaign Goal */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-bakery-600" />
          <h2 className="text-lg font-semibold text-gray-900">Campaign Goal</h2>
        </div>
        <p className="text-gray-700">{strategy.goal}</p>
      </div>

      {/* Recommended Channels */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Channels</h2>
        <div className="space-y-4">
          {strategy.channels.map((channel, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border-2 ${
                channel.recommended
                  ? 'border-bakery-300 bg-bakery-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{channel.name}</h3>
                  {channel.recommended && (
                    <span className="px-2 py-1 bg-bakery-500 text-white text-xs rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-semibold text-bakery-600">{channel.budget}</p>
                  <p className="text-xs text-gray-500">suggested budget</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{channel.reason}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Expected Reach</p>
                  <p className="font-medium text-gray-900">{channel.expectedReach}</p>
                </div>
                <div>
                  <p className="text-gray-500">Confidence</p>
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
          ))}
        </div>
      </div>

      {/* Audience */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-bakery-600" />
          <h2 className="text-lg font-semibold text-gray-900">Target Audience</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Demographics</p>
            <p className="text-gray-900">{strategy.audience.demographics}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
            <p className="text-gray-900">{strategy.audience.location}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Interests</p>
            <p className="text-gray-900">{strategy.audience.interests}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Behaviors</p>
            <p className="text-gray-900">{strategy.audience.behaviors}</p>
          </div>
        </div>
      </div>

      {/* Creative Strategy */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Creative Strategy</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-500">Primary Format</p>
            <p className="text-gray-900">{strategy.creativeStrategy.primary}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Secondary Format</p>
            <p className="text-gray-900">{strategy.creativeStrategy.secondary}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Hook & Messaging</p>
            <p className="text-gray-900">{strategy.creativeStrategy.hook}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Call to Action</p>
            <p className="text-gray-900">{strategy.creativeStrategy.cta}</p>
          </div>
        </div>
      </div>

      {/* Budget & Forecast */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-cream-200">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-bakery-600" />
            <h2 className="text-lg font-semibold text-gray-900">Budget</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-2xl font-bold text-bakery-600">{strategy.budget.total}</p>
              <p className="text-sm text-gray-500">{strategy.budget.duration} campaign</p>
            </div>
            <div className="pt-3 border-t border-cream-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Meta</span>
                <span className="font-medium text-gray-900">{strategy.budget.breakdown.meta}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">TikTok</span>
                <span className="font-medium text-gray-900">{strategy.budget.breakdown.tiktok}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reserve</span>
                <span className="font-medium text-gray-900">{strategy.budget.breakdown.reserve}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-cream-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-bakery-600" />
            <h2 className="text-lg font-semibold text-gray-900">Forecast</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Expected Impressions</p>
              <p className="text-lg font-semibold text-gray-900">{strategy.forecast.impressions}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Expected Clicks</p>
              <p className="text-lg font-semibold text-gray-900">{strategy.forecast.clicks}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Est. Conversions</p>
              <p className="text-lg font-semibold text-gray-900">{strategy.forecast.conversions}</p>
            </div>
            <div className="pt-3 border-t border-cream-200">
              <p className="text-sm text-gray-500">Projected ROI</p>
              <p className="text-2xl font-bold text-green-600">{strategy.forecast.roi}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleApprove}
          className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          <Check className="w-5 h-5" />
          Looks Good - Mark as Reviewed
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button className="px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors">
          Edit Strategy
        </button>
      </div>
    </div>
  )
}

