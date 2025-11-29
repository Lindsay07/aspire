'use client'

import { 
  TrendingUp, 
  TrendingDown,
  CheckCircle, 
  X, 
  DollarSign, 
  Target,
  Lightbulb,
  Image as ImageIcon,
  Video,
  Users,
  BarChart3,
  ArrowRight,
  Download,
  Sparkles,
  Award,
  AlertCircle,
  Calendar
} from 'lucide-react'

interface Step8PostmortemProps {
  onStartNext?: () => void
}

export default function Step8Postmortem({ onStartNext }: Step8PostmortemProps) {
  // Mock postmortem data
  const performanceSummary = {
    forecasted: {
      impressions: '25,000 - 35,000',
      clicks: '750 - 1,200',
      conversions: '45 - 75',
      roas: '180% - 240%'
    },
    actual: {
      impressions: '28,500',
      clicks: '950',
      conversions: '62',
      roas: '210%'
    },
    budget: {
      allocated: '$1,500',
      spent: '$1,450',
      remaining: '$50'
    },
    duration: '14 days'
  }

  const whatWorked = [
    { item: 'Carousel ad format', impact: 'Outperformed video by 34%', icon: ImageIcon },
    { item: 'Meta platform', impact: '2x better ROI than TikTok', icon: TrendingUp },
    { item: 'Headline: "Not Too Sweet. Just Perfect."', impact: 'Highest CTR at 3.2%', icon: Award },
    { item: 'Tech workers 30-40 audience', impact: 'Best conversion rate', icon: Users },
    { item: 'Weekend campaigns', impact: '20% better performance', icon: Calendar }
  ]

  const whatDidnt = [
    { item: 'TikTok video ad', reason: 'Low conversion rate despite high views', impact: 'Wasted $170' },
    { item: 'Google Search ads', reason: 'Not effective for brand discovery', impact: 'Low ROI' },
    { item: 'Overly polished content', reason: 'Audience preferred authentic', impact: 'Lower engagement' },
    { item: 'Video fatigue', reason: 'Started at day 7 (earlier than expected)', impact: 'CTR dropped 40%' }
  ]

  const platformBreakdown = [
    {
      platform: 'Meta (Facebook & Instagram)',
      spend: '$800',
      impressions: '18,000',
      clicks: '630',
      conversions: '42',
      ctr: '3.5%',
      roas: '245%',
      verdict: 'exceeded',
      recommendation: 'Increase budget by 30% next time'
    },
    {
      platform: 'TikTok',
      spend: '$400',
      impressions: '10,500',
      clicks: '320',
      conversions: '20',
      ctr: '3.0%',
      roas: '165%',
      verdict: 'met',
      recommendation: 'Focus on conversion-optimized content'
    }
  ]

  const creativePerformance = [
    {
      type: 'Carousel',
      name: 'Japanese Strawberry Cake Close-up',
      ctr: '3.2%',
      conversions: '28',
      status: 'top_performer',
      insight: 'Close-up product shots resonated with audience'
    },
    {
      type: 'Video',
      name: 'Bakery Shop Tour Video',
      ctr: '2.1%',
      conversions: '18',
      status: 'good',
      insight: 'Performed well but fatigued faster (day 7)'
    },
    {
      type: 'Image',
      name: 'French Pastry Carousel',
      ctr: '2.8%',
      conversions: '16',
      status: 'good',
      insight: 'Consistent performance throughout campaign'
    }
  ]

  const audienceInsights = {
    demographics: 'Tech workers 30-40 converted 3x better than other age groups',
    location: 'Los Altos had 3x better conversion than surrounding areas',
    device: 'Mobile users converted 2x better than desktop',
    behavior: 'Weekend shoppers had higher average order value'
  }

  const budgetAnalysis = {
    actual: {
      meta: '$800 (55%)',
      tiktok: '$400 (28%)',
      reserve: '$250 (17%)'
    },
    recommended: {
      meta: '$1,040 (65%)',
      tiktok: '$360 (22%)',
      reserve: '$200 (13%)'
    },
    waste: '$170 wasted on underperforming TikTok video ad'
  }

  const repeatableWins = [
    'Carousel format — use for next campaign',
    'Meta platform — prioritize allocation',
    'Headline style "Not Too Sweet" — reuse messaging',
    'Tech workers 30-40 audience — focus targeting',
    'Weekend timing — schedule next campaign for weekends',
    'Close-up product photography — shoot more carousel images'
  ]

  const nextCampaignBlueprint = {
    goal: 'Increase weekend sales by 40%',
    channels: ['Meta (Facebook & Instagram) - Primary', 'TikTok - Secondary'],
    budget: '$1,600 (increase by 7%)',
    creative: 'Focus on carousel ads with close-up product shots',
    audience: 'Refine to tech workers 30-40 in Los Altos (5-mile radius)',
    timeline: 'Launch next weekend for optimal performance'
  }

  const creativeRecommendations = [
    'Shoot more carousel images — they performed best',
    'Create vertical video for TikTok — optimize for conversion',
    'Try behind-the-scenes content — audience engaged with authenticity',
    'Avoid overly polished content — authentic worked better',
    'Refresh creatives every 6 days to prevent fatigue'
  ]

  const keyLearnings = [
    'Your audience prefers authentic over polished content',
    'Local targeting (5-mile radius) was optimal — don\'t expand too wide',
    'Weekend campaigns performed 20% better — schedule accordingly',
    'Video fatigue happens faster than expected (7 days vs 10 forecasted)',
    'Carousel format is your secret weapon — double down on it'
  ]

  return (
    <div className="space-y-8 pb-12">

      {/* Executive Summary */}
      <div className="bg-gradient-to-br from-bakery-50 to-cream-100 rounded-xl p-8 border border-bakery-200">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Campaign Summary</h2>
            <p className="text-gray-600">14-day campaign • {performanceSummary.budget.spent} spent</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">Overall Performance</p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-2xl font-bold text-green-600">Exceeded Forecast</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Impressions</p>
            <p className="text-xl font-bold text-gray-900">{performanceSummary.actual.impressions}</p>
            <p className="text-xs text-green-600 mt-1">✓ Met forecast</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Clicks</p>
            <p className="text-xl font-bold text-gray-900">{performanceSummary.actual.clicks}</p>
            <p className="text-xs text-green-600 mt-1">✓ Met forecast</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Conversions</p>
            <p className="text-xl font-bold text-gray-900">{performanceSummary.actual.conversions}</p>
            <p className="text-xs text-green-600 mt-1">✓ Met forecast</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">ROAS</p>
            <p className="text-xl font-bold text-green-600">{performanceSummary.actual.roas}</p>
            <p className="text-xs text-green-600 mt-1">✓ Exceeded forecast</p>
          </div>
        </div>
      </div>

      {/* What Worked / What Didn't */}
      <div className="grid grid-cols-2 gap-6">
        {/* What Worked */}
        <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">What Worked</h2>
          </div>
          <div className="space-y-3">
            {whatWorked.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2 mb-1">
                    <Icon className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-gray-900 text-sm">{item.item}</p>
                  </div>
                  <p className="text-xs text-green-700 ml-6">{item.impact}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* What Didn't */}
        <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-gray-900">What Didn't</h2>
          </div>
          <div className="space-y-3">
            {whatDidnt.map((item, idx) => (
              <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="font-medium text-gray-900 text-sm mb-1">{item.item}</p>
                <p className="text-xs text-red-700 mb-1">{item.reason}</p>
                <p className="text-xs text-red-600 font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Breakdown */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Performance</h2>
        <div className="space-y-4">
          {platformBreakdown.map((platform, idx) => (
            <div key={idx} className="border-2 border-cream-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{platform.platform}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-600">Spend: <span className="font-medium text-gray-900">{platform.spend}</span></span>
                    <span className="text-gray-600">ROAS: <span className="font-medium text-green-600">{platform.roas}</span></span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  platform.verdict === 'exceeded' ? 'bg-green-100 text-green-700' :
                  platform.verdict === 'met' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {platform.verdict === 'exceeded' ? 'Exceeded' : platform.verdict === 'met' ? 'Met' : 'Below'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-500">Impressions</p>
                  <p className="font-medium text-gray-900">{platform.impressions}</p>
                </div>
                <div>
                  <p className="text-gray-500">Clicks</p>
                  <p className="font-medium text-gray-900">{platform.clicks}</p>
                </div>
                <div>
                  <p className="text-gray-500">CTR</p>
                  <p className="font-medium text-gray-900">{platform.ctr}</p>
                </div>
                <div>
                  <p className="text-gray-500">Conversions</p>
                  <p className="font-medium text-gray-900">{platform.conversions}</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Recommendation:</strong> {platform.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Performance */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Creative Performance</h2>
        <div className="grid grid-cols-3 gap-4">
          {creativePerformance.map((creative, idx) => (
            <div key={idx} className="border-2 border-cream-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  creative.type === 'Carousel' ? 'bg-purple-100 text-purple-700' :
                  creative.type === 'Video' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {creative.type}
                </span>
                {creative.status === 'top_performer' && (
                  <Award className="w-5 h-5 text-yellow-500" />
                )}
              </div>
              <p className="font-medium text-gray-900 text-sm mb-2">{creative.name}</p>
              <div className="space-y-1 text-xs mb-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">CTR</span>
                  <span className="font-medium text-gray-900">{creative.ctr}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Conversions</span>
                  <span className="font-medium text-gray-900">{creative.conversions}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">{creative.insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Insights */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-6 h-6 text-bakery-600" />
          <h2 className="text-xl font-bold text-gray-900">Audience Insights</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-900 mb-1">Demographics</p>
            <p className="text-sm text-blue-800">{audienceInsights.demographics}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-900 mb-1">Location</p>
            <p className="text-sm text-blue-800">{audienceInsights.location}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-900 mb-1">Device</p>
            <p className="text-sm text-blue-800">{audienceInsights.device}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm font-medium text-blue-900 mb-1">Behavior</p>
            <p className="text-sm text-blue-800">{audienceInsights.behavior}</p>
          </div>
        </div>
      </div>

      {/* Budget Analysis */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-6 h-6 text-bakery-600" />
          <h2 className="text-xl font-bold text-gray-900">Budget Analysis</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Actual Allocation</p>
            <div className="space-y-2">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Meta</span>
                <span className="text-sm font-medium text-gray-900">{budgetAnalysis.actual.meta}</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">TikTok</span>
                <span className="text-sm font-medium text-gray-900">{budgetAnalysis.actual.tiktok}</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Reserve</span>
                <span className="text-sm font-medium text-gray-900">{budgetAnalysis.actual.reserve}</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Recommended for Next Campaign</p>
            <div className="space-y-2">
              <div className="flex justify-between p-2 bg-green-50 rounded border border-green-200">
                <span className="text-sm text-gray-600">Meta</span>
                <span className="text-sm font-medium text-green-700">{budgetAnalysis.recommended.meta}</span>
              </div>
              <div className="flex justify-between p-2 bg-yellow-50 rounded border border-yellow-200">
                <span className="text-sm text-gray-600">TikTok</span>
                <span className="text-sm font-medium text-yellow-700">{budgetAnalysis.recommended.tiktok}</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Reserve</span>
                <span className="text-sm font-medium text-gray-900">{budgetAnalysis.recommended.reserve}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
          <p className="text-sm text-red-800">
            <strong>Waste identified:</strong> {budgetAnalysis.waste}
          </p>
        </div>
      </div>

      {/* Repeatable Wins */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-bakery-600" />
          <h2 className="text-xl font-bold text-gray-900">Repeatable Wins</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {repeatableWins.map((win, idx) => (
            <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-800">{win}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Learnings */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="w-6 h-6 text-bakery-600" />
          <h2 className="text-xl font-bold text-gray-900">Key Learnings</h2>
        </div>
        <div className="space-y-3">
          {keyLearnings.map((learning, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">{learning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Recommendations */}
      <div className="bg-white rounded-xl p-8 border border-cream-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Creative Recommendations</h2>
        <div className="space-y-2">
          {creativeRecommendations.map((rec, idx) => (
            <div key={idx} className="flex items-start gap-2 p-3 bg-cream-50 rounded-lg">
              <ImageIcon className="w-5 h-5 text-bakery-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Campaign Blueprint */}
      <div className="bg-gradient-to-br from-bakery-50 to-cream-100 rounded-xl p-8 border-2 border-bakery-300 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-6 h-6 text-bakery-600" />
          <h2 className="text-2xl font-bold text-gray-900">Next Campaign Blueprint</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Recommended Goal</p>
            <p className="text-gray-900 font-medium">{nextCampaignBlueprint.goal}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Recommended Budget</p>
            <p className="text-gray-900 font-medium">{nextCampaignBlueprint.budget}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Channels</p>
            <div className="space-y-1">
              {nextCampaignBlueprint.channels.map((channel, idx) => (
                <p key={idx} className="text-sm text-gray-900">• {channel}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Creative Focus</p>
            <p className="text-sm text-gray-900">{nextCampaignBlueprint.creative}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Audience</p>
            <p className="text-sm text-gray-900">{nextCampaignBlueprint.audience}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Timeline</p>
            <p className="text-sm text-gray-900">{nextCampaignBlueprint.timeline}</p>
          </div>
        </div>
        <div className="flex gap-3">
          {onStartNext && (
            <button
              onClick={onStartNext}
              className="flex items-center gap-2 px-6 py-3 bg-bakery-500 hover:bg-bakery-600 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Start Next Campaign
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
          <button className="flex items-center gap-2 px-6 py-3 border border-cream-300 hover:bg-cream-50 text-gray-700 rounded-lg font-medium transition-colors">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  )
}

