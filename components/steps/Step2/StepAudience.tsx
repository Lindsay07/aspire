'use client'

import { Users, Edit2 } from 'lucide-react'
import { useState } from 'react'

interface Audience {
  demographics: string
  interests: string
  location: string
  behaviors: string
}

interface StepAudienceProps {
  audience: Audience
  onUpdate: (audience: Audience) => void
  onReview: () => void
}

export default function StepAudience({ audience, onUpdate, onReview }: StepAudienceProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedAudience, setEditedAudience] = useState<Audience>(audience)

  const handleSave = () => {
    onUpdate(editedAudience)
    setIsEditing(false)
    onReview()
  }

  const fields = [
    { key: 'demographics' as keyof Audience, label: 'Demographics', icon: '👥' },
    { key: 'location' as keyof Audience, label: 'Location', icon: '📍' },
    { key: 'interests' as keyof Audience, label: 'Interests', icon: '❤️' },
    { key: 'behaviors' as keyof Audience, label: 'Behaviors', icon: '🎯' },
  ]

  return (
    <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-12 h-12 bg-bakery-100 rounded-lg flex items-center justify-center">
          <Users className="w-6 h-6 text-bakery-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Target Audience</h2>
          <p className="text-sm text-gray-500">Review your ideal customer profile</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <span className="mr-2">{field.icon}</span>
              {field.label}
            </label>
            {isEditing ? (
              <textarea
                value={editedAudience[field.key]}
                onChange={(e) => setEditedAudience({ ...editedAudience, [field.key]: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500 resize-none"
              />
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 border border-cream-200 min-h-[80px]">
                <p className="text-gray-900">{audience[field.key]}</p>
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
              setEditedAudience(audience)
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
          Edit Audience
        </button>
      )}

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> The more specific your audience, the better your ad targeting and performance will be.
        </p>
      </div>
    </div>
  )
}

