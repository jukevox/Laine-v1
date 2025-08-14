import React from 'react';
import { TrendingUp, TrendingDown, Minus, Target, DollarSign, PoundSterling } from 'lucide-react';
import { RegionalData } from '../../types';

interface PortfolioSummaryProps {
  data: RegionalData['portfolioSummary'];
}

export default function PortfolioSummary({ data }: PortfolioSummaryProps) {
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

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Portfolio Health Overview</h2>
      
      {/* Revenue Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Total Weekly Revenue</p>
              <p className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{formatCurrency(data.revenueMetrics.totalWeeklyRevenue)}</p>
            </div>
            <PoundSterling className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Revenue Growth</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">+{data.revenueMetrics.revenueGrowth}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500 dark:text-green-400" />
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Avg Revenue/Pub</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{formatCurrency(data.revenueMetrics.avgRevenuePerPub)}</p>
            </div>
            <DollarSign className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Pubs Beating Targets</p>
              <p className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">{data.revenueMetrics.topPerformingPubs}</p>
            </div>
            <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
              ↑
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">Need Attention</p>
              <p className="text-2xl font-bold text-red-900 dark:text-red-100">{data.revenueMetrics.underperformingPubs}</p>
            </div>
            <div className="w-8 h-8 bg-red-500 dark:bg-red-400 rounded-full flex items-center justify-center text-white font-bold">
              !
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Music/Entertainment</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">23</p>
              <p className="text-xs text-purple-700 dark:text-purple-300">This week across portfolio</p>
            </div>
            <div className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
              ♪
            </div>
          </div>
          <div className="mt-2 text-xs text-purple-600 dark:text-purple-400">
            Expected uplift: <span className="font-semibold">+£8,400</span>
          </div>
          <div className="mt-1 text-xs text-purple-500 dark:text-purple-400">Source: GigPig</div>
        </div>
      </div>

      {/* Weekly Momentum Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Check-ins Growth</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{data.weeklyMomentum.checkinsGrowth}%</p>
              <p className="text-xs text-blue-500 dark:text-blue-400 mt-1">Source: Pubble</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Booking Velocity</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">{data.weeklyMomentum.bookingVelocity}%</p>
              <p className="text-xs text-green-500 dark:text-green-400 mt-1">Source: Design my Night</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500 dark:text-green-400" />
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Social Engagement & Reviews</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{data.weeklyMomentum.socialEngagement}%</p>
              <p className="text-xs text-purple-500 dark:text-purple-400 mt-1">Source: Reputation</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500 dark:text-purple-400" />
          </div>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Social Sentiment</p>
              <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">{data.weeklyMomentum.reputationTrend}%</p>
              <p className="text-xs text-amber-500 dark:text-amber-400 mt-1">Source: Reputation</p>
            </div>
            <TrendingUp className="w-8 h-8 text-amber-500 dark:text-amber-400" />
          </div>
        </div>
      </div>

      {/* OKR Progress */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Q4 OKR Progress</h3>
        </div>
        
        {data.quarterlyOKRs.map((okr, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">{okr.objective}</h4>
            <div className="space-y-3">
              {okr.keyResults.map((kr, krIndex) => (
                <div key={krIndex} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{kr.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getTrendColor(kr.trend)}`}>
                          {kr.metric === 'Total Revenue Growth' ? `${kr.current}%` :
                           kr.metric === 'Average Revenue per Pub' ? formatCurrency(kr.current) :
                           kr.metric === 'Pubs Beating Targets' ? `${kr.current}/55` :
                           `${kr.current}%`}
                        </span>
                        {getTrendIcon(kr.trend)}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(kr.current / kr.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>0%</span>
                      <span>Target: {kr.metric === 'Total Revenue Growth' ? `${kr.target}%` :
                                   kr.metric === 'Average Revenue per Pub' ? formatCurrency(kr.target) :
                                   kr.metric === 'Pubs Beating Targets' ? `${kr.target}/55` :
                                   `${kr.target}%`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Region Breakdown */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Regional Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.regionBreakdown.map((region, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">{region.region}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  region.momentum === 'strong' ? 'bg-green-100 text-green-800' :
                  region.momentum === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {region.momentum}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Revenue</span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatCurrency(region.totalRevenue)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Growth</span>
                  <span className={`font-medium ${region.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {region.revenueGrowth >= 0 ? '+' : ''}{region.revenueGrowth}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span className="text-gray-600 dark:text-gray-400">{region.pubs} pubs</span>
                <span className={region.alerts > 0 ? 'text-red-600 font-medium' : 'text-gray-500'}>
                  {region.alerts} alerts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}