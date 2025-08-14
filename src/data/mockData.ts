// Mock data for Albert's Schloss demo application
import { RegionalData, IndividualPubData, Recommendation, ImplementedRecommendation } from '../types';

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
      weeklyTotal: 78500,
      weeklyTarget: 75000,
      weeklyCustomers: 1089,
      avgCheckSize: 72,
      checkSizeChange: 5.2,
      performanceVsTarget: 4.7,
      weekData: [
        {
          day: "Monday",
          date: "Nov 4",
          dailyTotal: 8900,
          dailyTarget: 9200,
          hours: [
            { hour: "11:00", actual: 420, target: 450, transactions: 6, avgTransaction: 70, customers: 8 },
            { hour: "12:00", actual: 680, target: 720, transactions: 9, avgTransaction: 76, customers: 12 },
            { hour: "13:00", actual: 890, target: 950, transactions: 12, avgTransaction: 74, customers: 16 },
            { hour: "14:00", actual: 720, target: 780, transactions: 10, avgTransaction: 72, customers: 14 },
            { hour: "15:00", actual: 450, target: 480, transactions: 6, avgTransaction: 75, customers: 9 },
            { hour: "16:00", actual: 380, target: 420, transactions: 5, avgTransaction: 76, customers: 7 },
            { hour: "17:00", actual: 620, target: 680, transactions: 8, avgTransaction: 78, customers: 11 },
            { hour: "18:00", actual: 890, target: 920, transactions: 11, avgTransaction: 81, customers: 15 },
            { hour: "19:00", actual: 1240, target: 1280, transactions: 15, avgTransaction: 83, customers: 20 },
            { hour: "20:00", actual: 1450, target: 1500, transactions: 17, avgTransaction: 85, customers: 23 },
            { hour: "21:00", actual: 1320, target: 1380, transactions: 16, avgTransaction: 83, customers: 21 },
            { hour: "22:00", actual: 830, target: 890, transactions: 10, avgTransaction: 83, customers: 13 }
          ]
        },
        {
          day: "Tuesday",
          date: "Nov 5",
          dailyTotal: 12400,
          dailyTarget: 12000,
          hours: [
            { hour: "11:00", actual: 520, target: 480, transactions: 7, avgTransaction: 74, customers: 10 },
            { hour: "12:00", actual: 780, target: 750, transactions: 10, avgTransaction: 78, customers: 14 },
            { hour: "13:00", actual: 980, target: 950, transactions: 12, avgTransaction: 82, customers: 17 },
            { hour: "14:00", actual: 820, target: 800, transactions: 10, avgTransaction: 82, customers: 15 },
            { hour: "15:00", actual: 520, target: 500, transactions: 6, avgTransaction: 87, customers: 9 },
            { hour: "16:00", actual: 450, target: 430, transactions: 5, avgTransaction: 90, customers: 8 },
            { hour: "17:00", actual: 720, target: 700, transactions: 8, avgTransaction: 90, customers: 12 },
            { hour: "18:00", actual: 1020, target: 980, transactions: 11, avgTransaction: 93, customers: 16 },
            { hour: "19:00", actual: 1580, target: 1520, transactions: 17, avgTransaction: 93, customers: 24 },
            { hour: "20:00", actual: 1890, target: 1850, transactions: 20, avgTransaction: 95, customers: 28 },
            { hour: "21:00", actual: 1720, target: 1680, transactions: 18, avgTransaction: 96, customers: 26 },
            { hour: "22:00", actual: 1390, target: 1350, transactions: 14, avgTransaction: 99, customers: 21 }
          ]
        },
        {
          day: "Wednesday",
          date: "Nov 6",
          dailyTotal: 11200,
          dailyTarget: 10800,
          hours: [
            { hour: "11:00", actual: 480, target: 450, transactions: 6, avgTransaction: 80, customers: 9 },
            { hour: "12:00", actual: 720, target: 680, transactions: 9, avgTransaction: 80, customers: 13 },
            { hour: "13:00", actual: 920, target: 880, transactions: 11, avgTransaction: 84, customers: 16 },
            { hour: "14:00", actual: 760, target: 720, transactions: 9, avgTransaction: 84, customers: 14 },
            { hour: "15:00", actual: 480, target: 450, transactions: 6, avgTransaction: 80, customers: 9 },
            { hour: "16:00", actual: 420, target: 400, transactions: 5, avgTransaction: 84, customers: 8 },
            { hour: "17:00", actual: 680, target: 650, transactions: 8, avgTransaction: 85, customers: 12 },
            { hour: "18:00", actual: 960, target: 920, transactions: 11, avgTransaction: 87, customers: 16 },
            { hour: "19:00", actual: 1380, target: 1320, transactions: 16, avgTransaction: 86, customers: 22 },
            { hour: "20:00", actual: 1620, target: 1580, transactions: 19, avgTransaction: 85, customers: 26 },
            { hour: "21:00", actual: 1480, target: 1440, transactions: 17, avgTransaction: 87, customers: 24 },
            { hour: "22:00", actual: 1290, target: 1250, transactions: 15, avgTransaction: 86, customers: 20 }
          ]
        },
        {
          day: "Thursday",
          date: "Nov 7",
          dailyTotal: 10800,
          dailyTarget: 11500,
          hours: [
            { hour: "11:00", actual: 420, target: 480, transactions: 5, avgTransaction: 84, customers: 8 },
            { hour: "12:00", actual: 680, target: 750, transactions: 8, avgTransaction: 85, customers: 12 },
            { hour: "13:00", actual: 860, target: 950, transactions: 10, avgTransaction: 86, customers: 15 },
            { hour: "14:00", actual: 720, target: 800, transactions: 8, avgTransaction: 90, customers: 13 },
            { hour: "15:00", actual: 450, target: 500, transactions: 5, avgTransaction: 90, customers: 8 },
            { hour: "16:00", actual: 380, target: 450, transactions: 4, avgTransaction: 95, customers: 7 },
            { hour: "17:00", actual: 620, target: 720, transactions: 7, avgTransaction: 89, customers: 11 },
            { hour: "18:00", actual: 880, target: 980, transactions: 10, avgTransaction: 88, customers: 15 },
            { hour: "19:00", actual: 1180, target: 1380, transactions: 13, avgTransaction: 91, customers: 19 },
            { hour: "20:00", actual: 1420, target: 1680, transactions: 16, avgTransaction: 89, customers: 23 },
            { hour: "21:00", actual: 1280, target: 1520, transactions: 14, avgTransaction: 91, customers: 21 },
            { hour: "22:00", actual: 1100, target: 1285, transactions: 12, avgTransaction: 92, customers: 18 }
          ]
        },
        {
          day: "Friday",
          date: "Nov 8",
          dailyTotal: 18200,
          dailyTarget: 17500,
          hours: [
            { hour: "11:00", actual: 680, target: 650, transactions: 8, avgTransaction: 85, customers: 12 },
            { hour: "12:00", actual: 920, target: 880, transactions: 11, avgTransaction: 84, customers: 16 },
            { hour: "13:00", actual: 1180, target: 1120, transactions: 14, avgTransaction: 84, customers: 20 },
            { hour: "14:00", actual: 980, target: 950, transactions: 12, avgTransaction: 82, customers: 17 },
            { hour: "15:00", actual: 720, target: 680, transactions: 9, avgTransaction: 80, customers: 13 },
            { hour: "16:00", actual: 620, target: 580, transactions: 8, avgTransaction: 78, customers: 11 },
            { hour: "17:00", actual: 1020, target: 980, transactions: 13, avgTransaction: 78, customers: 18 },
            { hour: "18:00", actual: 1480, target: 1420, transactions: 19, avgTransaction: 78, customers: 26 },
            { hour: "19:00", actual: 2180, target: 2080, transactions: 28, avgTransaction: 78, customers: 38 },
            { hour: "20:00", actual: 2680, target: 2580, transactions: 34, avgTransaction: 79, customers: 46 },
            { hour: "21:00", actual: 2480, target: 2380, transactions: 31, avgTransaction: 80, customers: 42 },
            { hour: "22:00", actual: 2230, target: 2170, transactions: 28, avgTransaction: 80, customers: 38 }
          ]
        },
        {
          day: "Saturday",
          date: "Nov 9",
          dailyTotal: 21800,
          dailyTarget: 20500,
          hours: [
            { hour: "11:00", actual: 920, target: 850, transactions: 11, avgTransaction: 84, customers: 16 },
            { hour: "12:00", actual: 1280, target: 1200, transactions: 15, avgTransaction: 85, customers: 22 },
            { hour: "13:00", actual: 1580, target: 1480, transactions: 19, avgTransaction: 83, customers: 27 },
            { hour: "14:00", actual: 1380, target: 1280, transactions: 17, avgTransaction: 81, customers: 24 },
            { hour: "15:00", actual: 980, target: 920, transactions: 12, avgTransaction: 82, customers: 17 },
            { hour: "16:00", actual: 820, target: 780, transactions: 10, avgTransaction: 82, customers: 14 },
            { hour: "17:00", actual: 1280, target: 1200, transactions: 16, avgTransaction: 80, customers: 22 },
            { hour: "18:00", actual: 1880, target: 1780, transactions: 24, avgTransaction: 78, customers: 32 },
            { hour: "19:00", actual: 2680, target: 2580, transactions: 34, avgTransaction: 79, customers: 46 },
            { hour: "20:00", actual: 3180, target: 3080, transactions: 40, avgTransaction: 80, customers: 54 },
            { hour: "21:00", actual: 2980, target: 2880, transactions: 37, avgTransaction: 81, customers: 50 },
            { hour: "22:00", actual: 2830, target: 2740, transactions: 35, avgTransaction: 81, customers: 47 }
          ]
        },
        {
          day: "Sunday",
          date: "Nov 10",
          dailyTotal: 14200,
          dailyTarget: 13500,
          hours: [
            { hour: "11:00", actual: 780, target: 720, transactions: 9, avgTransaction: 87, customers: 14 },
            { hour: "12:00", actual: 1080, target: 1020, transactions: 12, avgTransaction: 90, customers: 18 },
            { hour: "13:00", actual: 1380, target: 1320, transactions: 15, avgTransaction: 92, customers: 23 },
            { hour: "14:00", actual: 1180, target: 1120, transactions: 13, avgTransaction: 91, customers: 20 },
            { hour: "15:00", actual: 880, target: 820, transactions: 10, avgTransaction: 88, customers: 15 },
            { hour: "16:00", actual: 720, target: 680, transactions: 8, avgTransaction: 90, customers: 12 },
            { hour: "17:00", actual: 980, target: 920, transactions: 11, avgTransaction: 89, customers: 16 },
            { hour: "18:00", actual: 1380, target: 1320, transactions: 15, avgTransaction: 92, customers: 22 },
            { hour: "19:00", actual: 1820, target: 1780, transactions: 20, avgTransaction: 91, customers: 29 },
            { hour: "20:00", actual: 1980, target: 1920, transactions: 22, avgTransaction: 90, customers: 32 },
            { hour: "21:00", actual: 1680, target: 1620, transactions: 19, avgTransaction: 88, customers: 27 },
            { hour: "22:00", actual: 1330, target: 1280, transactions: 15, avgTransaction: 89, customers: 22 }
          ]
        }
      ]
    },
    {
      week: 46,
      weekType: "historical",
      weeklyTotal: 82300,
      weeklyTarget: 78000,
      weeklyCustomers: 1142,
      avgCheckSize: 72,
      checkSizeChange: 2.8,
      performanceVsTarget: 5.5,
      weekData: [
        {
          day: "Monday",
          date: "Nov 11",
          dailyTotal: 9200,
          dailyTarget: 9200,
          hours: [
            { hour: "11:00", actual: 450, target: 450, transactions: 6, avgTransaction: 75, customers: 9 },
            { hour: "12:00", actual: 720, target: 720, transactions: 9, avgTransaction: 80, customers: 13 },
            { hour: "13:00", actual: 950, target: 950, transactions: 12, avgTransaction: 79, customers: 17 },
            { hour: "14:00", actual: 780, target: 780, transactions: 10, avgTransaction: 78, customers: 14 },
            { hour: "15:00", actual: 480, target: 480, transactions: 6, avgTransaction: 80, customers: 9 },
            { hour: "16:00", actual: 420, target: 420, transactions: 5, avgTransaction: 84, customers: 8 },
            { hour: "17:00", actual: 680, target: 680, transactions: 8, avgTransaction: 85, customers: 12 },
            { hour: "18:00", actual: 920, target: 920, transactions: 11, avgTransaction: 84, customers: 16 },
            { hour: "19:00", actual: 1280, target: 1280, transactions: 15, avgTransaction: 85, customers: 22 },
            { hour: "20:00", actual: 1500, target: 1500, transactions: 18, avgTransaction: 83, customers: 25 },
            { hour: "21:00", actual: 1380, target: 1380, transactions: 16, avgTransaction: 86, customers: 23 },
            { hour: "22:00", actual: 890, target: 890, transactions: 10, avgTransaction: 89, customers: 15 }
          ]
        },
        {
          day: "Tuesday",
          date: "Nov 12",
          dailyTotal: 12800,
          dailyTarget: 12000,
          hours: [
            { hour: "11:00", actual: 520, target: 480, transactions: 7, avgTransaction: 74, customers: 10 },
            { hour: "12:00", actual: 800, target: 750, transactions: 10, avgTransaction: 80, customers: 14 },
            { hour: "13:00", actual: 1020, target: 950, transactions: 12, avgTransaction: 85, customers: 17 },
            { hour: "14:00", actual: 850, target: 800, transactions: 10, avgTransaction: 85, customers: 15 },
            { hour: "15:00", actual: 540, target: 500, transactions: 6, avgTransaction: 90, customers: 9 },
            { hour: "16:00", actual: 470, target: 430, transactions: 5, avgTransaction: 94, customers: 8 },
            { hour: "17:00", actual: 750, target: 700, transactions: 8, avgTransaction: 94, customers: 12 },
            { hour: "18:00", actual: 1080, target: 980, transactions: 11, avgTransaction: 98, customers: 16 },
            { hour: "19:00", actual: 1680, target: 1520, transactions: 17, avgTransaction: 99, customers: 24 },
            { hour: "20:00", actual: 1980, target: 1850, transactions: 20, avgTransaction: 99, customers: 28 },
            { hour: "21:00", actual: 1820, target: 1680, transactions: 18, avgTransaction: 101, customers: 26 },
            { hour: "22:00", actual: 1480, target: 1350, transactions: 14, avgTransaction: 106, customers: 21 }
          ]
        },
        {
          day: "Wednesday",
          date: "Nov 13",
          dailyTotal: 11600,
          dailyTarget: 10800,
          hours: [
            { hour: "11:00", actual: 500, target: 450, transactions: 6, avgTransaction: 83, customers: 9 },
            { hour: "12:00", actual: 750, target: 680, transactions: 9, avgTransaction: 83, customers: 13 },
            { hour: "13:00", actual: 960, target: 880, transactions: 11, avgTransaction: 87, customers: 16 },
            { hour: "14:00", actual: 790, target: 720, transactions: 9, avgTransaction: 88, customers: 14 },
            { hour: "15:00", actual: 500, target: 450, transactions: 6, avgTransaction: 83, customers: 9 },
            { hour: "16:00", actual: 440, target: 400, transactions: 5, avgTransaction: 88, customers: 8 },
            { hour: "17:00", actual: 710, target: 650, transactions: 8, avgTransaction: 89, customers: 12 },
            { hour: "18:00", actual: 1000, target: 920, transactions: 11, avgTransaction: 91, customers: 16 },
            { hour: "19:00", actual: 1440, target: 1320, transactions: 16, avgTransaction: 90, customers: 22 },
            { hour: "20:00", actual: 1690, target: 1580, transactions: 19, avgTransaction: 89, customers: 26 },
            { hour: "21:00", actual: 1540, target: 1440, transactions: 17, avgTransaction: 91, customers: 24 },
            { hour: "22:00", actual: 1340, target: 1250, transactions: 15, avgTransaction: 89, customers: 20 }
          ]
        },
        {
          day: "Thursday",
          date: "Nov 14",
          dailyTotal: 11200,
          dailyTarget: 11500,
          hours: [
            { hour: "11:00", actual: 440, target: 480, transactions: 5, avgTransaction: 88, customers: 8 },
            { hour: "12:00", actual: 710, target: 750, transactions: 8, avgTransaction: 89, customers: 12 },
            { hour: "13:00", actual: 900, target: 950, transactions: 10, avgTransaction: 90, customers: 15 },
            { hour: "14:00", actual: 750, target: 800, transactions: 8, avgTransaction: 94, customers: 13 },
            { hour: "15:00", actual: 470, target: 500, transactions: 5, avgTransaction: 94, customers: 8 },
            { hour: "16:00", actual: 400, target: 450, transactions: 4, avgTransaction: 100, customers: 7 },
            { hour: "17:00", actual: 650, target: 720, transactions: 7, avgTransaction: 93, customers: 11 },
            { hour: "18:00", actual: 920, target: 980, transactions: 10, avgTransaction: 92, customers: 15 },
            { hour: "19:00", actual: 1230, target: 1380, transactions: 13, avgTransaction: 95, customers: 19 },
            { hour: "20:00", actual: 1480, target: 1680, transactions: 16, avgTransaction: 93, customers: 23 },
            { hour: "21:00", actual: 1340, target: 1520, transactions: 14, avgTransaction: 96, customers: 21 },
            { hour: "22:00", actual: 1150, target: 1285, transactions: 12, avgTransaction: 96, customers: 18 }
          ]
        },
        {
          day: "Friday",
          date: "Nov 15",
          dailyTotal: 18900,
          dailyTarget: 17500,
          hours: [
            { hour: "11:00", actual: 710, target: 650, transactions: 8, avgTransaction: 89, customers: 12 },
            { hour: "12:00", actual: 960, target: 880, transactions: 11, avgTransaction: 87, customers: 16 },
            { hour: "13:00", actual: 1230, target: 1120, transactions: 14, avgTransaction: 88, customers: 20 },
            { hour: "14:00", actual: 1020, target: 950, transactions: 12, avgTransaction: 85, customers: 17 },
            { hour: "15:00", actual: 750, target: 680, transactions: 9, avgTransaction: 83, customers: 13 },
            { hour: "16:00", actual: 650, target: 580, transactions: 8, avgTransaction: 81, customers: 11 },
            { hour: "17:00", actual: 1060, target: 980, transactions: 13, avgTransaction: 82, customers: 18 },
            { hour: "18:00", actual: 1540, target: 1420, transactions: 19, avgTransaction: 81, customers: 26 },
            { hour: "19:00", actual: 2270, target: 2080, transactions: 28, avgTransaction: 81, customers: 38 },
            { hour: "20:00", actual: 2790, target: 2580, transactions: 34, avgTransaction: 82, customers: 46 },
            { hour: "21:00", actual: 2580, target: 2380, transactions: 31, avgTransaction: 83, customers: 42 },
            { hour: "22:00", actual: 2330, target: 2170, transactions: 28, avgTransaction: 83, customers: 38 }
          ]
        },
        {
          day: "Saturday",
          date: "Nov 16",
          dailyTotal: 22600,
          dailyTarget: 20500,
          hours: [
            { hour: "11:00", actual: 960, target: 850, transactions: 11, avgTransaction: 87, customers: 16 },
            { hour: "12:00", actual: 1330, target: 1200, transactions: 15, avgTransaction: 89, customers: 22 },
            { hour: "13:00", actual: 1640, target: 1480, transactions: 19, avgTransaction: 86, customers: 27 },
            { hour: "14:00", actual: 1430, target: 1280, transactions: 17, avgTransaction: 84, customers: 24 },
            { hour: "15:00", actual: 1020, target: 920, transactions: 12, avgTransaction: 85, customers: 17 },
            { hour: "16:00", actual: 850, target: 780, transactions: 10, avgTransaction: 85, customers: 14 },
            { hour: "17:00", actual: 1330, target: 1200, transactions: 16, avgTransaction: 83, customers: 22 },
            { hour: "18:00", actual: 1950, target: 1780, transactions: 24, avgTransaction: 81, customers: 32 },
            { hour: "19:00", actual: 2780, target: 2580, transactions: 34, avgTransaction: 82, customers: 46 },
            { hour: "20:00", actual: 3300, target: 3080, transactions: 40, avgTransaction: 83, customers: 54 },
            { hour: "21:00", actual: 3090, target: 2880, transactions: 37, avgTransaction: 84, customers: 50 },
            { hour: "22:00", actual: 2930, target: 2740, transactions: 35, avgTransaction: 84, customers: 47 }
          ]
        },
        {
          day: "Sunday",
          date: "Nov 17",
          dailyTotal: 14700,
          dailyTarget: 13500,
          hours: [
            { hour: "11:00", actual: 810, target: 720, transactions: 9, avgTransaction: 90, customers: 14 },
            { hour: "12:00", actual: 1120, target: 1020, transactions: 12, avgTransaction: 93, customers: 18 },
            { hour: "13:00", actual: 1430, target: 1320, transactions: 15, avgTransaction: 95, customers: 23 },
            { hour: "14:00", actual: 1220, target: 1120, transactions: 13, avgTransaction: 94, customers: 20 },
            { hour: "15:00", actual: 910, target: 820, transactions: 10, avgTransaction: 91, customers: 15 },
            { hour: "16:00", actual: 750, target: 680, transactions: 8, avgTransaction: 94, customers: 12 },
            { hour: "17:00", actual: 1020, target: 920, transactions: 11, avgTransaction: 93, customers: 16 },
            { hour: "18:00", actual: 1430, target: 1320, transactions: 15, avgTransaction: 95, customers: 22 },
            { hour: "19:00", actual: 1890, target: 1780, transactions: 20, avgTransaction: 95, customers: 29 },
            { hour: "20:00", actual: 2050, target: 1920, transactions: 22, avgTransaction: 93, customers: 32 },
            { hour: "21:00", actual: 1740, target: 1620, transactions: 19, avgTransaction: 92, customers: 27 },
            { hour: "22:00", actual: 1380, target: 1280, transactions: 15, avgTransaction: 92, customers: 22 }
          ]
        }
      ]
    },
    {
      week: 47,
      weekType: "current",
      weeklyTotal: 89500,
      weeklyTarget: 82000,
      weeklyCustomers: 1247,
      avgCheckSize: 72,
      checkSizeChange: 8.2,
      performanceVsTarget: 9.1,
      weekData: [
        {
          day: "Monday",
          date: "Nov 18",
          dailyTotal: 9800,
          dailyTarget: 9200,
          hours: [
            { hour: "11:00", actual: 480, target: 450, transactions: 6, avgTransaction: 80, customers: 9 },
            { hour: "12:00", actual: 770, target: 720, transactions: 9, avgTransaction: 86, customers: 13 },
            { hour: "13:00", actual: 1020, target: 950, transactions: 12, avgTransaction: 85, customers: 17 },
            { hour: "14:00", actual: 830, target: 780, transactions: 10, avgTransaction: 83, customers: 14 },
            { hour: "15:00", actual: 510, target: 480, transactions: 6, avgTransaction: 85, customers: 9 },
            { hour: "16:00", actual: 450, target: 420, transactions: 5, avgTransaction: 90, customers: 8 },
            { hour: "17:00", actual: 720, target: 680, transactions: 8, avgTransaction: 90, customers: 12 },
            { hour: "18:00", actual: 980, target: 920, transactions: 11, avgTransaction: 89, customers: 16 },
            { hour: "19:00", actual: 1360, target: 1280, transactions: 15, avgTransaction: 91, customers: 22 },
            { hour: "20:00", actual: 1590, target: 1500, transactions: 18, avgTransaction: 88, customers: 25 },
            { hour: "21:00", actual: 1460, target: 1380, transactions: 16, avgTransaction: 91, customers: 23 },
            { hour: "22:00", actual: 940, target: 890, transactions: 10, avgTransaction: 94, customers: 15 }
          ]
        },
        {
          day: "Tuesday",
          date: "Nov 19",
          dailyTotal: 13600,
          dailyTarget: 12000,
          hours: [
            { hour: "11:00", actual: 560, target: 480, transactions: 7, avgTransaction: 80, customers: 10 },
            { hour: "12:00", actual: 850, target: 750, transactions: 10, avgTransaction: 85, customers: 14 },
            { hour: "13:00", actual: 1090, target: 950, transactions: 12, avgTransaction: 91, customers: 17 },
            { hour: "14:00", actual: 900, target: 800, transactions: 10, avgTransaction: 90, customers: 15 },
            { hour: "15:00", actual: 580, target: 500, transactions: 6, avgTransaction: 97, customers: 9 },
            { hour: "16:00", actual: 500, target: 430, transactions: 5, avgTransaction: 100, customers: 8 },
            { hour: "17:00", actual: 800, target: 700, transactions: 8, avgTransaction: 100, customers: 12 },
            { hour: "18:00", actual: 1150, target: 980, transactions: 11, avgTransaction: 105, customers: 16 },
            { hour: "19:00", actual: 1790, target: 1520, transactions: 17, avgTransaction: 105, customers: 24 },
            { hour: "20:00", actual: 2110, target: 1850, transactions: 20, avgTransaction: 106, customers: 28 },
            { hour: "21:00", actual: 1940, target: 1680, transactions: 18, avgTransaction: 108, customers: 26 },
            { hour: "22:00", actual: 1580, target: 1350, transactions: 14, avgTransaction: 113, customers: 21 }
          ]
        },
        {
          day: "Wednesday",
          date: "Nov 20",
          dailyTotal: 12400,
          dailyTarget: 10800,
          hours: [
            { hour: "11:00", actual: 530, target: 450, transactions: 6, avgTransaction: 88, customers: 9 },
            { hour: "12:00", actual: 800, target: 680, transactions: 9, avgTransaction: 89, customers: 13 },
            { hour: "13:00", actual: 1020, target: 880, transactions: 11, avgTransaction: 93, customers: 16 },
            { hour: "14:00", actual: 840, target: 720, transactions: 9, avgTransaction: 93, customers: 14 },
            { hour: "15:00", actual: 530, target: 450, transactions: 6, avgTransaction: 88, customers: 9 },
            { hour: "16:00", actual: 470, target: 400, transactions: 5, avgTransaction: 94, customers: 8 },
            { hour: "17:00", actual: 760, target: 650, transactions: 8, avgTransaction: 95, customers: 12 },
            { hour: "18:00", actual: 1070, target: 920, transactions: 11, avgTransaction: 97, customers: 16 },
            { hour: "19:00", actual: 1540, target: 1320, transactions: 16, avgTransaction: 96, customers: 22 },
            { hour: "20:00", actual: 1800, target: 1580, transactions: 19, avgTransaction: 95, customers: 26 },
            { hour: "21:00", actual: 1640, target: 1440, transactions: 17, avgTransaction: 96, customers: 24 },
            { hour: "22:00", actual: 1430, target: 1250, transactions: 15, avgTransaction: 95, customers: 20 }
          ]
        },
        {
          day: "Thursday",
          date: "Nov 21",
          dailyTotal: 11800,
          dailyTarget: 11500,
          hours: [
            { hour: "11:00", actual: 460, target: 480, transactions: 5, avgTransaction: 92, customers: 8 },
            { hour: "12:00", actual: 740, target: 750, transactions: 8, avgTransaction: 93, customers: 12 },
            { hour: "13:00", actual: 940, target: 950, transactions: 10, avgTransaction: 94, customers: 15 },
            { hour: "14:00", actual: 790, target: 800, transactions: 8, avgTransaction: 99, customers: 13 },
            { hour: "15:00", actual: 490, target: 500, transactions: 5, avgTransaction: 98, customers: 8 },
            { hour: "16:00", actual: 420, target: 450, transactions: 4, avgTransaction: 105, customers: 7 },
            { hour: "17:00", actual: 680, target: 720, transactions: 7, avgTransaction: 97, customers: 11 },
            { hour: "18:00", actual: 960, target: 980, transactions: 10, avgTransaction: 96, customers: 15 },
            { hour: "19:00", actual: 1290, target: 1380, transactions: 13, avgTransaction: 99, customers: 19 },
            { hour: "20:00", actual: 1550, target: 1680, transactions: 16, avgTransaction: 97, customers: 23 },
            { hour: "21:00", actual: 1400, target: 1520, transactions: 14, avgTransaction: 100, customers: 21 },
            { hour: "22:00", actual: 1200, target: 1285, transactions: 12, avgTransaction: 100, customers: 18 }
          ]
        },
        {
          day: "Friday",
          date: "Nov 22",
          dailyTotal: 19800,
          dailyTarget: 17500,
          hours: [
            { hour: "11:00", actual: 740, target: 650, transactions: 8, avgTransaction: 93, customers: 12 },
            { hour: "12:00", actual: 1000, target: 880, transactions: 11, avgTransaction: 91, customers: 16 },
            { hour: "13:00", actual: 1280, target: 1120, transactions: 14, avgTransaction: 91, customers: 20 },
            { hour: "14:00", actual: 1060, target: 950, transactions: 12, avgTransaction: 88, customers: 17 },
            { hour: "15:00", actual: 780, target: 680, transactions: 9, avgTransaction: 87, customers: 13 },
            { hour: "16:00", actual: 680, target: 580, transactions: 8, avgTransaction: 85, customers: 11 },
            { hour: "17:00", actual: 1100, target: 980, transactions: 13, avgTransaction: 85, customers: 18 },
            { hour: "18:00", actual: 1600, target: 1420, transactions: 19, avgTransaction: 84, customers: 26 },
            { hour: "19:00", actual: 2360, target: 2080, transactions: 28, avgTransaction: 84, customers: 38 },
            { hour: "20:00", actual: 2900, target: 2580, transactions: 34, avgTransaction: 85, customers: 46 },
            { hour: "21:00", actual: 2680, target: 2380, transactions: 31, avgTransaction: 86, customers: 42 },
            { hour: "22:00", actual: 2420, target: 2170, transactions: 28, avgTransaction: 86, customers: 38 }
          ]
        },
        {
          day: "Saturday",
          date: "Nov 23",
          dailyTotal: 23400,
          dailyTarget: 20500,
          hours: [
            { hour: "11:00", actual: 1000, target: 850, transactions: 11, avgTransaction: 91, customers: 16 },
            { hour: "12:00", actual: 1380, target: 1200, transactions: 15, avgTransaction: 92, customers: 22 },
            { hour: "13:00", actual: 1700, target: 1480, transactions: 19, avgTransaction: 89, customers: 27 },
            { hour: "14:00", actual: 1480, target: 1280, transactions: 17, avgTransaction: 87, customers: 24 },
            { hour: "15:00", actual: 1060, target: 920, transactions: 12, avgTransaction: 88, customers: 17 },
            { hour: "16:00", actual: 880, target: 780, transactions: 10, avgTransaction: 88, customers: 14 },
            { hour: "17:00", actual: 1380, target: 1200, transactions: 16, avgTransaction: 86, customers: 22 },
            { hour: "18:00", actual: 2020, target: 1780, transactions: 24, avgTransaction: 84, customers: 32 },
            { hour: "19:00", actual: 2880, target: 2580, transactions: 34, avgTransaction: 85, customers: 46 },
            { hour: "20:00", actual: 3420, target: 3080, transactions: 40, avgTransaction: 86, customers: 54 },
            { hour: "21:00", actual: 3200, target: 2880, transactions: 37, avgTransaction: 86, customers: 50 },
            { hour: "22:00", actual: 3040, target: 2740, transactions: 35, avgTransaction: 87, customers: 47 }
          ]
        },
        {
          day: "Sunday",
          date: "Nov 24",
          dailyTotal: 15200,
          dailyTarget: 13500,
          hours: [
            { hour: "11:00", actual: 840, target: 720, transactions: 9, avgTransaction: 93, customers: 14 },
            { hour: "12:00", actual: 1160, target: 1020, transactions: 12, avgTransaction: 97, customers: 18 },
            { hour: "13:00", actual: 1480, target: 1320, transactions: 15, avgTransaction: 99, customers: 23 },
            { hour: "14:00", actual: 1260, target: 1120, transactions: 13, avgTransaction: 97, customers: 20 },
            { hour: "15:00", actual: 940, target: 820, transactions: 10, avgTransaction: 94, customers: 15 },
            { hour: "16:00", actual: 780, target: 680, transactions: 8, avgTransaction: 98, customers: 12 },
            { hour: "17:00", actual: 1060, target: 920, transactions: 11, avgTransaction: 96, customers: 16 },
            { hour: "18:00", actual: 1480, target: 1320, transactions: 15, avgTransaction: 99, customers: 22 },
            { hour: "19:00", actual: 1960, target: 1780, transactions: 20, avgTransaction: 98, customers: 29 },
            { hour: "20:00", actual: 2120, target: 1920, transactions: 22, avgTransaction: 96, customers: 32 },
            { hour: "21:00", actual: 1800, target: 1620, transactions: 19, avgTransaction: 95, customers: 27 },
            { hour: "22:00", actual: 1430, target: 1280, transactions: 15, avgTransaction: 95, customers: 22 }
          ]
        }
      ]
    },
    {
      week: 48,
      weekType: "forecast",
      weeklyTotal: 0,
      weeklyTarget: 85000,
      weeklyCustomers: 0,
      avgCheckSize: 0,
      checkSizeChange: 0,
      performanceVsTarget: 0,
      weekData: [
        {
          day: "Monday",
          date: "Nov 25",
          dailyTotal: 0,
          dailyTarget: 9500,
          hours: [
            { hour: "11:00", actual: 0, target: 470, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "12:00", actual: 0, target: 750, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "13:00", actual: 0, target: 990, transactions: 0, avgTransaction: 0, customers: 12 },
            { hour: "14:00", actual: 0, target: 810, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "15:00", actual: 0, target: 500, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "16:00", actual: 0, target: 440, transactions: 0, avgTransaction: 0, customers: 5 },
            { hour: "17:00", actual: 0, target: 710, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "18:00", actual: 0, target: 960, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "19:00", actual: 0, target: 1330, transactions: 0, avgTransaction: 0, customers: 15 },
            { hour: "20:00", actual: 0, target: 1560, transactions: 0, avgTransaction: 0, customers: 18 },
            { hour: "21:00", actual: 0, target: 1430, transactions: 0, avgTransaction: 0, customers: 16 },
            { hour: "22:00", actual: 0, target: 920, transactions: 0, avgTransaction: 0, customers: 10 }
          ]
        },
        {
          day: "Tuesday",
          date: "Nov 26",
          dailyTotal: 0,
          dailyTarget: 13200,
          hours: [
            { hour: "11:00", actual: 0, target: 550, transactions: 0, avgTransaction: 0, customers: 7 },
            { hour: "12:00", actual: 0, target: 830, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "13:00", actual: 0, target: 1070, transactions: 0, avgTransaction: 0, customers: 12 },
            { hour: "14:00", actual: 0, target: 880, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "15:00", actual: 0, target: 570, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "16:00", actual: 0, target: 490, transactions: 0, avgTransaction: 0, customers: 5 },
            { hour: "17:00", actual: 0, target: 780, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "18:00", actual: 0, target: 1120, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "19:00", actual: 0, target: 1750, transactions: 0, avgTransaction: 0, customers: 17 },
            { hour: "20:00", actual: 0, target: 2060, transactions: 0, avgTransaction: 0, customers: 20 },
            { hour: "21:00", actual: 0, target: 1890, transactions: 0, avgTransaction: 0, customers: 18 },
            { hour: "22:00", actual: 0, target: 1540, transactions: 0, avgTransaction: 0, customers: 14 }
          ]
        },
        {
          day: "Wednesday",
          date: "Nov 27",
          dailyTotal: 0,
          dailyTarget: 12100,
          hours: [
            { hour: "11:00", actual: 0, target: 520, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "12:00", actual: 0, target: 780, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "13:00", actual: 0, target: 1000, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "14:00", actual: 0, target: 820, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "15:00", actual: 0, target: 520, transactions: 0, avgTransaction: 0, customers: 6 },
            { hour: "16:00", actual: 0, target: 460, transactions: 0, avgTransaction: 0, customers: 5 },
            { hour: "17:00", actual: 0, target: 740, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "18:00", actual: 0, target: 1040, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "19:00", actual: 0, target: 1500, transactions: 0, avgTransaction: 0, customers: 16 },
            { hour: "20:00", actual: 0, target: 1760, transactions: 0, avgTransaction: 0, customers: 19 },
            { hour: "21:00", actual: 0, target: 1600, transactions: 0, avgTransaction: 0, customers: 17 },
            { hour: "22:00", actual: 0, target: 1400, transactions: 0, avgTransaction: 0, customers: 15 }
          ]
        },
        {
          day: "Thursday",
          date: "Nov 28",
          dailyTotal: 0,
          dailyTarget: 11900,
          hours: [
            { hour: "11:00", actual: 0, target: 480, transactions: 0, avgTransaction: 0, customers: 5 },
            { hour: "12:00", actual: 0, target: 770, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "13:00", actual: 0, target: 980, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "14:00", actual: 0, target: 820, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "15:00", actual: 0, target: 510, transactions: 0, avgTransaction: 0, customers: 5 },
            { hour: "16:00", actual: 0, target: 440, transactions: 0, avgTransaction: 0, customers: 4 },
            { hour: "17:00", actual: 0, target: 710, transactions: 0, avgTransaction: 0, customers: 7 },
            { hour: "18:00", actual: 0, target: 1000, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "19:00", actual: 0, target: 1340, transactions: 0, avgTransaction: 0, customers: 13 },
            { hour: "20:00", actual: 0, target: 1610, transactions: 0, avgTransaction: 0, customers: 16 },
            { hour: "21:00", actual: 0, target: 1450, transactions: 0, avgTransaction: 0, customers: 14 },
            { hour: "22:00", actual: 0, target: 1250, transactions: 0, avgTransaction: 0, customers: 12 }
          ]
        },
        {
          day: "Friday",
          date: "Nov 29",
          dailyTotal: 0,
          dailyTarget: 20500,
          hours: [
            { hour: "11:00", actual: 0, target: 770, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "12:00", actual: 0, target: 1040, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "13:00", actual: 0, target: 1330, transactions: 0, avgTransaction: 0, customers: 14 },
            { hour: "14:00", actual: 0, target: 1100, transactions: 0, avgTransaction: 0, customers: 12 },
            { hour: "15:00", actual: 0, target: 810, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "16:00", actual: 0, target: 710, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "17:00", actual: 0, target: 1140, transactions: 0, avgTransaction: 0, customers: 13 },
            { hour: "18:00", actual: 0, target: 1660, transactions: 0, avgTransaction: 0, customers: 19 },
            { hour: "19:00", actual: 0, target: 2450, transactions: 0, avgTransaction: 0, customers: 28 },
            { hour: "20:00", actual: 0, target: 3010, transactions: 0, avgTransaction: 0, customers: 34 },
            { hour: "21:00", actual: 0, target: 2780, transactions: 0, avgTransaction: 0, customers: 31 },
            { hour: "22:00", actual: 0, target: 2510, transactions: 0, avgTransaction: 0, customers: 28 }
          ]
        },
        {
          day: "Saturday",
          date: "Nov 30",
          dailyTotal: 0,
          dailyTarget: 24300,
          hours: [
            { hour: "11:00", actual: 0, target: 1040, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "12:00", actual: 0, target: 1430, transactions: 0, avgTransaction: 0, customers: 15 },
            { hour: "13:00", actual: 0, target: 1760, transactions: 0, avgTransaction: 0, customers: 19 },
            { hour: "14:00", actual: 0, target: 1540, transactions: 0, avgTransaction: 0, customers: 17 },
            { hour: "15:00", actual: 0, target: 1100, transactions: 0, avgTransaction: 0, customers: 12 },
            { hour: "16:00", actual: 0, target: 910, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "17:00", actual: 0, target: 1430, transactions: 0, avgTransaction: 0, customers: 16 },
            { hour: "18:00", actual: 0, target: 2100, transactions: 0, avgTransaction: 0, customers: 24 },
            { hour: "19:00", actual: 0, target: 2990, transactions: 0, avgTransaction: 0, customers: 34 },
            { hour: "20:00", actual: 0, target: 3550, transactions: 0, avgTransaction: 0, customers: 40 },
            { hour: "21:00", actual: 0, target: 3320, transactions: 0, avgTransaction: 0, customers: 37 },
            { hour: "22:00", actual: 0, target: 3160, transactions: 0, avgTransaction: 0, customers: 35 }
          ]
        },
        {
          day: "Sunday",
          date: "Dec 1",
          dailyTotal: 0,
          dailyTarget: 15700,
          hours: [
            { hour: "11:00", actual: 0, target: 870, transactions: 0, avgTransaction: 0, customers: 9 },
            { hour: "12:00", actual: 0, target: 1200, transactions: 0, avgTransaction: 0, customers: 12 },
            { hour: "13:00", actual: 0, target: 1530, transactions: 0, avgTransaction: 0, customers: 15 },
            { hour: "14:00", actual: 0, target: 1310, transactions: 0, avgTransaction: 0, customers: 13 },
            { hour: "15:00", actual: 0, target: 970, transactions: 0, avgTransaction: 0, customers: 10 },
            { hour: "16:00", actual: 0, target: 810, transactions: 0, avgTransaction: 0, customers: 8 },
            { hour: "17:00", actual: 0, target: 1100, transactions: 0, avgTransaction: 0, customers: 11 },
            { hour: "18:00", actual: 0, target: 1530, transactions: 0, avgTransaction: 0, customers: 15 },
            { hour: "19:00", actual: 0, target: 2030, transactions: 0, avgTransaction: 0, customers: 20 },
            { hour: "20:00", actual: 0, target: 2200, transactions: 0, avgTransaction: 0, customers: 22 },
            { hour: "21:00", actual: 0, target: 1870, transactions: 0, avgTransaction: 0, customers: 19 },
            { hour: "22:00", actual: 0, target: 1480, transactions: 0, avgTransaction: 0, customers: 15 }
          ]
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
    actionTaken: 'Launched bottomless brunch gift vouchers with Mother\'s Day marketing campaign',
    expectedImpact: '30% increase in brunch bookings',
    actualImpact: '18% increase in brunch bookings',
    impactPercentage: 60,
      priority: "opportunity",
    category: 'promotional',
    notes: 'Good concept but timing was off. Mother\'s Day campaign started too late. Earlier marketing needed.'
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