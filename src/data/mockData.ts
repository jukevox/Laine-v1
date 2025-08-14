// Mock data for Albert's Schloss demo application
import { RegionalData, IndividualPubData, Recommendation, ImplementedRecommendation } from '../types';
// Helper function to generate realistic revenue performance
const generateRevenuePerformance = (target: number, performanceType: 'low' | 'normal' | 'high') => {
  let performanceRange: [number, number];
  
  switch (performanceType) {
    case 'low': // 10% of days - 75-89% of target
      performanceRange = [0.75, 0.89];
      break;
    case 'high': // 10% of days - 96-110% of target  
      performanceRange = [0.96, 1.10];
      break;
    default: // 80% of days - 90-95% of target
      performanceRange = [0.90, 0.95];
  }
  
  const min = performanceRange[0];
  const max = performanceRange[1];
  const multiplier = min + (Math.random() * (max - min));
  
  return Math.round(target * multiplier);
};

// Generate hourly performance data with realistic distribution
const generateHourlyData = (baseTarget: number, dayType: 'weekday' | 'weekend' = 'weekday'): HourlyRevenueData[] => {
  const hours = [
    '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', 
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];
  
  // Define performance distribution (80% normal, 10% low, 10% high)
  const performanceTypes: ('low' | 'normal' | 'high')[] = [
    'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', // 8 normal (80%)
    'low', // 1 low (10%)
    'high' // 1 high (10%)
  ];
  
  // Shuffle the performance types
  const shuffledTypes = [...performanceTypes].sort(() => Math.random() - 0.5);
  
  return hours.map((hour, index) => {
    // Adjust target based on hour and day type
    let hourMultiplier = 1;
    const hourNum = parseInt(hour.split(':')[0]);
    
    if (dayType === 'weekend') {
      // Weekend brunch boost (11am-2pm)
      if (hourNum >= 11 && hourNum <= 14) hourMultiplier = 1.3;
      // Weekend evening boost (7pm-11pm)
      else if (hourNum >= 19 && hourNum <= 23) hourMultiplier = 1.4;
    } else {
      // Weekday lunch (12pm-2pm)
      if (hourNum >= 12 && hourNum <= 14) hourMultiplier = 1.1;
      // Weekday evening (6pm-10pm)
      else if (hourNum >= 18 && hourNum <= 22) hourMultiplier = 1.2;
    }
    
    const target = Math.round(baseTarget * hourMultiplier);
    const performanceType = shuffledTypes[index % shuffledTypes.length];
    const actual = generateRevenuePerformance(target, performanceType);
    
    return {
      hour,
      actual,
      target,
      transactions: Math.round(actual / 72), // £72 average transaction
      avgTransaction: Math.round(actual / Math.max(1, Math.round(actual / 72))),
      customers: Math.round(actual / 72)
    };
  });
};


export const regionalData: RegionalData = {
  portfolioSummary: {
    revenueMetrics: {
      totalWeeklyRevenue: 287500,
      revenueGrowth: 18.5,
      totalBookings: 2847,
      totalGuests: 8541,
      conversionRate: 78.2,
      avgPartySize: 3.0
    },
    weeklyMomentum: {
      bookingDetails: {
        weekOnWeekChange: 22.3,
        onlineBookings: 2278,
        walkIns: 569,
        onlineChange: 25.1,
        walkInChange: 12.8,
        sources: {
          designMyNight: 1366,
          openTable: 456,
          albertsWebsite: 456,
          phone: 569
        }
      },
      socialEngagement: 42.7,
      averageCheck: {
        totalGBP: 84,
        partySize: 3.0,
        weekOnWeekChange: 8.2
      }
    }
  },
  pubGrid: [
    {
      name: "Albert's Schloss Manchester",
      region: "Manchester",
      manager: "Sarah Chen",
      status: "strong",
      posRevenue: {
        thisWeek: 89500,
        weeklyGrowth: 22.1,
        monthlyProgress: 87,
        avgTransactionValue: 78
      },
      checkinsVsPrevious: 18.5,
      bookingTrend: "up",
      reputation: "4.8/5",
      thisWeekFocus: "Friday Fröhlich sold out - testing extended hours",
      nextWeekGoal: "Launch beer stein personalization service"
    },
    {
      name: "Albert's Schloss Liverpool",
      region: "Liverpool",
      manager: "James Wilson",
      status: "strong",
      posRevenue: {
        thisWeek: 76200,
        weeklyGrowth: 15.8,
        monthlyProgress: 82,
        avgTransactionValue: 72
      },
      checkinsVsPrevious: 12.3,
      bookingTrend: "up",
      reputation: "4.7/5",
      thisWeekFocus: "Kunst Kabaret gaining momentum - 3 sold out shows",
      nextWeekGoal: "Expand Tuesday cabaret to Wednesday trial"
    },
    {
      name: "Albert's Schloss Birmingham",
      region: "Birmingham",
      manager: "Emma Thompson",
      status: "moderate",
      posRevenue: {
        thisWeek: 68400,
        weeklyGrowth: 8.2,
        monthlyProgress: 74,
        avgTransactionValue: 69
      },
      checkinsVsPrevious: 5.7,
      bookingTrend: "up",
      reputation: "4.6/5",
      thisWeekFocus: "Sunday Service attendance improving with choir addition",
      nextWeekGoal: "Test promenader costume rental service"
    },
    {
      name: "Albert's Schloss London",
      region: "London",
      manager: "David Kumar",
      status: "attention",
      posRevenue: {
        thisWeek: 53400,
        weeklyGrowth: -2.1,
        monthlyProgress: 68,
        avgTransactionValue: 65
      },
      checkinsVsPrevious: -3.2,
      bookingTrend: "down",
      reputation: "4.5/5",
      thisWeekFocus: "Thursday piano nights underperforming vs other locations",
      nextWeekGoal: "Add second piano duo for fuller sound experience"
    }
  ]
};

export const individualPubData: IndividualPubData = {
  pubInfo: {
    name: "Albert's Schloss Manchester",
    region: "Manchester",
    manager: "Sarah Chen",
    currentWeek: 47,
    timeWindow: "Nov 18-24, 2024"
  },
  leadingIndicators: {
    guestMomentum: {
      checkinsThisWeek: 1247,
      checkinsGrowth: 18.5,
      trendForecast: "Strong upward momentum"
    },
    bookingHealth: {
      forwardBookings: {
        thisWeek: 892,
        nextWeek: 1034,
        weekAfter: 756
      },
      conversionRate: 82.3,
      noShowRate: 4.2
    },
    socialPulse: {
      weeklyMentions: 127,
      sentimentScore: 8.4,
      engagementRate: 12.8,
      reviewVelocity: 23
    }
  },
  revenueByHour: [
    {
      week: 45,
      weekType: "historical",
      weeklyTotal: 44820,
      weeklyTotal: 42750,
      weeklyTarget: 45000,
          dailyTotal: 4140,
      checkSizeChange: 5.2,
          hours: generateHourlyData(360, 'weekday')
            { hour: "18:00", actual: 890, target: 920, transactions: 11, avgTransaction: 81, customers: 15 },
            { hour: "19:00", actual: 1240, target: 1280, transactions: 15, avgTransaction: 83, customers: 20 },
            { hour: "20:00", actual: 1450, target: 1500, transactions: 17, avgTransaction: 85, customers: 23 },
            { hour: "21:00", actual: 1320, target: 1380, transactions: 16, avgTransaction: 83, customers: 21 },
          dailyTotal: 4680,
          ]
          hours: generateHourlyData(410, 'weekday')
            { hour: "19:00", actual: 1580, target: 1520, transactions: 17, avgTransaction: 93, customers: 24 },
            { hour: "20:00", actual: 1890, target: 1850, transactions: 20, avgTransaction: 95, customers: 28 },
            { hour: "21:00", actual: 1720, target: 1680, transactions: 18, avgTransaction: 96, customers: 26 },
            { hour: "22:00", actual: 1390, target: 1350, transactions: 14, avgTransaction: 99, customers: 21 }
          dailyTotal: 5040,
        },
          hours: generateHourlyData(440, 'weekday')
            { hour: "20:00", actual: 1620, target: 1580, transactions: 19, avgTransaction: 85, customers: 26 },
            { hour: "21:00", actual: 1480, target: 1440, transactions: 17, avgTransaction: 87, customers: 24 },
            { hour: "22:00", actual: 1290, target: 1250, transactions: 15, avgTransaction: 86, customers: 20 }
          ]
          dailyTotal: 6480,
        {
          hours: generateHourlyData(560, 'weekday')
            { hour: "21:00", actual: 1280, target: 1520, transactions: 14, avgTransaction: 91, customers: 21 },
            { hour: "22:00", actual: 1100, target: 1285, transactions: 12, avgTransaction: 92, customers: 18 }
          ]
        },
          dailyTotal: 7740,
          day: "Friday",
          hours: generateHourlyData(670, 'weekday')
            { hour: "22:00", actual: 2230, target: 2170, transactions: 28, avgTransaction: 80, customers: 38 }
          ]
        },
        {
          dailyTotal: 8910,
          date: "Nov 9",
          hours: generateHourlyData(770, 'weekend')
          ]
        },
        {
          day: "Sunday",
          dailyTotal: 6930,
          dailyTotal: 14200,
          hours: generateHourlyData(600, 'weekend')
        }
      ]
    },
    {
      performanceVsTarget: -4,
      weekType: "historical",
      weeklyTotal: 44280,
      weeklyTarget: 78000,
      weeklyCustomers: 1142,
          dailyTotal: 3870,
      checkSizeChange: 2.8,
          hours: generateHourlyData(330, 'weekday')
            { hour: "18:00", actual: 920, target: 920, transactions: 11, avgTransaction: 84, customers: 16 },
            { hour: "19:00", actual: 1280, target: 1280, transactions: 15, avgTransaction: 85, customers: 22 },
            { hour: "20:00", actual: 1500, target: 1500, transactions: 18, avgTransaction: 83, customers: 25 },
            { hour: "21:00", actual: 1380, target: 1380, transactions: 16, avgTransaction: 86, customers: 23 },
          dailyTotal: 4410,
          ]
          hours: generateHourlyData(380, 'weekday')
            { hour: "19:00", actual: 1680, target: 1520, transactions: 17, avgTransaction: 99, customers: 24 },
            { hour: "20:00", actual: 1980, target: 1850, transactions: 20, avgTransaction: 99, customers: 28 },
          hours: generateHourlyData(350, 'weekday')
        },
          dailyTotal: 7470,
          day: "Friday",
          hours: generateHourlyData(640, 'weekday')
          dailyTotal: 4590,
          ]
          hours: generateHourlyData(400, 'weekday')
    {
      week: 47,
      weekType: "current",
      weeklyTotal: 46080,
          dailyTotal: 4950,
      weeklyCustomers: 1247,
          hours: generateHourlyData(430, 'weekday')
            { hour: "16:00", actual: 450, target: 420, transactions: 5, avgTransaction: 90, customers: 8 },
            { hour: "17:00", actual: 720, target: 680, transactions: 8, avgTransaction: 90, customers: 12 },
            { hour: "18:00", actual: 980, target: 920, transactions: 11, avgTransaction: 89, customers: 16 },
            { hour: "19:00", actual: 1360, target: 1280, transactions: 15, avgTransaction: 91, customers: 22 },
          dailyTotal: 6390,
            { hour: "21:00", actual: 1460, target: 1380, transactions: 16, avgTransaction: 91, customers: 23 },
          hours: generateHourlyData(550, 'weekday')
            { hour: "17:00", actual: 800, target: 700, transactions: 8, avgTransaction: 100, customers: 12 },
            { hour: "18:00", actual: 1150, target: 980, transactions: 11, avgTransaction: 105, customers: 16 },
            { hour: "19:00", actual: 1790, target: 1520, transactions: 17, avgTransaction: 105, customers: 24 },
            { hour: "20:00", actual: 2110, target: 1850, transactions: 20, avgTransaction: 106, customers: 28 },
          dailyTotal: 7650,
            { hour: "22:00", actual: 1580, target: 1350, transactions: 14, avgTransaction: 113, customers: 21 }
          hours: generateHourlyData(660, 'weekday')
            { hour: "14:00", actual: 1480, target: 1280, transactions: 17, avgTransaction: 87, customers: 24 },
            { hour: "15:00", actual: 1060, target: 920, transactions: 12, avgTransaction: 88, customers: 17 },
            { hour: "16:00", actual: 880, target: 780, transactions: 10, avgTransaction: 88, customers: 14 },
            { hour: "17:00", actual: 1380, target: 1200, transactions: 16, avgTransaction: 86, customers: 22 },
          dailyTotal: 8820,
            { hour: "19:00", actual: 2880, target: 2580, transactions: 34, avgTransaction: 85, customers: 46 },
          hours: generateHourlyData(760, 'weekend')
            { hour: "13:00", actual: 0, target: 1000, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "14:00", actual: 0, target: 820, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "15:00", actual: 0, target: 520, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "16:00", actual: 0, target: 460, transactions: 0, avgTransaction: 0, customers: 5 },
          dailyTotal: 6840,
            { hour: "18:00", actual: 0, target: 1040, transactions: 0, avgTransaction: 0, customers: 11 },
          hours: generateHourlyData(590, 'weekend')
        }
      ]
    }
  ],
  sixWeekView: {
    historical: [
      {
        week: 42,
        weather: "rainy",
        checkins: 1089,
        bookings: 892,
        revenue: 78500,
        events: ["Halloween prep"]
      },
      {
        week: 43,
        weather: "cold",
        checkins: 1142,
        bookings: 934,
        revenue: 82300,
        events: ["Halloween weekend"]
      },
      {
        week: 44,
        weather: "sunny",
        checkins: 1247,
        bookings: 1034,
        revenue: 89500,
        events: ["Bonfire Night"]
      }
    ],
    forecast: [
      {
        week: 48,
        weather: "cold",
        expectedCheckins: 1290,
        predictedBookings: 1080,
        forecastRevenue: 92000,
        events: ["Black Friday promo"]
      },
      {
        week: 49,
        weather: "rainy",
        expectedCheckins: 1350,
        predictedBookings: 1120,
        forecastRevenue: 95500,
        events: ["Christmas market launch"]
      },
      {
        week: 50,
        weather: "cold",
        expectedCheckins: 1420,
        predictedBookings: 1180,
        forecastRevenue: 98000,
        events: ["Christmas parties begin"]
      }
    ]
  }
};

export const recommendations: Recommendation[] = [
  {
    id: "rec-001",
    category: "direct-venue",
    priority: "opportunity",
    title: "Expand outdoor seating for Thursday Baby Grand Slam",
    insight: "Weather forecast shows 18°C sunny conditions Thursday. Manchester location saw 34% revenue increase when outdoor seating was added during piano nights.",
    action: "Set up 4 additional outdoor tables with heaters for Thursday evening. Promote 'Piano Under the Stars' experience.",
    impact: "£680 additional revenue (based on Manchester data)",
    timeframe: "This week",
    weatherFactor: "Sunny 18°C Thursday - perfect for outdoor dining",
    loyaltyData: "67% of piano night regulars prefer outdoor seating when available"
  },
  {
    id: "rec-002", 
    category: "promotional",
    priority: "important",
    title: "Launch 'Stein Personalization' service during Saturday Pleasure Palace",
    insight: "Birmingham location generated £340 additional revenue per Saturday with custom stein engraving. Saturday nights have highest customer dwell time (2.3 hours avg).",
    action: "Partner with local engraver to offer on-site stein personalization. Price at £15 per stein with 30-minute turnaround.",
    impact: "£340-450 additional weekly revenue",
    timeframe: "Next weekend",
    loyaltyData: "Saturday regulars spend 23% more on merchandise vs other nights"
  },
  {
    id: "rec-003",
    category: "operational", 
    priority: "urgent",
    title: "Add second piano duo for Thursday nights",
    insight: "Thursday piano nights consistently underperform vs Friday/Saturday by 18%. Customer feedback mentions 'thin sound' compared to weekend shows.",
    action: "Book additional piano player to create fuller duo sound. Test for 3 weeks to measure impact on dwell time and spend.",
    impact: "£200-300 additional Thursday revenue",
    timeframe: "Next Thursday",
    complianceRisk: "Ensure additional musician has proper licensing and insurance"
  },
  {
    id: "rec-004",
    category: "direct-venue",
    priority: "opportunity", 
    title: "Introduce 'Promenader Costume Rental' for Sunday Service",
    insight: "Sunday attendance down 12% vs last month. Liverpool location saw 28% increase in Sunday bookings after introducing authentic German costume rentals.",
    action: "Source 20 authentic German costumes (lederhosen, dirndls) for rental at £8 per person. Market as 'Authentic Sunday Service Experience'.",
    impact: "£180-240 additional Sunday revenue + 15% booking increase",
    timeframe: "Next Sunday",
    loyaltyData: "Sunday Service attendees are 45% more likely to book private events when engaged with authentic experiences"
  }
];

export const implementedRecommendations: ImplementedRecommendation[] = [
  {
    id: "impl-001",
    originalRecommendation: recommendations[0],
    weekImplemented: 44,
    implementedDate: "2024-11-01",
    actionTaken: 'Launched "Winter Warmer" gift card bundle with mulled wine flight experience',
    expectedImpact: '25% increase in gift card sales',
    actualImpact: '31% increase in gift card sales (£4,680 additional revenue)',
    impactPercentage: 124,
    impactAchieved: true,
    category: 'promotional',
    notes: 'Bundle approach very successful. Customers loved the experiential element. Repeat for Valentine\'s Day.'
  },
  {
    id: "impl-002",
    originalRecommendation: recommendations[1],
    weekImplemented: 43,
    implementedDate: "2024-10-26",
    actionTaken: 'Implemented loyalty points multiplier (3x points) on all gift card purchases',
    expectedImpact: '20% increase in loyalty member gift card purchases',
    actualImpact: '14% increase in loyalty member gift card purchases',
    impactPercentage: 70,
    impactAchieved: false,
    category: 'promotional',
    notes: 'Good uptake but lower than expected. Need to better communicate the multiplier benefit to customers.'
  },
  {
    id: "impl-003",
    originalRecommendation: recommendations[2],
    weekImplemented: 45,
    implementedDate: "2024-11-07",
    actionTaken: "Added second piano player to create fuller duo sound for Thursday Baby Grand Slam",
    expectedImpact: "£200-300 additional Thursday revenue",
    actualImpact: "£380 additional revenue (+27%)",
    impactPercentage: 127,
    impactAchieved: true,
    category: "operational",
    notes: "Massive success! Customer dwell time increased by 35 minutes on average. Several customers mentioned 'much richer sound'. Bookings for Thursday nights up 22% since implementation. Definitely keeping permanent."
  },
  {
    id: "impl-004",
    originalRecommendation: recommendations[3],
    weekImplemented: 42,
    implementedDate: "2024-10-20",
    actionTaken: "Introduced costume rental service with 15 authentic German outfits for Sunday Service",
    expectedImpact: "£180-240 additional Sunday revenue + 15% booking increase",
    actualImpact: "£160 additional revenue + 8% booking increase",
    impactPercentage: 89,
    impactAchieved: false,
    category: "direct-venue",
    notes: "Moderate success but below target. Costume sizes were limited - need more variety. Popular with families but adults hesitant. Consider offering just accessories (hats, suspenders) as lower-commitment option. Kids loved it though!"
  },
  {
    id: "impl-005",
    originalRecommendation: {
      id: "rec-005",
      category: "promotional",
      priority: "opportunity",
      title: "Launch bottomless brunch gift vouchers with Mother's Day marketing",
      insight: "Mother's Day approaching with high gift card demand",
      action: "Create special Mother's Day brunch packages",
      impact: "30% increase in brunch bookings",
      timeframe: "This week"
    },
    weekImplemented: 41,
    implementedDate: "2024-10-14",
    actionTaken: 'Launched bottomless brunch gift vouchers with Mother\'s Day marketing campaign',
    expectedImpact: '30% increase in brunch bookings',
    actualImpact: '18% increase in brunch bookings',
    impactPercentage: 60,
    impactAchieved: false,
    category: 'promotional',
    notes: 'Good concept but timing was off. Mother\'s Day campaign started too late. Earlier marketing needed.'
  },
  {
    id: "impl-006",
    originalRecommendation: {
      id: "rec-006",
      category: "operational",
      priority: "important",
      title: "Streamline digital gift card purchase flow",
      insight: "High checkout abandonment rate on gift card purchases",
      action: "Offer 25% discount to hospitality workers with valid ID on Mondays",
      impact: "£200-300 additional Monday revenue",
      timeframe: "This week"
    },
    weekImplemented: 41,
    implementedDate: "2024-10-14",
    actionTaken: 'Streamlined digital gift card purchase flow and added guest checkout option',
    expectedImpact: '15% reduction in checkout abandonment',
    actualImpact: '22% reduction in checkout abandonment',
    impactPercentage: 147,
    impactAchieved: true,
    category: 'operational',
    notes: 'Technical improvements had immediate impact. Guest checkout was key - many customers don\'t want to create accounts.'
  }
];