'use client'

import { useState } from 'react'
import { 
  Upload, 
  Video, 
  Image as ImageIcon, 
  Check, 
  ArrowRight,
  Sparkles,
  X,
  Play,
  Wand2
} from 'lucide-react'

interface Step3CreativeProps {
  onComplete: () => void
}

interface Asset {
  id: string
  type: 'image' | 'video'
  url: string
  name: string
  platform: string[]
  aiGenerated?: boolean
  quality?: 'high' | 'medium' | 'low'
  performance?: string
}

export default function Step3Creative({ onComplete }: Step3CreativeProps) {
  const [assets, setAssets] = useState<Asset[]>([
    {
      id: '1',
      type: 'video',
      url: '/placeholder-video.jpg',
      name: 'Bakery Shop Tour Video',
      platform: ['Meta', 'TikTok'],
      aiGenerated: false,
      quality: 'high',
      performance: 'Expected CTR: 3.2%'
    },
    {
      id: '2',
      type: 'image',
      url: '/placeholder-cake-1.jpg',
      name: 'Japanese Strawberry Cake Close-up',
      platform: ['Meta'],
      aiGenerated: false,
      quality: 'high',
      performance: 'Expected CTR: 2.8%'
    },
    {
      id: '3',
      type: 'image',
      url: '/placeholder-cake-2.jpg',
      name: 'French Pastry Carousel',
      platform: ['Meta', 'TikTok'],
      aiGenerated: true,
      quality: 'high',
      performance: 'Expected CTR: 2.5%'
    }
  ])

  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)
  const [showAIGenerator, setShowAIGenerator] = useState(false)

  const headlines = [
    {
      text: "Authentic Japanese & French Pastries in Los Altos",
      aiGenerated: true,
      score: 92
    },
    {
      text: "Not Too Sweet. Just Perfect.",
      aiGenerated: true,
      score: 88
    },
    {
      text: "Where Tech Meets Taste",
      aiGenerated: true,
      score: 85
    }
  ]

  const handleComplete = () => {
    onComplete()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Your Ad Creative
            </h1>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">
              To Review
            </span>
          </div>
          <p className="text-gray-600">
            Upload your assets or let AI generate them for you
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl p-6 border-2 border-dashed border-cream-300 hover:border-bakery-400 transition-colors">
        <div className="text-center">
          <Upload className="w-12 h-12 text-bakery-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Upload Your Media
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Drag and drop images or videos, or click to browse
          </p>
          <div className="flex gap-3 justify-center">
            <button className="flex items-center gap-2 px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg transition-colors">
              <ImageIcon className="w-4 h-4" />
              Upload Images
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg transition-colors">
              <Video className="w-4 h-4" />
              Upload Video
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Supported: JPG, PNG, MP4, MOV • Max size: 50MB
          </p>
        </div>
      </div>

      {/* AI Generation Section */}
      <div className="bg-gradient-to-br from-bakery-50 to-cream-100 rounded-xl p-6 border border-bakery-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-bakery-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Creative Assistant</h3>
          </div>
          <button 
            onClick={() => setShowAIGenerator(!showAIGenerator)}
            className="text-sm text-bakery-600 hover:text-bakery-700 font-medium"
          >
            {showAIGenerator ? 'Hide' : 'Show Options'}
          </button>
        </div>
        
        {showAIGenerator && (
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-cream-200">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-bakery-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Generate Video Script</p>
                  <p className="text-sm text-gray-600">AI creates a script for your bakery tour</p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-cream-200">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-bakery-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Generate Image Variants</p>
                  <p className="text-sm text-gray-600">Create multiple versions with different crops</p>
                </div>
              </div>
            </button>
            <button className="w-full text-left p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-cream-200">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-bakery-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Optimize for Platforms</p>
                  <p className="text-sm text-gray-600">Resize and format for Meta, TikTok, Google</p>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Current Assets */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Creative Assets</h3>
        <div className="grid grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className={`relative rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                selectedAsset === asset.id
                  ? 'border-bakery-500 shadow-lg'
                  : 'border-cream-200 hover:border-bakery-300'
              }`}
              onClick={() => setSelectedAsset(asset.id)}
            >
              <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center">
                {asset.type === 'video' ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-800">
                    <Play className="w-12 h-12 text-white opacity-80" />
                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                      Video
                    </span>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-bakery-100 to-cream-200">
                    <ImageIcon className="w-12 h-12 text-bakery-400" />
                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                      Image
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-3 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">{asset.name}</p>
                  {asset.aiGenerated && (
                    <Sparkles className="w-4 h-4 text-bakery-500 flex-shrink-0 ml-1" />
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {asset.platform.map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-0.5 bg-bakery-100 text-bakery-700 text-xs rounded"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                
                {asset.quality && (
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-medium ${
                      asset.quality === 'high' ? 'text-green-600' :
                      asset.quality === 'medium' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {asset.quality.toUpperCase()} Quality
                    </span>
                  </div>
                )}
                
                {asset.performance && (
                  <p className="text-xs text-gray-500 mt-1">{asset.performance}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Generated Headlines */}
      <div className="bg-white rounded-xl p-6 border border-cream-200">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-bakery-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI-Generated Headlines</h3>
        </div>
        <div className="space-y-3">
          {headlines.map((headline, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-cream-200 hover:border-bakery-300 transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium text-gray-900">{headline.text}</p>
                <div className="flex items-center gap-2 mt-1">
                  {headline.aiGenerated && (
                    <span className="text-xs text-bakery-600">AI Generated</span>
                  )}
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">Performance Score: {headline.score}/100</span>
                </div>
              </div>
              <button className="ml-4 p-2 hover:bg-bakery-100 rounded-lg transition-colors">
                <Check className="w-5 h-5 text-bakery-600" />
              </button>
            </div>
          ))}
        </div>
        <button className="mt-3 text-sm text-bakery-600 hover:text-bakery-700 font-medium">
          Generate More Headlines →
        </button>
      </div>

      {/* Quality Check */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-green-900 mb-2">Quality Check Passed</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>✓ All assets meet platform requirements</li>
              <li>✓ Video has strong hook in first 3 seconds</li>
              <li>✓ Images are high resolution and well-lit</li>
              <li>✓ Headlines are engaging and on-brand</li>
              <li>✓ No compliance issues detected</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleComplete}
          className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          <Check className="w-5 h-5" />
          Looks Good - Mark as Reviewed
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <button className="px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors">
          Edit Creative
        </button>
      </div>
    </div>
  )
}

