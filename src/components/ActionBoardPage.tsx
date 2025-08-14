import React from 'react';
import ActionPriorityBoard from './individual/ActionPriorityBoard';
import { individualPubData } from '../data/mockData';

export default function ActionBoardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Manager Action Board</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {individualPubData.pubInfo.name} • {individualPubData.pubInfo.region} • 
          Managed by {individualPubData.pubInfo.manager} • Week {individualPubData.pubInfo.currentWeek}
        </p>
      </div>
      
      <ActionPriorityBoard />
    </div>
  );
}