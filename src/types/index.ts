// Type definitions for Albert's Schloss demo application

export interface RegionalData {
  portfolioSummary: {
    revenueMetrics: {
      totalWeeklyRevenue: number;
      revenueGrowth: number;
      totalBookings: number;
      totalGuests: number;
      conversionRate: number;
      avgPartySize: number;
    };
    weeklyMomentum: {
      bookingDetails: {
        weekOnWeekChange: number;
        onlineBookings: number;
        walkIns: number;
        onlineChange: number;
        walkInChange: number;
        sources: {
          designMyNight: number;
          openTable: number;
          albertsWebsite: number;
          phone: number;
        };
      };
      socialEngagement: number;
      averageCheck: {
        totalGBP: number;
        partySize: number;
        weekOnWeekChange: number;
      };
    };
  };
  pubGrid: PubData[];
}

export interface PubData {
  name: string;
  region: string;
  manager: string;
  status: 'strong' | 'moderate' | 'attention';
  posRevenue: {
    thisWeek: number;
    weeklyGrowth: number;
    monthlyProgress: number;
    avgTransactionValue: number;
  };
  checkinsVsPrevious: number;
  bookingTrend: 'up' | 'down' | 'stable';
  reputation: string;
  thisWeekFocus: string;
  nextWeekGoal: string;
}

export interface IndividualPubData {
  pubInfo: {
    name: string;
    region: string;
    manager: string;
    currentWeek: number;
    timeWindow: string;
  };
  leadingIndicators: {
    guestMomentum: {
      checkinsThisWeek: number;
      checkinsGrowth: number;
      trendForecast: string;
    };
    bookingHealth: {
      forwardBookings: {
        thisWeek: number;
        nextWeek: number;
        weekAfter: number;
      };
      conversionRate: number;
      noShowRate: number;
    };
    socialPulse: {
      weeklyMentions: number;
      sentimentScore: number;
      engagementRate: number;
      reviewVelocity: number;
    };
  };
  revenueByHour: WeeklyRevenueData[];
  sixWeekView: {
    historical: HistoricalWeek[];
    forecast: ForecastWeek[];
  };
}

export interface WeeklyRevenueData {
  week: number;
  weekType: 'historical' | 'current' | 'forecast';
  weeklyTotal: number;
  weeklyTarget: number;
  weeklyCustomers: number;
  avgCheckSize: number;
  checkSizeChange: number;
  performanceVsTarget: number;
  weekData: DailyRevenueData[];
}

export interface DailyRevenueData {
  day: string;
  date: string;
  dailyTotal: number;
  dailyTarget: number;
  hours: HourlyRevenueData[];
}

export interface HourlyRevenueData {
  hour: string;
  actual: number;
  target: number;
  transactions: number;
  avgTransaction: number;
  customers: number;
}

export interface HistoricalWeek {
  week: number;
  weather: string;
  checkins: number;
  bookings: number;
  revenue: number;
  events?: string[];
}

export interface ForecastWeek {
  week: number;
  weather: string;
  expectedCheckins: number;
  predictedBookings: number;
  forecastRevenue: number;
  events?: string[];
}

export interface Recommendation {
  id: string;
  category: 'direct-venue' | 'promotional' | 'operational';
  priority: 'urgent' | 'important' | 'opportunity';
  title: string;
  insight: string;
  action: string;
  impact: string;
  timeframe: string;
  weatherFactor?: string;
  loyaltyData?: string;
  complianceRisk?: string;
}

export interface ImplementedRecommendation {
  id: string;
  originalRecommendation: Recommendation;
  weekImplemented: number;
  implementedDate: string;
  actionTaken: string;
  expectedImpact: string;
  actualImpact: string;
  impactPercentage: number;
  impactAchieved: boolean;
  category: 'direct-venue' | 'promotional' | 'operational';
  notes?: string;
}