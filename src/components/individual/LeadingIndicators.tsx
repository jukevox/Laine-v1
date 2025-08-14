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
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">Music & Entertainment Schedule</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">This week's programming and revenue impact</p>
          </div>
        </div>
        
        {/* Daily Entertainment Cards */}
        <div className="space-y-3 mb-4">
          {/* Monday */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">Monday</h4>
                  <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">Industry</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Industry Night</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DJ takeover + hospitality worker specials</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Revenue uplift</p>
                <p className="text-xl font-bold text-gray-700 dark:text-gray-300">+£320</p>
              </div>
            </div>
          </div>

          {/* Tuesday */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 rounded-lg p-4 border border-red-200 dark:border-red-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 text-lg">Tuesday</h4>
                  <span className="text-xs bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-200 px-3 py-1 rounded-full">Cabaret</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-red-300 dark:bg-red-600"></div>
                <div>
                  <p className="font-medium text-red-800 dark:text-red-200">Kunst Kabaret</p>
                  <p className="text-sm text-red-600 dark:text-red-300">Performance art & cabaret acts on-stage</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-red-500 dark:text-red-400">Revenue uplift</p>
                <p className="text-xl font-bold text-red-700 dark:text-red-200">+£580</p>
              </div>
            </div>
          </div>

          {/* Wednesday */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-lg">Wednesday</h4>
                  <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">Live</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-blue-300 dark:bg-blue-600"></div>
                <div>
                  <p className="font-medium text-blue-800 dark:text-blue-200">Bertie's Band</p>
                  <p className="text-sm text-blue-600 dark:text-blue-300">Local & national easy listening music</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-500 dark:text-blue-400">Revenue uplift</p>
                <p className="text-xl font-bold text-blue-700 dark:text-blue-200">+£450</p>
              </div>
            </div>
          </div>

          {/* Thursday */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 text-lg">Thursday</h4>
                  <span className="text-xs bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-200 px-3 py-1 rounded-full">Piano</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-amber-300 dark:bg-amber-600"></div>
                <div>
                  <p className="font-medium text-amber-800 dark:text-amber-200">Baby Grand Slam</p>
                  <p className="text-sm text-amber-600 dark:text-amber-300">Piano duo + sing-alongs, request songs</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-amber-500 dark:text-amber-400">Revenue uplift</p>
                <p className="text-xl font-bold text-amber-700 dark:text-amber-200">+£720</p>
              </div>
            </div>
          </div>

          {/* Friday */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 text-lg">Friday</h4>
                  <span className="text-xs bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-200 px-3 py-1 rounded-full">Festive</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-green-300 dark:bg-green-600"></div>
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Friday Fröhlich</p>
                  <p className="text-sm text-green-600 dark:text-green-300">House band + interactive artists + participation</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-500 dark:text-green-400">Revenue uplift</p>
                <p className="text-xl font-bold text-green-700 dark:text-green-200">+£1,240</p>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 text-lg">Saturday</h4>
                  <span className="text-xs bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full">Party</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-purple-300 dark:bg-purple-600"></div>
                <div>
                  <p className="font-medium text-purple-800 dark:text-purple-200">Pleasure Palace</p>
                  <p className="text-sm text-purple-600 dark:text-purple-300">House bands + DJs + promenaders spectacular</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-purple-500 dark:text-purple-400">Revenue uplift</p>
                <p className="text-xl font-bold text-purple-700 dark:text-purple-200">+£1,580</p>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg p-4 border border-teal-200 dark:border-teal-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-teal-900 dark:text-teal-100 text-lg">Sunday</h4>
                  <span className="text-xs bg-teal-200 dark:bg-teal-800 text-teal-700 dark:text-teal-200 px-3 py-1 rounded-full">Service</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-teal-300 dark:bg-teal-600"></div>
                <div>
                  <p className="font-medium text-teal-800 dark:text-teal-200">Sunday Service</p>
                  <p className="text-sm text-teal-600 dark:text-teal-300">Choirs + DJs + roasts, relaxed atmosphere</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-teal-500 dark:text-teal-400">Revenue uplift</p>
                <p className="text-xl font-bold text-teal-700 dark:text-teal-200">+£890</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}