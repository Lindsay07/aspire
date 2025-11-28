import { Bell, Settings, MessageSquare } from 'lucide-react'

interface TopBarProps {
  onToggleChat: () => void
}

export default function TopBar({ onToggleChat }: TopBarProps) {
  return (
    <div className="bg-white border-b border-cream-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-bakery-400 to-bakery-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Aspire</h1>
            <p className="text-xs text-gray-500">Satura Patisserie</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleChat}
          className="p-2 hover:bg-cream-100 rounded-lg transition-colors"
          title="Toggle AI Assistant"
        >
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-cream-100 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-bakery-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-cream-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

