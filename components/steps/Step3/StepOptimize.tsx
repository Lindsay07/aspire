'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Smartphone, Monitor, Tablet, Sparkles } from 'lucide-react'
import { GeneratedAd, OptimizedAd } from '../Step3Creative'

interface StepOptimizeProps {
  generatedAds: GeneratedAd[]
  optimizedAds: OptimizedAd[]
  onUpdate: (ads: OptimizedAd[]) => void
  onReview: () => void
}

const platforms = [
  { name: 'Meta (Facebook & Instagram)', formats: ['Feed (1:1)', 'Stories (9:16)', 'Reels (9:16)'] },
  { name: 'TikTok', formats: ['Video (9:16)', 'In-Feed (9:16)'] },
  { name: 'Google', formats: ['Display (16:9)', 'YouTube (16:9)'] },
]

export default function StepOptimize({ generatedAds, optimizedAds, onUpdate, onReview }: StepOptimizeProps) {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [localOptimized, setLocalOptimized] = useState<OptimizedAd[]>(optimizedAds)

  const handleOptimize = () => {
    if (generatedAds.length === 0) return

    setIsOptimizing(true)

    // Simulate AI optimization
    setTimeout(() => {
      const newOptimized: OptimizedAd[] = []
      
      generatedAds.forEach(ad => {
        platforms.forEach(platform => {
          platform.formats.forEach(format => {
            newOptimized.push({
              id: `opt-${ad.id}-${platform.name}-${format}`,
              originalAdId: ad.id,
              platform: platform.name,
              format: format,
              dimensions: getDimensions(format),
              preview: '/placeholder-optimized.jpg'
            })
          })
        })
      })

      setLocalOptimized(newOptimized)
      onUpdate(newOptimized)
      setIsOptimizing(false)
      onReview()
    }, 2000)
  }

  const getDimensions = (format: string): string => {
    if (format.includes('9:16')) return '1080x1920px'
    if (format.includes('1:1')) return '1080x1080px'
    if (format.includes('16:9')) return '1920x1080px'
    return '1200x628px'
  }

  useEffect(() => {
    if (generatedAds.length > 0 && optimizedAds.length === 0) {
      handleOptimize()
    } else if (optimizedAds.length > 0) {
      setLocalOptimized(optimizedAds)
    }
  }, [generatedAds])

  if (isOptimizing) {
    return (
      <div className="bg-white rounded-xl p-12 border border-cream-200 shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-2xl mb-6 animate-pulse">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Optimizing for Platforms</h3>
        <p className="text-gray-600 mb-6">AI is resizing and cropping your ads for each platform...</p>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-bakery-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    )
  }

  if (localOptimized.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 border border-cream-200 shadow-sm text-center">
        <Sparkles className="w-16 h-16 text-bakery-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Optimize</h3>
        <p className="text-gray-600 mb-6">AI will automatically resize and crop your ads for each platform</p>
        <button
          onClick={handleOptimize}
          className="px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
        >
          Optimize for Platforms
        </button>
      </div>
    )
  }

  // Group optimized ads by platform
  const adsByPlatform = localOptimized.reduce((acc, ad) => {
    if (!acc[ad.platform]) acc[ad.platform] = []
    acc[ad.platform].push(ad)
    return acc
  }, {} as Record<string, OptimizedAd[]>)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Platform-Optimized Ads</h2>
          <p className="text-gray-600">Your ads have been automatically resized and cropped for each platform</p>
        </div>

        <div className="space-y-8">
          {Object.entries(adsByPlatform).map(([platform, ads]) => (
            <div key={platform}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{platform}</h3>
              <div className="grid grid-cols-3 gap-4">
                {ads.map((ad) => (
                  <div key={ad.id} className="border-2 border-cream-200 rounded-lg p-4 hover:border-bakery-300 transition-colors">
                    <div className="aspect-square rounded-lg overflow-hidden border border-cream-200 bg-gray-100 mb-3">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bakery-100 to-cream-200">
                        <Monitor className="w-8 h-8 text-bakery-400" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">{ad.format}</p>
                      <p className="text-xs text-gray-500">{ad.dimensions}</p>
                      <div className="flex items-center gap-1 text-xs text-green-600 mt-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Optimized</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> AI has intelligently cropped your images to preserve important elements (like your product) while adapting to each platform's requirements.
          </p>
        </div>
      </div>
    </div>
  )
}

