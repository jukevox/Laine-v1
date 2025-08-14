import { RegionalData, IndividualPubData, Recommendation } from '../types';

export const regionalData: RegionalData = {
  portfolioSummary: {
    totalPubs: 55,
    revenueMetrics: {
      totalWeeklyRevenue: 1250000,
      revenueGrowth: 8.3,
      avgRevenuePerPub: 22727,
      topPerformingPubs: 12,
      underperformingPubs: 8
    },
    weeklyMomentum: {
      checkinsGrowth: 12.5,
      bookingVelocity: 18.2,
      socialEngagement: 15.7,
      reputationTrend: 6.3
    },
    quarterlyOKRs: [
      {
        objective: "Increase Portfolio Revenue by 15%",
        keyResults: [
          { metric: "Total Revenue Growth", target: 15, current: 12, trend: "up" },
          { metric: "Average Revenue per Pub", target: 15500, current: 14200, trend: "up" },
          { metric: "Pubs Beating Targets", target: 20, current: 12, trend: "up" }
        ]
      }
    ],
    regionBreakdown: [
      {
        region: "London Central",
        pubs: 18,
        momentum: "strong",
        alerts: 2,
        totalRevenue: 485000,
        revenueGrowth: 12.4
      },
      {
        region: "Manchester",
        pubs: 15,
        momentum: "moderate",
        alerts: 3,
        totalRevenue: 385000,
        revenueGrowth: 6.8
      },
      {
        region: "Birmingham",
        pubs: 22,
        momentum: "strong",
        alerts: 1,
        totalRevenue: 380000,
        revenueGrowth: 9.2
      }
    ]
  },
  pubGrid: [
    {
      name: "The Crown & Anchor",
      region: "London Central",
      manager: "Sarah Mitchell",
      status: "strong",
      checkinsVsPrevious: 15,
      bookingTrend: "up",
      reputation: 4.6,
      thisWeekFocus: "Optimize Thursday evening seating",
      nextWeekGoal: "Launch acoustic evening event",
      posRevenue: {
        thisWeek: 28500,
        lastWeek: 26200,
        weeklyGrowth: 8.8,
        monthlyTarget: 115000,
        monthlyProgress: 87,
        avgTransactionValue: 24.50,
        transactionCount: 1163
      }
    },
    {
      name: "The Red Lion",
      region: "Manchester",
      manager: "James Thompson",
      status: "attention",
      checkinsVsPrevious: -8,
      bookingTrend: "down",
      reputation: 4.1,
      thisWeekFocus: "Staff training on upselling",
      nextWeekGoal: "Improve social media presence",
      posRevenue: {
        thisWeek: 18200,
        lastWeek: 19800,
        weeklyGrowth: -8.1,
        monthlyTarget: 82000,
        monthlyProgress: 65,
        avgTransactionValue: 19.75,
        transactionCount: 921
      }
    },
    {
      name: "The Golden Eagle",
      region: "Birmingham",
      manager: "Emma Wilson",
      status: "moderate",
      checkinsVsPrevious: 3,
      bookingTrend: "up",
      reputation: 4.3,
      thisWeekFocus: "Promote weekend brunch",
      nextWeekGoal: "Optimize table turnover",
      posRevenue: {
        thisWeek: 22100,
        lastWeek: 21450,
        weeklyGrowth: 3.0,
        monthlyTarget: 88000,
        monthlyProgress: 78,
        avgTransactionValue: 22.10,
        transactionCount: 1000
      }
    }
  ]
};

export const individualPubData: IndividualPubData = {
  pubInfo: {
    name: "The Crown & Anchor",
    region: "London Central",
    manager: "Sarah Mitchell",
    currentWeek: 43,
    timeWindow: "Oct 21-27, 2024"
  },
  revenueByHour: [
    {
      week: 39,
      weekType: "historical",
      weekData: [
        {
          day: "Monday",
          date: "Sep 23",
          hours: [
            { hour: "11:00", actual: 320, target: 400, transactions: 12, avgTicket: 26.67 },
            { hour: "12:00", actual: 580, target: 650, transactions: 24, avgTicket: 24.17 },
            { hour: "13:00", actual: 720, target: 800, transactions: 32, avgTicket: 22.50 },
            { hour: "14:00", actual: 450, target: 500, transactions: 18, avgTicket: 25.00 },
            { hour: "15:00", actual: 380, target: 420, transactions: 15, avgTicket: 25.33 },
            { hour: "16:00", actual: 420, target: 480, transactions: 17, avgTicket: 24.71 },
            { hour: "17:00", actual: 680, target: 750, transactions: 28, avgTicket: 24.29 },
            { hour: "18:00", actual: 920, target: 1000, transactions: 38, avgTicket: 24.21 },
            { hour: "19:00", actual: 1150, target: 1200, transactions: 46, avgTicket: 25.00 },
            { hour: "20:00", actual: 1080, target: 1100, transactions: 43, avgTicket: 25.12 },
            { hour: "21:00", actual: 890, target: 950, transactions: 35, avgTicket: 25.43 },
            { hour: "22:00", actual: 620, target: 700, transactions: 25, avgTicket: 24.80 }
          ],
          dailyTotal: 8220,
          dailyTarget: 8950
        },
        {
          day: "Tuesday",
          date: "Sep 24",
          hours: [
            { hour: "11:00", actual: 280, target: 350, transactions: 11, avgTicket: 25.45 },
            { hour: "12:00", actual: 520, target: 600, transactions: 22, avgTicket: 23.64 },
            { hour: "13:00", actual: 680, target: 750, transactions: 30, avgTicket: 22.67 },
            { hour: "14:00", actual: 420, target: 480, transactions: 17, avgTicket: 24.71 },
            { hour: "15:00", actual: 360, target: 400, transactions: 14, avgTicket: 25.71 },
            { hour: "16:00", actual: 400, target: 450, transactions: 16, avgTicket: 25.00 },
            { hour: "17:00", actual: 650, target: 720, transactions: 26, avgTicket: 25.00 },
            { hour: "18:00", actual: 880, target: 950, transactions: 36, avgTicket: 24.44 },
            { hour: "19:00", actual: 1100, target: 1150, transactions: 44, avgTicket: 25.00 },
            { hour: "20:00", actual: 1020, target: 1050, transactions: 41, avgTicket: 24.88 },
            { hour: "21:00", actual: 850, target: 900, transactions: 34, avgTicket: 25.00 },
            { hour: "22:00", actual: 580, target: 650, transactions: 23, avgTicket: 25.22 }
          ],
          dailyTotal: 7740,
          dailyTarget: 8450
        },
        {
          day: "Wednesday",
          date: "Sep 25",
          hours: [
            { hour: "11:00", actual: 300, target: 380, transactions: 12, avgTicket: 25.00 },
            { hour: "12:00", actual: 550, target: 620, transactions: 23, avgTicket: 23.91 },
            { hour: "13:00", actual: 700, target: 780, transactions: 31, avgTicket: 22.58 },
            { hour: "14:00", actual: 440, target: 500, transactions: 18, avgTicket: 24.44 },
            { hour: "15:00", actual: 370, target: 410, transactions: 15, avgTicket: 24.67 },
            { hour: "16:00", actual: 410, target: 460, transactions: 17, avgTicket: 24.12 },
            { hour: "17:00", actual: 670, target: 740, transactions: 27, avgTicket: 24.81 },
            { hour: "18:00", actual: 900, target: 980, transactions: 37, avgTicket: 24.32 },
            { hour: "19:00", actual: 1120, target: 1180, transactions: 45, avgTicket: 24.89 },
            { hour: "20:00", actual: 1040, target: 1080, transactions: 42, avgTicket: 24.76 },
            { hour: "21:00", actual: 870, target: 920, transactions: 35, avgTicket: 24.86 },
            { hour: "22:00", actual: 600, target: 680, transactions: 24, avgTicket: 25.00 }
          ],
          dailyTotal: 7970,
          dailyTarget: 8730
        },
        {
          day: "Thursday",
          date: "Sep 26",
          hours: [
            { hour: "11:00", actual: 350, target: 420, transactions: 14, avgTicket: 25.00 },
            { hour: "12:00", actual: 600, target: 680, transactions: 25, avgTicket: 24.00 },
            { hour: "13:00", actual: 750, target: 850, transactions: 33, avgTicket: 22.73 },
            { hour: "14:00", actual: 480, target: 550, transactions: 20, avgTicket: 24.00 },
            { hour: "15:00", actual: 400, target: 450, transactions: 16, avgTicket: 25.00 },
            { hour: "16:00", actual: 450, target: 500, transactions: 18, avgTicket: 25.00 },
            { hour: "17:00", actual: 720, target: 800, transactions: 29, avgTicket: 24.83 },
            { hour: "18:00", actual: 980, target: 1050, transactions: 40, avgTicket: 24.50 },
            { hour: "19:00", actual: 1200, target: 1250, transactions: 48, avgTicket: 25.00 },
            { hour: "20:00", actual: 1120, target: 1150, transactions: 45, avgTicket: 24.89 },
            { hour: "21:00", actual: 920, target: 980, transactions: 37, avgTicket: 24.86 },
            { hour: "22:00", actual: 650, target: 720, transactions: 26, avgTicket: 25.00 }
          ],
          dailyTotal: 8620,
          dailyTarget: 9400
        },
        {
          day: "Friday",
          date: "Sep 27",
          hours: [
            { hour: "11:00", actual: 380, target: 450, transactions: 15, avgTicket: 25.33 },
            { hour: "12:00", actual: 650, target: 720, transactions: 27, avgTicket: 24.07 },
            { hour: "13:00", actual: 800, target: 900, transactions: 35, avgTicket: 22.86 },
            { hour: "14:00", actual: 520, target: 580, transactions: 22, avgTicket: 23.64 },
            { hour: "15:00", actual: 430, target: 480, transactions: 17, avgTicket: 25.29 },
            { hour: "16:00", actual: 480, target: 530, transactions: 19, avgTicket: 25.26 },
            { hour: "17:00", actual: 780, target: 850, transactions: 31, avgTicket: 25.16 },
            { hour: "18:00", actual: 1050, target: 1120, transactions: 42, avgTicket: 25.00 },
            { hour: "19:00", actual: 1300, target: 1350, transactions: 52, avgTicket: 25.00 },
            { hour: "20:00", actual: 1250, target: 1280, transactions: 50, avgTicket: 25.00 },
            { hour: "21:00", actual: 1020, target: 1050, transactions: 41, avgTicket: 24.88 },
            { hour: "22:00", actual: 720, target: 780, transactions: 29, avgTicket: 24.83 }
          ],
          dailyTotal: 9380,
          dailyTarget: 10090
        },
        {
          day: "Saturday",
          date: "Sep 28",
          hours: [
            { hour: "11:00", actual: 420, target: 480, transactions: 17, avgTicket: 24.71 },
            { hour: "12:00", actual: 720, target: 800, transactions: 30, avgTicket: 24.00 },
            { hour: "13:00", actual: 880, target: 950, transactions: 38, avgTicket: 23.16 },
            { hour: "14:00", actual: 580, target: 620, transactions: 24, avgTicket: 24.17 },
            { hour: "15:00", actual: 480, target: 520, transactions: 19, avgTicket: 25.26 },
            { hour: "16:00", actual: 520, target: 560, transactions: 21, avgTicket: 24.76 },
            { hour: "17:00", actual: 820, target: 880, transactions: 33, avgTicket: 24.85 },
            { hour: "18:00", actual: 1120, target: 1180, transactions: 45, avgTicket: 24.89 },
            { hour: "19:00", actual: 1380, target: 1420, transactions: 55, avgTicket: 25.09 },
            { hour: "20:00", actual: 1320, target: 1350, transactions: 53, avgTicket: 24.91 },
            { hour: "21:00", actual: 1080, target: 1120, transactions: 43, avgTicket: 25.12 },
            { hour: "22:00", actual: 780, target: 820, transactions: 31, avgTicket: 25.16 }
          ],
          dailyTotal: 10100,
          dailyTarget: 10700
        },
        {
          day: "Sunday",
          date: "Sep 29",
          hours: [
            { hour: "11:00", actual: 350, target: 400, transactions: 14, avgTicket: 25.00 },
            { hour: "12:00", actual: 580, target: 650, transactions: 24, avgTicket: 24.17 },
            { hour: "13:00", actual: 720, target: 800, transactions: 32, avgTicket: 22.50 },
            { hour: "14:00", actual: 480, target: 520, transactions: 20, avgTicket: 24.00 },
            { hour: "15:00", actual: 400, target: 440, transactions: 16, avgTicket: 25.00 },
            { hour: "16:00", actual: 420, target: 460, transactions: 17, avgTicket: 24.71 },
            { hour: "17:00", actual: 650, target: 720, transactions: 26, avgTicket: 25.00 },
            { hour: "18:00", actual: 880, target: 950, transactions: 36, avgTicket: 24.44 },
            { hour: "19:00", actual: 1050, target: 1120, transactions: 42, avgTicket: 25.00 },
            { hour: "20:00", actual: 980, target: 1050, transactions: 39, avgTicket: 25.13 },
            { hour: "21:00", actual: 820, target: 880, transactions: 33, avgTicket: 24.85 },
            { hour: "22:00", actual: 580, target: 650, transactions: 23, avgTicket: 25.22 }
          ],
          dailyTotal: 7910,
          dailyTarget: 8640
        }
      ],
      weeklyTotal: 59940,
      weeklyTarget: 64960,
      performanceVsTarget: -7.7
    },
    {
      week: 40,
      weekType: "historical",
      weekData: [
        {
          day: "Monday",
          date: "Sep 30",
          hours: [
            { hour: "11:00", actual: 340, target: 400, transactions: 13, avgTicket: 26.15 },
            { hour: "12:00", actual: 600, target: 650, transactions: 25, avgTicket: 24.00 },
            { hour: "13:00", actual: 740, target: 800, transactions: 33, avgTicket: 22.42 },
            { hour: "14:00", actual: 460, target: 500, transactions: 19, avgTicket: 24.21 },
            { hour: "15:00", actual: 390, target: 420, transactions: 16, avgTicket: 24.38 },
            { hour: "16:00", actual: 430, target: 480, transactions: 18, avgTicket: 23.89 },
            { hour: "17:00", actual: 700, target: 750, transactions: 29, avgTicket: 24.14 },
            { hour: "18:00", actual: 940, target: 1000, transactions: 39, avgTicket: 24.10 },
            { hour: "19:00", actual: 1170, target: 1200, transactions: 47, avgTicket: 24.89 },
            { hour: "20:00", actual: 1100, target: 1100, transactions: 44, avgTicket: 25.00 },
            { hour: "21:00", actual: 910, target: 950, transactions: 36, avgTicket: 25.28 },
            { hour: "22:00", actual: 640, target: 700, transactions: 26, avgTicket: 24.62 }
          ],
          dailyTotal: 8520,
          dailyTarget: 8950
        },
        {
          day: "Tuesday",
          date: "Oct 1",
          hours: [
            { hour: "11:00", actual: 300, target: 350, transactions: 12, avgTicket: 25.00 },
            { hour: "12:00", actual: 540, target: 600, transactions: 23, avgTicket: 23.48 },
            { hour: "13:00", actual: 700, target: 750, transactions: 31, avgTicket: 22.58 },
            { hour: "14:00", actual: 440, target: 480, transactions: 18, avgTicket: 24.44 },
            { hour: "15:00", actual: 370, target: 400, transactions: 15, avgTicket: 24.67 },
            { hour: "16:00", actual: 410, target: 450, transactions: 17, avgTicket: 24.12 },
            { hour: "17:00", actual: 670, target: 720, transactions: 28, avgTicket: 23.93 },
            { hour: "18:00", actual: 900, target: 950, transactions: 37, avgTicket: 24.32 },
            { hour: "19:00", actual: 1130, target: 1150, transactions: 45, avgTicket: 25.11 },
            { hour: "20:00", actual: 1040, target: 1050, transactions: 42, avgTicket: 24.76 },
            { hour: "21:00", actual: 870, target: 900, transactions: 35, avgTicket: 24.86 },
            { hour: "22:00", actual: 600, target: 650, transactions: 24, avgTicket: 25.00 }
          ],
          dailyTotal: 7970,
          dailyTarget: 8450
        },
        {
          day: "Wednesday",
          date: "Oct 2",
          hours: [
            { hour: "11:00", actual: 320, target: 380, transactions: 13, avgTicket: 24.62 },
            { hour: "12:00", actual: 570, target: 620, transactions: 24, avgTicket: 23.75 },
            { hour: "13:00", actual: 720, target: 780, transactions: 32, avgTicket: 22.50 },
            { hour: "14:00", actual: 450, target: 500, transactions: 19, avgTicket: 23.68 },
            { hour: "15:00", actual: 380, target: 410, transactions: 16, avgTicket: 23.75 },
            { hour: "16:00", actual: 420, target: 460, transactions: 18, avgTicket: 23.33 },
            { hour: "17:00", actual: 690, target: 740, transactions: 29, avgTicket: 23.79 },
            { hour: "18:00", actual: 920, target: 980, transactions: 38, avgTicket: 24.21 },
            { hour: "19:00", actual: 1140, target: 1180, transactions: 46, avgTicket: 24.78 },
            { hour: "20:00", actual: 1060, target: 1080, transactions: 43, avgTicket: 24.65 },
            { hour: "21:00", actual: 890, target: 920, transactions: 36, avgTicket: 24.72 },
            { hour: "22:00", actual: 620, target: 680, transactions: 25, avgTicket: 24.80 }
          ],
          dailyTotal: 8180,
          dailyTarget: 8730
        },
        {
          day: "Thursday",
          date: "Oct 3",
          hours: [
            { hour: "11:00", actual: 370, target: 420, transactions: 15, avgTicket: 24.67 },
            { hour: "12:00", actual: 620, target: 680, transactions: 26, avgTicket: 23.85 },
            { hour: "13:00", actual: 770, target: 850, transactions: 34, avgTicket: 22.65 },
            { hour: "14:00", actual: 500, target: 550, transactions: 21, avgTicket: 23.81 },
            { hour: "15:00", actual: 410, target: 450, transactions: 17, avgTicket: 24.12 },
            { hour: "16:00", actual: 460, target: 500, transactions: 19, avgTicket: 24.21 },
            { hour: "17:00", actual: 740, target: 800, transactions: 31, avgTicket: 23.87 },
            { hour: "18:00", actual: 1000, target: 1050, transactions: 41, avgTicket: 24.39 },
            { hour: "19:00", actual: 1220, target: 1250, transactions: 49, avgTicket: 24.90 },
            { hour: "20:00", actual: 1140, target: 1150, transactions: 46, avgTicket: 24.78 },
            { hour: "21:00", actual: 940, target: 980, transactions: 38, avgTicket: 24.74 },
            { hour: "22:00", actual: 670, target: 720, transactions: 27, avgTicket: 24.81 }
          ],
          dailyTotal: 8840,
          dailyTarget: 9400
        },
        {
          day: "Friday",
          date: "Oct 4",
          hours: [
            { hour: "11:00", actual: 400, target: 450, transactions: 16, avgTicket: 25.00 },
            { hour: "12:00", actual: 670, target: 720, transactions: 28, avgTicket: 23.93 },
            { hour: "13:00", actual: 820, target: 900, transactions: 36, avgTicket: 22.78 },
            { hour: "14:00", actual: 540, target: 580, transactions: 23, avgTicket: 23.48 },
            { hour: "15:00", actual: 440, target: 480, transactions: 18, avgTicket: 24.44 },
            { hour: "16:00", actual: 490, target: 530, transactions: 20, avgTicket: 24.50 },
            { hour: "17:00", actual: 800, target: 850, transactions: 32, avgTicket: 25.00 },
            { hour: "18:00", actual: 1070, target: 1120, transactions: 43, avgTicket: 24.88 },
            { hour: "19:00", actual: 1320, target: 1350, transactions: 53, avgTicket: 24.91 },
            { hour: "20:00", actual: 1270, target: 1280, transactions: 51, avgTicket: 24.90 },
            { hour: "21:00", actual: 1040, target: 1050, transactions: 42, avgTicket: 24.76 },
            { hour: "22:00", actual: 740, target: 780, transactions: 30, avgTicket: 24.67 }
          ],
          dailyTotal: 9600,
          dailyTarget: 10090
        },
        {
          day: "Saturday",
          date: "Oct 5",
          hours: [
            { hour: "11:00", actual: 440, target: 480, transactions: 18, avgTicket: 24.44 },
            { hour: "12:00", actual: 740, target: 800, transactions: 31, avgTicket: 23.87 },
            { hour: "13:00", actual: 900, target: 950, transactions: 39, avgTicket: 23.08 },
            { hour: "14:00", actual: 600, target: 620, transactions: 25, avgTicket: 24.00 },
            { hour: "15:00", actual: 490, target: 520, transactions: 20, avgTicket: 24.50 },
            { hour: "16:00", actual: 530, target: 560, transactions: 22, avgTicket: 24.09 },
            { hour: "17:00", actual: 840, target: 880, transactions: 34, avgTicket: 24.71 },
            { hour: "18:00", actual: 1140, target: 1180, transactions: 46, avgTicket: 24.78 },
            { hour: "19:00", actual: 1400, target: 1420, transactions: 56, avgTicket: 25.00 },
            { hour: "20:00", actual: 1340, target: 1350, transactions: 54, avgTicket: 24.81 },
            { hour: "21:00", actual: 1100, target: 1120, transactions: 44, avgTicket: 25.00 },
            { hour: "22:00", actual: 800, target: 820, transactions: 32, avgTicket: 25.00 }
          ],
          dailyTotal: 10320,
          dailyTarget: 10700
        },
        {
          day: "Sunday",
          date: "Oct 6",
          hours: [
            { hour: "11:00", actual: 370, target: 400, transactions: 15, avgTicket: 24.67 },
            { hour: "12:00", actual: 600, target: 650, transactions: 25, avgTicket: 24.00 },
            { hour: "13:00", actual: 740, target: 800, transactions: 33, avgTicket: 22.42 },
            { hour: "14:00", actual: 500, target: 520, transactions: 21, avgTicket: 23.81 },
            { hour: "15:00", actual: 410, target: 440, transactions: 17, avgTicket: 24.12 },
            { hour: "16:00", actual: 440, target: 460, transactions: 18, avgTicket: 24.44 },
            { hour: "17:00", actual: 670, target: 720, transactions: 28, avgTicket: 23.93 },
            { hour: "18:00", actual: 900, target: 950, transactions: 37, avgTicket: 24.32 },
            { hour: "19:00", actual: 1070, target: 1120, transactions: 43, avgTicket: 24.88 },
            { hour: "20:00", actual: 1000, target: 1050, transactions: 40, avgTicket: 25.00 },
            { hour: "21:00", actual: 840, target: 880, transactions: 34, avgTicket: 24.71 },
            { hour: "22:00", actual: 600, target: 650, transactions: 24, avgTicket: 25.00 }
          ],
          dailyTotal: 8140,
          dailyTarget: 8640
        }
      ],
      weeklyTotal: 61570,
      weeklyTarget: 64960,
      performanceVsTarget: -5.2
    },
    {
      week: 41,
      weekType: "historical",
      weekData: [
        {
          day: "Monday",
          date: "Oct 7",
          hours: [
            { hour: "11:00", actual: 360, target: 400, transactions: 14, avgTicket: 25.71 },
            { hour: "12:00", actual: 620, target: 650, transactions: 26, avgTicket: 23.85 },
            { hour: "13:00", actual: 760, target: 800, transactions: 34, avgTicket: 22.35 },
            { hour: "14:00", actual: 470, target: 500, transactions: 20, avgTicket: 23.50 },
            { hour: "15:00", actual: 400, target: 420, transactions: 17, avgTicket: 23.53 },
            { hour: "16:00", actual: 440, target: 480, transactions: 19, avgTicket: 23.16 },
            { hour: "17:00", actual: 720, target: 750, transactions: 30, avgTicket: 24.00 },
            { hour: "18:00", actual: 960, target: 1000, transactions: 40, avgTicket: 24.00 },
            { hour: "19:00", actual: 1190, target: 1200, transactions: 48, avgTicket: 24.79 },
            { hour: "20:00", actual: 1120, target: 1100, transactions: 45, avgTicket: 24.89 },
            { hour: "21:00", actual: 930, target: 950, transactions: 37, avgTicket: 25.14 },
            { hour: "22:00", actual: 660, target: 700, transactions: 27, avgTicket: 24.44 }
          ],
          dailyTotal: 8620,
          dailyTarget: 8950
        },
        {
          day: "Tuesday",
          date: "Oct 8",
          hours: [
            { hour: "11:00", actual: 320, target: 350, transactions: 13, avgTicket: 24.62 },
            { hour: "12:00", actual: 560, target: 600, transactions: 24, avgTicket: 23.33 },
            { hour: "13:00", actual: 720, target: 750, transactions: 32, avgTicket: 22.50 },
            { hour: "14:00", actual: 450, target: 480, transactions: 19, avgTicket: 23.68 },
            { hour: "15:00", actual: 380, target: 400, transactions: 16, avgTicket: 23.75 },
            { hour: "16:00", actual: 420, target: 450, transactions: 18, avgTicket: 23.33 },
            { hour: "17:00", actual: 690, target: 720, transactions: 29, avgTicket: 23.79 },
            { hour: "18:00", actual: 920, target: 950, transactions: 38, avgTicket: 24.21 },
            { hour: "19:00", actual: 1150, target: 1150, transactions: 46, avgTicket: 25.00 },
            { hour: "20:00", actual: 1060, target: 1050, transactions: 43, avgTicket: 24.65 },
            { hour: "21:00", actual: 890, target: 900, transactions: 36, avgTicket: 24.72 },
            { hour: "22:00", actual: 620, target: 650, transactions: 25, avgTicket: 24.80 }
          ],
          dailyTotal: 8180,
          dailyTarget: 8450
        },
        {
          day: "Wednesday",
          date: "Oct 9",
          hours: [
            { hour: "11:00", actual: 340, target: 380, transactions: 14, avgTicket: 24.29 },
            { hour: "12:00", actual: 590, target: 620, transactions: 25, avgTicket: 23.60 },
            { hour: "13:00", actual: 740, target: 780, transactions: 33, avgTicket: 22.42 },
            { hour: "14:00", actual: 460, target: 500, transactions: 20, avgTicket: 23.00 },
            { hour: "15:00", actual: 390, target: 410, transactions: 17, avgTicket: 22.94 },
            { hour: "16:00", actual: 430, target: 460, transactions: 19, avgTicket: 22.63 },
            { hour: "17:00", actual: 710, target: 740, transactions: 30, avgTicket: 23.67 },
            { hour: "18:00", actual: 940, target: 980, transactions: 39, avgTicket: 24.10 },
            { hour: "19:00", actual: 1160, target: 1180, transactions: 47, avgTicket: 24.68 },
            { hour: "20:00", actual: 1080, target: 1080, transactions: 44, avgTicket: 24.55 },
            { hour: "21:00", actual: 910, target: 920, transactions: 37, avgTicket: 24.59 },
            { hour: "22:00", actual: 640, target: 680, transactions: 26, avgTicket: 24.62 }
          ],
          dailyTotal: 8380,
          dailyTarget: 8730
        },
        {
          day: "Thursday",
          date: "Oct 10",
          hours: [
            { hour: "11:00", actual: 390, target: 420, transactions: 16, avgTicket: 24.38 },
            { hour: "12:00", actual: 640, target: 680, transactions: 27, avgTicket: 23.70 },
            { hour: "13:00", actual: 790, target: 850, transactions: 35, avgTicket: 22.57 },
            { hour: "14:00", actual: 520, target: 550, transactions: 22, avgTicket: 23.64 },
            { hour: "15:00", actual: 420, target: 450, transactions: 18, avgTicket: 23.33 },
            { hour: "16:00", actual: 470, target: 500, transactions: 20, avgTicket: 23.50 },
            { hour: "17:00", actual: 760, target: 800, transactions: 32, avgTicket: 23.75 },
            { hour: "18:00", actual: 1020, target: 1050, transactions: 42, avgTicket: 24.29 },
            { hour: "19:00", actual: 1240, target: 1250, transactions: 50, avgTicket: 24.80 },
            { hour: "20:00", actual: 1160, target: 1150, transactions: 47, avgTicket: 24.68 },
            { hour: "21:00", actual: 960, target: 980, transactions: 39, avgTicket: 24.62 },
            { hour: "22:00", actual: 690, target: 720, transactions: 28, avgTicket: 24.64 }
          ],
          dailyTotal: 9040,
          dailyTarget: 9400
        },
        {
          day: "Friday",
          date: "Oct 11",
          hours: [
            { hour: "11:00", actual: 420, target: 450, transactions: 17, avgTicket: 24.71 },
            { hour: "12:00", actual: 690, target: 720, transactions: 29, avgTicket: 23.79 },
            { hour: "13:00", actual: 840, target: 900, transactions: 37, avgTicket: 22.70 },
            { hour: "14:00", actual: 560, target: 580, transactions: 24, avgTicket: 23.33 },
            { hour: "15:00", actual: 450, target: 480, transactions: 19, avgTicket: 23.68 },
            { hour: "16:00", actual: 500, target: 530, transactions: 21, avgTicket: 23.81 },
            { hour: "17:00", actual: 820, target: 850, transactions: 33, avgTicket: 24.85 },
            { hour: "18:00", actual: 1090, target: 1120, transactions: 44, avgTicket: 24.77 },
            { hour: "19:00", actual: 1340, target: 1350, transactions: 54, avgTicket: 24.81 },
            { hour: "20:00", actual: 1290, target: 1280, transactions: 52, avgTicket: 24.81 },
            { hour: "21:00", actual: 1060, target: 1050, transactions: 43, avgTicket: 24.65 },
            { hour: "22:00", actual: 760, target: 780, transactions: 31, avgTicket: 24.52 }
          ],
          dailyTotal: 9820,
          dailyTarget: 10090
        },
        {
          day: "Saturday",
          date: "Oct 12",
          hours: [
            { hour: "11:00", actual: 460, target: 480, transactions: 19, avgTicket: 24.21 },
            { hour: "12:00", actual: 760, target: 800, transactions: 32, avgTicket: 23.75 },
            { hour: "13:00", actual: 920, target: 950, transactions: 40, avgTicket: 23.00 },
            { hour: "14:00", actual: 620, target: 620, transactions: 26, avgTicket: 23.85 },
            { hour: "15:00", actual: 500, target: 520, transactions: 21, avgTicket: 23.81 },
            { hour: "16:00", actual: 540, target: 560, transactions: 23, avgTicket: 23.48 },
            { hour: "17:00", actual: 860, target: 880, transactions: 35, avgTicket: 24.57 },
            { hour: "18:00", actual: 1160, target: 1180, transactions: 47, avgTicket: 24.68 },
            { hour: "19:00", actual: 1420, target: 1420, transactions: 57, avgTicket: 24.91 },
            { hour: "20:00", actual: 1360, target: 1350, transactions: 55, avgTicket: 24.73 },
            { hour: "21:00", actual: 1120, target: 1120, transactions: 45, avgTicket: 24.89 },
            { hour: "22:00", actual: 820, target: 820, transactions: 33, avgTicket: 24.85 }
          ],
          dailyTotal: 10540,
          dailyTarget: 10700
        },
        {
          day: "Sunday",
          date: "Oct 13",
          hours: [
            { hour: "11:00", actual: 390, target: 400, transactions: 16, avgTicket: 24.38 },
            { hour: "12:00", actual: 620, target: 650, transactions: 26, avgTicket: 23.85 },
            { hour: "13:00", actual: 760, target: 800, transactions: 34, avgTicket: 22.35 },
            { hour: "14:00", actual: 520, target: 520, transactions: 22, avgTicket: 23.64 },
            { hour: "15:00", actual: 420, target: 440, transactions: 18, avgTicket: 23.33 },
            { hour: "16:00", actual: 450, target: 460, transactions: 19, avgTicket: 23.68 },
            { hour: "17:00", actual: 690, target: 720, transactions: 29, avgTicket: 23.79 },
            { hour: "18:00", actual: 920, target: 950, transactions: 38, avgTicket: 24.21 },
            { hour: "19:00", actual: 1090, target: 1120, transactions: 44, avgTicket: 24.77 },
            { hour: "20:00", actual: 1020, target: 1050, transactions: 41, avgTicket: 24.88 },
            { hour: "21:00", actual: 860, target: 880, transactions: 35, avgTicket: 24.57 },
            { hour: "22:00", actual: 620, target: 650, transactions: 25, avgTicket: 24.80 }
          ],
          dailyTotal: 8360,
          dailyTarget: 8640
        }
      ],
      weeklyTotal: 62940,
      weeklyTarget: 64960,
      performanceVsTarget: -3.1
    },
    {
      week: 42,
      weekType: "historical",
      weekData: [
        {
          day: "Monday",
          date: "Oct 14",
          hours: [
            { hour: "11:00", actual: 380, target: 400, transactions: 15, avgTicket: 25.33 },
            { hour: "12:00", actual: 640, target: 650, transactions: 27, avgTicket: 23.70 },
            { hour: "13:00", actual: 780, target: 800, transactions: 35, avgTicket: 22.29 },
            { hour: "14:00", actual: 480, target: 500, transactions: 21, avgTicket: 22.86 },
            { hour: "15:00", actual: 410, target: 420, transactions: 18, avgTicket: 22.78 },
            { hour: "16:00", actual: 450, target: 480, transactions: 20, avgTicket: 22.50 },
            { hour: "17:00", actual: 740, target: 750, transactions: 31, avgTicket: 23.87 },
            { hour: "18:00", actual: 980, target: 1000, transactions: 41, avgTicket: 23.90 },
            { hour: "19:00", actual: 1210, target: 1200, transactions: 49, avgTicket: 24.69 },
            { hour: "20:00", actual: 1140, target: 1100, transactions: 46, avgTicket: 24.78 },
            { hour: "21:00", actual: 950, target: 950, transactions: 38, avgTicket: 25.00 },
            { hour: "22:00", actual: 680, target: 700, transactions: 28, avgTicket: 24.29 }
          ],
          dailyTotal: 8840,
          dailyTarget: 8950
        },
        {
          day: "Tuesday",
          date: "Oct 15",
          hours: [
            { hour: "11:00", actual: 340, target: 350, transactions: 14, avgTicket: 24.29 },
            { hour: "12:00", actual: 580, target: 600, transactions: 25, avgTicket: 23.20 },
            { hour: "13:00", actual: 740, target: 750, transactions: 33, avgTicket: 22.42 },
            { hour: "14:00", actual: 460, target: 480, transactions: 20, avgTicket: 23.00 },
            { hour: "15:00", actual: 390, target: 400, transactions: 17, avgTicket: 22.94 },
            { hour: "16:00", actual: 430, target: 450, transactions: 19, avgTicket: 22.63 },
            { hour: "17:00", actual: 710, target: 720, transactions: 30, avgTicket: 23.67 },
            { hour: "18:00", actual: 940, target: 950, transactions: 39, avgTicket: 24.10 },
            { hour: "19:00", actual: 1170, target: 1150, transactions: 47, avgTicket: 24.89 },
            { hour: "20:00", actual: 1080, target: 1050, transactions: 44, avgTicket: 24.55 },
            { hour: "21:00", actual: 910, target: 900, transactions: 37, avgTicket: 24.59 },
            { hour: "22:00", actual: 640, target: 650, transactions: 26, avgTicket: 24.62 }
          ],
          dailyTotal: 8390,
          dailyTarget: 8450
        },
        {
          day: "Wednesday",
          date: "Oct 16",
          hours: [
            { hour: "11:00", actual: 360, target: 380, transactions: 15, avgTicket: 24.00 },
            { hour: "12:00", actual: 610, target: 620, transactions: 26, avgTicket: 23.46 },
            { hour: "13:00", actual: 760, target: 780, transactions: 34, avgTicket: 22.35 },
            { hour: "14:00", actual: 470, target: 500, transactions: 21, avgTicket: 22.38 },
            { hour: "15:00", actual: 400, target: 410, transactions: 18, avgTicket: 22.22 },
            { hour: "16:00", actual: 440, target: 460, transactions: 20, avgTicket: 22.00 },
            { hour: "17:00", actual: 730, target: 740, transactions: 31, avgTicket: 23.55 },
            { hour: "18:00", actual: 960, target: 980, transactions: 40, avgTicket: 24.00 },
            { hour: "19:00", actual: 1180, target: 1180, transactions: 48, avgTicket: 24.58 },
            { hour: "20:00", actual: 1100, target: 1080, transactions: 45, avgTicket: 24.44 },
            { hour: "21:00", actual: 930, target: 920, transactions: 38, avgTicket: 24.47 },
            { hour: "22:00", actual: 660, target: 680, transactions: 27, avgTicket: 24.44 }
          ],
          dailyTotal: 8600,
          dailyTarget: 8730
        },
        {
          day: "Thursday",
          date: "Oct 17",
          hours: [
            { hour: "11:00", actual: 410, target: 420, transactions: 17, avgTicket: 24.12 },
            { hour: "12:00", actual: 660, target: 680, transactions: 28, avgTicket: 23.57 },
            { hour: "13:00", actual: 810, target: 850, transactions: 36, avgTicket: 22.50 },
            { hour: "14:00", actual: 540, target: 550, transactions: 23, avgTicket: 23.48 },
            { hour: "15:00", actual: 430, target: 450, transactions: 19, avgTicket: 22.63 },
            { hour: "16:00", actual: 480, target: 500, transactions: 21, avgTicket: 22.86 },
            { hour: "17:00", actual: 780, target: 800, transactions: 33, avgTicket: 23.64 },
            { hour: "18:00", actual: 1040, target: 1050, transactions: 43, avgTicket: 24.19 },
            { hour: "19:00", actual: 1260, target: 1250, transactions: 51, avgTicket: 24.71 },
            { hour: "20:00", actual: 1180, target: 1150, transactions: 48, avgTicket: 24.58 },
            { hour: "21:00", actual: 980, target: 980, transactions: 40, avgTicket: 24.50 },
            { hour: "22:00", actual: 710, target: 720, transactions: 29, avgTicket: 24.48 }
          ],
          dailyTotal: 9270,
          dailyTarget: 9400
        },
        {
          day: "Friday",
          date: "Oct 18",
          hours: [
            { hour: "11:00", actual: 440, target: 450, transactions: 18, avgTicket: 24.44 },
            { hour: "12:00", actual: 710, target: 720, transactions: 30, avgTicket: 23.67 },
            { hour: "13:00", actual: 860, target: 900, transactions: 38, avgTicket: 22.63 },
            { hour: "14:00", actual: 580, target: 580, transactions: 25, avgTicket: 23.20 },
            { hour: "15:00", actual: 460, target: 480, transactions: 20, avgTicket: 23.00 },
            { hour: "16:00", actual: 510, target: 530, transactions: 22, avgTicket: 23.18 },
            { hour: "17:00", actual: 840, target: 850, transactions: 34, avgTicket: 24.71 },
            { hour: "18:00", actual: 1110, target: 1120, transactions: 45, avgTicket: 24.67 },
            { hour: "19:00", actual: 1360, target: 1350, transactions: 55, avgTicket: 24.73 },
            { hour: "20:00", actual: 1310, target: 1280, transactions: 53, avgTicket: 24.72 },
            { hour: "21:00", actual: 1080, target: 1050, transactions: 44, avgTicket: 24.55 },
            { hour: "22:00", actual: 780, target: 780, transactions: 32, avgTicket: 24.38 }
          ],
          dailyTotal: 10040,
          dailyTarget: 10090
        },
        {
          day: "Saturday",
          date: "Oct 19",
          hours: [
            { hour: "11:00", actual: 480, target: 480, transactions: 20, avgTicket: 24.00 },
            { hour: "12:00", actual: 780, target: 800, transactions: 33, avgTicket: 23.64 },
            { hour: "13:00", actual: 940, target: 950, transactions: 41, avgTicket: 22.93 },
            { hour: "14:00", actual: 640, target: 620, transactions: 27, avgTicket: 23.70 },
            { hour: "15:00", actual: 510, target: 520, transactions: 22, avgTicket: 23.18 },
            { hour: "16:00", actual: 550, target: 560, transactions: 24, avgTicket: 22.92 },
            { hour: "17:00", actual: 880, target: 880, transactions: 36, avgTicket: 24.44 },
            { hour: "18:00", actual: 1180, target: 1180, transactions: 48, avgTicket: 24.58 },
            { hour: "19:00", actual: 1440, target: 1420, transactions: 58, avgTicket: 24.83 },
            { hour: "20:00", actual: 1380, target: 1350, transactions: 56, avgTicket: 24.64 },
            { hour: "21:00", actual: 1140, target: 1120, transactions: 46, avgTicket: 24.78 },
            { hour: "22:00", actual: 840, target: 820, transactions: 34, avgTicket: 24.71 }
          ],
          dailyTotal: 10760,
          dailyTarget: 10700
        },
        {
          day: "Sunday",
          date: "Oct 20",
          hours: [
            { hour: "11:00", actual: 410, target: 400, transactions: 17, avgTicket: 24.12 },
            { hour: "12:00", actual: 640, target: 650, transactions: 27, avgTicket: 23.70 },
            { hour: "13:00", actual: 780, target: 800, transactions: 35, avgTicket: 22.29 },
            { hour: "14:00", actual: 540, target: 520, transactions: 23, avgTicket: 23.48 },
            { hour: "15:00", actual: 430, target: 440, transactions: 19, avgTicket: 22.63 },
            { hour: "16:00", actual: 460, target: 460, transactions: 20, avgTicket: 23.00 },
            { hour: "17:00", actual: 710, target: 720, transactions: 30, avgTicket: 23.67 },
            { hour: "18:00", actual: 940, target: 950, transactions: 39, avgTicket: 24.10 },
            { hour: "19:00", actual: 1110, target: 1120, transactions: 45, avgTicket: 24.67 },
            { hour: "20:00", actual: 1040, target: 1050, transactions: 42, avgTicket: 24.76 },
            { hour: "21:00", actual: 880, target: 880, transactions: 36, avgTicket: 24.44 },
            { hour: "22:00", actual: 640, target: 650, transactions: 26, avgTicket: 24.62 }
          ],
          dailyTotal: 8570,
          dailyTarget: 8640
        }
      ],
      weeklyTotal: 64470,
      weeklyTarget: 64960,
      performanceVsTarget: -0.8
    },
    {
      week: 43,
      weekType: "current",
      weekData: [
        {
          day: "Monday",
          date: "Oct 21",
          hours: [
            { hour: "11:00", actual: 400, target: 400, transactions: 16, avgTicket: 25.00 },
            { hour: "12:00", actual: 660, target: 650, transactions: 28, avgTicket: 23.57 },
            { hour: "13:00", actual: 800, target: 800, transactions: 36, avgTicket: 22.22 },
            { hour: "14:00", actual: 490, target: 500, transactions: 22, avgTicket: 22.27 },
            { hour: "15:00", actual: 420, target: 420, transactions: 19, avgTicket: 22.11 },
            { hour: "16:00", actual: 460, target: 480, transactions: 21, avgTicket: 21.90 },
            { hour: "17:00", actual: 760, target: 750, transactions: 32, avgTicket: 23.75 },
            { hour: "18:00", actual: 1000, target: 1000, transactions: 42, avgTicket: 23.81 },
            { hour: "19:00", actual: 1230, target: 1200, transactions: 50, avgTicket: 24.60 },
            { hour: "20:00", actual: 1160, target: 1100, transactions: 47, avgTicket: 24.68 },
            { hour: "21:00", actual: 970, target: 950, transactions: 39, avgTicket: 24.87 },
            { hour: "22:00", actual: 700, target: 700, transactions: 29, avgTicket: 24.14 }
          ],
          dailyTotal: 9050,
          dailyTarget: 8950
        },
        {
          day: "Tuesday",
          date: "Oct 22",
          hours: [
            { hour: "11:00", actual: 360, target: 350, transactions: 15, avgTicket: 24.00 },
            { hour: "12:00", actual: 600, target: 600, transactions: 26, avgTicket: 23.08 },
            { hour: "13:00", actual: 760, target: 750, transactions: 34, avgTicket: 22.35 },
            { hour: "14:00", actual: 470, target: 480, transactions: 21, avgTicket: 22.38 },
            { hour: "15:00", actual: 400, target: 400, transactions: 18, avgTicket: 22.22 },
            { hour: "16:00", actual: 440, target: 450, transactions: 20, avgTicket: 22.00 },
            { hour: "17:00", actual: 730, target: 720, transactions: 31, avgTicket: 23.55 },
            { hour: "18:00", actual: 960, target: 950, transactions: 40, avgTicket: 24.00 },
            { hour: "19:00", actual: 1190, target: 1150, transactions: 48, avgTicket: 24.79 },
            { hour: "20:00", actual: 1100, target: 1050, transactions: 45, avgTicket: 24.44 },
            { hour: "21:00", actual: 930, target: 900, transactions: 38, avgTicket: 24.47 },
            { hour: "22:00", actual: 670, target: 650, transactions: 27, avgTicket: 24.81 }
          ],
          dailyTotal: 8610,
          dailyTarget: 8450
        },
        {
          day: "Wednesday",
          date: "Oct 23",
          hours: [
            { hour: "11:00", actual: 380, target: 380, transactions: 16, avgTicket: 23.75 },
            { hour: "12:00", actual: 630, target: 620, transactions: 27, avgTicket: 23.33 },
            { hour: "13:00", actual: 780, target: 780, transactions: 35, avgTicket: 22.29 },
            { hour: "14:00", actual: 480, target: 500, transactions: 22, avgTicket: 21.82 },
            { hour: "15:00", actual: 410, target: 410, transactions: 19, avgTicket: 21.58 },
            { hour: "16:00", actual: 450, target: 460, transactions: 21, avgTicket: 21.43 },
            { hour: "17:00", actual: 750, target: 740, transactions: 32, avgTicket: 23.44 },
            { hour: "18:00", actual: 980, target: 980, transactions: 41, avgTicket: 23.90 },
            { hour: "19:00", actual: 1200, target: 1180, transactions: 49, avgTicket: 24.49 },
            { hour: "20:00", actual: 1120, target: 1080, transactions: 46, avgTicket: 24.35 },
            { hour: "21:00", actual: 950, target: 920, transactions: 39, avgTicket: 24.36 },
            { hour: "22:00", actual: 690, target: 680, transactions: 28, avgTicket: 24.64 }
          ],
          dailyTotal: 8820,
          dailyTarget: 8730
        },
        {
          day: "Thursday",
          date: "Oct 24",
          hours: [
            { hour: "11:00", actual: 430, target: 420, transactions: 18, avgTicket: 23.89 },
            { hour: "12:00", actual: 680, target: 680, transactions: 29, avgTicket: 23.45 },
            { hour: "13:00", actual: 830, target: 850, transactions: 37, avgTicket: 22.43 },
            { hour: "14:00", actual: 550, target: 550, transactions: 24, avgTicket: 22.92 },
            { hour: "15:00", actual: 440, target: 450, transactions: 20, avgTicket: 22.00 },
            { hour: "16:00", actual: 490, target: 500, transactions: 22, avgTicket: 22.27 },
            { hour: "17:00", actual: 800, target: 800, transactions: 34, avgTicket: 23.53 },
            { hour: "18:00", actual: 1060, target: 1050, transactions: 44, avgTicket: 24.09 },
            { hour: "19:00", actual: 1280, target: 1250, transactions: 52, avgTicket: 24.62 },
            { hour: "20:00", actual: 1200, target: 1150, transactions: 49, avgTicket: 24.49 },
            { hour: "21:00", actual: 1000, target: 980, transactions: 41, avgTicket: 24.39 },
            { hour: "22:00", actual: 730, target: 720, transactions: 30, avgTicket: 24.33 }
          ],
          dailyTotal: 9490,
          dailyTarget: 9400
        },
        {
          day: "Friday",
          date: "Oct 25",
          hours: [
            { hour: "11:00", actual: 460, target: 450, transactions: 19, avgTicket: 24.21 },
            { hour: "12:00", actual: 730, target: 720, transactions: 31, avgTicket: 23.55 },
            { hour: "13:00", actual: 880, target: 900, transactions: 39, avgTicket: 22.56 },
            { hour: "14:00", actual: 590, target: 580, transactions: 26, avgTicket: 22.69 },
            { hour: "15:00", actual: 470, target: 480, transactions: 21, avgTicket: 22.38 },
            { hour: "16:00", actual: 520, target: 530, transactions: 23, avgTicket: 22.61 },
            { hour: "17:00", actual: 860, target: 850, transactions: 35, avgTicket: 24.57 },
            { hour: "18:00", actual: 1130, target: 1120, transactions: 46, avgTicket: 24.57 },
            { hour: "19:00", actual: 1380, target: 1350, transactions: 56, avgTicket: 24.64 },
            { hour: "20:00", actual: 1330, target: 1280, transactions: 54, avgTicket: 24.63 },
            { hour: "21:00", actual: 1100, target: 1050, transactions: 45, avgTicket: 24.44 },
            { hour: "22:00", actual: 800, target: 780, transactions: 33, avgTicket: 24.24 }
          ],
          dailyTotal: 10250,
          dailyTarget: 10090
        },
        {
          day: "Saturday",
          date: "Oct 26",
          hours: [
            { hour: "11:00", actual: 500, target: 480, transactions: 21, avgTicket: 23.81 },
            { hour: "12:00", actual: 800, target: 800, transactions: 34, avgTicket: 23.53 },
            { hour: "13:00", actual: 960, target: 950, transactions: 42, avgTicket: 22.86 },
            { hour: "14:00", actual: 650, target: 620, transactions: 28, avgTicket: 23.21 },
            { hour: "15:00", actual: 520, target: 520, transactions: 23, avgTicket: 22.61 },
            { hour: "16:00", actual: 560, target: 560, transactions: 25, avgTicket: 22.40 },
            { hour: "17:00", actual: 900, target: 880, transactions: 37, avgTicket: 24.32 },
            { hour: "18:00", actual: 1200, target: 1180, transactions: 49, avgTicket: 24.49 },
            { hour: "19:00", actual: 1460, target: 1420, transactions: 59, avgTicket: 24.75 },
            { hour: "20:00", actual: 1400, target: 1350, transactions: 57, avgTicket: 24.56 },
            { hour: "21:00", actual: 1160, target: 1120, transactions: 47, avgTicket: 24.68 },
            { hour: "22:00", actual: 860, target: 820, transactions: 35, avgTicket: 24.57 }
          ],
          dailyTotal: 10970,
          dailyTarget: 10700
        },
        {
          day: "Sunday",
          date: "Oct 27",
          hours: [
            { hour: "11:00", actual: 430, target: 400, transactions: 18, avgTicket: 23.89 },
            { hour: "12:00", actual: 660, target: 650, transactions: 28, avgTicket: 23.57 },
            { hour: "13:00", actual: 800, target: 800, transactions: 36, avgTicket: 22.22 },
            { hour: "14:00", actual: 550, target: 520, transactions: 24, avgTicket: 22.92 },
            { hour: "15:00", actual: 440, target: 440, transactions: 20, avgTicket: 22.00 },
            { hour: "16:00", actual: 470, target: 460, transactions: 21, avgTicket: 22.38 },
            { hour: "17:00", actual: 730, target: 720, transactions: 31, avgTicket: 23.55 },
            { hour: "18:00", actual: 960, target: 950, transactions: 40, avgTicket: 24.00 },
            { hour: "19:00", actual: 1130, target: 1120, transactions: 46, avgTicket: 24.57 },
            { hour: "20:00", actual: 1060, target: 1050, transactions: 43, avgTicket: 24.65 },
            { hour: "21:00", actual: 900, target: 880, transactions: 37, avgTicket: 24.32 },
            { hour: "22:00", actual: 660, target: 650, transactions: 27, avgTicket: 24.44 }
          ],
          dailyTotal: 8790,
          dailyTarget: 8640
        }
      ],
      weeklyTotal: 65980,
      weeklyTarget: 64960,
      performanceVsTarget: 1.6
    },
    {
      week: 44,
      weekType: "forecast",
      weekData: [
        {
          day: "Monday",
          date: "Oct 28",
          hours: [
            { hour: "11:00", actual: 420, target: 420, transactions: 17, avgTicket: 24.71 },
            { hour: "12:00", actual: 680, target: 680, transactions: 29, avgTicket: 23.45 },
            { hour: "13:00", actual: 820, target: 820, transactions: 37, avgTicket: 22.16 },
            { hour: "14:00", actual: 510, target: 510, transactions: 23, avgTicket: 22.17 },
            { hour: "15:00", actual: 430, target: 430, transactions: 20, avgTicket: 21.50 },
            { hour: "16:00", actual: 470, target: 470, transactions: 22, avgTicket: 21.36 },
            { hour: "17:00", actual: 780, target: 780, transactions: 33, avgTicket: 23.64 },
            { hour: "18:00", actual: 1020, target: 1020, transactions: 43, avgTicket: 23.72 },
            { hour: "19:00", actual: 1250, target: 1250, transactions: 51, avgTicket: 24.51 },
            { hour: "20:00", actual: 1180, target: 1180, transactions: 48, avgTicket: 24.58 },
            { hour: "21:00", actual: 990, target: 990, transactions: 40, avgTicket: 24.75 },
            { hour: "22:00", actual: 720, target: 720, transactions: 30, avgTicket: 24.00 }
          ],
          dailyTotal: 9270,
          dailyTarget: 9270
        },
        {
          day: "Tuesday",
          date: "Oct 29",
          hours: [
            { hour: "11:00", actual: 370, target: 370, transactions: 16, avgTicket: 23.13 },
            { hour: "12:00", actual: 620, target: 620, transactions: 27, avgTicket: 22.96 },
            { hour: "13:00", actual: 770, target: 770, transactions: 35, avgTicket: 22.00 },
            { hour: "14:00", actual: 480, target: 480, transactions: 22, avgTicket: 21.82 },
            { hour: "15:00", actual: 410, target: 410, transactions: 19, avgTicket: 21.58 },
            { hour: "16:00", actual: 450, target: 450, transactions: 21, avgTicket: 21.43 },
            { hour: "17:00", actual: 740, target: 740, transactions: 32, avgTicket: 23.13 },
            { hour: "18:00", actual: 970, target: 970, transactions: 41, avgTicket: 23.66 },
            { hour: "19:00", actual: 1200, target: 1200, transactions: 49, avgTicket: 24.49 },
            { hour: "20:00", actual: 1130, target: 1130, transactions: 46, avgTicket: 24.57 },
            { hour: "21:00", actual: 950, target: 950, transactions: 39, avgTicket: 24.36 },
            { hour: "22:00", actual: 680, target: 680, transactions: 28, avgTicket: 24.29 }
          ],
          dailyTotal: 8770,
          dailyTarget: 8770
        },
        {
          day: "Wednesday",
          date: "Oct 30",
          hours: [
            { hour: "11:00", actual: 390, target: 390, transactions: 17, avgTicket: 22.94 },
            { hour: "12:00", actual: 640, target: 640, transactions: 28, avgTicket: 22.86 },
            { hour: "13:00", actual: 790, target: 790, transactions: 36, avgTicket: 21.94 },
            { hour: "14:00", actual: 490, target: 490, transactions: 23, avgTicket: 21.30 },
            { hour: "15:00", actual: 420, target: 420, transactions: 20, avgTicket: 21.00 },
            { hour: "16:00", actual: 460, target: 460, transactions: 22, avgTicket: 20.91 },
            { hour: "17:00", actual: 760, target: 760, transactions: 33, avgTicket: 23.03 },
            { hour: "18:00", actual: 990, target: 990, transactions: 42, avgTicket: 23.57 },
            { hour: "19:00", actual: 1210, target: 1210, transactions: 50, avgTicket: 24.20 },
            { hour: "20:00", actual: 1140, target: 1140, transactions: 47, avgTicket: 24.26 },
            { hour: "21:00", actual: 970, target: 970, transactions: 40, avgTicket: 24.25 },
            { hour: "22:00", actual: 700, target: 700, transactions: 29, avgTicket: 24.14 }
          ],
          dailyTotal: 8960,
          dailyTarget: 8960
        },
        {
          day: "Thursday",
          date: "Oct 31",
          hours: [
            { hour: "11:00", actual: 450, target: 450, transactions: 19, avgTicket: 23.68 },
            { hour: "12:00", actual: 700, target: 700, transactions: 30, avgTicket: 23.33 },
            { hour: "13:00", actual: 850, target: 850, transactions: 38, avgTicket: 22.37 },
            { hour: "14:00", actual: 560, target: 560, transactions: 25, avgTicket: 22.40 },
            { hour: "15:00", actual: 450, target: 450, transactions: 21, avgTicket: 21.43 },
            { hour: "16:00", actual: 500, target: 500, transactions: 23, avgTicket: 21.74 },
            { hour: "17:00", actual: 820, target: 820, transactions: 35, avgTicket: 23.43 },
            { hour: "18:00", actual: 1080, target: 1080, transactions: 45, avgTicket: 24.00 },
            { hour: "19:00", actual: 1300, target: 1300, transactions: 53, avgTicket: 24.53 },
            { hour: "20:00", actual: 1220, target: 1220, transactions: 50, avgTicket: 24.40 },
            { hour: "21:00", actual: 1020, target: 1020, transactions: 42, avgTicket: 24.29 },
            { hour: "22:00", actual: 750, target: 750, transactions: 31, avgTicket: 24.19 }
          ],
          dailyTotal: 9700,
          dailyTarget: 9700
        },
        {
          day: "Friday",
          date: "Nov 1",
          hours: [
            { hour: "11:00", actual: 480, target: 480, transactions: 20, avgTicket: 24.00 },
            { hour: "12:00", actual: 750, target: 750, transactions: 32, avgTicket: 23.44 },
            { hour: "13:00", actual: 900, target: 900, transactions: 40, avgTicket: 22.50 },
            { hour: "14:00", actual: 600, target: 600, transactions: 27, avgTicket: 22.22 },
            { hour: "15:00", actual: 480, target: 480, transactions: 22, avgTicket: 21.82 },
            { hour: "16:00", actual: 530, target: 530, transactions: 24, avgTicket: 22.08 },
            { hour: "17:00", actual: 880, target: 880, transactions: 36, avgTicket: 24.44 },
            { hour: "18:00", actual: 1150, target: 1150, transactions: 47, avgTicket: 24.47 },
            { hour: "19:00", actual: 1400, target: 1400, transactions: 57, avgTicket: 24.56 },
            { hour: "20:00", actual: 1350, target: 1350, transactions: 55, avgTicket: 24.55 },
            { hour: "21:00", actual: 1120, target: 1120, transactions: 46, avgTicket: 24.35 },
            { hour: "22:00", actual: 810, target: 810, transactions: 33, avgTicket: 24.55 }
          ],
          dailyTotal: 10450,
          dailyTarget: 10450
        },
        {
          day: "Saturday",
          date: "Nov 2",
          hours: [
            { hour: "11:00", actual: 520, target: 520, transactions: 22, avgTicket: 23.64 },
            { hour: "12:00", actual: 820, target: 820, transactions: 35, avgTicket: 23.43 },
            { hour: "13:00", actual: 980, target: 980, transactions: 43, avgTicket: 22.79 },
            { hour: "14:00", actual: 660, target: 660, transactions: 29, avgTicket: 22.76 },
            { hour: "15:00", actual: 530, target: 530, transactions: 24, avgTicket: 22.08 },
            { hour: "16:00", actual: 570, target: 570, transactions: 26, avgTicket: 21.92 },
            { hour: "17:00", actual: 920, target: 920, transactions: 38, avgTicket: 24.21 },
            { hour: "18:00", actual: 1220, target: 1220, transactions: 50, avgTicket: 24.40 },
            { hour: "19:00", actual: 1480, target: 1480, transactions: 60, avgTicket: 24.67 },
            { hour: "20:00", actual: 1420, target: 1420, transactions: 58, avgTicket: 24.48 },
            { hour: "21:00", actual: 1180, target: 1180, transactions: 48, avgTicket: 24.58 },
            { hour: "22:00", actual: 880, target: 880, transactions: 36, avgTicket: 24.44 }
          ],
          dailyTotal: 11180,
          dailyTarget: 11180
        },
        {
          day: "Sunday",
          date: "Nov 3",
          hours: [
            { hour: "11:00", actual: 450, target: 450, transactions: 19, avgTicket: 23.68 },
            { hour: "12:00", actual: 680, target: 680, transactions: 29, avgTicket: 23.45 },
            { hour: "13:00", actual: 820, target: 820, transactions: 37, avgTicket: 22.16 },
            { hour: "14:00", actual: 560, target: 560, transactions: 25, avgTicket: 22.40 },
            { hour: "15:00", actual: 450, target: 450, transactions: 21, avgTicket: 21.43 },
            { hour: "16:00", actual: 480, target: 480, transactions: 22, avgTicket: 21.82 },
            { hour: "17:00", actual: 750, target: 750, transactions: 32, avgTicket: 23.44 },
            { hour: "18:00", actual: 980, target: 980, transactions: 41, avgTicket: 23.90 },
            { hour: "19:00", actual: 1150, target: 1150, transactions: 47, avgTicket: 24.47 },
            { hour: "20:00", actual: 1080, target: 1080, transactions: 44, avgTicket: 24.55 },
            { hour: "21:00", actual: 920, target: 920, transactions: 38, avgTicket: 24.21 },
            { hour: "22:00", actual: 680, target: 680, transactions: 28, avgTicket: 24.29 }
          ],
          dailyTotal: 9000,
          dailyTarget: 9000
        }
      ],
      weeklyTotal: 67330,
      weeklyTarget: 67330,
      performanceVsTarget: 0.0
    },
    {
      week: 45,
      weekType: "forecast",
      weekData: [
        {
          day: "Monday",
          date: "Nov 4",
          hours: [
            { hour: "11:00", actual: 440, target: 440, transactions: 18, avgTicket: 24.44 },
            { hour: "12:00", actual: 700, target: 700, transactions: 30, avgTicket: 23.33 },
            { hour: "13:00", actual: 840, target: 840, transactions: 38, avgTicket: 22.11 },
            { hour: "14:00", actual: 520, target: 520, transactions: 24, avgTicket: 21.67 },
            { hour: "15:00", actual: 440, target: 440, transactions: 21, avgTicket: 20.95 },
            { hour: "16:00", actual: 480, target: 480, transactions: 23, avgTicket: 20.87 },
            { hour: "17:00", actual: 800, target: 800, transactions: 34, avgTicket: 23.53 },
            { hour: "18:00", actual: 1040, target: 1040, transactions: 44, avgTicket: 23.64 },
            { hour: "19:00", actual: 1270, target: 1270, transactions: 52, avgTicket: 24.42 },
            { hour: "20:00", actual: 1200, target: 1200, transactions: 49, avgTicket: 24.49 },
            { hour: "21:00", actual: 1010, target: 1010, transactions: 41, avgTicket: 24.63 },
            { hour: "22:00", actual: 740, target: 740, transactions: 31, avgTicket: 23.87 }
          ],
          dailyTotal: 9480,
          dailyTarget: 9480
        },
        {
          day: "Tuesday",
          date: "Nov 5",
          hours: [
            { hour: "11:00", actual: 380, target: 380, transactions: 17, avgTicket: 22.35 },
            { hour: "12:00", actual: 640, target: 640, transactions: 28, avgTicket: 22.86 },
            { hour: "13:00", actual: 780, target: 780, transactions: 36, avgTicket: 21.67 },
            { hour: "14:00", actual: 490, target: 490, transactions: 23, avgTicket: 21.30 },
            { hour: "15:00", actual: 420, target: 420, transactions: 20, avgTicket: 21.00 },
            { hour: "16:00", actual: 460, target: 460, transactions: 22, avgTicket: 20.91 },
            { hour: "17:00", actual: 760, target: 760, transactions: 33, avgTicket: 23.03 },
            { hour: "18:00", actual: 990, target: 990, transactions: 42, avgTicket: 23.57 },
            { hour: "19:00", actual: 1220, target: 1220, transactions: 50, avgTicket: 24.40 },
            { hour: "20:00", actual: 1150, target: 1150, transactions: 47, avgTicket: 24.47 },
            { hour: "21:00", actual: 970, target: 970, transactions: 40, avgTicket: 24.25 },
            { hour: "22:00", actual: 700, target: 700, transactions: 29, avgTicket: 24.14 }
          ],
          dailyTotal: 8960,
          dailyTarget: 8960
        },
        {
          day: "Wednesday",
          date: "Nov 6",
          hours: [
            { hour: "11:00", actual: 400, target: 400, transactions: 18, avgTicket: 22.22 },
            { hour: "12:00", actual: 660, target: 660, transactions: 29, avgTicket: 22.76 },
            { hour: "13:00", actual: 800, target: 800, transactions: 37, avgTicket: 21.62 },
            { hour: "14:00", actual: 500, target: 500, transactions: 24, avgTicket: 20.83 },
            { hour: "15:00", actual: 430, target: 430, transactions: 21, avgTicket: 20.48 },
            { hour: "16:00", actual: 470, target: 470, transactions: 23, avgTicket: 20.43 },
            { hour: "17:00", actual: 780, target: 780, transactions: 34, avgTicket: 22.94 },
            { hour: "18:00", actual: 1010, target: 1010, transactions: 43, avgTicket: 23.49 },
            { hour: "19:00", actual: 1230, target: 1230, transactions: 51, avgTicket: 24.12 },
            { hour: "20:00", actual: 1160, target: 1160, transactions: 48, avgTicket: 24.17 },
            { hour: "21:00", actual: 990, target: 990, transactions: 41, avgTicket: 24.15 },
            { hour: "22:00", actual: 720, target: 720, transactions: 30, avgTicket: 24.00 }
          ],
          dailyTotal: 9150,
          dailyTarget: 9150
        },
        {
          day: "Thursday",
          date: "Nov 7",
          hours: [
            { hour: "11:00", actual: 470, target: 470, transactions: 20, avgTicket: 23.50 },
            { hour: "12:00", actual: 720, target: 720, transactions: 31, avgTicket: 23.23 },
            { hour: "13:00", actual: 870, target: 870, transactions: 39, avgTicket: 22.31 },
            { hour: "14:00", actual: 570, target: 570, transactions: 26, avgTicket: 21.92 },
            { hour: "15:00", actual: 460, target: 460, transactions: 22, avgTicket: 20.91 },
            { hour: "16:00", actual: 510, target: 510, transactions: 24, avgTicket: 21.25 },
            { hour: "17:00", actual: 840, target: 840, transactions: 36, avgTicket: 23.33 },
            { hour: "18:00", actual: 1100, target: 1100, transactions: 46, avgTicket: 23.91 },
            { hour: "19:00", actual: 1320, target: 1320, transactions: 54, avgTicket: 24.44 },
            { hour: "20:00", actual: 1240, target: 1240, transactions: 51, avgTicket: 24.31 },
            { hour: "21:00", actual: 1040, target: 1040, transactions: 43, avgTicket: 24.19 },
            { hour: "22:00", actual: 770, target: 770, transactions: 32, avgTicket: 24.06 }
          ],
          dailyTotal: 9910,
          dailyTarget: 9910
        },
        {
          day: "Friday",
          date: "Nov 8",
          hours: [
            { hour: "11:00", actual: 500, target: 500, transactions: 21, avgTicket: 23.81 },
            { hour: "12:00", actual: 770, target: 770, transactions: 33, avgTicket: 23.33 },
            { hour: "13:00", actual: 920, target: 920, transactions: 41, avgTicket: 22.44 },
            { hour: "14:00", actual: 610, target: 610, transactions: 28, avgTicket: 21.79 },
            { hour: "15:00", actual: 490, target: 490, transactions: 23, avgTicket: 21.30 },
            { hour: "16:00", actual: 540, target: 540, transactions: 25, avgTicket: 21.60 },
            { hour: "17:00", actual: 900, target: 900, transactions: 37, avgTicket: 24.32 },
            { hour: "18:00", actual: 1170, target: 1170, transactions: 48, avgTicket: 24.38 },
            { hour: "19:00", actual: 1420, target: 1420, transactions: 58, avgTicket: 24.48 },
            { hour: "20:00", actual: 1370, target: 1370, transactions: 56, avgTicket: 24.46 },
            { hour: "21:00", actual: 1140, target: 1140, transactions: 47, avgTicket: 24.26 },
            { hour: "22:00", actual: 830, target: 830, transactions: 34, avgTicket: 24.41 }
          ],
          dailyTotal: 10650,
          dailyTarget: 10650
        },
        {
          day: "Saturday",
          date: "Nov 9",
          hours: [
            { hour: "11:00", actual: 540, target: 540, transactions: 23, avgTicket: 23.48 },
            { hour: "12:00", actual: 840, target: 840, transactions: 36, avgTicket: 23.33 },
            { hour: "13:00", actual: 1000, target: 1000, transactions: 44, avgTicket: 22.73 },
            { hour: "14:00", actual: 670, target: 670, transactions: 30, avgTicket: 22.33 },
            { hour: "15:00", actual: 540, target: 540, transactions: 25, avgTicket: 21.60 },
            { hour: "16:00", actual: 580, target: 580, transactions: 27, avgTicket: 21.48 },
            { hour: "17:00", actual: 940, target: 940, transactions: 39, avgTicket: 24.10 },
            { hour: "18:00", actual: 1240, target: 1240, transactions: 51, avgTicket: 24.31 },
            { hour: "19:00", actual: 1500, target: 1500, transactions: 61, avgTicket: 24.59 },
            { hour: "20:00", actual: 1440, target: 1440, transactions: 59, avgTicket: 24.41 },
            { hour: "21:00", actual: 1200, target: 1200, transactions: 49, avgTicket: 24.49 },
            { hour: "22:00", actual: 900, target: 900, transactions: 37, avgTicket: 24.32 }
          ],
          dailyTotal: 11390,
          dailyTarget: 11390
        },
        {
          day: "Sunday",
          date: "Nov 10",
          hours: [
            { hour: "11:00", actual: 470, target: 470, transactions: 20, avgTicket: 23.50 },
            { hour: "12:00", actual: 700, target: 700, transactions: 30, avgTicket: 23.33 },
            { hour: "13:00", actual: 840, target: 840, transactions: 38, avgTicket: 22.11 },
            { hour: "14:00", actual: 570, target: 570, transactions: 26, avgTicket: 21.92 },
            { hour: "15:00", actual: 460, target: 460, transactions: 22, avgTicket: 20.91 },
            { hour: "16:00", actual: 490, target: 490, transactions: 23, avgTicket: 21.30 },
            { hour: "17:00", actual: 770, target: 770, transactions: 33, avgTicket: 23.33 },
            { hour: "18:00", actual: 1000, target: 1000, transactions: 42, avgTicket: 23.81 },
            { hour: "19:00", actual: 1170, target: 1170, transactions: 48, avgTicket: 24.38 },
            { hour: "20:00", actual: 1100, target: 1100, transactions: 45, avgTicket: 24.44 },
            { hour: "21:00", actual: 940, target: 940, transactions: 39, avgTicket: 24.10 },
            { hour: "22:00", actual: 700, target: 700, transactions: 29, avgTicket: 24.14 }
          ],
          dailyTotal: 9200,
          dailyTarget: 9200
        }
      ],
      weeklyTotal: 68740,
      weeklyTarget: 68740,
      performanceVsTarget: 0.0
    }
  ],
  leadingIndicators: {
    guestMomentum: {
      checkinsThisWeek: 1247,
      checkinsLastWeek: 1185,
      checkinsGrowth: 5.2,
      trendForecast: "Steady growth expected"
    },
    bookingHealth: {
      forwardBookings: {
        thisWeek: 89,
        nextWeek: 94,
        weekAfter: 87
      },
      conversionRate: 78,
      cancellationRate: 12,
      noShowRate: 8
    },
    socialPulse: {
      weeklyMentions: 47,
      sentimentScore: 8.2,
      engagementRate: 24,
      reviewVelocity: 12
    }
  },
  sixWeekView: {
    historical: [
      {
        week: 39,
        checkins: 1185,
        bookings: 89,
        revenue: 59940,
        weather: "rainy",
        events: ["Quiz Night"]
      },
      {
        week: 40,
        checkins: 1220,
        bookings: 92,
        revenue: 61570,
        weather: "cloudy",
        events: ["Live Music"]
      },
      {
        week: 41,
        checkins: 1195,
        bookings: 88,
        revenue: 62940,
        weather: "sunny",
        events: ["Football Match"]
      },
      {
        week: 42,
        checkins: 1240,
        bookings: 95,
        revenue: 64470,
        weather: "sunny",
        events: ["Wine Tasting"]
      }
    ],
    forecast: [
      {
        week: 44,
        expectedCheckins: 1280,
        predictedBookings: 98,
        forecastRevenue: 67330,
        weather: "sunny",
        events: ["Halloween Party"]
      },
      {
        week: 45,
        expectedCheckins: 1260,
        predictedBookings: 96,
        forecastRevenue: 68740,
        weather: "cloudy",
        events: ["Bonfire Night"]
      }
    ]
  }
};

export const recommendations: Recommendation[] = [
  {
    category: "direct-venue",
    priority: "important",
    title: 'Thursday Evening Revenue Recovery Bet',
    insight: 'Collins POS data shows Thursday 7-9pm consistently 15% below target. Design My Night booking data reveals 40% table vacancy during this peak window. Historical pattern suggests seating configuration mismatch.',
    action: 'Collaborate on reconfiguring seating: create more 2-person intimate setups and add high-top tables near bar. Test for 3 weeks, measure against POS hourly revenue data.',
    impact: '+£180 weekly revenue (based on similar venue optimizations)',
    timeframe: '3-week test period',
    weatherFactor: 'Weather API shows sunny Thursday forecast - opportunity to promote outdoor seating simultaneously',
    loyaltyData: 'Pubble check-in patterns show regular customers prefer smaller table arrangements on weekdays'
  },
  {
    category: "promotional",
    priority: "opportunity",
    title: "Weather-Based Outdoor Seating Promotion",
    insight: "Weather forecast shows sunny conditions for Thursday-Saturday. Historical data shows 25% revenue increase during sunny weather when outdoor seating is promoted.",
    action: "Post social media promotion for outdoor dining, update booking system to highlight garden seating, train staff to suggest outdoor tables.",
    impact: "15-20% revenue increase on sunny days",
    timeframe: "Launch immediately for this week",
    weatherFactor: "Sunny weather forecast Thu-Sat",
    loyaltyData: "Outdoor diners have 30% higher average spend"
  },
  {
    category: "operational",
    priority: "urgent",
    title: "Staff Training on Upselling Techniques",
    insight: "Average transaction value has declined 8% over past 3 weeks. Comparison with top-performing pubs shows potential for improvement.",
    action: "Conduct 2-hour training session on wine pairing suggestions, dessert upselling, and premium drink recommendations.",
    impact: "£3-5 increase in average transaction value",
    timeframe: "Complete by end of week",
    complianceRisk: "Ensure responsible service of alcohol guidelines are maintained"
  },
  {
    category: "promotional",
    priority: "opportunity",
    title: "Social Media Engagement Campaign",
    insight: "Social mentions down 15% vs last month. Competitor analysis shows successful user-generated content campaigns driving 20% more engagement.",
    action: "Launch #CrownMoments photo contest, encourage customers to share dining experiences, offer weekly prize for best photo.",
    impact: "25-30% increase in social engagement",
    timeframe: "Launch next week",
    loyaltyData: "Social media engaged customers visit 40% more frequently"
  },
  {
    category: "direct-venue",
    priority: "opportunity",
    title: 'Weekend Booking Recovery Social Bet',
    insight: 'Design My Night data shows 8% drop in weekend booking conversion over 4 weeks, while Reputation platform shows social engagement up 15%. Disconnect between interest and conversion.',
    action: 'Collaborate on targeted Instagram stories campaign: weekend specials + table availability with direct Design My Night booking links. A/B test food imagery vs. atmosphere content.',
    impact: '+12% weekend booking conversion (based on similar campaigns)',
    timeframe: '4-week campaign test',
    loyaltyData: 'Reputation analytics show followers engage 3x more with food imagery than general pub content'
  },
  {
    category: "operational",
    priority: "important",
    title: 'Transaction Value Optimization Bet',
    insight: 'Collins POS analytics show average transaction £2.30 below regional benchmark. Wine category specifically underperforming by 25% vs. similar venues. Staff interaction data suggests missed upselling opportunities.',
    action: 'Collaborate on targeted staff training: 3 key team members learn wine pairing + dessert recommendations. Track impact via POS transaction analysis over 4 weeks.',
    impact: '+£1.20 average transaction value (based on regional successful implementations)',
    timeframe: '4-week measurement period post-training',
    complianceRisk: 'Maintain responsible service guidelines - training includes alcohol awareness protocols'
  }
];

export const implementedRecommendations: ImplementedRecommendation[] = [
  {
    id: 'impl-1',
    originalRecommendation: {
      title: 'Friday Evening Acoustic Music Bet',
      insight: 'Pubble check-in data showed Friday footfall 20% below Saturday. GigPig historical data suggested acoustic nights drive 15% revenue uplift in similar venues.',
      action: 'Booked acoustic duo for Friday nights to create intimate atmosphere and extend dwell time',
      impact: '+£200 weekly revenue increase predicted',
      timeframe: '4-week trial period'
    },
    implementedDate: '2024-01-08',
    weekImplemented: 45,
    actionTaken: 'Booked "The Riverside Duo" for 4 consecutive Friday nights, promoted via Instagram stories',
    expectedImpact: '+£200 weekly revenue increase',
    actualImpact: '+£245 weekly revenue (Collins POS data shows 22% Friday revenue increase)',
    impactAchieved: true,
    impactPercentage: 140,
    notes: 'Bet exceeded prediction. POS data shows 18% longer average dwell time, 15% increase in drinks per customer. Booking via GigPig for next month.',
    category: 'direct-venue'
  },
  {
    id: 'impl-2',
    originalRecommendation: {
      title: 'Weekday Lunch Revenue Bet',
      insight: 'Collins POS data showed weekday lunch revenue 30% below capacity. Local business district foot traffic data suggested untapped market.',
      action: 'Launch "Business Lunch Express" menu with 30-minute service guarantee',
      impact: '+£150 daily lunch revenue predicted',
      timeframe: '3-week trial'
    },
    implementedDate: '2024-01-15',
    weekImplemented: 46,
    actionTaken: 'Created automated weather-based social posts promoting garden seating and outdoor specials',
    expectedImpact: '+15% outdoor seating bookings',
    actualImpact: '+22% outdoor seating bookings',
    impactAchieved: true,
    impactPercentage: 147,
    notes: 'Great response on Instagram. Will continue this strategy.',
    category: 'promotional'
  },
  {
    id: 'impl-3',
    originalRecommendation: {
      title: 'Staff Training for Peak Hours',
      insight: 'Service delays during 7-9pm peak result in 8% lower transaction values',
      action: 'Implement additional staff training for peak hour efficiency',
      impact: '+£150 weekly revenue',
      timeframe: 'Within 2 weeks'
    },
    implementedDate: '2024-01-22',
    weekImplemented: 47,
    actionTaken: 'Created express menu with 6 items, trained kitchen staff on 30-min timing, launched LinkedIn ads targeting local businesses',
    expectedImpact: '+£150 daily lunch revenue increase',
    actualImpact: '+£95 daily lunch revenue (Collins POS shows 12% lunch revenue increase, but timing targets missed)',
    impactAchieved: false,
    impactPercentage: 63,
    notes: 'Learning bet: Kitchen timing inconsistent (avg 38 mins vs 30 min target). Customer feedback positive on food quality. Need simpler menu or additional kitchen training.',
    category: 'operational'
  },
  {
    id: 'impl-4',
    originalRecommendation: {
      title: 'Weather-Responsive Outdoor Seating Bet',
      insight: 'Weather API correlation with POS data showed sunny days drive 40% higher revenue, but outdoor seating only 60% utilized during good weather.',
      action: 'Create automated weather-triggered social media posts promoting garden area when forecast shows sun',
      impact: '+£120 per sunny day predicted',
      timeframe: '2-week test period'
    },
    implementedDate: '2024-01-25',
    weekImplemented: 47,
    actionTaken: 'Booked local acoustic duo "The Harmonics" for Thursday evening performance',
    expectedImpact: '+£300 event night revenue',
    actualImpact: '+£420 event night revenue',
    impactAchieved: true,
    impactPercentage: 140,
    notes: 'Fantastic turnout! Customers stayed longer and ordered more drinks.',
    category: 'direct-venue'
  },
  {
    id: 'impl-5',
    originalRecommendation: {
      title: 'Menu Price Optimization',
      insight: 'Competitor analysis shows 12% pricing gap on premium items',
      action: 'Adjust pricing on 6 premium menu items to match market rates',
      impact: '+£180 weekly revenue',
      timeframe: 'Next menu update'
    },
    implementedDate: '2024-02-01',
    weekImplemented: 48,
    actionTaken: 'Updated pricing on steaks, seafood, and premium cocktails',
    expectedImpact: '+£180 weekly revenue',
    actualImpact: '+£125 weekly revenue',
    impactAchieved: false,
    impactPercentage: 69,
    notes: 'Some customer resistance to price increases. May need to adjust portion sizes.',
    category: 'operational'
  },
  {
    id: 'impl-6',
    originalRecommendation: {
      title: 'Weekend Brunch Promotion',
      insight: 'Saturday morning revenue 40% below capacity potential',
      action: 'Launch weekend brunch menu with social media campaign',
      impact: '+£250 weekend revenue',
      timeframe: 'Next weekend'
    },
    implementedDate: '2024-02-03',
    weekImplemented: 48,
    actionTaken: 'Set up automated Instagram posts triggered by weather API, added outdoor menu boards and "Garden Open" signage',
    expectedImpact: '+£120 per sunny day increase',
    actualImpact: '+£135 per sunny day (Collins POS tracked across 5 sunny days in test period)',
    impactAchieved: true,
    impactPercentage: 152,
    notes: 'Winning bet: Weather API integration worked perfectly. Reputation platform shows positive customer feedback about proactive outdoor communication. Scaling to other weather patterns.',
    category: 'promotional'
  }
];