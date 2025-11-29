'use client'

import { useState } from 'react'
import { Target, Edit2, ArrowLeft, ArrowRight, Check } from 'lucide-react'

interface Step1IntentProps {
  onComplete: () => void
  userIntent: string
  goal?: string
  onUpdateGoal?: (goal: string) => void
}

export default function Step1Intent({ onComplete, userIntent, goal, onUpdateGoal }: Step1IntentProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedGoal, setEditedGoal] = useState(goal || 'Increase bakery sales through video showcase')

  const handleSave = () => {
    if (onUpdateGoal) {
      onUpdateGoal(editedGoal)
    }
    setIsEditing(false)
  }

  const handleNext = () => {
    // Save goal if editing
    if (isEditing && onUpdateGoal) {
      onUpdateGoal(editedGoal)
      setIsEditing(false)
    }
    onComplete()
  }

  return (
    <div className="relative">
      <div className="pb-24">
        <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-12 h-12 bg-bakery-100 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-bakery-600" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-gray-900">Campaign Goal</h2>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
                To Review
              </span>
            </div>
            <p className="text-sm text-gray-500">Review and confirm your marketing objective</p>
          </div>
        </div>

        {/* User Intent Recap */}
        {userIntent && (
          <div className="bg-cream-50 rounded-lg p-4 border border-cream-200 mb-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Your Original Goal:</p>
            <p className="text-gray-900 leading-relaxed">{userIntent}</p>
          </div>
        )}

        {/* AI-Generated Goal */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI-Generated Campaign Goal
              </label>
              {isEditing ? (
                <textarea
                  value={editedGoal}
                  onChange={(e) => setEditedGoal(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500 resize-none"
                />
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 border border-cream-200">
                  <p className="text-gray-900 leading-relaxed">{goal || editedGoal}</p>
                </div>
              )}
            </div>
          </div>

          {isEditing ? (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setEditedGoal(goal || 'Increase bakery sales through video showcase')
                  setIsEditing(false)
                }}
                className="px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit Goal
            </button>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> This goal will guide all campaign decisions. Make sure it's specific and measurable.
          </p>
        </div>
      </div>
      </div>

      {/* Fixed Navigation */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-cream-200 shadow-lg z-10 -mx-8 -mb-8 px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            disabled
            className="flex items-center gap-2 px-6 py-3 border border-cream-300 bg-gray-50 text-gray-400 cursor-not-allowed rounded-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
            Continue to Strategy
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
