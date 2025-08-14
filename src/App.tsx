import React, { useState } from 'react';
import Navigation from './components/Navigation';
import RegionalDashboard from './components/RegionalDashboard';
import IndividualPubDashboard from './components/IndividualPubDashboard';
import ActionBoardPage from './components/ActionBoardPage';

function App() {
  const [currentView, setCurrentView] = useState<'regional' | 'individual' | 'actions'>('regional');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="pb-8">
        {currentView === 'regional' && <RegionalDashboard />}
        {currentView === 'individual' && <IndividualPubDashboard />}
        {currentView === 'actions' && <ActionBoardPage />}
      </main>
    </div>
  );
}

export default App;