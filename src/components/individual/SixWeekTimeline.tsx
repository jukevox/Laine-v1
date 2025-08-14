import React from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { IndividualPubData } from '../../types';

interface SixWeekTimelineProps {
  data: IndividualPubData['sixWeekView'];
  currentWeek: number;
}

export default function SixWeekTimeline({ data, currentWeek }: SixWeekTimelineProps) {
  const getWeatherIcon = (weather: string) => {
    switch (weather.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-4 h-4 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      case 'cold':
        return <Wind className="w-4 h-4 text-cyan-500" />;
      default:
        return <Cloud className="w-4 h-4 text-gray-500" />;
    }
  };

  const allWeeks = [
    ...data.historical.map(week => ({ ...week, type: 'historical' as const })),
    ...data.forecast.map(week => ({ 
      ...week, 
      type: 'forecast' as const,
      checkins: week.expectedCheckins,
      bookings: week.predictedBookings,
      revenue: week.forecastRevenue
    }))
  ];

  const maxRevenue = Math.max(...allWeeks.map(week => week.revenue));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">6-Week Performance Timeline</h2>
      
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-4">
          {allWeeks.map((week, index) => (
            <div
              key={week.week}
              className={`flex-shrink-0 w-32 p-4 rounded-lg border-2 transition-all duration-200 ${
                week.week === currentWeek
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 scale-105'
                  : week.type === 'historical'
                  ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
                  : 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30'
              }`}
            >
              <div className="text-center mb-3">
                <h3 className={`font-bold text-sm ${
                  week.week === currentWeek ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'
                }`}>
                  Week {week.week}
                  {week.week === currentWeek && (
                    <span className="block text-xs text-indigo-600 dark:text-indigo-400">Current</span>
                  )}
                </h3>
                <div className="flex items-center justify-center mt-1">
                  {getWeatherIcon(week.weather)}
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-1 capitalize">{week.weather}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Check-ins</p>
                  <p className={`font-bold ${week.type === 'forecast' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                    {week.checkins}
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Bookings</p>
                  <p className={`font-bold ${week.type === 'forecast' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                    {week.bookings}
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Revenue</p>
                  <p className={`font-bold text-xs ${week.type === 'forecast' ? 'text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                    £{(week.revenue / 1000).toFixed(1)}k
                  </p>
                </div>

                {/* Revenue bar */}
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        week.type === 'forecast' ? 'bg-blue-500' : 'bg-gray-600 dark:bg-gray-400'
                      }`}
                      style={{ width: `${(week.revenue / maxRevenue) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Events */}
                {week.events && week.events.length > 0 && (
                  <div className="mt-2">
                    {week.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="text-xs bg-amber-100 dark:bg-amber-800/50 text-amber-800 dark:text-amber-200 px-1 py-0.5 rounded text-center">
                        {event}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 text-xs text-gray-600 dark:text-gray-400 mt-4">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded"></div>
          <span>Historical</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-500 rounded"></div>
          <span>Current Week</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded"></div>
          <span>Forecast</span>
        </div>
      </div>
    </div>
  );
}