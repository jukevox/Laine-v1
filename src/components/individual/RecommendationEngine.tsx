import React, { useState } from 'react';
import { Settings, Megaphone, Cog, ChevronDown, ChevronUp, Clock, TrendingUp, CheckCircle2, XCircle, History, Lightbulb } from 'lucide-react';
import { Recommendation, ImplementedRecommendation } from '../../types';

interface RecommendationEngineProps {
  recommendations: Recommendation[];
  implementedRecommendations: ImplementedRecommendation[];
}

export default function RecommendationEngine({ recommendations, implementedRecommendations }: RecommendationEngineProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('direct-venue');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'direct-venue':
        return <Settings className="w-5 h-5" />;
      case 'promotional':
        return <Megaphone className="w-5 h-5" />;
      case 'operational':
        return <Cog className="w-5 h-5" />;
      default:
        return <Settings className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'direct-venue':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'promotional':
        return 'bg-purple-50 border-purple-200 text-purple-700';
      case 'operational':
        return 'bg-orange-50 border-orange-200 text-orange-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'important':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'opportunity':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'direct-venue':
        return 'Entertainment & Venue Optimisation';
      case 'promotional':
        return 'Promotional Activities';
      case 'operational':
        return 'Operational Excellence';
      default:
        return category;
    }
  };

  const categories = ['direct-venue', 'promotional', 'operational'];

  return (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Track the performance of collaborative bets made over the last 4 weeks and their actual impact measured against real business data.
        </p>
      </div>
      
      <div className="space-y-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">Winning Bets</p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {implementedRecommendations.filter(rec => rec.impactAchieved).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              <div>
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">Learning Bets</p>
                <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                  {implementedRecommendations.filter(rec => !rec.impactAchieved).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Avg ROI</p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                  {Math.round(implementedRecommendations.reduce((acc, rec) => acc + rec.impactPercentage, 0) / implementedRecommendations.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Implemented Recommendations List */}
        <div className="space-y-4">
          {categories.map(category => {
            const categoryRecs = implementedRecommendations.filter(rec => rec.category === category);
            const isExpanded = expandedCategory === category;
            
            if (categoryRecs.length === 0) return null;
            
            return (
              <div key={category} className={`border rounded-lg ${getCategoryColor(category)}`}>
                <button
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-opacity-50 transition-colors"
                  onClick={() => setExpandedCategory(isExpanded ? null : category)}
                >
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(category)}
                    <div>
                      <h3 className="font-semibold">{getCategoryTitle(category)}</h3>
                      <p className="text-sm opacity-75">{categoryRecs.length} bets made</p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                
                {isExpanded && (
                  <div className="border-t border-current border-opacity-20 p-4 space-y-4">
                    {categoryRecs
                      .sort((a, b) => new Date(b.implementedDate).getTime() - new Date(a.implementedDate).getTime())
                      .map((rec, index) => (
                      <div key={rec.id} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{rec.originalRecommendation.title}</h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                Week {rec.weekImplemented} • {new Date(rec.implementedDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              rec.impactAchieved 
                                ? 'bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
                                : 'bg-orange-100 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200 border border-orange-200 dark:border-orange-700'
                            }`}>
                              {rec.impactAchieved ? 'Won' : 'Learning'}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              rec.impactPercentage >= 100 
                                ? 'bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200'
                                : 'bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200'
                            }`}>
                              {rec.impactPercentage}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Bet Executed:</span>
                            <p className="text-sm text-gray-900 dark:text-white mt-1">{rec.actionTaken}</p>
                          </div>
                          
                          <div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Insight:</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{rec.originalRecommendation.insight}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                            <div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">Predicted Outcome</span>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{rec.expectedImpact}</p>
                            </div>
                          </div>
                          
                          <div className={`flex items-center justify-between p-3 rounded-lg ${
                            rec.impactAchieved 
                              ? 'bg-green-50 dark:bg-green-900/30' 
                              : 'bg-orange-50 dark:bg-orange-900/30'
                          }`}>
                            <div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">Measured Result</span>
                              <p className={`text-sm font-medium ${
                                rec.impactAchieved 
                                  ? 'text-green-900 dark:text-green-100' 
                                  : 'text-orange-900 dark:text-orange-100'
                              }`}>
                                {rec.actualImpact}
                              </p>
                            </div>
                            {rec.impactAchieved ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                            ) : (
                              <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            )}
                          </div>
                        </div>
                        
                        {rec.notes && (
                          <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Reflection & learnings:</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">{rec.notes}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}