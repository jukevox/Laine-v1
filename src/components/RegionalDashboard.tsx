import React from 'react';
import PortfolioSummary from './regional/PortfolioSummary';
import PubGrid from './regional/PubGrid';
import { regionalData } from '../data/mockData';

export default function RegionalDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Regional Management Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Portfolio performance and resource allocation across 55 locations</p>
      </div>
      
      <PortfolioSummary data={regionalData.portfolioSummary} />
      <PubGrid pubs={regionalData.pubGrid} />
    </div>
  );
}