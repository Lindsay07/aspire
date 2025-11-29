'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  MousePointerClick, 
  Users, 
  AlertCircle,
  CheckCircle,
  X,
  Sparkles,
  ArrowRight,
  Calendar,
  BarChart3,
  MoreVertical,
  Pause,
  Square,
  Settings
} from 'lucide-react'

interface DashboardProps {
  onEditStep?: (step: number) => void
  isOptimizeOpen?: boolean
  onOptimizeToggle?: (open: boolean) => void
}

interface Recommendation {
  id: string
  type: 'pause' | 'duplicate' | 'budget_shift' | 'refresh' | 'ab_test'
  title: string
  description: string
  impact: string
  confidence: 'high' | 'medium' | 'low'
  action: string
}

export default function Dashboard({ onEditStep, isOptimizeOpen: externalOptimizeOpen, onOptimizeToggle }: DashboardProps) {
  const [internalOptimizeOpen, setInternalOptimizeOpen] = useState(true)
  const [showCampaignActions, setShowCampaignActions] = useState(false)
  const [campaignStatus, setCampaignStatus] = useState<'active' | 'paused' | 'ended'>('active')
  const isOptimizeOpen = externalOptimizeOpen !== undefined ? externalOptimizeOpen : internalOptimizeOpen
  
  const setIsOptimizeOpen = (open: boolean) => {
    if (onOptimizeToggle) {
      onOptimizeToggle(open)
    } else {
      setInternalOptimizeOpen(open)
    }
  }

  const handleCampaignAction = (action: 'pause' | 'end' | 'resume') => {
    if (action === 'pause') {
      setCampaignStatus('paused')
    } else if (action === 'end') {
      setCampaignStatus('ended')
    } else if (action === 'resume') {
      setCampaignStatus('active')
    }
    setShowCampaignActions(false)
  }

  // Mock performance data
  const performanceMetrics = {
    totalSpend: '$450',
    budget: '$1,500',
    impressions: '12,500',
    clicks: '350',
    conversions: '28',
    ctr: '2.8%',
    cpc: '$1.29',
    roas: '195%',
    activeCampaigns: 2
  }

  const dailyDigest = [
    {
      day: 'Day 2',
      items: [
        { type: 'good', text: 'CTR: 2.1% (Good) — video performing well' },
        { type: 'info', text: 'CPM: $12.40 — normal for local bakery niche' },
        { type: 'insight', text: 'Your carousel ad is outperforming the video by 34%' },
        { type: 'recommendation', text: 'Recommendation: shift $10/day from video to carousel. Approve?' }
      ]
    }
  ]

  const recommendations: Recommendation[] = [
    {
      id: '1',
      type: 'budget_shift',
      title: 'Shift Budget to Top Performer',
      description: 'Your carousel ad is outperforming the video by 34%. Shift $10/day from video to carousel.',
      impact: 'Expected: +15% conversions',
      confidence: 'high',
      action: 'Shift $10/day'
    },
    {
      id: '2',
      type: 'pause',
      title: 'Pause Underperforming Ad',
      description: 'Meta image ad has CTR below 1% for 3 days. Consider pausing to save budget.',
      impact: 'Save $50/week',
      confidence: 'medium',
      action: 'Pause Ad'
    },
    {
      id: '3',
      type: 'refresh',
      title: 'Refresh Creative',
      description: 'TikTok video has been shown 8,000 times. Fatigue detected — refresh recommended.',
      impact: 'Expected: +20% CTR',
      confidence: 'high',
      action: 'Generate New Variant'
    },
    {
      id: '4',
      type: 'ab_test',
      title: 'Test New Headline',
      description: 'Test this headline variant: "Not Too Sweet. Just Perfect."',
      impact: 'Expected: +10% CTR',
      confidence: 'medium',
      action: 'Start A/B Test'
    },
    {
      id: '5',
      type: 'pause',
      title: 'Consider Ending Campaign',
      description: 'Campaign ROI below target for 5 days. Ending early could save $1,050 remaining budget.',
      impact: 'Save $1,050',
      confidence: 'medium',
      action: 'End Campaign'
    }
  ]

  const handleRecommendation = (id: string, approve: boolean) => {
    if (approve) {
      const rec = recommendations.find(r => r.id === id)
      if (rec?.type === 'pause' && rec.title.includes('Ending Campaign')) {
        handleCampaignAction('end')
      }
      // Handle other recommendation types
      console.log(`Approved recommendation ${id}`)
    } else {
      console.log(`Rejected recommendation ${id}`)
    }
  }

  return (
    <>
      {/* Main Monitor Area */}
      <div className={`flex-1 min-w-0 transition-all duration-300 ${isOptimizeOpen ? 'mr-96' : ''}`}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Campaign Dashboard</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  campaignStatus === 'active' 
                    ? 'bg-green-100 text-green-700'
                    : campaignStatus === 'paused'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {campaignStatus === 'active' ? 'Active' : campaignStatus === 'paused' ? 'Paused' : 'Ended'}
                </span>
              </div>
              <p className="text-gray-600">Monitor your active campaigns and performance</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowCampaignActions(!showCampaignActions)}
                  className="p-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg transition-colors"
                  title="Campaign Actions"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
                {showCampaignActions && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowCampaignActions(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-cream-200 rounded-lg shadow-lg z-20">
                      <div className="py-1">
                        {campaignStatus === 'active' ? (
                          <>
                            <button
                              onClick={() => handleCampaignAction('pause')}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-cream-50 flex items-center gap-2"
                            >
                              <Pause className="w-4 h-4" />
                              Pause Campaign
                            </button>
                            <button
                              onClick={() => handleCampaignAction('end')}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                            >
                              <Square className="w-4 h-4" />
                              End Campaign
                            </button>
                          </>
                        ) : campaignStatus === 'paused' ? (
                          <button
                            onClick={() => handleCampaignAction('resume')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-cream-50 flex items-center gap-2"
                          >
                            <ArrowRight className="w-4 h-4" />
                            Resume Campaign
                          </button>
                        ) : null}
                        <button
                          onClick={() => {
                            if (onEditStep) onEditStep(2)
                            setShowCampaignActions(false)
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-cream-50 flex items-center gap-2 border-t border-cream-200"
                        >
                          <Settings className="w-4 h-4" />
                          Edit Settings
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={() => setIsOptimizeOpen(!isOptimizeOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                {isOptimizeOpen ? 'Hide' : 'Show'} Optimize
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Spend</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{performanceMetrics.totalSpend}</p>
              <p className="text-xs text-gray-500 mt-1">of {performanceMetrics.budget} budget</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MousePointerClick className="w-4 h-4" />
                <span>CTR</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{performanceMetrics.ctr}</p>
              <p className="text-xs text-gray-500 mt-1">Industry avg: 1.5%</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>ROAS</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{performanceMetrics.roas}</p>
              <p className="text-xs text-gray-500 mt-1">Above target</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Users className="w-4 h-4" />
                <span>Conversions</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{performanceMetrics.conversions}</p>
              <p className="text-xs text-gray-500 mt-1">From {performanceMetrics.clicks} clicks</p>
            </div>
          </div>

          {/* Daily Digest */}
          <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-bakery-600" />
              <h2 className="text-xl font-bold text-gray-900">Daily Performance Digest</h2>
            </div>
            {dailyDigest.map((digest, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{digest.day}</h3>
                <div className="space-y-3">
                  {digest.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`p-4 rounded-lg border ${
                        item.type === 'good'
                          ? 'bg-green-50 border-green-200'
                          : item.type === 'insight'
                          ? 'bg-blue-50 border-blue-200'
                          : item.type === 'recommendation'
                          ? 'bg-yellow-50 border-yellow-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {item.type === 'good' && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                        {item.type === 'recommendation' && <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
                        <p className={`text-sm ${
                          item.type === 'good' ? 'text-green-800' :
                          item.type === 'insight' ? 'text-blue-800' :
                          item.type === 'recommendation' ? 'text-yellow-800' :
                          'text-gray-700'
                        }`}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-bakery-600" />
              <h2 className="text-xl font-bold text-gray-900">Performance Trends</h2>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg border border-cream-200 flex items-center justify-center">
              <p className="text-gray-400">Performance chart visualization</p>
            </div>
          </div>

          {/* Platform Breakdown */}
          <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Performance</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-cream-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Meta (Facebook & Instagram)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spend</span>
                    <span className="font-medium text-gray-900">$280</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CTR</span>
                    <span className="font-medium text-green-600">2.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conversions</span>
                    <span className="font-medium text-gray-900">18</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-cream-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">TikTok</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spend</span>
                    <span className="font-medium text-gray-900">$170</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CTR</span>
                    <span className="font-medium text-green-600">3.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conversions</span>
                    <span className="font-medium text-gray-900">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimize Sidebar - Fixed to right edge, full canvas height */}
      {isOptimizeOpen && (
        <div className="fixed right-0 top-0 h-screen w-96 bg-white border-l border-cream-200 shadow-2xl flex flex-col z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-bakery-500 to-bakery-600 p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <h2 className="text-white font-semibold">AI Optimize</h2>
            </div>
            <button
              onClick={() => setIsOptimizeOpen(false)}
              className="p-1 hover:bg-bakery-700 rounded transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Recommendations Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            <p className="text-xs text-gray-500 font-medium mb-2">AI Recommendations</p>
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="bg-white border-2 border-cream-200 rounded-lg p-4 hover:border-bakery-300 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{rec.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        rec.confidence === 'high' ? 'bg-green-100 text-green-700' :
                        rec.confidence === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {rec.confidence === 'high' ? 'High' : rec.confidence === 'medium' ? 'Med' : 'Low'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                    <p className="text-xs font-medium text-green-600">{rec.impact}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleRecommendation(rec.id, true)}
                    className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleRecommendation(rec.id, false)}
                    className="px-3 py-2 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Auto-Optimize Toggle */}
          <div className="p-4 border-t border-cream-200 bg-cream-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Auto-Optimize Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-bakery-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bakery-500"></div>
              </label>
            </div>
            <p className="text-xs text-gray-600">
              AI will automatically optimize campaigns (safest for low budgets)
            </p>
          </div>
        </div>
      )}
    </>
  )
}

