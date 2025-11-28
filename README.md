# Aspire - AI-Powered Ads Scaling Assistant

A prototype UI for an AI-powered ads assistant that helps SMBs launch and scale ads across Meta, TikTok, and Google.

## ✨ Key Features

### 🚀 AI-First User Experience
- **Marketing Landing Page**: Beautiful hero input (inspired by Lovable)
- **AI Auto-Generation**: Submit your goal → AI generates complete campaign strategy
- **Review-Based Workflow**: All steps auto-populated with "To Review" status
- **Non-linear Navigation**: Jump between any of the 8 campaign steps

### 🤖 Smart Assistance
- **AI Chat Panel**: Hidable side panel (like Cursor AI) for contextual help
- **Context-Aware Prompts**: Suggested questions based on current step
- **Real-time Feedback**: Quality checks and performance predictions

### 🎨 Design
- **Warm Bakery Theme**: Custom color palette for Satura Patisserie
- **Gradient Hero**: Beautiful multi-color gradient background
- **Smooth Animations**: Loading states and transitions
- **Responsive Layout**: Works on all screen sizes

## 📋 User Flow

### 1. Landing Page
- User lands on marketing-style page with large input field
- Example prompts help guide users
- Clean, minimal design focused on the input

### 2. AI Generation
- Beautiful loading animation showing AI progress:
  - Analyzing your goal
  - Selecting optimal channels
  - Building audience profile
  - Creating creative strategy
  - Calculating budget & forecast
  - Generating ad assets

### 3. Review Dashboard
- User automatically taken to Step 2 (Strategy)
- Steps 2-5 marked as "To Review" (yellow badges)
- User can review, edit, and approve each step
- Once approved, step changes from "To Review" → "Reviewed" ✓

## 🎯 Campaign Steps

1. **Intent** (Landing Page) - Express marketing goals in natural language
2. **Strategy** - AI-generated marketing plan with channel recommendations
3. **Creative** - Upload or generate ad assets with AI assistance
4. **Review** - Approve the campaign plan
5. **Launch** - Execute the campaign
6. **Monitor** - Track performance with daily updates
7. **Optimize** - AI-driven optimization recommendations
8. **Postmortem** - Campaign review and insights

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling with custom colors
- **Lucide React** - Beautiful icon library

## 📊 Current Status

### ✅ Completed Features

**Core Flow:**
- ✅ Landing page with hero input
- ✅ AI generation animation (6 steps)
- ✅ Auto-population of steps 2-5
- ✅ "To Review" status system
- ✅ Review and approve workflow

**UI Components:**
- ✅ Marketing-style landing page
- ✅ Generation loading screen
- ✅ Sidebar navigation with status badges
- ✅ AI chat panel (hidable)
- ✅ Top bar with notifications
- ✅ Step 2: Strategy (fully functional)
- ✅ Step 3: Creative (fully functional)

### 🚧 Coming Soon
- Steps 4-8 (Review, Launch, Monitor, Optimize, Postmortem)
- Dashboard home view
- Multiple campaign management
- Real performance tracking simulation

## 🎨 Color Palette

### Bakery Colors
- `bakery-50`: #FFF9F5
- `bakery-400`: #FFB885
- `bakery-500`: #FF9B52 (primary)
- `bakery-600`: #E67A3D

### Cream Colors
- `cream-50`: #FFFBF7
- `cream-200`: #FFEEDD
- `cream-500`: #FFC380

## 📱 User Journey Example

**Satura Patisserie** wants to increase sales:

1. **Lands on homepage** → Sees beautiful gradient hero
2. **Types goal:** "I want to increase sales of our bakery. In the ad, I want to showcase our delicious cakes..."
3. **Clicks "Generate Campaign"** → AI generation animation plays
4. **Arrives at Strategy page** → Sees complete marketing plan with:
   - Recommended channels (Meta, TikTok)
   - Target audience breakdown
   - Budget allocation ($1,500)
   - Performance forecast (180-240% ROI)
5. **Reviews and approves** → Moves to Creative step
6. **Reviews AI-generated assets** → Sees quality checks, headlines, performance predictions
7. **Approves** → Ready for launch!

## 🔄 Step Status System

- **Empty**: Not generated yet (gray)
- **To Review**: AI generated, needs review (yellow badge)
- **Reviewed/Completed**: User approved (green checkmark)
- **Active**: Currently viewing (orange highlight)

## 💡 Tips for Development

- The app starts at `landing` state
- After submitting intent, it transitions to `generating`
- After ~7 seconds, it moves to `app` state showing Step 2
- All step data is currently mocked/static
- AI chat responses are simulated based on current step
