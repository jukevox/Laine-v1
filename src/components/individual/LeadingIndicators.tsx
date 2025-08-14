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
      
      {/* Music/Entertainment Indicator */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-4 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 dark:bg-purple-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
              ♪
            </div>
            <div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100">Music/Entertainment</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">This week's bookings</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">2</p>
            <p className="text-xs text-purple-600 dark:text-purple-300">Thu: Acoustic duo</p>
            <p className="text-xs text-purple-600 dark:text-purple-300">Sat: DJ set</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-purple-700 dark:text-purple-300">Expected revenue uplift</span>
          <span className="text-lg font-bold text-purple-900 dark:text-purple-100">+£750</span>
        </div>
        <div className="mt-2 text-xs text-purple-500 dark:text-purple-400">
          Source: GigPig
        </div>
      </div>
    </div>
  );
}