'use client'

import { Target, Edit2 } from 'lucide-react'
import { useState } from 'react'

interface StepGoalProps {
  goal: string
  userIntent: string
  onUpdate: (goal: string) => void
  onReview: () => void
}

export default function StepGoal({ goal, userIntent, onUpdate, onReview }: StepGoalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedGoal, setEditedGoal] = useState(goal)

  const handleSave = () => {
    onUpdate(editedGoal)
    setIsEditing(false)
    onReview()
  }

  return (
    <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-12 h-12 bg-bakery-100 rounded-lg flex items-center justify-center">
          <Target className="w-6 h-6 text-bakery-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign Goal</h2>
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
                <p className="text-gray-900 leading-relaxed">{goal}</p>
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
                setEditedGoal(goal)
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
  )
}

