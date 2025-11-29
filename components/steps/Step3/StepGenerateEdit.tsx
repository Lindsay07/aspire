'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Edit2, Play, Image as ImageIcon, Check } from 'lucide-react'
import { UploadedAsset, GeneratedAd } from '../Step3Creative'

interface StepGenerateEditProps {
  uploadedAssets: UploadedAsset[]
  generatedAds: GeneratedAd[]
  onUpdate: (ads: GeneratedAd[]) => void
  onReview: () => void
}

export default function StepGenerateEdit({ uploadedAssets, generatedAds, onUpdate, onReview }: StepGenerateEditProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [editingAd, setEditingAd] = useState<string | null>(null)
  const [localAds, setLocalAds] = useState<GeneratedAd[]>(generatedAds)

  useEffect(() => {
    // Auto-generate ads if we have assets but no ads yet
    if (uploadedAssets.length > 0 && generatedAds.length === 0) {
      handleGenerate()
    } else if (generatedAds.length > 0) {
      setLocalAds(generatedAds)
    }
  }, [uploadedAssets, generatedAds])

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const newAds: GeneratedAd[] = [
        {
          id: 'ad-1',
          variant: 'Variant A',
          headline: 'Authentic Japanese & French Pastries in Los Altos',
          description: 'Experience artisanal quality with our not-too-sweet pastries. Perfect for tech professionals who appreciate quality.',
          cta: 'Visit Store',
          primaryAsset: uploadedAssets[0]?.id || '',
          secondaryAssets: uploadedAssets.slice(1, 3).map(a => a.id),
          aiGenerated: true
        },
        {
          id: 'ad-2',
          variant: 'Variant B',
          headline: 'Not Too Sweet. Just Perfect.',
          description: 'Where tech meets taste. Discover our Japanese-French fusion bakery in the heart of Los Altos.',
          cta: 'Order Online',
          primaryAsset: uploadedAssets[0]?.id || '',
          secondaryAssets: uploadedAssets.slice(1, 2).map(a => a.id),
          aiGenerated: true
        },
        {
          id: 'ad-3',
          variant: 'Variant C',
          headline: 'Where Tech Meets Taste',
          description: 'Premium pastries crafted for discerning palates. Visit Satura Patisserie today.',
          cta: 'Get Directions',
          primaryAsset: uploadedAssets[1]?.id || uploadedAssets[0]?.id || '',
          secondaryAssets: [],
          aiGenerated: true
        }
      ]
      
      setLocalAds(newAds)
      onUpdate(newAds)
      setIsGenerating(false)
      onReview()
    }, 2000)
  }

  const handleEdit = (adId: string, field: keyof GeneratedAd, value: string) => {
    const updated = localAds.map(ad => 
      ad.id === adId ? { ...ad, [field]: value } : ad
    )
    setLocalAds(updated)
    onUpdate(updated)
  }

  if (isGenerating) {
    return (
      <div className="bg-white rounded-xl p-12 border border-cream-200 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-2xl mb-6 animate-pulse">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Generating Your Ads</h3>
        <p className="text-gray-600 mb-6">AI is creating multiple ad variants for A/B testing...</p>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    )
  }

  if (localAds.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 border border-cream-200 shadow-sm text-center">
        <Sparkles className="w-16 h-16 text-bakery-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Generate Ads</h3>
        <p className="text-gray-600 mb-6">Click below to let AI create multiple ad variants from your assets</p>
        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
        >
          Generate Ads
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Generated Ad Variants</h2>
          <p className="text-gray-600">Review and edit each variant. These will be used for A/B testing.</p>
        </div>

        <div className="space-y-6">
          {localAds.map((ad) => {
            const isEditing = editingAd === ad.id

            return (
              <div key={ad.id} className="border-2 border-cream-200 rounded-xl p-6 hover:border-bakery-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-bakery-100 text-bakery-700 rounded-lg font-medium text-sm">
                      {ad.variant}
                    </span>
                    {ad.aiGenerated && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        AI Generated
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setEditingAd(isEditing ? null : ad.id)}
                    className="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    {isEditing ? 'Done Editing' : 'Edit'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Preview */}
                  <div className="col-span-1">
                    <div className="aspect-square rounded-lg overflow-hidden border-2 border-cream-200 bg-gray-100">
                      {(() => {
                        const asset = uploadedAssets.find(a => a.id === ad.primaryAsset)
                        if (asset?.type === 'video') {
                          return (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          )
                        } else if (asset?.preview) {
                          return (
                            <img
                              src={asset.preview}
                              alt="Ad preview"
                              className="w-full h-full object-cover"
                            />
                          )
                        } else {
                          return <ImageIcon className="w-12 h-12 text-gray-400 mx-auto" />
                        }
                      })()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-span-2 space-y-4">
                    {isEditing ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                          <input
                            type="text"
                            value={ad.headline}
                            onChange={(e) => handleEdit(ad.id, 'headline', e.target.value)}
                            className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            value={ad.description}
                            onChange={(e) => handleEdit(ad.id, 'description', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500 resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Call to Action</label>
                          <select
                            value={ad.cta}
                            onChange={(e) => handleEdit(ad.id, 'cta', e.target.value)}
                            className="w-full px-3 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bakery-500"
                          >
                            <option>Visit Store</option>
                            <option>Order Online</option>
                            <option>Get Directions</option>
                            <option>Learn More</option>
                            <option>Shop Now</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Headline</p>
                          <p className="text-lg font-semibold text-gray-900">{ad.headline}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Description</p>
                          <p className="text-gray-700">{ad.description}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Call to Action</p>
                          <span className="inline-block px-3 py-1 bg-bakery-100 text-bakery-700 rounded-lg font-medium">
                            {ad.cta}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

