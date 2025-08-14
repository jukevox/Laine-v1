import React, { useState } from 'react';
import { Clock, TrendingUp, TrendingDown, PoundSterling, Users, Receipt, ChevronLeft, ChevronRight, AlertTriangle, Music } from 'lucide-react';
import { IndividualPubData } from '../../types';

interface RevenueByHourProps {
  data: IndividualPubData['revenueByHour'];
  currentWeek: number;
  alerts?: Array<{
    type: 'revenue' | 'booking' | 'operational';
    message: string;
    priority: 'urgent' | 'important' | 'opportunity';
  }>;
}

export default function RevenueByHour({ data, currentWeek, alerts = [] }: RevenueByHourProps) {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(() => {
    // Find current week, default to index 2 (middle of 5 weeks) if not found
    const currentWeekIndex = data.findIndex(week => week.week === currentWeek);
    return currentWeekIndex !== -1 ? currentWeekIndex : 2;
  });
  const [selectedDay, setSelectedDay] = useState(0);

  const selectedWeekData = data[selectedWeekIndex];
  const canGoBack = selectedWeekIndex > 0;
  const canGoForward = selectedWeekIndex < data.length - 1;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getPerformanceColor = (actual: number, target: number) => {
    const percentage = (actual / target) * 100;
    if (percentage >= 90) return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/30';
    return 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/30';
  };

  const getBarColor = (actual: number, target: number) => {
    const percentage = (actual / target) * 100;
    if (percentage >= 90) return 'bg-green-500';
    return 'bg-amber-500';
  };

  const getEntertainmentInfo = (day: string, hour: string) => {
    const hourNum = parseInt(hour.split(':')[0]);
    
    // Weekend brunch entertainment (11am-2pm Saturday/Sunday)
    if ((day === 'Saturday' || day === 'Sunday') && hourNum >= 11 && hourNum <= 14) {
      return day === 'Saturday' ? { category: 'Pleasure Palace', color: 'bg-purple-100 dark:bg-purple-800/50 border-purple-300 dark:border-purple-600' } :
             { category: 'Sunday Service', color: 'bg-teal-100 dark:bg-teal-800/50 border-teal-300 dark:border-teal-600' };
    }
    
    // Evening entertainment (7pm-11pm)
    if (hourNum >= 19 && hourNum <= 23) {
      switch (day) {
        case 'Monday': return { category: 'Industry Night', color: 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600' };
        case 'Tuesday': return { category: 'Kunst Kabaret', color: 'bg-red-100 dark:bg-red-800/50 border-red-300 dark:border-red-600' };
        case 'Wednesday': return { category: 'Bertie\'s Band', color: 'bg-blue-100 dark:bg-blue-800/50 border-blue-300 dark:border-blue-600' };
        case 'Thursday': return { category: 'Baby Grand Slam', color: 'bg-amber-100 dark:bg-amber-800/50 border-amber-300 dark:border-amber-600' };
        case 'Friday': return { category: 'Friday Fröhlich', color: 'bg-green-100 dark:bg-green-800/50 border-green-300 dark:border-green-600' };
        case 'Saturday': return { category: 'Pleasure Palace', color: 'bg-purple-100 dark:bg-purple-800/50 border-purple-300 dark:border-purple-600' };
        case 'Sunday': return { category: 'Sunday Service', color: 'bg-teal-100 dark:bg-teal-800/50 border-teal-300 dark:border-teal-600' };
      }
    }
    
    return null;
  };

  const selectedDayData = selectedWeekData.weekData[selectedDay];
  const maxHourlyRevenue = Math.max(
    ...selectedDayData.hours.map(h => Math.max(h.actual, h.target))
  );

  const getWeekTypeLabel = (weekType: string) => {
    switch (weekType) {
      case 'historical':
        return 'Historical';
      case 'current':
        return 'Current Week';
      case 'forecast':
        return 'Forecast';
      default:
        return '';
    }
  };

  const getWeekTypeColor = (weekType: string) => {
    switch (weekType) {
      case 'historical':
        return 'text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700';
      case 'current':
        return 'text-indigo-600 bg-indigo-100 dark:text-indigo-300 dark:bg-indigo-800';
      case 'forecast':
        return 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-800';
      default:
        return 'text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700';
    }
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && canGoBack) {
      setSelectedWeekIndex(selectedWeekIndex - 1);
    } else if (direction === 'next' && canGoForward) {
      setSelectedWeekIndex(selectedWeekIndex + 1);
    }
    setSelectedDay(0); // Reset to Monday when changing weeks
  };

  const revenueAlerts = alerts.filter(alert => alert.type === 'revenue');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Revenue by Operating Hours</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateWeek('prev')}
              disabled={!canGoBack}
              className={`p-2 rounded-lg transition-colors ${
                canGoBack 
                  ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-center min-w-[120px]">
              <div className="text-sm font-medium text-gray-900 dark:text-white">Week {selectedWeekData.week}</div>
              <div className={`text-xs px-2 py-1 rounded-full font-medium ${getWeekTypeColor(selectedWeekData.weekType)}`}>
                {getWeekTypeLabel(selectedWeekData.weekType)}
              </div>
            </div>
            
            <button
              onClick={() => navigateWeek('next')}
              disabled={!canGoForward}
              className={`p-2 rounded-lg transition-colors ${
                canGoForward 
                  ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            selectedWeekData.performanceVsTarget >= 0 
              ? 'bg-green-100 text-green-800 dark:bg-green-800/50 dark:text-green-200' 
              : selectedWeekData.weekType === 'forecast'
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-800/50 dark:text-blue-200'
                : 'bg-red-100 text-red-800 dark:bg-red-800/50 dark:text-red-200'
          }`}>
            {selectedWeekData.weekType === 'forecast' ? 'Forecast: ' : ''}
            {selectedWeekData.performanceVsTarget >= 0 ? '+' : ''}{selectedWeekData.performanceVsTarget}% vs Target
          </span>
        </div>
      </div>

      {/* Alerts Section */}
      {revenueAlerts.length > 0 && (
        <div className="mb-6">
          {revenueAlerts.map((alert, index) => (
            <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg border ${
              alert.priority === 'urgent' ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800' :
              alert.priority === 'important' ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-800' :
              'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
            }`}>
              <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                alert.priority === 'urgent' ? 'text-red-500' :
                alert.priority === 'important' ? 'text-yellow-500' :
                'text-blue-500'
              }`} />
              <div>
                <p className={`text-sm font-medium ${
                  alert.priority === 'urgent' ? 'text-red-800' :
                  alert.priority === 'important' ? 'text-yellow-800 dark:text-yellow-200' :
                  'text-blue-800 dark:text-blue-200'
                }`}>
                  {alert.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`rounded-lg p-4 ${
          selectedWeekData.weekType === 'forecast' 
            ? 'bg-blue-50 dark:bg-blue-900/30' 
            : 'bg-indigo-50 dark:bg-indigo-900/30'
        }`}>
          <div className="flex items-center space-x-3">
            <PoundSterling className={`w-8 h-8 ${
              selectedWeekData.weekType === 'forecast' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-indigo-600 dark:text-indigo-400'
            }`} />
            <div>
              <p className={`text-sm font-medium ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-indigo-600 dark:text-indigo-400'
              }`}>
                {selectedWeekData.weekType === 'forecast' ? 'Weekly Projection' : 
                 selectedWeekData.weekType === 'current' ? 'Weekly Total' : 'Weekly Actual'}
              </p>
              <p className={`text-2xl font-bold ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-blue-900 dark:text-blue-100' 
                  : 'text-indigo-900 dark:text-indigo-100'
              }`}>
                {formatCurrency(selectedWeekData.weeklyTotal)}
              </p>
              <p className={`text-xs ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-blue-700 dark:text-blue-300' 
                  : 'text-indigo-700 dark:text-indigo-300'
              }`}>
                {selectedWeekData.weekType === 'forecast' 
                  ? 'Based on historical data' 
                  : `Target: ${formatCurrency(selectedWeekData.weeklyTarget)}`}
              </p>
              {selectedWeekData.weekType !== 'forecast' && (
                <p className="text-xs text-indigo-500 dark:text-indigo-400 mt-1">Source: Collins/Access</p>
              )}
            </div>
          </div>
        </div>
        
        <div className={`rounded-lg p-4 ${
          selectedWeekData.weekType === 'forecast' 
            ? 'bg-blue-50 dark:bg-blue-900/30' 
            : 'bg-blue-50 dark:bg-blue-900/30'
        }`}>
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {selectedWeekData.weekType === 'forecast' ? 'Projected Customers' : 'Weekly Customers'}
              </p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {selectedWeekData.weeklyCustomers}
              </p>
              {selectedWeekData.weekType === 'forecast' ? (
                <p className="text-xs text-blue-700 dark:text-blue-300">Weekly estimate</p>
              ) : (
                <p className="text-xs text-indigo-700 dark:text-indigo-300">Target: {selectedWeekData.weeklyCustomers + 50}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className={`rounded-lg p-4 ${
          selectedWeekData.weekType === 'forecast' 
            ? 'bg-purple-50 dark:bg-purple-900/30' 
            : 'bg-green-50 dark:bg-green-900/30'
        }`}>
          <div className="flex items-center space-x-3">
            <Receipt className={`w-8 h-8 ${
              selectedWeekData.weekType === 'forecast' 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-green-600 dark:text-green-400'
            }`} />
            <div>
              <p className={`text-sm font-medium ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-green-600 dark:text-green-400'
              }`}>
                Avg Check Size
              </p>
              <p className={`text-2xl font-bold ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-purple-900 dark:text-purple-100' 
                  : 'text-green-900 dark:text-green-100'
              }`}>
                £{selectedWeekData.avgCheckSize}
              </p>
              {selectedWeekData.weekType === 'forecast' ? (
                <p className="text-xs text-purple-700 dark:text-purple-300">Projected average</p>
              ) : (
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-green-700 dark:text-green-300">vs Last Week:</span>
                  <span className={`text-xs font-medium ${selectedWeekData.checkSizeChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedWeekData.checkSizeChange >= 0 ? '+' : ''}{selectedWeekData.checkSizeChange}%
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedWeekData.weekData.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedDay === index
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-center">
              <div>{day.day}</div>
              <div className="text-xs opacity-75">{day.date}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Day Details */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {selectedDayData.day}, {selectedDayData.date}
            {selectedWeekData.weekType === 'forecast' && (
              <span className="ml-2 text-sm text-blue-600 dark:text-blue-400 font-normal">(Projected)</span>
            )}
          </h3>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedWeekData.weekType === 'forecast' ? 'Daily Projection' :
                 selectedWeekData.weekType === 'current' ? 'Daily Total' : 'Daily Actual'}
              </p>
              <p className={`text-xl font-bold ${
                selectedWeekData.weekType === 'forecast' 
                  ? 'text-blue-900 dark:text-blue-100' 
                  : 'text-gray-900 dark:text-white'
              }`}>
                {formatCurrency(selectedDayData.dailyTotal)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedWeekData.weekType === 'forecast' ? 'Based On' : 'Target'}
              </p>
              <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
                {selectedWeekData.weekType === 'forecast' ? 'Target: ' : ''}{formatCurrency(selectedDayData.dailyTarget)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Performance</p>
              <p className={`text-xl font-bold ${
                selectedDayData.dailyTotal >= selectedDayData.dailyTarget 
                  ? 'text-green-600 dark:text-green-400' 
                  : selectedWeekData.weekType === 'forecast'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-red-600 dark:text-red-400'
              }`}>
                {((selectedDayData.dailyTotal / selectedDayData.dailyTarget) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </div>

        {/* Hourly Breakdown */}
        <div className="space-y-2">
          {selectedWeekData.weekType === 'forecast' && (
            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-800/50 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                📊 Forecast Data: These projections are based on historical performance patterns, seasonal trends, and external factors.
              </p>
            </div>
          )}
          
          {selectedDayData.hours.map((hour, index) => {
            const entertainmentInfo = getEntertainmentInfo(selectedDayData.day, hour.hour);
            
            return (
              <div key={index} className={`flex items-center space-x-4 p-2 rounded border ${
                entertainmentInfo 
                  ? `${entertainmentInfo.color} border-2` 
                  : 'bg-white dark:bg-gray-600 border-gray-200 dark:border-gray-500'
              }`}>
                <div className="w-16 text-sm font-medium text-gray-700">
                  {hour.hour}
                  {entertainmentInfo && (
                    <div className="flex items-center mt-1">
                      <Music className="w-3 h-3 text-gray-600 mr-1" />
                    </div>
                  )}
                </div>
                
                {entertainmentInfo && (
                  <div className="flex-shrink-0">
                    <span className="text-xs px-2 py-1 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium border">
                      {entertainmentInfo.category}
                    </span>
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      {selectedWeekData.weekType === 'forecast' ? (
                        <span className="text-sm font-medium text-blue-700">
                          {formatCurrency(hour.actual)} <span className="text-xs text-blue-600">(projected)</span>
                        </span>
                      ) : (
                        <>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {formatCurrency(hour.actual)}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            / {formatCurrency(hour.target)}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                      {selectedWeekData.weekType === 'forecast' ? (
                        <>
                          <span className="text-blue-600">{hour.transactions} transactions (est.)</span>
                          <span className="text-blue-600">£{hour.avgTransaction} avg (est.)</span>
                        </>
                      ) : (
                        <>
                          <span>{hour.transactions} transactions</span>
                          <span>£{hour.avgTransaction} avg</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-500 rounded-full h-2">
                      {selectedWeekData.weekType === 'forecast' ? (
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            hour.actual >= hour.target * 0.9 ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${Math.min((hour.actual / maxHourlyRevenue) * 100, 100)}%` }}
                        ></div>
                      ) : (
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getBarColor(hour.actual, hour.target)}`}
                          style={{ width: `${Math.min((hour.actual / maxHourlyRevenue) * 100, 100)}%` }}
                        ></div>
                      )}
                    </div>
                    {selectedWeekData.weekType !== 'forecast' && (
                      <div
                        className="absolute top-0 h-2 border-r-2 border-gray-400"
                        style={{ left: `${(hour.target / maxHourlyRevenue) * 100}%` }}
                        title="Target"
                      ></div>
                    )}
                    {selectedWeekData.weekType === 'forecast' && (
                      <div
                        className="absolute top-0 h-2 border-r-2 border-gray-400"
                        style={{ left: `${(hour.target / maxHourlyRevenue) * 100}%` }}
                        title="Target"
                      ></div>
                    )}
                  </div>
                </div>
                
                {selectedWeekData.weekType === 'forecast' ? (
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    hour.actual >= hour.target * 0.9 
                      ? 'bg-green-50 dark:bg-green-800/50 text-green-700 dark:text-green-200 border border-green-200 dark:border-green-600'
                      : 'bg-amber-50 dark:bg-amber-800/50 text-amber-700 dark:text-amber-200 border border-amber-200 dark:border-amber-600'
                  }`}>
                    {((hour.actual / hour.target) * 100).toFixed(0)}%
                  </div>
                ) : (
                  <div className={`px-2 py-1 rounded text-xs font-medium ${getPerformanceColor(hour.actual, hour.target)}`}>
                    {((hour.actual / hour.target) * 100).toFixed(0)}%
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedWeekData.weekType === 'forecast' ? (
          // Forecast insights
          <>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Projected Peak Hours</h4>
              <div className="space-y-1 text-sm">
                {selectedDayData.hours
                  .sort((a, b) => b.actual - a.actual)
                  .slice(0, 3)
                  .map((hour, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">{hour.hour}</span>
                      <span className="font-medium text-blue-900 dark:text-blue-100">{formatCurrency(hour.actual)}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Forecast Confidence</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Model Accuracy</span>
                  <span className="font-medium text-purple-900 dark:text-purple-100">
                    {selectedWeekData.week === 48 ? '89%' : '85%'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Data Points</span>
                  <span className="font-medium text-purple-900 dark:text-purple-100">
                    {selectedWeekData.week === 48 ? '8 weeks' : '10 weeks'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700 dark:text-purple-300">Seasonal Adj.</span>
                  <span className="font-medium text-purple-900 dark:text-purple-100">Applied</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Historical/current insights
          <>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Peak Hours Analysis</h4>
              <div className="space-y-1 text-sm">
                {selectedDayData.hours
                  .sort((a, b) => b.actual - a.actual)
                  .slice(0, 3)
                  .map((hour, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">{hour.hour}</span>
                      <span className="font-medium text-blue-900 dark:text-blue-100">{formatCurrency(hour.actual)}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Improvement Opportunities</h4>
              <div className="space-y-1 text-sm">
                {selectedDayData.hours
                  .filter(hour => hour.actual < hour.target)
                  .sort((a, b) => (a.actual / a.target) - (b.actual / b.target))
                  .slice(0, 3)
                  .map((hour, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-amber-700 dark:text-amber-300">{hour.hour}</span>
                      <span className="font-medium text-amber-900 dark:text-amber-100">
                        -{formatCurrency(hour.target - hour.actual)}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}