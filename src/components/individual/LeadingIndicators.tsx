import React from 'react';
import { TrendingUp, Users, Calendar, MessageSquare, AlertTriangle, ChevronLeft, ChevronRight, Music } from 'lucide-react';
import { IndividualPubData } from '../../types';

interface LeadingIndicatorsProps {
  data: IndividualPubData['leadingIndicators'];
  alerts?: Array<{
    type: 'revenue' | 'booking' | 'operational';
    message: string;
    priority: 'urgent' | 'important' | 'opportunity';
  }>;
}

export default function LeadingIndicators({ data, alerts = [] }: LeadingIndicatorsProps) {
  const bookingAlerts = alerts.filter(alert => alert.type === 'booking');
  
  // Entertainment carousel state
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState(4); // Default to current week (index 4 in 0-6 range)
  
  // Mock band database for each entertainment category
  const bandDatabase = {
    'Industry Night': [
      { name: 'DJ Marcus', type: 'Solo', cost: 144 },
      { name: 'DJ Sarah', type: 'Solo', cost: 160 },
      { name: 'DJ Alex', type: 'Solo', cost: 152 },
      { name: 'DJ Chris', type: 'Solo', cost: 168 },
      { name: 'DJ Luna', type: 'Solo', cost: 176 },
      { name: 'DJ Storm', type: 'Solo', cost: 184 }
    ],
    'Kunst Kabaret': [
      { name: 'The Velvet Collective', type: 'Duo', cost: 336 },
      { name: 'Midnight Cabaret', type: 'Duo', cost: 360 },
      { name: 'Artisan Performers', type: 'Duo', cost: 384 },
      { name: 'Berlin Cabaret', type: 'Duo', cost: 368 },
      { name: 'Rouge & Noir', type: 'Duo', cost: 352 },
      { name: 'Cabaret Mystique', type: 'Duo', cost: 376 }
    ],
    'Bertie\'s Band': [
      { name: 'The Harmonics', type: 'Band', cost: 520 },
      { name: 'Jazz Collective', type: 'Band', cost: 544 },
      { name: 'Acoustic Trio', type: 'Band', cost: 496 },
      { name: 'Easy Listening Trio', type: 'Band', cost: 512 },
      { name: 'The Melody Makers', type: 'Band', cost: 528 },
      { name: 'Swing Society', type: 'Band', cost: 536 }
    ],
    'Baby Grand Slam': [
      { name: 'Piano Pete & Sally', type: 'Duo', cost: 304 },
      { name: 'The Piano Twins', type: 'Duo', cost: 320 },
      { name: 'Piano Masters', type: 'Duo', cost: 336 },
      { name: 'Keys & Harmony', type: 'Duo', cost: 312 },
      { name: 'Double Ivory', type: 'Duo', cost: 328 },
      { name: 'Piano Forte Duo', type: 'Duo', cost: 344 }
    ],
    'Friday Fröhlich': [
      { name: 'Bavarian Beats', type: 'Band', cost: 680 },
      { name: 'Alpine Express', type: 'Band', cost: 720 },
      { name: 'Oktoberfest Band', type: 'Band', cost: 704 },
      { name: 'German Folk Collective', type: 'Band', cost: 696 },
      { name: 'The Lederhosen', type: 'Band', cost: 712 },
      { name: 'Munich Madness', type: 'Band', cost: 688 }
    ],
    'Pleasure Palace': [
      { name: 'House Band + DJ Max', type: 'Band', cost: 760 },
      { name: 'House Band + DJ Luna', type: 'Band', cost: 784 },
      { name: 'House Band + DJ Storm', type: 'Band', cost: 816 },
      { name: 'House Band + DJ Vibe', type: 'Band', cost: 792 },
      { name: 'House Band + DJ Pulse', type: 'Band', cost: 808 },
      { name: 'House Band + DJ Echo', type: 'Band', cost: 776 }
    ],
    'Sunday Service': [
      { name: 'Gospel Collective', type: 'Band', cost: 576 },
      { name: 'Sunday Singers', type: 'Band', cost: 600 },
      { name: 'Choir Harmony', type: 'Band', cost: 624 },
      { name: 'Sacred Sounds', type: 'Band', cost: 592 },
      { name: 'Divine Voices', type: 'Band', cost: 608 },
      { name: 'Spiritual Symphony', type: 'Band', cost: 584 }
    ]
  };
  
  // Generate 6 weeks of entertainment data (4 historic + current + 2 forecast)
  const generateEntertainmentWeeks = () => {
    const weeks = [];
    const categories = ['Industry Night', 'Kunst Kabaret', 'Bertie\'s Band', 'Baby Grand Slam', 'Friday Fröhlich', 'Pleasure Palace', 'Sunday Service'];
    
    for (let weekOffset = -4; weekOffset <= 2; weekOffset++) {
      const weekType = weekOffset < 0 ? 'historical' : weekOffset === 0 ? 'current' : 'forecast';
      const weekNumber = 47 + weekOffset; // Current week is 47
      
      const weekData = categories.map((category, dayIndex) => {
        const bands = bandDatabase[category as keyof typeof bandDatabase];
        const randomBand = bands[Math.floor(Math.random() * bands.length)];
        
        // Generate start times: 7-9pm Mon-Sat, 11am Sunday
        const startTime = dayIndex === 6 ? '11:00' : // Sunday at 11am
          ['19:00', '19:30', '20:00', '20:30', '21:00'][Math.floor(Math.random() * 5)]; // Mon-Sat between 7-9pm
        
        // Calculate percentage lift over baseline (non-performance) revenue
        const baselineRevenue = 800; // Normal revenue without entertainment
        const performanceMultiplier = weekType === 'forecast' ? 
          (1.04 + Math.random() * 0.27) : // Forecast: 4-31% lift
          (1.04 + Math.random() * 0.27); // Historical: 4-31% lift
        
        const totalRevenue = baselineRevenue * performanceMultiplier;
        const revenueLiftPercentage = Math.round((performanceMultiplier - 1) * 100);
        const targetLiftPercentage = 12; // Target 12% lift over baseline
        
        return {
          day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayIndex],
          category,
          band: randomBand,
          startTime,
          revenueLiftPercentage,
          targetLiftPercentage,
          weekType
        };
      });
      
      weeks.push({
        weekNumber,
        weekType,
        weekData
      });
    }
    
    return weeks;
  };
  
  const entertainmentWeeks = generateEntertainmentWeeks();
  const selectedWeek = entertainmentWeeks[selectedWeekIndex];
  
  const canGoBack = selectedWeekIndex > 0;
  const canGoForward = selectedWeekIndex < entertainmentWeeks.length - 1;
  
  const navigateWeek = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && canGoBack) {
      setSelectedWeekIndex(selectedWeekIndex - 1);
    } else if (direction === 'next' && canGoForward) {
      setSelectedWeekIndex(selectedWeekIndex + 1);
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Industry Night': return 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
      case 'Kunst Kabaret': return 'bg-red-100 dark:bg-red-800/50 border-red-300 dark:border-red-600';
      case 'Bertie\'s Band': return 'bg-blue-100 dark:bg-blue-800/50 border-blue-300 dark:border-blue-600';
      case 'Baby Grand Slam': return 'bg-amber-100 dark:bg-amber-800/50 border-amber-300 dark:border-amber-600';
      case 'Friday Fröhlich': return 'bg-green-100 dark:bg-green-800/50 border-green-300 dark:border-green-600';
      case 'Pleasure Palace': return 'bg-purple-100 dark:bg-purple-800/50 border-purple-300 dark:border-purple-600';
      case 'Sunday Service': return 'bg-teal-100 dark:bg-teal-800/50 border-teal-300 dark:border-teal-600';
      default: return 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600';
    }
  };
  
  const getWeekTypeLabel = (weekType: string) => {
    switch (weekType) {
      case 'historical': return 'Historical';
      case 'current': return 'Current Week';
      case 'forecast': return 'Forecast';
      default: return '';
    }
  };
  
  const getWeekTypeColor = (weekType: string) => {
    switch (weekType) {
      case 'historical': return 'text-gray-600 bg-gray-100';
      case 'current': return 'text-indigo-600 bg-indigo-100';
      case 'forecast': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Leading Indicators</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guest Momentum */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Guest Momentum</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700 dark:text-blue-300">This Week</span>
              <span className="text-lg font-bold text-blue-900 dark:text-blue-100">{data.guestMomentum.checkinsThisWeek}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-700 dark:text-blue-300">Growth vs Last Week</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-bold text-green-600">+{data.guestMomentum.checkinsGrowth}%</span>
              </div>
            </div>
            
            <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-800/50 rounded text-xs text-blue-800 dark:text-blue-200">
              Forecast: {data.guestMomentum.trendForecast}
            </div>
            <p className="text-xs text-blue-500 dark:text-blue-400 mt-2">Source: Pubble</p>
          </div>
        </div>

        {/* Booking Health */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-green-900 dark:text-green-100">Booking Health</h3>
            {bookingAlerts.length > 0 && (
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            )}
          </div>
          
          {/* Booking Alerts */}
          {bookingAlerts.length > 0 && (
            <div className="mb-3 p-2 bg-amber-100 dark:bg-amber-800/50 rounded text-xs">
              {bookingAlerts.map((alert, index) => (
                <p key={index} className="text-amber-800 dark:text-amber-200 font-medium">
                  {alert.message}
                </p>
              ))}
            </div>
          )}
          
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">This Week</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.thisWeek}</p>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">Next Week</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.nextWeek}</p>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300">Week After</p>
                <p className="font-bold text-green-900 dark:text-green-100">{data.bookingHealth.forwardBookings.weekAfter}</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-green-700 dark:text-green-300">Conversion Rate</span>
                <span className="font-medium text-green-900 dark:text-green-100">{data.bookingHealth.conversionRate}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-green-700 dark:text-green-300">No-Show Rate</span>
                <span className="font-medium text-green-900 dark:text-green-100">{data.bookingHealth.noShowRate}%</span>
              </div>
            </div>
            <p className="text-xs text-green-500 dark:text-green-400 mt-2">Source: Design my Night</p>
          </div>
        </div>

        {/* Social Pulse */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h3 className="font-semibold text-purple-900 dark:text-purple-100">Social Pulse</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700 dark:text-purple-300">Weekly Mentions</span>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-100">{data.socialPulse.weeklyMentions}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700 dark:text-purple-300">Sentiment Score</span>
              <span className="text-lg font-bold text-purple-900 dark:text-purple-100">{data.socialPulse.sentimentScore}/10</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-purple-700 dark:text-purple-300">Engagement Rate</span>
                <span className="font-medium text-purple-900 dark:text-purple-100">{data.socialPulse.engagementRate}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-purple-700 dark:text-purple-300">Reviews/Week</span>
                <span className="font-medium text-purple-900 dark:text-purple-100">{data.socialPulse.reviewVelocity}</span>
              </div>
            </div>
            <p className="text-xs text-purple-500 dark:text-purple-400 mt-2">Source: Reputation</p>
          </div>
        </div>
      </div>
      
      {/* Music/Entertainment Weekly Overview */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Music className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Music & Entertainment Calendar</h3>
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
                <div className="text-sm font-medium text-gray-900 dark:text-white">Week {selectedWeek.weekNumber}</div>
                <div className={`text-xs px-2 py-1 rounded-full ${getWeekTypeColor(selectedWeek.weekType)}`}>
                  {getWeekTypeLabel(selectedWeek.weekType)}
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
          
          <div className="text-right">
            <p className="text-sm text-purple-700 dark:text-purple-300">Weekly Entertainment Programming</p>
            <p className="text-xs text-purple-600 dark:text-purple-400">
              Total Week Cost: £{selectedWeek.weekData.reduce((sum, day) => sum + day.band.cost, 0).toLocaleString()}
            </p>
          </div>
        </div>
        
        {/* Entertainment Week View */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-purple-200 dark:border-purple-600">
          {/* Week Header */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <div key={day} className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center p-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Entertainment Week Grid */}
          <div className="grid grid-cols-7 gap-2">
            {selectedWeek.weekData.map((dayData, index) => (
              <div
                key={index}
                className={`rounded-lg p-3 text-xs border-2 transition-all duration-200 ${getCategoryColor(dayData.category)} ${
                  selectedWeek.weekType === 'current' ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                <div className="space-y-2">
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {dayData.category}
                  </div>
                  
                  <div className="text-gray-700 dark:text-gray-300">
                    {dayData.band.name}
                  </div>
                  
                  <div className="text-gray-600 dark:text-gray-400">
                    {dayData.band.type} • £{dayData.band.cost}
                  </div>
                  
                  <div className="text-gray-600 dark:text-gray-400">
                    Starts: {dayData.startTime}
                  </div>
                  
                  <div className={`font-medium ${
                    selectedWeek.weekType === 'forecast' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {selectedWeek.weekType === 'forecast' ? (
                      <span className="text-blue-600 dark:text-blue-400" style={{ opacity: 0.5 }}>
                        Est. +{dayData.revenueLiftPercentage}%
                      </span>
                    ) : (
                      <span className={dayData.revenueLiftPercentage >= dayData.targetLiftPercentage ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        +{dayData.revenueLiftPercentage}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Legend */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-4 flex-wrap">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"></div>
                  <span>Historical</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 rounded"></div>
                  <span>Current Week</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-600 rounded opacity-80"></div>
                  <span>Forecast</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                <div>Use ← → to navigate weeks</div>
                <div>Format: Band • Type • Cost • Start Time • Revenue Lift %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}