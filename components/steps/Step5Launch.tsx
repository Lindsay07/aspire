'use client'

import { useState, useEffect, useRef } from 'react'
import { CheckCircle, Clock, ExternalLink, Activity, TrendingUp, Sparkles } from 'lucide-react'

interface Step5LaunchProps {
  onComplete: () => void
}

interface LaunchStatus {
  platform: string
  status: 'pending' | 'creating' | 'uploading' | 'completed' | 'error'
  message: string
  campaignId?: string
  link?: string
}

export default function Step5Launch({ onComplete }: Step5LaunchProps) {
  const [launchStatuses, setLaunchStatuses] = useState<LaunchStatus[]>([
    { platform: 'Meta (Facebook & Instagram)', status: 'pending', message: 'Waiting to start...' },
    { platform: 'TikTok', status: 'pending', message: 'Waiting to start...' }
  ])
  const [isLaunching, setIsLaunching] = useState(true)
  const [allComplete, setAllComplete] = useState(false)
  const hasLaunchedRef = useRef(false)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    // Only run launch sequence once
    if (hasLaunchedRef.current) return
    hasLaunchedRef.current = true

    // Simulate launch process
    const launchSequence = async () => {
      // Meta
      await new Promise(resolve => setTimeout(resolve, 1000))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'Meta (Facebook & Instagram)' 
          ? { ...s, status: 'creating', message: 'Creating campaign...' }
          : s
      ))

      await new Promise(resolve => setTimeout(resolve, 1500))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'Meta (Facebook & Instagram)' 
          ? { ...s, status: 'uploading', message: 'Uploading creatives...' }
          : s
      ))

      await new Promise(resolve => setTimeout(resolve, 1000))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'Meta (Facebook & Instagram)' 
          ? { ...s, status: 'completed', message: 'Campaign live!', campaignId: '123456789', link: 'https://facebook.com/ads' }
          : s
      ))

      // TikTok
      await new Promise(resolve => setTimeout(resolve, 500))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'TikTok' 
          ? { ...s, status: 'creating', message: 'Creating campaign...' }
          : s
      ))

      await new Promise(resolve => setTimeout(resolve, 1500))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'TikTok' 
          ? { ...s, status: 'uploading', message: 'Uploading video...' }
          : s
      ))

      await new Promise(resolve => setTimeout(resolve, 1000))
      setLaunchStatuses(prev => prev.map(s => 
        s.platform === 'TikTok' 
          ? { ...s, status: 'completed', message: 'Campaign live!', campaignId: '987654321', link: 'https://tiktok.com/ads' }
          : s
      ))

      setIsLaunching(false)
      setAllComplete(true)
    }

    launchSequence()
  }, [])

  // Mark step as completed when launch finishes (only once)
  useEffect(() => {
    if (allComplete && !isLaunching && !hasCompletedRef.current) {
      hasCompletedRef.current = true
      onComplete()
    }
  }, [allComplete, isLaunching, onComplete])

  const getStatusIcon = (status: LaunchStatus['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'creating':
      case 'uploading':
        return <div className="w-6 h-6 border-2 border-bakery-500 border-t-transparent rounded-full animate-spin" />
      case 'error':
        return <div className="w-6 h-6 bg-red-500 rounded-full" />
      default:
        return <Clock className="w-6 h-6 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">

      {/* Launch Progress */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Launch Status</h2>
        <div className="space-y-4">
          {launchStatuses.map((status, idx) => (
            <div key={idx} className="border-2 border-cream-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getStatusIcon(status.status)}
                  <h3 className="text-lg font-semibold text-gray-900">{status.platform}</h3>
                </div>
                {status.status === 'completed' && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Live
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-3">{status.message}</p>
              {status.campaignId && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Campaign ID: {status.campaignId}</span>
                </div>
              )}
              {status.link && status.status === 'completed' && (
                <a
                  href={status.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-bakery-600 hover:text-bakery-700 font-medium"
                >
                  View in Ads Manager
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* What Happens Next */}
      {allComplete && (
        <>
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-900 mb-2">Campaigns Are Live!</h2>
                <p className="text-green-800">
                  Your ads are now running across all selected platforms. Here's what to expect:
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-16">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900">First Results</p>
                  <p className="text-sm text-green-800">Expected in 2-4 hours as platforms review and approve your ads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900">Daily Updates</p>
                  <p className="text-sm text-green-800">You'll receive daily performance digests via email and in-app notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900">Auto-Optimization</p>
                  <p className="text-sm text-green-800">AI will automatically optimize your campaigns based on performance data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 border-2 border-cream-200 rounded-lg hover:border-bakery-300 hover:bg-cream-50 transition-colors">
                <Activity className="w-6 h-6 text-bakery-600" />
                <span className="text-sm font-medium text-gray-900">View Dashboard</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border-2 border-cream-200 rounded-lg hover:border-bakery-300 hover:bg-cream-50 transition-colors">
                <TrendingUp className="w-6 h-6 text-bakery-600" />
                <span className="text-sm font-medium text-gray-900">View Performance</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border-2 border-cream-200 rounded-lg hover:border-bakery-300 hover:bg-cream-50 transition-colors">
                <Sparkles className="w-6 h-6 text-bakery-600" />
                <span className="text-sm font-medium text-gray-900">Create Another</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

