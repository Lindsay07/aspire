'use client'

import { Sparkles, Edit2 } from 'lucide-react'
import { useState } from 'react'

interface CreativeStrategy {
  primary: string
  secondary: string
  hook: string
  cta: string
}

interface StepCreativeProps {
  creativeStrategy: CreativeStrategy
  onUpdate: (strategy: CreativeStrategy) => void
  onReview: () => void
}

export default function StepCreative({ creativeStrategy, onUpdate, onReview }: StepCreativeProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedStrategy, setEditedStrategy] = useState<CreativeStrategy>(creativeStrategy)

  const handleSave = () => {
    onUpdate(editedStrategy)
    setIsEditing(false)
    onReview()
  }

  const fields = [
    { key: 'primary' as keyof CreativeStrategy, label: 'Primary Format', icon: '🎬' },
    { key: 'secondary' as keyof CreativeStrategy, label: 'Secondary Format', icon: '🖼️' },
    { key: 'hook' as keyof CreativeStrategy, label: 'Hook & Messaging', icon: '💡' },
    { key: 'cta' as keyof CreativeStrategy, label: 'Call to Action', icon: '📢' },
  ]

  return (
    <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-12 h-12 bg-bakery-100 rounded-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-bakery-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Creative Strategy</h2>
          <p className="text-sm text-gray-500">Review your ad format and messaging approach</p>
        </div>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <span className="mr-2">{field.icon}</span>
              {field.label}
            </label>
            {isEditing ? (
              <textarea
                value={editedStrategy[field.key]}
                onChange={(e) => setEditedStrategy({ ...editedStrategy, [field.key]: e.target.value })}
                rows={field.key === 'hook' ? 3 : 2}
                className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500 resize-none"
              />
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 border border-cream-200">
                <p className="text-gray-900">{creativeStrategy[field.key]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing ? (
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              setEditedStrategy(creativeStrategy)
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
          className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors mt-6"
        >
          <Edit2 className="w-4 h-4" />
          Edit Creative Strategy
        </button>
      )}

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Your creative assets will be generated based on this strategy in the next step.
        </p>
      </div>
    </div>
  )
}

