'use client'

import { useState } from 'react'
import { CheckCircle, Edit2, Target, Lightbulb, Image, DollarSign, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react'

interface Step4ReviewProps {
  onComplete: () => void
  onEditStep?: (step: number) => void
}

export default function Step4Review({ onComplete, onEditStep }: Step4ReviewProps) {
  const [allVerified, setAllVerified] = useState(false)

  // Mock data - in real app, this would come from previous steps
  const campaignSummary = {
    goal: 'Increase bakery sales through video showcase',
    channels: [
      { name: 'Meta (Facebook & Instagram)', budget: '$800', status: 'ready' },
      { name: 'TikTok', budget: '$400', status: 'ready' }
    ],
    audience: 'White collar tech workers, 25-45 years old in Los Altos',
    creativeAssets: { images: 2, videos: 1 },
    totalBudget: '$1,500',
    duration: '14 days',
    expectedROI: '180% - 240%'
  }

  const checklist = [
    { id: 1, label: 'All assets uploaded and approved', checked: true },
    { id: 2, label: 'Budget allocated correctly', checked: true },
    { id: 3, label: 'Audience targeting set', checked: true },
    { id: 4, label: 'Creative meets platform requirements', checked: true },
    { id: 5, label: 'Compliance checked', checked: true },
  ]

  const handleChecklistChange = (id: number) => {
    // Toggle checklist item
    const allChecked = checklist.every(item => item.id === id || item.checked)
    setAllVerified(allChecked)
  }

  return (
    <div className="space-y-6">

      {/* Campaign Summary */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Campaign Summary</h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Ready to Launch
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Goal */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Target className="w-4 h-4" />
              <span>Campaign Goal</span>
            </div>
            <p className="text-gray-900 font-medium">{campaignSummary.goal}</p>
            {onEditStep && (
              <button
                onClick={() => onEditStep(1)}
                className="text-sm text-bakery-600 hover:text-bakery-700 flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
            )}
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <DollarSign className="w-4 h-4" />
              <span>Budget & Duration</span>
            </div>
            <p className="text-gray-900 font-medium">{campaignSummary.totalBudget} over {campaignSummary.duration}</p>
            {onEditStep && (
              <button
                onClick={() => onEditStep(2)}
                className="text-sm text-bakery-600 hover:text-bakery-700 flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
            )}
          </div>

          {/* Channels */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Lightbulb className="w-4 h-4" />
              <span>Channels</span>
            </div>
            <div className="space-y-2">
              {campaignSummary.channels.map((channel, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-cream-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">{channel.name}</span>
                  <span className="text-sm text-bakery-600 font-semibold">{channel.budget}</span>
                </div>
              ))}
            </div>
            {onEditStep && (
              <button
                onClick={() => onEditStep(2)}
                className="text-sm text-bakery-600 hover:text-bakery-700 flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
            )}
          </div>

          {/* Creative */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Image className="w-4 h-4" />
              <span>Creative Assets</span>
            </div>
            <p className="text-gray-900 font-medium">
              {campaignSummary.creativeAssets.images} images, {campaignSummary.creativeAssets.videos} video
            </p>
            {onEditStep && (
              <button
                onClick={() => onEditStep(3)}
                className="text-sm text-bakery-600 hover:text-bakery-700 flex items-center gap-1"
              >
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Expected Performance */}
        <div className="mt-6 pt-6 border-t border-cream-200">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span>Expected Performance</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{campaignSummary.expectedROI}</p>
          <p className="text-xs text-gray-500 mt-1">Projected ROI based on your strategy</p>
        </div>
      </div>

      {/* Platform Previews */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Previews</h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Meta Preview */}
          <div className="border-2 border-cream-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Meta (Facebook & Instagram)</h3>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-bakery-100 to-cream-200 rounded-lg mb-3 flex items-center justify-center border border-cream-200">
              <Image className="w-12 h-12 text-bakery-400" />
            </div>
            <p className="text-xs text-gray-500">This is how your ad will appear on Meta platforms</p>
          </div>

          {/* TikTok Preview */}
          <div className="border-2 border-cream-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">TikTok</h3>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
            <div className="aspect-[9/16] bg-gradient-to-br from-bakery-100 to-cream-200 rounded-lg mb-3 flex items-center justify-center border border-cream-200">
              <Image className="w-12 h-12 text-bakery-400" />
            </div>
            <p className="text-xs text-gray-500">This is how your ad will appear on TikTok</p>
          </div>
        </div>
      </div>

      {/* Verification Checklist */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pre-Launch Checklist</h2>
        <div className="space-y-3">
          {checklist.map((item) => (
            <label key={item.id} className="flex items-center gap-3 p-3 bg-cream-50 rounded-lg cursor-pointer hover:bg-cream-100 transition-colors">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecklistChange(item.id)}
                className="w-5 h-5 text-bakery-600 border-cream-300 rounded focus:ring-bakery-500"
              />
              <span className="text-gray-900">{item.label}</span>
              {item.checked && <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />}
            </label>
          ))}
        </div>
      </div>

      {/* AI Confidence */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-green-900 mb-1">AI Confidence: 92% - High</h3>
            <p className="text-sm text-green-800">
              Your campaign is well-optimized. Expected performance is above industry average.
            </p>
          </div>
        </div>
      </div>

      {/* Launch Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onComplete}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
        >
          <CheckCircle className="w-6 h-6" />
          Approve & Launch Campaigns
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

