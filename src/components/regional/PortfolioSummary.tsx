import React from 'react';
import { TrendingUp, Users, Calendar, MessageSquare, DollarSign, Activity } from 'lucide-react';
import { RegionalData } from '../../types';

interface PortfolioSummaryProps {
  data: RegionalData['portfolioSummary'];
}

export default function PortfolioSummary({ data }: PortfolioSummaryProps) {
  // Mock sparkline data for the last 6 weeks (week-on-week changes)
  const revenueSparkline = [8, 12, -3, 15, 22, 45]; // Weekly growth percentages
  const bookingSparkline = [5, 18, 12, 8, 25, 35]; // Booking velocity changes
  const socialSparkline = [15, 8, 22, 18, 28, 42]; // Social engagement changes
  const checkSparkline = [2, -1, 5, 8, 12, 8]; // Average check changes

  const renderSparkline = (data: number[], color: string) => {
    const max = Math.max(...data.map(Math.abs));
    const width = 60;
    const height = 20;
    
    return (
      <svg width={width} height={height} className="inline-block ml-2">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          points={data.map((value, index) => {
            const x = (index / (data.length - 1)) * (width - 4) + 2;
            const y = height - ((Math.abs(value) / max) * (height - 4)) - 2;
            return `${x},${y}`;
          }).join(' ')}
        />
        {data.map((value, index) => {
          const x = (index / (data.length - 1)) * (width - 4) + 2;
          const y = height - ((Math.abs(value) / max) * (height - 4)) - 2;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1.5"
              fill={color}
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-colors duration-200">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Portfolio Overview</h2>
      
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Total Revenue */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Weekly Revenue</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">£{data.revenueMetrics.totalWeeklyRevenue.toLocaleString()}</p>
              <div className="mt-2 flex items-center space-x-4 text-xs">
                <span className="text-green-600 dark:text-green-400">Week-on-Week</span>
                <span className="text-green-500 dark:text-green-400">+{data.revenueMetrics.revenueGrowth}%</span>
                {renderSparkline(revenueSparkline, '#10b981')}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-green-500 dark:text-green-400" />
              <TrendingUp className="w-8 h-8 text-green-500 dark:text-green-400" />
            </div>
          </div>
        </div>

        {/* Detailed Booking Velocity Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Booking Velocity</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">+{data.weeklyMomentum.bookingDetails.weekOnWeekChange}%</p>
              <div className="mt-1 flex items-center">
                <span className="text-xs text-blue-600 dark:text-blue-400">6-week trend</span>
                {renderSparkline(bookingSparkline, '#3b82f6')}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <Calendar className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Online Bookings</span>
                <span className="text-sm text-green-500 dark:text-green-400">+{data.weeklyMomentum.bookingDetails.onlineChange}%</span>
              </div>
              <p className="text-xl font-bold text-blue-900 dark:text-blue-100">{data.weeklyMomentum.bookingDetails.onlineBookings}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">80% of total</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Walk-ins</span>
                <span className="text-sm text-green-500 dark:text-green-400">+{data.weeklyMomentum.bookingDetails.walkInChange}%</span>
              </div>
              <p className="text-xl font-bold text-blue-900 dark:text-blue-100">{data.weeklyMomentum.bookingDetails.walkIns}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">20% of total</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Design my Night</span>
                <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{data.weeklyMomentum.bookingDetails.sources.designMyNight}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">48% of total</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
              <div>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">OpenTable + Website</span>
                <p className="text-lg font-bold text-blue-900 dark:text-blue-100">{data.weeklyMomentum.bookingDetails.sources.openTable + data.weeklyMomentum.bookingDetails.sources.albertsWebsite}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">32% of total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Engagement */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Social Engagement</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">{data.weeklyMomentum.socialEngagement}%</p>
              <div className="mt-2 flex items-center space-x-4 text-xs">
                <span className="text-purple-600 dark:text-purple-400">Week-on-Week Growth</span>
                {renderSparkline(socialSparkline, '#8b5cf6')}
                <span className="text-purple-500 dark:text-purple-400">Source: Reputation</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-purple-500 dark:text-purple-400" />
              <MessageSquare className="w-8 h-8 text-purple-500 dark:text-purple-400" />
            </div>
          </div>
        </div>
        
        {/* Average Check Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">Average Check</p>
              <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">£{data.weeklyMomentum.averageCheck.totalGBP}</p>
              <div className="mt-2 flex items-center space-x-4 text-xs">
                <span className="text-amber-600 dark:text-amber-400">Party Size: {data.weeklyMomentum.averageCheck.partySize}</span>
                <span className="text-amber-500 dark:text-amber-400">+{data.weeklyMomentum.averageCheck.weekOnWeekChange}% WoW</span>
                {renderSparkline(checkSparkline, '#f59e0b')}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-amber-500 dark:text-amber-400" />
              <div className="w-8 h-8 bg-amber-500 dark:bg-amber-400 rounded-full flex items-center justify-center text-white font-bold">
                £
              </div>
            </div>
          </div>
        </div>

        {/* Total Bookings & Guests */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Weekly Bookings & Guests</p>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">{data.revenueMetrics.totalBookings}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">Bookings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">{data.revenueMetrics.totalGuests}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">Guests</p>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-4 text-xs">
                <span className="text-green-600 dark:text-green-400">Conversion Rate: {data.revenueMetrics.conversionRate}%</span>
                <span className="text-green-600 dark:text-green-400">Avg Party: {data.revenueMetrics.avgPartySize}</span>
              </div>
            </div>
            <Users className="w-8 h-8 text-green-500 dark:text-green-400" />
          </div>
        </div>

        {/* Revenue Growth */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Revenue Growth</p>
              <p className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">+{data.revenueMetrics.revenueGrowth}%</p>
              <div className="mt-2 flex items-center space-x-4 text-xs">
                <span className="text-indigo-600 dark:text-indigo-400">Target: +12%</span>
                <span className="text-green-500 dark:text-green-400">Exceeding Target</span>
              </div>
            </div>
            <TrendingUp className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}