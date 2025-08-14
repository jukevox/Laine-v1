export interface PubData {
  name: string;
  region: string;
  manager: string;
  status: 'attention' | 'moderate' | 'strong';
  checkinsVsPrevious: number;
  bookingTrend: 'up' | 'down' | 'flat';
  reputation: number;
  thisWeekFocus: string;
  nextWeekGoal: string;
  posRevenue: {
    thisWeek: number;
    lastWeek: number;
    weeklyGrowth: number;
    monthlyTarget: number;
    monthlyProgress: number;
    avgTransactionValue: number;
    transactionCount: number;
  };
}

export interface RegionalData {
  portfolioSummary: {
    totalPubs: number;
    revenueMetrics: {
      totalWeeklyRevenue: number;
      revenueGrowth: number;
      avgRevenuePerPub: number;
      topPerformingPubs: number;
      underperformingPubs: number;
    };
    weeklyMomentum: {
      checkinsGrowth: number;
      bookingVelocity: number;
      socialEngagement: number;
      reputationTrend: number;
    };
    quarterlyOKRs: Array<{
      objective: string;
      keyResults: Array<{
        metric: string;
        target: number;
        current: number;
        trend: 'up' | 'down' | 'flat';
      }>;
    }>;
    regionBreakdown: Array<{
      region: string;
      pubs: number;
      momentum: 'strong' | 'moderate' | 'weak';
      alerts: number;
      totalRevenue: number;
      revenueGrowth: number;
    }>;
  };
  pubGrid: PubData[];
}

export interface IndividualPubData {
  pubInfo: {
    name: string;
    region: string;
    manager: string;
    currentWeek: number;
    timeWindow: string;
  };
  revenueByHour: Array<{
    week: number;
    weekType: 'historical' | 'current' | 'forecast';
    weekData: Array<{
      day: string;
      date: string;
      hours: Array<{
        hour: string;
        actual: number;
        target: number;
        transactions: number;
        avgTransaction: number;
      }>;
      dailyTotal: number;
      dailyTarget: number;
    }>;
    weeklyTotal: number;
    weeklyTarget: number;
    performanceVsTarget: number;
  }>;
  leadingIndicators: {
    guestMomentum: {
      checkinsThisWeek: number;
      checkinsLastWeek: number;
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
      cancellationRate: number;
      noShowRate: number;
    };
    socialPulse: {
      weeklyMentions: number;
      sentimentScore: number;
      engagementRate: number;
      reviewVelocity: number;
    };
  };
  sixWeekView: {
    historical: Array<{
      week: number;
      checkins: number;
      bookings: number;
      revenue: number;
      weather: string;
      events: string[];
    }>;
    forecast: Array<{
      week: number;
      expectedCheckins: number;
      predictedBookings: number;
      forecastRevenue: number;
      weather: string;
      events: string[];
    }>;
  };
}

export interface Recommendation {
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
  originalRecommendation: Omit<Recommendation, 'category' | 'priority'>;
  implementedDate: string;
  weekImplemented: number;
  actionTaken: string;
  expectedImpact: string;
  actualImpact: string;
  impactAchieved: boolean;
  impactPercentage: number;
  notes?: string;
  category: 'direct-venue' | 'promotional' | 'operational';
}