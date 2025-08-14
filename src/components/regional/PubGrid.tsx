import React from 'react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, PoundSterling } from 'lucide-react';
import { PubData } from '../../types';

interface PubGridProps {
  pubs: PubData[];
}

export default function PubGrid({ pubs }: PubGridProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'strong':
        return 'bg-green-100 border-green-300';
      case 'moderate':
        return 'bg-yellow-100 border-yellow-300';
      case 'attention':
        return 'bg-red-100 border-red-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'strong':
        return '🟢';
      case 'moderate':
        return '🟡';
      case 'attention':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance by Location</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pubs.map((pub, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg p-3 sm:p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${getStatusColor(pub.status)} dark:bg-opacity-20`}
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                  <span className="text-base sm:text-lg">{getStatusIcon(pub.status)}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm leading-tight">{pub.name}</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="block sm:inline">{pub.region}</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">{pub.manager}</span>
                </p>
              </div>
              {pub.status === 'attention' && (
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
              )}
            </div>

            {/* Revenue Section */}
            <div className="bg-white dark:bg-gray-700 bg-opacity-60 dark:bg-opacity-60 rounded p-2 mb-2 sm:mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                  <PoundSterling className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                  This Week
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  {formatCurrency(pub.posRevenue.thisWeek)}
                </span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 hidden sm:block">Source: Collins/Access</div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">Growth</span>
                <span className={`text-xs font-medium ${
                  pub.posRevenue.weeklyGrowth >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {pub.posRevenue.weeklyGrowth >= 0 ? '+' : ''}{pub.posRevenue.weeklyGrowth}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Monthly Target</span>
                <span className="text-xs text-gray-700 dark:text-gray-300">{pub.posRevenue.monthlyProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1 mt-1">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    pub.posRevenue.monthlyProgress >= 80 ? 'bg-green-500' :
                    pub.posRevenue.monthlyProgress >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(pub.posRevenue.monthlyProgress, 100)}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Check-ins</span>
                <div className="flex items-center space-x-1">
                  <span className={`text-xs font-medium ${
                    pub.checkinsVsPrevious >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {pub.checkinsVsPrevious > 0 ? '+' : ''}{pub.checkinsVsPrevious}%
                  </span>
                  {getTrendIcon(pub.bookingTrend)}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Reputation</span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">{pub.reputation}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">Avg Transaction</span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">£{pub.posRevenue.avgTransactionValue}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 pt-2 sm:pt-3 space-y-1">
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">This week:</span>
                <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-tight">
                  {pub.thisWeekFocus}
                </p>
              </div>
              <div className="hidden sm:block">
                <span className="text-xs text-gray-500 dark:text-gray-400">Next week:</span>
                <p className="text-xs text-gray-700 dark:text-gray-300">{pub.nextWeekGoal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}