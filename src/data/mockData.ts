import { RegionalData, IndividualPubData, Recommendation, ImplementedRecommendation } from '../types';

export const regionalData: RegionalData = {
  portfolioSummary: {
    totalPubs: 4,
    revenueMetrics: {
      totalWeeklyRevenue: 615000, // £32M annually / 52 weeks
      revenueGrowth: 45, // Strong growth driven by London venue
      avgRevenuePerPub: 153750, // Average across 4 venues
      topPerformingPubs: 3, // London, Manchester, Birmingham performing well
      underperformingPubs: 1, // Liverpool needs attention
    },
    weeklyMomentum: {
      checkinsGrowth: 28, // Strong social media presence
      bookingVelocity: 35, // High demand, especially London
      socialEngagement: 42, // Strong brand engagement
      reputationTrend: 18, // Consistent quality across venues
    },
    quarterlyOKRs: [
      {
        objective: "Drive Revenue Growth Across Portfolio",
        keyResults: [
          {
            metric: "Total Revenue Growth",
            target: 40,
            current: 45,
            trend: "up"
          },
          {
            metric: "Average Revenue per Venue",
            target: 150000,
            current: 153750,
            trend: "up"
          },
          {
            metric: "Venues Beating Targets",
            target: 3,
            current: 3,
            trend: "flat"
          }
        ]
      }
    ],
    regionBreakdown: [
      {
        region: "London",
        pubs: 1,
        momentum: "strong",
        alerts: 0,
        totalRevenue: 220000, // Largest venue, newest, driving growth
        revenueGrowth: 85 // New venue showing exceptional performance
      },
      {
        region: "Manchester",
        pubs: 1,
        momentum: "strong", 
        alerts: 0,
        totalRevenue: 165000, // Original flagship venue
        revenueGrowth: 12 // Steady growth
      },
      {
        region: "Birmingham",
        pubs: 1,
        momentum: "moderate",
        alerts: 1,
        totalRevenue: 145000, // Solid performer
        revenueGrowth: 8 // Modest growth
      },
      {
        region: "Liverpool",
        pubs: 1,
        momentum: "weak",
        alerts: 2,
        totalRevenue: 85000, // Underperforming venue
        revenueGrowth: -5 // Needs attention
      }
    ]
  },
  pubGrid: [
    {
      name: "Albert's Schloss London",
      region: "London - Shaftesbury Avenue",
      manager: "Sophie Chen",
      status: "strong",
      checkinsVsPrevious: 95,
      bookingTrend: "up",
      reputation: 4.6,
      thisWeekFocus: "Maximizing 600+ covers capacity during peak festive season",
      nextWeekGoal: "Launch new winter cocktail menu and live music program",
      posRevenue: {
        thisWeek: 220000,
        lastWeek: 185000,
        weeklyGrowth: 19,
        monthlyTarget: 850000,
        monthlyProgress: 92,
        avgTransactionValue: 45,
        transactionCount: 4890
      }
    },
    {
      name: "Albert's Schloss Manchester",
      region: "Manchester - Peter Street", 
      manager: "James Mitchell",
      status: "strong",
      checkinsVsPrevious: 15,
      bookingTrend: "up",
      reputation: 4.4,
      thisWeekFocus: "Maintaining flagship venue standards and heritage experience",
      nextWeekGoal: "Coordinate with London team on best practices sharing",
      posRevenue: {
        thisWeek: 165000,
        lastWeek: 158000,
        weeklyGrowth: 4,
        monthlyTarget: 640000,
        monthlyProgress: 88,
        avgTransactionValue: 42,
        transactionCount: 3930
      }
    },
    {
      name: "Albert's Schloss Birmingham",
      region: "Birmingham - Colmore Row",
      manager: "Emma Thompson",
      status: "moderate",
      checkinsVsPrevious: 8,
      bookingTrend: "flat",
      reputation: 4.2,
      thisWeekFocus: "Improving midweek performance and corporate bookings",
      nextWeekGoal: "Implement London's successful entertainment programming",
      posRevenue: {
        thisWeek: 145000,
        lastWeek: 142000,
        weeklyGrowth: 2,
        monthlyTarget: 580000,
        monthlyProgress: 82,
        avgTransactionValue: 38,
        transactionCount: 3820
      }
    },
    {
      name: "Albert's Schloss Liverpool",
      region: "Liverpool - Albert Dock",
      manager: "David Roberts",
      status: "attention",
      checkinsVsPrevious: -12,
      bookingTrend: "down",
      reputation: 3.9,
      thisWeekFocus: "Addressing service quality issues and staff training",
      nextWeekGoal: "Implement recovery plan with support from Manchester team",
      posRevenue: {
        thisWeek: 85000,
        lastWeek: 89000,
        weeklyGrowth: -4,
        monthlyTarget: 380000,
        monthlyProgress: 65,
        avgTransactionValue: 35,
        transactionCount: 2430
      }
    }
  ]
};

export const individualPubData: IndividualPubData = {
  pubInfo: {
    name: "Albert's Schloss London",
    region: "London - Shaftesbury Avenue",
    manager: "Sophie Chen",
    currentWeek: 47,
    timeWindow: "Nov 18-24, 2024"
  },
  revenueByHour: [
    {
      week: 45,
      weekType: 'historical',
      weekData: [
        {
          day: 'Monday',
          date: 'Nov 4',
          hours: [
            { hour: '12:00', actual: 2800, target: 2500, transactions: 45, avgTransaction: 62 },
            { hour: '13:00', actual: 4200, target: 4000, transactions: 68, avgTransaction: 62 },
            { hour: '14:00', actual: 3800, target: 3500, transactions: 58, avgTransaction: 66 },
            { hour: '15:00', actual: 2200, target: 2000, transactions: 35, avgTransaction: 63 },
            { hour: '16:00', actual: 2800, target: 2500, transactions: 42, avgTransaction: 67 },
            { hour: '17:00', actual: 5200, target: 5000, transactions: 78, avgTransaction: 67 },
            { hour: '18:00', actual: 7800, target: 7500, transactions: 115, avgTransaction: 68 },
            { hour: '19:00', actual: 9200, target: 9000, transactions: 132, avgTransaction: 70 },
            { hour: '20:00', actual: 8800, target: 8500, transactions: 125, avgTransaction: 70 },
            { hour: '21:00', actual: 7200, target: 7000, transactions: 102, avgTransaction: 71 },
            { hour: '22:00', actual: 5800, target: 5500, transactions: 82, avgTransaction: 71 }
          ],
          dailyTotal: 59800,
          dailyTarget: 57000
        },
        {
          day: 'Tuesday',
          date: 'Nov 5',
          hours: [
            { hour: '12:00', actual: 3200, target: 3000, transactions: 48, avgTransaction: 67 },
            { hour: '13:00', actual: 4800, target: 4500, transactions: 72, avgTransaction: 67 },
            { hour: '14:00', actual: 4200, target: 4000, transactions: 62, avgTransaction: 68 },
            { hour: '15:00', actual: 2600, target: 2500, transactions: 38, avgTransaction: 68 },
            { hour: '16:00', actual: 3200, target: 3000, transactions: 46, avgTransaction: 70 },
            { hour: '17:00', actual: 5800, target: 5500, transactions: 82, avgTransaction: 71 },
            { hour: '18:00', actual: 8400, target: 8000, transactions: 118, avgTransaction: 71 },
            { hour: '19:00', actual: 9800, target: 9500, transactions: 137, avgTransaction: 72 },
            { hour: '20:00', actual: 9400, target: 9000, transactions: 130, avgTransaction: 72 },
            { hour: '21:00', actual: 7800, target: 7500, transactions: 108, avgTransaction: 72 },
            { hour: '22:00', actual: 6200, target: 6000, transactions: 86, avgTransaction: 72 }
          ],
          dailyTotal: 65400,
          dailyTarget: 62500
        },
        {
          day: 'Wednesday',
          date: 'Nov 6',
          hours: [
            { hour: '12:00', actual: 3400, target: 3200, transactions: 50, avgTransaction: 68 },
            { hour: '13:00', actual: 5200, target: 5000, transactions: 76, avgTransaction: 68 },
            { hour: '14:00', actual: 4600, target: 4300, transactions: 67, avgTransaction: 69 },
            { hour: '15:00', actual: 2800, target: 2600, transactions: 40, avgTransaction: 70 },
            { hour: '16:00', actual: 3600, target: 3400, transactions: 51, avgTransaction: 71 },
            { hour: '17:00', actual: 6200, target: 6000, transactions: 87, avgTransaction: 71 },
            { hour: '18:00', actual: 9000, target: 8500, transactions: 126, avgTransaction: 71 },
            { hour: '19:00', actual: 10400, target: 10000, transactions: 145, avgTransaction: 72 },
            { hour: '20:00', actual: 10000, target: 9500, transactions: 138, avgTransaction: 72 },
            { hour: '21:00', actual: 8200, target: 8000, transactions: 113, avgTransaction: 73 },
            { hour: '22:00', actual: 6600, target: 6300, transactions: 90, avgTransaction: 73 }
          ],
          dailyTotal: 70000,
          dailyTarget: 66800
        },
        {
          day: 'Thursday',
          date: 'Nov 7',
          hours: [
            { hour: '12:00', actual: 3800, target: 3500, transactions: 54, avgTransaction: 70 },
            { hour: '13:00', actual: 5800, target: 5500, transactions: 82, avgTransaction: 71 },
            { hour: '14:00', actual: 5200, target: 4800, transactions: 73, avgTransaction: 71 },
            { hour: '15:00', actual: 3200, target: 3000, transactions: 45, avgTransaction: 71 },
            { hour: '16:00', actual: 4000, target: 3800, transactions: 56, avgTransaction: 71 },
            { hour: '17:00', actual: 7000, target: 6500, transactions: 98, avgTransaction: 71 },
            { hour: '18:00', actual: 10200, target: 9500, transactions: 143, avgTransaction: 71 },
            { hour: '19:00', actual: 12000, target: 11500, transactions: 168, avgTransaction: 71 },
            { hour: '20:00', actual: 11600, target: 11000, transactions: 163, avgTransaction: 71 },
            { hour: '21:00', actual: 9600, target: 9000, transactions: 135, avgTransaction: 71 },
            { hour: '22:00', actual: 7800, target: 7200, transactions: 110, avgTransaction: 71 }
          ],
          dailyTotal: 80200,
          dailyTarget: 75300
        },
        {
          day: 'Friday',
          date: 'Nov 8',
          hours: [
            { hour: '12:00', actual: 4200, target: 4000, transactions: 58, avgTransaction: 72 },
            { hour: '13:00', actual: 6400, target: 6000, transactions: 88, avgTransaction: 73 },
            { hour: '14:00', actual: 5800, target: 5500, transactions: 79, avgTransaction: 73 },
            { hour: '15:00', actual: 3800, target: 3500, transactions: 52, avgTransaction: 73 },
            { hour: '16:00', actual: 4600, target: 4200, transactions: 63, avgTransaction: 73 },
            { hour: '17:00', actual: 8200, target: 7500, transactions: 112, avgTransaction: 73 },
            { hour: '18:00', actual: 12000, target: 11000, transactions: 164, avgTransaction: 73 },
            { hour: '19:00', actual: 14400, target: 13500, transactions: 197, avgTransaction: 73 },
            { hour: '20:00', actual: 14000, target: 13000, transactions: 192, avgTransaction: 73 },
            { hour: '21:00', actual: 11800, target: 11000, transactions: 162, avgTransaction: 73 },
            { hour: '22:00', actual: 9600, target: 9000, transactions: 132, avgTransaction: 73 }
          ],
          dailyTotal: 94800,
          dailyTarget: 88200
        },
        {
          day: 'Saturday',
          date: 'Nov 9',
          hours: [
            { hour: '12:00', actual: 5000, target: 4500, transactions: 67, avgTransaction: 75 },
            { hour: '13:00', actual: 7200, target: 6800, transactions: 96, avgTransaction: 75 },
            { hour: '14:00', actual: 6800, target: 6200, transactions: 91, avgTransaction: 75 },
            { hour: '15:00', actual: 4800, target: 4200, transactions: 64, avgTransaction: 75 },
            { hour: '16:00', actual: 5600, target: 5000, transactions: 75, avgTransaction: 75 },
            { hour: '17:00', actual: 9200, target: 8500, transactions: 123, avgTransaction: 75 },
            { hour: '18:00', actual: 13200, target: 12000, transactions: 176, avgTransaction: 75 },
            { hour: '19:00', actual: 15600, target: 14500, transactions: 208, avgTransaction: 75 },
            { hour: '20:00', actual: 15200, target: 14000, transactions: 203, avgTransaction: 75 },
            { hour: '21:00', actual: 12800, target: 12000, transactions: 171, avgTransaction: 75 },
            { hour: '22:00', actual: 10400, target: 9500, transactions: 139, avgTransaction: 75 }
          ],
          dailyTotal: 105800,
          dailyTarget: 97200
        },
        {
          day: 'Sunday',
          date: 'Nov 10',
          hours: [
            { hour: '12:00', actual: 4000, target: 3800, transactions: 57, avgTransaction: 70 },
            { hour: '13:00', actual: 5800, target: 5500, transactions: 83, avgTransaction: 70 },
            { hour: '14:00', actual: 5200, target: 4800, transactions: 74, avgTransaction: 70 },
            { hour: '15:00', actual: 3600, target: 3200, transactions: 51, avgTransaction: 71 },
            { hour: '16:00', actual: 4200, target: 3800, transactions: 59, avgTransaction: 71 },
            { hour: '17:00', actual: 6800, target: 6200, transactions: 96, avgTransaction: 71 },
            { hour: '18:00', actual: 9200, target: 8500, transactions: 130, avgTransaction: 71 },
            { hour: '19:00', actual: 10400, target: 9800, transactions: 147, avgTransaction: 71 },
            { hour: '20:00', actual: 9800, target: 9200, transactions: 138, avgTransaction: 71 },
            { hour: '21:00', actual: 7800, target: 7200, transactions: 110, avgTransaction: 71 },
            { hour: '22:00', actual: 6200, target: 5800, transactions: 87, avgTransaction: 71 }
          ],
          dailyTotal: 73000,
          dailyTarget: 67800
        }
      ],
      weeklyTotal: 549000,
      weeklyTarget: 515300,
      performanceVsTarget: 6.5
    },
    {
      week: 46,
      weekType: 'historical',
      weekData: [
        {
          day: 'Monday',
          date: 'Nov 11',
          hours: [
            { hour: '12:00', actual: 3000, target: 2500, transactions: 47, avgTransaction: 64 },
            { hour: '13:00', actual: 4400, target: 4000, transactions: 69, avgTransaction: 64 },
            { hour: '14:00', actual: 4000, target: 3500, transactions: 63, avgTransaction: 64 },
            { hour: '15:00', actual: 2400, target: 2000, transactions: 38, avgTransaction: 63 },
            { hour: '16:00', actual: 3000, target: 2500, transactions: 48, avgTransaction: 63 },
            { hour: '17:00', actual: 5400, target: 5000, transactions: 86, avgTransaction: 63 },
            { hour: '18:00', actual: 8000, target: 7500, transactions: 127, avgTransaction: 63 },
            { hour: '19:00', actual: 9400, target: 9000, transactions: 149, avgTransaction: 63 },
            { hour: '20:00', actual: 9000, target: 8500, transactions: 143, avgTransaction: 63 },
            { hour: '21:00', actual: 7400, target: 7000, transactions: 117, avgTransaction: 63 },
            { hour: '22:00', actual: 6000, target: 5500, transactions: 95, avgTransaction: 63 }
          ],
          dailyTotal: 62000,
          dailyTarget: 57000
        },
        {
          day: 'Tuesday',
          date: 'Nov 12',
          hours: [
            { hour: '12:00', actual: 3400, target: 3000, transactions: 52, avgTransaction: 65 },
            { hour: '13:00', actual: 5000, target: 4500, transactions: 77, avgTransaction: 65 },
            { hour: '14:00', actual: 4400, target: 4000, transactions: 68, avgTransaction: 65 },
            { hour: '15:00', actual: 2800, target: 2500, transactions: 43, avgTransaction: 65 },
            { hour: '16:00', actual: 3400, target: 3000, transactions: 52, avgTransaction: 65 },
            { hour: '17:00', actual: 6000, target: 5500, transactions: 92, avgTransaction: 65 },
            { hour: '18:00', actual: 8600, target: 8000, transactions: 132, avgTransaction: 65 },
            { hour: '19:00', actual: 10000, target: 9500, transactions: 154, avgTransaction: 65 },
            { hour: '20:00', actual: 9600, target: 9000, transactions: 148, avgTransaction: 65 },
            { hour: '21:00', actual: 8000, target: 7500, transactions: 123, avgTransaction: 65 },
            { hour: '22:00', actual: 6400, target: 6000, transactions: 98, avgTransaction: 65 }
          ],
          dailyTotal: 67600,
          dailyTarget: 62500
        },
        {
          day: 'Wednesday',
          date: 'Nov 13',
          hours: [
            { hour: '12:00', actual: 3600, target: 3200, transactions: 54, avgTransaction: 67 },
            { hour: '13:00', actual: 5400, target: 5000, transactions: 81, avgTransaction: 67 },
            { hour: '14:00', actual: 4800, target: 4300, transactions: 72, avgTransaction: 67 },
            { hour: '15:00', actual: 3000, target: 2600, transactions: 45, avgTransaction: 67 },
            { hour: '16:00', actual: 3800, target: 3400, transactions: 57, avgTransaction: 67 },
            { hour: '17:00', actual: 6400, target: 6000, transactions: 96, avgTransaction: 67 },
            { hour: '18:00', actual: 9200, target: 8500, transactions: 137, avgTransaction: 67 },
            { hour: '19:00', actual: 10600, target: 10000, transactions: 158, avgTransaction: 67 },
            { hour: '20:00', actual: 10200, target: 9500, transactions: 152, avgTransaction: 67 },
            { hour: '21:00', actual: 8400, target: 8000, transactions: 125, avgTransaction: 67 },
            { hour: '22:00', actual: 6800, target: 6300, transactions: 101, avgTransaction: 67 }
          ],
          dailyTotal: 72200,
          dailyTarget: 66800
        },
        {
          day: 'Thursday',
          date: 'Nov 14',
          hours: [
            { hour: '12:00', actual: 4000, target: 3500, transactions: 58, avgTransaction: 69 },
            { hour: '13:00', actual: 6000, target: 5500, transactions: 87, avgTransaction: 69 },
            { hour: '14:00', actual: 5400, target: 4800, transactions: 78, avgTransaction: 69 },
            { hour: '15:00', actual: 3400, target: 3000, transactions: 49, avgTransaction: 69 },
            { hour: '16:00', actual: 4200, target: 3800, transactions: 61, avgTransaction: 69 },
            { hour: '17:00', actual: 7200, target: 6500, transactions: 104, avgTransaction: 69 },
            { hour: '18:00', actual: 10400, target: 9500, transactions: 151, avgTransaction: 69 },
            { hour: '19:00', actual: 12200, target: 11500, transactions: 177, avgTransaction: 69 },
            { hour: '20:00', actual: 11800, target: 11000, transactions: 171, avgTransaction: 69 },
            { hour: '21:00', actual: 9800, target: 9000, transactions: 142, avgTransaction: 69 },
            { hour: '22:00', actual: 8000, target: 7200, transactions: 116, avgTransaction: 69 }
          ],
          dailyTotal: 82400,
          dailyTarget: 75300
        },
        {
          day: 'Friday',
          date: 'Nov 15',
          hours: [
            { hour: '12:00', actual: 4400, target: 4000, transactions: 62, avgTransaction: 71 },
            { hour: '13:00', actual: 6600, target: 6000, transactions: 93, avgTransaction: 71 },
            { hour: '14:00', actual: 6000, target: 5500, transactions: 85, avgTransaction: 71 },
            { hour: '15:00', actual: 4000, target: 3500, transactions: 56, avgTransaction: 71 },
            { hour: '16:00', actual: 4800, target: 4200, transactions: 68, avgTransaction: 71 },
            { hour: '17:00', actual: 8400, target: 7500, transactions: 118, avgTransaction: 71 },
            { hour: '18:00', actual: 12200, target: 11000, transactions: 172, avgTransaction: 71 },
            { hour: '19:00', actual: 14600, target: 13500, transactions: 206, avgTransaction: 71 },
            { hour: '20:00', actual: 14200, target: 13000, transactions: 200, avgTransaction: 71 },
            { hour: '21:00', actual: 12000, target: 11000, transactions: 169, avgTransaction: 71 },
            { hour: '22:00', actual: 9800, target: 9000, transactions: 138, avgTransaction: 71 }
          ],
          dailyTotal: 97000,
          dailyTarget: 88200
        },
        {
          day: 'Saturday',
          date: 'Nov 16',
          hours: [
            { hour: '12:00', actual: 5200, target: 4500, transactions: 71, avgTransaction: 73 },
            { hour: '13:00', actual: 7400, target: 6800, transactions: 101, avgTransaction: 73 },
            { hour: '14:00', actual: 7000, target: 6200, transactions: 96, avgTransaction: 73 },
            { hour: '15:00', actual: 5000, target: 4200, transactions: 68, avgTransaction: 73 },
            { hour: '16:00', actual: 5800, target: 5000, transactions: 79, avgTransaction: 73 },
            { hour: '17:00', actual: 9400, target: 8500, transactions: 129, avgTransaction: 73 },
            { hour: '18:00', actual: 13400, target: 12000, transactions: 184, avgTransaction: 73 },
            { hour: '19:00', actual: 15800, target: 14500, transactions: 216, avgTransaction: 73 },
            { hour: '20:00', actual: 15400, target: 14000, transactions: 211, avgTransaction: 73 },
            { hour: '21:00', actual: 13000, target: 12000, transactions: 178, avgTransaction: 73 },
            { hour: '22:00', actual: 10600, target: 9500, transactions: 145, avgTransaction: 73 }
          ],
          dailyTotal: 108000,
          dailyTarget: 97200
        },
        {
          day: 'Sunday',
          date: 'Nov 17',
          hours: [
            { hour: '12:00', actual: 4200, target: 3800, transactions: 60, avgTransaction: 70 },
            { hour: '13:00', actual: 6000, target: 5500, transactions: 86, avgTransaction: 70 },
            { hour: '14:00', actual: 5400, target: 4800, transactions: 77, avgTransaction: 70 },
            { hour: '15:00', actual: 3800, target: 3200, transactions: 54, avgTransaction: 70 },
            { hour: '16:00', actual: 4400, target: 3800, transactions: 63, avgTransaction: 70 },
            { hour: '17:00', actual: 7000, target: 6200, transactions: 100, avgTransaction: 70 },
            { hour: '18:00', actual: 9400, target: 8500, transactions: 134, avgTransaction: 70 },
            { hour: '19:00', actual: 10600, target: 9800, transactions: 151, avgTransaction: 70 },
            { hour: '20:00', actual: 10000, target: 9200, transactions: 143, avgTransaction: 70 },
            { hour: '21:00', actual: 8000, target: 7200, transactions: 114, avgTransaction: 70 },
            { hour: '22:00', actual: 6400, target: 5800, transactions: 91, avgTransaction: 70 }
          ],
          dailyTotal: 75200,
          dailyTarget: 67800
        }
      ],
      weeklyTotal: 564400,
      weeklyTarget: 515300,
      performanceVsTarget: 9.5
    },
    {
      week: 47,
      weekType: 'current',
      weekData: [
        {
          day: 'Monday',
          date: 'Nov 18',
          hours: [
            { hour: '12:00', actual: 3200, target: 2500, transactions: 49, avgTransaction: 65 },
            { hour: '13:00', actual: 4600, target: 4000, transactions: 71, avgTransaction: 65 },
            { hour: '14:00', actual: 4200, target: 3500, transactions: 65, avgTransaction: 65 },
            { hour: '15:00', actual: 2600, target: 2000, transactions: 40, avgTransaction: 65 },
            { hour: '16:00', actual: 3200, target: 2500, transactions: 49, avgTransaction: 65 },
            { hour: '17:00', actual: 5600, target: 5000, transactions: 86, avgTransaction: 65 },
            { hour: '18:00', actual: 8200, target: 7500, transactions: 126, avgTransaction: 65 },
            { hour: '19:00', actual: 9600, target: 9000, transactions: 148, avgTransaction: 65 },
            { hour: '20:00', actual: 9200, target: 8500, transactions: 142, avgTransaction: 65 },
            { hour: '21:00', actual: 7600, target: 7000, transactions: 117, avgTransaction: 65 },
            { hour: '22:00', actual: 6200, target: 5500, transactions: 95, avgTransaction: 65 }
          ],
          dailyTotal: 64000,
          dailyTarget: 57000
        },
        {
          day: 'Tuesday',
          date: 'Nov 19',
          hours: [
            { hour: '12:00', actual: 3600, target: 3000, transactions: 54, avgTransaction: 67 },
            { hour: '13:00', actual: 5200, target: 4500, transactions: 78, avgTransaction: 67 },
            { hour: '14:00', actual: 4600, target: 4000, transactions: 69, avgTransaction: 67 },
            { hour: '15:00', actual: 3000, target: 2500, transactions: 45, avgTransaction: 67 },
            { hour: '16:00', actual: 3600, target: 3000, transactions: 54, avgTransaction: 67 },
            { hour: '17:00', actual: 6200, target: 5500, transactions: 93, avgTransaction: 67 },
            { hour: '18:00', actual: 8800, target: 8000, transactions: 131, avgTransaction: 67 },
            { hour: '19:00', actual: 10200, target: 9500, transactions: 152, avgTransaction: 67 },
            { hour: '20:00', actual: 9800, target: 9000, transactions: 146, avgTransaction: 67 },
            { hour: '21:00', actual: 8200, target: 7500, transactions: 122, avgTransaction: 67 },
            { hour: '22:00', actual: 6600, target: 6000, transactions: 99, avgTransaction: 67 }
          ],
          dailyTotal: 69800,
          dailyTarget: 62500
        },
        {
          day: 'Wednesday',
          date: 'Nov 20',
          hours: [
            { hour: '12:00', actual: 3800, target: 3200, transactions: 55, avgTransaction: 69 },
            { hour: '13:00', actual: 5600, target: 5000, transactions: 81, avgTransaction: 69 },
            { hour: '14:00', actual: 5000, target: 4300, transactions: 72, avgTransaction: 69 },
            { hour: '15:00', actual: 3200, target: 2600, transactions: 46, avgTransaction: 69 },
            { hour: '16:00', actual: 4000, target: 3400, transactions: 58, avgTransaction: 69 },
            { hour: '17:00', actual: 6600, target: 6000, transactions: 96, avgTransaction: 69 },
            { hour: '18:00', actual: 9400, target: 8500, transactions: 136, avgTransaction: 69 },
            { hour: '19:00', actual: 10800, target: 10000, transactions: 157, avgTransaction: 69 },
            { hour: '20:00', actual: 10400, target: 9500, transactions: 151, avgTransaction: 69 },
            { hour: '21:00', actual: 8600, target: 8000, transactions: 125, avgTransaction: 69 },
            { hour: '22:00', actual: 7000, target: 6300, transactions: 101, avgTransaction: 69 }
          ],
          dailyTotal: 74400,
          dailyTarget: 66800
        },
        {
          day: 'Thursday',
          date: 'Nov 21',
          hours: [
            { hour: '12:00', actual: 4200, target: 3500, transactions: 60, avgTransaction: 70 },
            { hour: '13:00', actual: 6200, target: 5500, transactions: 89, avgTransaction: 70 },
            { hour: '14:00', actual: 5600, target: 4800, transactions: 80, avgTransaction: 70 },
            { hour: '15:00', actual: 3600, target: 3000, transactions: 51, avgTransaction: 70 },
            { hour: '16:00', actual: 4400, target: 3800, transactions: 63, avgTransaction: 70 },
            { hour: '17:00', actual: 7400, target: 6500, transactions: 106, avgTransaction: 70 },
            { hour: '18:00', actual: 10600, target: 9500, transactions: 151, avgTransaction: 70 },
            { hour: '19:00', actual: 12400, target: 11500, transactions: 177, avgTransaction: 70 },
            { hour: '20:00', actual: 12000, target: 11000, transactions: 171, avgTransaction: 70 },
            { hour: '21:00', actual: 10000, target: 9000, transactions: 143, avgTransaction: 70 },
            { hour: '22:00', actual: 8200, target: 7200, transactions: 117, avgTransaction: 70 }
          ],
          dailyTotal: 84600,
          dailyTarget: 75300
        },
        {
          day: 'Friday',
          date: 'Nov 22',
          hours: [
            { hour: '12:00', actual: 4600, target: 4000, transactions: 64, avgTransaction: 72 },
            { hour: '13:00', actual: 6800, target: 6000, transactions: 94, avgTransaction: 72 },
            { hour: '14:00', actual: 6200, target: 5500, transactions: 86, avgTransaction: 72 },
            { hour: '15:00', actual: 4200, target: 3500, transactions: 58, avgTransaction: 72 },
            { hour: '16:00', actual: 5000, target: 4200, transactions: 69, avgTransaction: 72 },
            { hour: '17:00', actual: 8600, target: 7500, transactions: 119, avgTransaction: 72 },
            { hour: '18:00', actual: 12400, target: 11000, transactions: 172, avgTransaction: 72 },
            { hour: '19:00', actual: 14800, target: 13500, transactions: 206, avgTransaction: 72 },
            { hour: '20:00', actual: 14400, target: 13000, transactions: 200, avgTransaction: 72 },
            { hour: '21:00', actual: 12200, target: 11000, transactions: 169, avgTransaction: 72 },
            { hour: '22:00', actual: 10000, target: 9000, transactions: 139, avgTransaction: 72 }
          ],
          dailyTotal: 99200,
          dailyTarget: 88200
        },
        {
          day: 'Saturday',
          date: 'Nov 23',
          hours: [
            { hour: '12:00', actual: 5400, target: 4500, transactions: 72, avgTransaction: 75 },
            { hour: '13:00', actual: 7600, target: 6800, transactions: 101, avgTransaction: 75 },
            { hour: '14:00', actual: 7200, target: 6200, transactions: 96, avgTransaction: 75 },
            { hour: '15:00', actual: 5200, target: 4200, transactions: 69, avgTransaction: 75 },
            { hour: '16:00', actual: 6000, target: 5000, transactions: 80, avgTransaction: 75 },
            { hour: '17:00', actual: 9600, target: 8500, transactions: 128, avgTransaction: 75 },
            { hour: '18:00', actual: 13600, target: 12000, transactions: 181, avgTransaction: 75 },
            { hour: '19:00', actual: 16000, target: 14500, transactions: 213, avgTransaction: 75 },
            { hour: '20:00', actual: 15600, target: 14000, transactions: 208, avgTransaction: 75 },
            { hour: '21:00', actual: 13200, target: 12000, transactions: 176, avgTransaction: 75 },
            { hour: '22:00', actual: 10800, target: 9500, transactions: 144, avgTransaction: 75 }
          ],
          dailyTotal: 110200,
          dailyTarget: 97200
        },
        {
          day: 'Sunday',
          date: 'Nov 24',
          hours: [
            { hour: '12:00', actual: 4400, target: 3800, transactions: 61, avgTransaction: 72 },
            { hour: '13:00', actual: 6200, target: 5500, transactions: 86, avgTransaction: 72 },
            { hour: '14:00', actual: 5600, target: 4800, transactions: 78, avgTransaction: 72 },
            { hour: '15:00', actual: 4000, target: 3200, transactions: 56, avgTransaction: 72 },
            { hour: '16:00', actual: 4600, target: 3800, transactions: 64, avgTransaction: 72 },
            { hour: '17:00', actual: 7200, target: 6200, transactions: 100, avgTransaction: 72 },
            { hour: '18:00', actual: 9600, target: 8500, transactions: 133, avgTransaction: 72 },
            { hour: '19:00', actual: 10800, target: 9800, transactions: 150, avgTransaction: 72 },
            { hour: '20:00', actual: 10200, target: 9200, transactions: 142, avgTransaction: 72 },
            { hour: '21:00', actual: 8200, target: 7200, transactions: 114, avgTransaction: 72 },
            { hour: '22:00', actual: 6600, target: 5800, transactions: 92, avgTransaction: 72 }
          ],
          dailyTotal: 77400,
          dailyTarget: 67800
        }
      ],
      weeklyTotal: 579600,
      weeklyTarget: 515300,
      performanceVsTarget: 12.5
    },
    {
      week: 48,
      weekType: 'forecast',
      weekData: [
        {
          day: 'Monday',
          date: 'Nov 25',
          hours: [
            { hour: '12:00', actual: 0, target: 3400, transactions: 52, avgTransaction: 65 },
            { hour: '13:00', actual: 0, target: 4800, transactions: 74, avgTransaction: 65 },
            { hour: '14:00', actual: 0, target: 4400, transactions: 68, avgTransaction: 65 },
            { hour: '15:00', actual: 0, target: 2800, transactions: 43, avgTransaction: 65 },
            { hour: '16:00', actual: 0, target: 3400, transactions: 52, avgTransaction: 65 },
            { hour: '17:00', actual: 0, target: 5800, transactions: 89, avgTransaction: 65 },
            { hour: '18:00', actual: 0, target: 8400, transactions: 129, avgTransaction: 65 },
            { hour: '19:00', actual: 0, target: 9800, transactions: 151, avgTransaction: 65 },
            { hour: '20:00', actual: 0, target: 9400, transactions: 145, avgTransaction: 65 },
            { hour: '21:00', actual: 0, target: 7800, transactions: 120, avgTransaction: 65 },
            { hour: '22:00', actual: 0, target: 6400, transactions: 98, avgTransaction: 65 }
          ],
          dailyTotal: 0,
          dailyTarget: 66200
        },
        {
          day: 'Tuesday',
          date: 'Nov 26',
          hours: [
            { hour: '12:00', actual: 0, target: 3800, transactions: 57, avgTransaction: 67 },
            { hour: '13:00', actual: 0, target: 5400, transactions: 81, avgTransaction: 67 },
            { hour: '14:00', actual: 0, target: 4800, transactions: 72, avgTransaction: 67 },
            { hour: '15:00', actual: 0, target: 3200, transactions: 48, avgTransaction: 67 },
            { hour: '16:00', actual: 0, target: 3800, transactions: 57, avgTransaction: 67 },
            { hour: '17:00', actual: 0, target: 6400, transactions: 96, avgTransaction: 67 },
            { hour: '18:00', actual: 0, target: 9000, transactions: 134, avgTransaction: 67 },
            { hour: '19:00', actual: 0, target: 10400, transactions: 155, avgTransaction: 67 },
            { hour: '20:00', actual: 0, target: 10000, transactions: 149, avgTransaction: 67 },
            { hour: '21:00', actual: 0, target: 8400, transactions: 125, avgTransaction: 67 },
            { hour: '22:00', actual: 0, target: 6800, transactions: 101, avgTransaction: 67 }
          ],
          dailyTotal: 0,
          dailyTarget: 72000
        },
        {
          day: 'Wednesday',
          date: 'Nov 27',
          hours: [
            { hour: '12:00', actual: 0, target: 4000, transactions: 58, avgTransaction: 69 },
            { hour: '13:00', actual: 0, target: 5800, transactions: 84, avgTransaction: 69 },
            { hour: '14:00', actual: 0, target: 5200, transactions: 75, avgTransaction: 69 },
            { hour: '15:00', actual: 0, target: 3400, transactions: 49, avgTransaction: 69 },
            { hour: '16:00', actual: 0, target: 4200, transactions: 61, avgTransaction: 69 },
            { hour: '17:00', actual: 0, target: 6800, transactions: 99, avgTransaction: 69 },
            { hour: '18:00', actual: 0, target: 9600, transactions: 139, avgTransaction: 69 },
            { hour: '19:00', actual: 0, target: 11000, transactions: 159, avgTransaction: 69 },
            { hour: '20:00', actual: 0, target: 10600, transactions: 154, avgTransaction: 69 },
            { hour: '21:00', actual: 0, target: 8800, transactions: 128, avgTransaction: 69 },
            { hour: '22:00', actual: 0, target: 7200, transactions: 104, avgTransaction: 69 }
          ],
          dailyTotal: 0,
          dailyTarget: 76600
        },
        {
          day: 'Thursday',
          date: 'Nov 28',
          hours: [
            { hour: '12:00', actual: 0, target: 4400, transactions: 63, avgTransaction: 70 },
            { hour: '13:00', actual: 0, target: 6400, transactions: 91, avgTransaction: 70 },
            { hour: '14:00', actual: 0, target: 5800, transactions: 83, avgTransaction: 70 },
            { hour: '15:00', actual: 0, target: 3800, transactions: 54, avgTransaction: 70 },
            { hour: '16:00', actual: 0, target: 4600, transactions: 66, avgTransaction: 70 },
            { hour: '17:00', actual: 0, target: 7600, transactions: 109, avgTransaction: 70 },
            { hour: '18:00', actual: 0, target: 10800, transactions: 154, avgTransaction: 70 },
            { hour: '19:00', actual: 0, target: 12600, transactions: 180, avgTransaction: 70 },
            { hour: '20:00', actual: 0, target: 12200, transactions: 174, avgTransaction: 70 },
            { hour: '21:00', actual: 0, target: 10200, transactions: 146, avgTransaction: 70 },
            { hour: '22:00', actual: 0, target: 8400, transactions: 120, avgTransaction: 70 }
          ],
          dailyTotal: 0,
          dailyTarget: 86800
        },
        {
          day: 'Friday',
          date: 'Nov 29',
          hours: [
            { hour: '12:00', actual: 0, target: 4800, transactions: 67, avgTransaction: 72 },
            { hour: '13:00', actual: 0, target: 7000, transactions: 97, avgTransaction: 72 },
            { hour: '14:00', actual: 0, target: 6400, transactions: 89, avgTransaction: 72 },
            { hour: '15:00', actual: 0, target: 4400, transactions: 61, avgTransaction: 72 },
            { hour: '16:00', actual: 0, target: 5200, transactions: 72, avgTransaction: 72 },
            { hour: '17:00', actual: 0, target: 8800, transactions: 122, avgTransaction: 72 },
            { hour: '18:00', actual: 0, target: 12600, transactions: 175, avgTransaction: 72 },
            { hour: '19:00', actual: 0, target: 15000, transactions: 208, avgTransaction: 72 },
            { hour: '20:00', actual: 0, target: 14600, transactions: 203, avgTransaction: 72 },
            { hour: '21:00', actual: 0, target: 12400, transactions: 172, avgTransaction: 72 },
            { hour: '22:00', actual: 0, target: 10200, transactions: 142, avgTransaction: 72 }
          ],
          dailyTotal: 0,
          dailyTarget: 101400
        },
        {
          day: 'Saturday',
          date: 'Nov 30',
          hours: [
            { hour: '12:00', actual: 0, target: 5600, transactions: 75, avgTransaction: 75 },
            { hour: '13:00', actual: 0, target: 7800, transactions: 104, avgTransaction: 75 },
            { hour: '14:00', actual: 0, target: 7400, transactions: 99, avgTransaction: 75 },
            { hour: '15:00', actual: 0, target: 5400, transactions: 72, avgTransaction: 75 },
            { hour: '16:00', actual: 0, target: 6200, transactions: 83, avgTransaction: 75 },
            { hour: '17:00', actual: 0, target: 9800, transactions: 131, avgTransaction: 75 },
            { hour: '18:00', actual: 0, target: 13800, transactions: 184, avgTransaction: 75 },
            { hour: '19:00', actual: 0, target: 16200, transactions: 216, avgTransaction: 75 },
            { hour: '20:00', actual: 0, target: 15800, transactions: 211, avgTransaction: 75 },
            { hour: '21:00', actual: 0, target: 13400, transactions: 179, avgTransaction: 75 },
            { hour: '22:00', actual: 0, target: 11000, transactions: 147, avgTransaction: 75 }
          ],
          dailyTotal: 0,
          dailyTarget: 112400
        },
        {
          day: 'Sunday',
          date: 'Dec 1',
          hours: [
            { hour: '12:00', actual: 0, target: 4600, transactions: 64, avgTransaction: 72 },
            { hour: '13:00', actual: 0, target: 6400, transactions: 89, avgTransaction: 72 },
            { hour: '14:00', actual: 0, target: 5800, transactions: 81, avgTransaction: 72 },
            { hour: '15:00', actual: 0, target: 4200, transactions: 58, avgTransaction: 72 },
            { hour: '16:00', actual: 0, target: 4800, transactions: 67, avgTransaction: 72 },
            { hour: '17:00', actual: 0, target: 7400, transactions: 103, avgTransaction: 72 },
            { hour: '18:00', actual: 0, target: 9800, transactions: 136, avgTransaction: 72 },
            { hour: '19:00', actual: 0, target: 11000, transactions: 153, avgTransaction: 72 },
            { hour: '20:00', actual: 0, target: 10400, transactions: 144, avgTransaction: 72 },
            { hour: '21:00', actual: 0, target: 8400, transactions: 117, avgTransaction: 72 },
            { hour: '22:00', actual: 0, target: 6800, transactions: 94, avgTransaction: 72 }
          ],
          dailyTotal: 0,
          dailyTarget: 79600
        }
      ],
      weeklyTotal: 0,
      weeklyTarget: 595000,
      performanceVsTarget: 0
    }
  ],
  leadingIndicators: {
    guestMomentum: {
      checkinsThisWeek: 2847,
      checkinsLastWeek: 2234,
      checkinsGrowth: 27,
      trendForecast: "Strong upward momentum driven by festive season and London venue popularity"
    },
    bookingHealth: {
      forwardBookings: {
        thisWeek: 1456,
        nextWeek: 1823,
        weekAfter: 2134
      },
      conversionRate: 78,
      cancellationRate: 8,
      noShowRate: 4
    },
    socialPulse: {
      weeklyMentions: 847,
      sentimentScore: 8.7,
      engagementRate: 12.4,
      reviewVelocity: 23
    }
  },
  sixWeekView: {
    historical: [
      {
        week: 42,
        checkins: 1834,
        bookings: 1245,
        revenue: 485000,
        weather: "rainy",
        events: ["Halloween prep"]
      },
      {
        week: 43,
        checkins: 2156,
        bookings: 1456,
        revenue: 523000,
        weather: "cold",
        events: ["Halloween weekend", "Live jazz nights"]
      },
      {
        week: 44,
        checkins: 2089,
        bookings: 1389,
        revenue: 512000,
        weather: "cloudy",
        events: ["Bonfire Night", "Acoustic sessions"]
      }
    ],
    forecast: [
      {
        week: 48,
        expectedCheckins: 3200,
        predictedBookings: 2100,
        forecastRevenue: 595000,
        weather: "cold",
        events: ["Christmas market launch", "Festive menu", "Live music weekends"]
      },
      {
        week: 49,
        expectedCheckins: 3450,
        predictedBookings: 2300,
        forecastRevenue: 625000,
        weather: "cold",
        events: ["Christmas parties", "Corporate bookings", "Weekend entertainment"]
      },
      {
        week: 50,
        expectedCheckins: 3800,
        predictedBookings: 2500,
        forecastRevenue: 685000,
        weather: "cold",
        events: ["Pre-Christmas rush", "Office parties", "Special events"]
      }
    ]
  }
};

export const recommendations: Recommendation[] = [
  {
    category: 'direct-venue',
    priority: 'important',
    title: 'Optimize Thursday Evening Entertainment',
    insight: 'London venue shows 15% lower Thursday evening revenue vs Friday/Saturday despite similar capacity. Historical data shows live music increases Thursday revenue by 22%.',
    action: 'Book acoustic duo or jazz ensemble for Thursday evenings (7-10pm) to drive footfall and extend dwell time',
    impact: '+£2,800 weekly revenue increase',
    timeframe: '2-week trial period',
    weatherFactor: 'Indoor entertainment ideal for winter months',
    loyaltyData: 'Regular customers show 35% higher spend during live music events'
  },
  {
    category: 'promotional',
    priority: 'opportunity',
    title: 'Leverage Sunny Weather Forecast',
    insight: 'Weather data shows sunny conditions Thursday-Saturday. Historical analysis shows 28% increase in outdoor seating bookings during sunny periods.',
    action: 'Promote outdoor seating and garden menu via social media and email marketing. Create "Sunshine Special" cocktail menu.',
    impact: '+£1,200 incremental revenue',
    timeframe: 'This week implementation',
    weatherFactor: 'Sunny conditions forecast for 3 consecutive days',
    loyaltyData: 'Outdoor diners have 18% higher average transaction value'
  },
  {
    category: 'operational',
    priority: 'urgent',
    title: 'Staff Upselling Training Focus',
    insight: 'Average transaction value £45 vs £52 target. Mystery shopper data shows only 23% of staff proactively suggest wine pairings or desserts.',
    action: 'Implement focused upselling training for 3 key staff members on wine pairings and dessert recommendations',
    impact: '+£156 daily average transaction increase',
    timeframe: 'Complete by end of week',
    complianceRisk: 'Ensure responsible service of alcohol guidelines maintained'
  }
];

export const implementedRecommendations: ImplementedRecommendation[] = [
  {
    id: '1',
    originalRecommendation: {
      title: 'Introduce Weekend Brunch Service',
      insight: 'Saturday/Sunday 11am-2pm slot showing zero revenue. Competitor analysis shows brunch market opportunity.',
      action: 'Launch weekend brunch menu with bottomless prosecco option',
      impact: '+£3,200 weekly revenue',
      timeframe: '4-week trial'
    },
    implementedDate: '2024-10-15',
    weekImplemented: 42,
    actionTaken: 'Launched full weekend brunch service with bottomless prosecco, live acoustic music, and Instagram-worthy presentation',
    expectedImpact: '+£3,200 weekly revenue increase',
    actualImpact: '+£4,100 weekly revenue increase',
    impactAchieved: true,
    impactPercentage: 128,
    notes: 'Exceeded expectations due to strong social media buzz and word-of-mouth. Bottomless prosecco proved extremely popular with 25-35 demographic.',
    category: 'direct-venue'
  },
  {
    id: '2',
    originalRecommendation: {
      title: 'Optimize Monday Opening Hours',
      insight: 'Monday 12-3pm showing consistently low footfall and revenue below break-even point.',
      action: 'Trial delayed Monday opening from 12pm to 4pm to reduce operational costs',
      impact: '+£450 weekly cost savings',
      timeframe: '6-week trial'
    },
    implementedDate: '2024-10-22',
    weekImplemented: 43,
    actionTaken: 'Changed Monday opening from 12pm to 4pm, redeployed staff to other high-demand periods',
    expectedImpact: '+£450 weekly cost savings',
    actualImpact: '-£280 weekly revenue loss',
    impactAchieved: false,
    impactPercentage: -62,
    notes: 'Lost some regular lunch customers who moved to competitors. However, staff efficiency improved on other days. Reverted to 12pm opening but with reduced lunch menu.',
    category: 'operational'
  },
  {
    id: '3',
    originalRecommendation: {
      title: 'Launch Cocktail Masterclass Events',
      insight: 'Tuesday/Wednesday evenings underperforming. Events market research shows high demand for experiential dining.',
      action: 'Host weekly cocktail masterclasses on Tuesday evenings with head bartender',
      impact: '+£1,800 weekly revenue',
      timeframe: '8-week program'
    },
    implementedDate: '2024-11-01',
    weekImplemented: 44,
    actionTaken: 'Launched "Mixology Masterclass" every Tuesday 7-9pm, limited to 16 guests, £45 per person including 3 cocktails and canapés',
    expectedImpact: '+£1,800 weekly revenue',
    actualImpact: '+£2,340 weekly revenue',
    impactAchieved: true,
    impactPercentage: 130,
    notes: 'Consistently sold out with waiting list. Strong corporate team-building bookings. Participants often stay for dinner afterwards, driving additional revenue.',
    category: 'direct-venue'
  },
  {
    id: '4',
    originalRecommendation: {
      title: 'Implement Dynamic Pricing for Peak Hours',
      insight: 'Friday/Saturday 7-9pm consistently at capacity while earlier slots underbooked.',
      action: 'Introduce 10% premium pricing for peak Friday/Saturday evening slots',
      impact: '+£2,100 weekly revenue',
      timeframe: '4-week trial'
    },
    implementedDate: '2024-11-08',
    weekImplemented: 45,
    actionTaken: 'Applied 10% surcharge to bookings between 7-9pm Friday/Saturday, communicated as "Peak Dining Experience" with complimentary welcome cocktail',
    expectedImpact: '+£2,100 weekly revenue',
    actualImpact: '+£890 weekly revenue',
    impactPercentage: 42,
    impactAchieved: false,
    notes: 'Some customer resistance to pricing. Booking conversion rate dropped 15% for peak slots. Welcome cocktail helped soften impact but eroded margins. Considering alternative approach.',
    category: 'promotional'
  }
];