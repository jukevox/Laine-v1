import React, { useState } from 'react';
import { Target, X } from 'lucide-react';
import LeadingIndicators from './individual/LeadingIndicators';
import RevenueByHour from './individual/RevenueByHour';
import SixWeekTimeline from './individual/SixWeekTimeline';
import RecommendationEngine from './individual/RecommendationEngine';
import { individualPubData, recommendations, implementedRecommendations } from '../data/mockData';

export default function IndividualPubDashboard() {
  const [isRecommendationsPanelOpen, setIsRecommendationsPanelOpen] = useState(false);

  // Mock alerts that would be generated based on recommendations
  const alerts = [
    {
      type: 'booking' as const,
      message: 'Weather forecast shows sunny conditions - consider promoting outdoor seating for Thursday',
      priority: 'opportunity' as const
    },
    {
      type: 'revenue' as const,
      message: 'Thursday evening revenue consistently underperforming - seating optimization recommended',
      priority: 'important' as const
    }
  ];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{individualPubData.pubInfo.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {individualPubData.pubInfo.region} • Managed by {individualPubData.pubInfo.manager} • 
              Week {individualPubData.pubInfo.currentWeek} • {individualPubData.pubInfo.timeWindow}
            </p>
          </div>
          
          <button
            onClick={() => setIsRecommendationsPanelOpen(true)}
            className="bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
          >
            <div className="flex items-center space-x-2 mb-1">
              <Target className="w-5 h-5" />
              <span>Last month's Bets</span>
              <span className="bg-indigo-500 text-xs px-2 py-1 rounded-full">
                {implementedRecommendations.length}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{implementedRecommendations.filter(rec => rec.impactAchieved).length} Hits</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>{implementedRecommendations.filter(rec => !rec.impactAchieved).length} Misses</span>
              </div>
            </div>
          </button>
        </div>
        
        <LeadingIndicators data={individualPubData.leadingIndicators} alerts={alerts} />
        <RevenueByHour 
          data={individualPubData.revenueByHour} 
          currentWeek={individualPubData.pubInfo.currentWeek}
          alerts={alerts}
        />
        <SixWeekTimeline 
          data={individualPubData.sixWeekView} 
          currentWeek={individualPubData.pubInfo.currentWeek} 
        />
      </div>

      {/* Slide-out Recommendations Panel */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isRecommendationsPanelOpen ? 'translate-x-0' : 'translate-x-full'
      } dark:bg-gray-800`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Last month's Bets</h2>
            <button
              onClick={() => setIsRecommendationsPanelOpen(false)}
              className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <RecommendationEngine 
              recommendations={recommendations} 
              implementedRecommendations={implementedRecommendations}
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isRecommendationsPanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40"
          onClick={() => setIsRecommendationsPanelOpen(false)}
        />
      )}
    </div>
  );
}