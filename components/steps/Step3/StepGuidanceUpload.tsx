'use client'

import { useState } from 'react'
import { Upload, Video, Image as ImageIcon, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'
import { UploadedAsset } from '../Step3Creative'

interface StepGuidanceUploadProps {
  uploadedAssets: UploadedAsset[]
  onUpdate: (assets: UploadedAsset[]) => void
  onReview: () => void
}

const imageGuidance = [
  { text: 'Use high-resolution images (at least 1200px width)', icon: CheckCircle },
  { text: 'Ensure good lighting and clear product visibility', icon: CheckCircle },
  { text: 'Include your product in the first 3 seconds of video', icon: CheckCircle },
  { text: 'Keep text overlay under 20% of image area', icon: AlertCircle },
  { text: 'Use warm, appetizing colors for food content', icon: Lightbulb },
]

const videoGuidance = [
  { text: 'Hook viewers in first 3 seconds', icon: CheckCircle },
  { text: 'Vertical format (9:16) works best for TikTok and Reels', icon: CheckCircle },
  { text: 'Keep videos 15-60 seconds for best engagement', icon: CheckCircle },
  { text: 'Include captions or text overlays', icon: CheckCircle },
  { text: 'Show behind-the-scenes or product in action', icon: Lightbulb },
]

export default function StepGuidanceUpload({ uploadedAssets, onUpdate, onReview }: StepGuidanceUploadProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    const newAssets: UploadedAsset[] = Array.from(files).map((file, idx) => ({
      id: `asset-${Date.now()}-${idx}`,
      type: file.type.startsWith('video/') ? 'video' : 'image',
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }))

    onUpdate([...uploadedAssets, ...newAssets])
    onReview()
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const removeAsset = (id: string) => {
    const updated = uploadedAssets.filter(asset => asset.id !== id)
    onUpdate(updated)
  }

  return (
    <div className="space-y-6">
      {/* Guidance Section */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Guidance for Your Ad Creatives</h2>
          <p className="text-gray-600">Follow these best practices to maximize your ad performance</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Image Ad Guidance */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-bakery-600" />
              <h3 className="text-lg font-semibold text-gray-900">Image Ad Guidelines</h3>
            </div>
            <ul className="space-y-2">
              {imageGuidance.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.icon === CheckCircle ? 'text-green-600' :
                      item.icon === AlertCircle ? 'text-yellow-600' :
                      'text-bakery-600'
                    }`} />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Video Ad Guidance */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Video className="w-6 h-6 text-bakery-600" />
              <h3 className="text-lg font-semibold text-gray-900">Video Ad Guidelines</h3>
            </div>
            <ul className="space-y-2">
              {videoGuidance.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.icon === CheckCircle ? 'text-green-600' :
                      item.icon === AlertCircle ? 'text-yellow-600' :
                      'text-bakery-600'
                    }`} />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Your Assets</h3>
        
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
            dragActive
              ? 'border-bakery-500 bg-bakery-50'
              : 'border-cream-300 hover:border-bakery-400 bg-cream-50'
          }`}
        >
          <Upload className="w-16 h-16 text-bakery-500 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Drag and drop your files here
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            or click to browse from your computer
          </p>
          <div className="flex gap-3 justify-center">
            <label className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg cursor-pointer transition-colors">
              <ImageIcon className="w-5 h-5" />
              Upload Images
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </label>
            <label className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg cursor-pointer transition-colors">
              <Video className="w-5 h-5" />
              Upload Video
              <input
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Supported: JPG, PNG, MP4, MOV • Max size: 50MB per file
          </p>
        </div>

        {/* Uploaded Assets Preview */}
        {uploadedAssets.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Uploaded Assets ({uploadedAssets.length})
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {uploadedAssets.map((asset) => (
                <div key={asset.id} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-cream-200 bg-gray-100">
                    {asset.type === 'video' ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    ) : (
                      <img
                        src={asset.preview}
                        alt={asset.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => removeAsset(asset.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    ×
                  </button>
                  <p className="text-xs text-gray-600 mt-1 truncate">{asset.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

