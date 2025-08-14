import React from 'react';
import { TrendingUp, Users, Calendar, MessageSquare, AlertTriangle } from 'lucide-react';
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
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
            ♪
          </div>
          <div>
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Music & Entertainment Calendar</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">6-week view: 4 weeks historic + current + 2 weeks forecast</p>
          </div>
        </div>
        
        {/* Entertainment Calendar */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-purple-200 dark:border-purple-600">
          {/* Calendar Header */}
          <div className="grid grid-cols-8 gap-2 mb-4">
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Week</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Mon</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Tue</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Wed</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Thu</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Fri</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Sat</div>
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Sun</div>
          </div>
          
          {/* Calendar Weeks */}
          <div className="space-y-2">
            {/* Week -4 (Historic) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 rounded p-2 text-center">
                W-4<br/><span className="text-xs opacity-75">Historic</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-gray-200 dark:border-gray-500">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Marcus</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £180</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£295</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-red-200 dark:border-red-700">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">The Velvet Collective</div>
                <div className="text-red-600 dark:text-red-400">Duo • £420</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£545</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-700">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">The Harmonics</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £650</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£425</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-amber-200 dark:border-amber-700">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">Piano Pete & Sally</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £380</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£680</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-green-200 dark:border-green-700">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Bavarian Beats</div>
                <div className="text-green-600 dark:text-green-400">Band • £850</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,180</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-purple-200 dark:border-purple-700">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Max</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £950</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,520</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-teal-200 dark:border-teal-700">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Gospel Collective</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £720</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£850</div>
              </div>
            </div>

            {/* Week -3 (Historic) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 rounded p-2 text-center">
                W-3<br/><span className="text-xs opacity-75">Historic</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-gray-200 dark:border-gray-500">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Sarah</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £200</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£310</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-red-200 dark:border-red-700">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">Midnight Cabaret</div>
                <div className="text-red-600 dark:text-red-400">Duo • £450</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£590</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-700">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">Jazz Collective</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £680</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£465</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-amber-200 dark:border-amber-700">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">The Piano Twins</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £400</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-green-200 dark:border-green-700">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Alpine Express</div>
                <div className="text-green-600 dark:text-green-400">Band • £900</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-purple-200 dark:border-purple-700">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Luna</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £980</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-teal-200 dark:border-teal-700">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Sunday Singers</div>
            {/* Week -2 (Historic) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 rounded p-2 text-center">
                W-2<br/><span className="text-xs opacity-75">Historic</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-gray-200 dark:border-gray-500">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Alex</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £190</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£320</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-red-200 dark:border-red-700">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">Artisan Performers</div>
                <div className="text-red-600 dark:text-red-400">Duo • £480</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£580</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-700">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">Acoustic Trio</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £620</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£450</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-amber-200 dark:border-amber-700">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">Piano Masters</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £420</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-green-200 dark:border-green-700">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Oktoberfest Band</div>
                <div className="text-green-600 dark:text-green-400">Band • £880</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-purple-200 dark:border-purple-700">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Storm</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £1,020</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-teal-200 dark:border-teal-700">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Choir Harmony</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £780</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£890</div>
              </div>
            </div>
                <div className="text-teal-600 dark:text-teal-400">Band • £750</div>
            {/* Week -1 (Historic) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 rounded p-2 text-center">
                W-1<br/><span className="text-xs opacity-75">Historic</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-gray-200 dark:border-gray-500">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Chris</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £210</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£320</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-red-200 dark:border-red-700">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">Berlin Cabaret</div>
                <div className="text-red-600 dark:text-red-400">Duo • £460</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£580</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-700">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">Easy Listening Trio</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £640</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£450</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-amber-200 dark:border-amber-700">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">Piano Pete & Sally</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £380</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-green-200 dark:border-green-700">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Bavarian Beats</div>
                <div className="text-green-600 dark:text-green-400">Band • £850</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-purple-200 dark:border-purple-700">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Max</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £950</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-teal-200 dark:border-teal-700">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Gospel Collective</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £720</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£890</div>
              </div>
            </div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£890</div>
            {/* Current Week */}
            <div className="grid grid-cols-8 gap-2 ring-2 ring-indigo-500 rounded-lg p-1">
              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-100 dark:bg-indigo-900/50 rounded p-2 text-center">
                Current<br/><span className="text-xs opacity-75">Week</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Marcus</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £180</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£320</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">The Velvet Collective</div>
                <div className="text-red-600 dark:text-red-400">Duo • £420</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£580</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">The Harmonics</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £650</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£450</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">Piano Pete & Sally</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £380</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Bavarian Beats</div>
                <div className="text-green-600 dark:text-green-400">Band • £850</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Max</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £950</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border-2 border-indigo-300 dark:border-indigo-600">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Gospel Collective</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £720</div>
                <div className="text-green-600 dark:text-green-400 font-medium">+£890</div>
              </div>
            </div>
              </div>
            {/* Week +1 (Forecast) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/50 rounded p-2 text-center">
                W+1<br/><span className="text-xs opacity-75">Forecast</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">DJ Sarah</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £200</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£320</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">Midnight Cabaret</div>
                <div className="text-red-600 dark:text-red-400">Duo • £450</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£580</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">Jazz Collective</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £680</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£450</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">The Piano Twins</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £400</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">Alpine Express</div>
                <div className="text-green-600 dark:text-green-400">Band • £900</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">House Band + DJ Luna</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £980</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">Sunday Singers</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £750</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£890</div>
              </div>
            </div>
            </div>
            {/* Week +2 (Forecast) */}
            <div className="grid grid-cols-8 gap-2">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/50 rounded p-2 text-center">
                W+2<br/><span className="text-xs opacity-75">Forecast</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-600 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-gray-700 dark:text-gray-300">Industry Night</div>
                <div className="text-gray-600 dark:text-gray-400">TBD</div>
                <div className="text-gray-500 dark:text-gray-400">Solo • £180-220</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£320</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</div>
                <div className="text-red-700 dark:text-red-300">TBD</div>
                <div className="text-red-600 dark:text-red-400">Duo • £420-480</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£580</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</div>
                <div className="text-blue-700 dark:text-blue-300">TBD</div>
                <div className="text-blue-600 dark:text-blue-400">Band • £620-680</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£450</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</div>
                <div className="text-amber-700 dark:text-amber-300">TBD</div>
                <div className="text-amber-600 dark:text-amber-400">Duo • £380-420</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£720</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</div>
                <div className="text-green-700 dark:text-green-300">TBD</div>
                <div className="text-green-600 dark:text-green-400">Band • £850-950</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£1,240</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</div>
                <div className="text-purple-700 dark:text-purple-300">TBD</div>
                <div className="text-purple-600 dark:text-purple-400">Band • £950-1020</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£1,580</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/30 rounded p-2 text-xs border border-blue-200 dark:border-blue-600 opacity-80">
                <div className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</div>
                <div className="text-teal-700 dark:text-teal-300">TBD</div>
                <div className="text-teal-600 dark:text-teal-400">Band • £720-780</div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">Est. +£890</div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 dark:text-gray-400 space-y-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-gray-100 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded"></div>
                  <span>Historic Data</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 rounded"></div>
                  <span>Current Week</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/50 border border-blue-300 dark:border-blue-600 rounded opacity-80"></div>
                  <span>Forecast</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Format: Band Name • Type • Cost • Revenue Impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}