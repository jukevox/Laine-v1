import React, { useState } from 'react';
import { Plus, Calendar, Target, Clock, AlertTriangle, CheckCircle2, Edit3, Save, X, Lightbulb, TrendingUp, Cloud, Music } from 'lucide-react';
import { recommendations } from '../../data/mockData';

interface Action {
  id: string;
  title: string;
  description: string;
  priority: 'urgent' | 'important' | 'opportunity';
  timeframe: 'today' | 'this-week' | 'next-week';
  source: 'ai-recommendation' | 'manager-initiated';
  dataSource?: 'weather' | 'holiday' | 'entertainment' | 'historical' | 'ai-insight';
  completed?: boolean;
  createdDate: string;
  targetDate: string;
}

interface NewActionForm {
  title: string;
  description: string;
  priority: 'urgent' | 'important' | 'opportunity';
  timeframe: 'today' | 'this-week' | 'next-week';
  source: 'ai-recommendation' | 'manager-initiated';
  dataSource?: 'weather' | 'holiday' | 'entertainment' | 'historical' | 'ai-insight';
  targetDate: string;
}

const mockActions: Action[] = [
  { 
    id: '1', 
    title: 'Expand Lederhosen merchandise display near entrance', 
    description: 'Manchester location saw 23% revenue lift from prominent Lederhosen display. Test similar placement strategy here.',
    priority: 'urgent', 
    timeframe: 'today',
    source: 'manager-initiated',
    dataSource: 'historical',
    createdDate: '2024-01-15',
    targetDate: '2024-01-15'
  },
  { 
    id: '2', 
    title: 'Book additional piano duo for Thursday Baby Grand Slam', 
    description: 'Thursday piano nights underperforming vs Friday/Saturday. Add second piano duo to create fuller sound experience.',
    priority: 'important', 
    timeframe: 'this-week',
    source: 'manager-initiated',
    dataSource: 'entertainment',
    createdDate: '2024-01-15',
    targetDate: '2024-01-22'
  },
  { 
    id: '3', 
    title: 'Launch beer stein personalization service during Pleasure Palace', 
    description: 'Birmingham location generated £340 additional revenue per Saturday with custom stein engraving. Test during peak Saturday nights.',
    priority: 'opportunity', 
    timeframe: 'this-week',
    source: 'ai-recommendation',
    dataSource: 'historical',
    createdDate: '2024-01-14',
    targetDate: '2024-01-22'
  },
  { 
    id: '4', 
    title: 'Add promenader costume rental for Sunday Service', 
    description: 'Sunday attendance down 12%. Offer authentic German costume rentals to enhance immersive Sunday Service experience.',
    priority: 'opportunity', 
    timeframe: 'next-week',
    source: 'manager-initiated',
    dataSource: 'entertainment',
    createdDate: '2024-01-16',
    targetDate: '2024-01-29'
  }
];

export default function ActionPriorityBoard() {
  const [actions, setActions] = useState<Action[]>(mockActions);
  const [showNewActionForm, setShowNewActionForm] = useState(false);
  const [editingAction, setEditingAction] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline'>('overview');
  const [newAction, setNewAction] = useState<NewActionForm>({
    title: '',
    description: '',
    priority: 'important',
    timeframe: 'this-week',
    source: 'manager-initiated',
    dataSource: 'historical',
    targetDate: ''
  });

  const toggleComplete = (id: string) => {
    setActions(actions.map(action => 
      action.id === id ? { ...action, completed: !action.completed } : action
    ));
  };

  const deleteAction = (id: string) => {
    setActions(actions.filter(action => action.id !== id));
  };

  const addAction = () => {
    if (!newAction.title.trim()) return;
    
    const action: Action = {
      id: Date.now().toString(),
      ...newAction,
      createdDate: new Date().toISOString().split('T')[0],
      targetDate: newAction.targetDate || new Date().toISOString().split('T')[0]
    };
    
    setActions([...actions, action]);
    setNewAction({
      title: '',
      description: '',
      priority: 'important',
      timeframe: 'this-week',
      source: 'manager-initiated',
      dataSource: 'historical',
      targetDate: ''
    });
    setShowNewActionForm(false);
  };

  const adoptAIRecommendation = (recommendation: typeof recommendations[0]) => {
    const action: Action = {
      id: Date.now().toString(),
      title: recommendation.title,
      description: recommendation.action,
      priority: recommendation.priority,
      timeframe: 'this-week',
      source: 'ai-recommendation',
      dataSource: 'ai-insight',
      createdDate: new Date().toISOString().split('T')[0],
      targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    
    setActions([...actions, action]);
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'direct-venue':
        return 'Entertainment & Venue Optimisation';
      case 'promotional':
        return 'Promotional Activities';
      case 'operational':
        return 'Operational & Staff Excellence';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'direct-venue':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'promotional':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      case 'operational':
        return 'text-orange-700 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200';
      case 'important':
        return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200';
      case 'opportunity':
        return 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <AlertTriangle className="w-4 h-4" />;
      case 'important':
        return <Target className="w-4 h-4" />;
      case 'opportunity':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getDataSourceIcon = (dataSource?: string) => {
    switch (dataSource) {
      case 'weather':
        return <Cloud className="w-4 h-4 text-blue-500" />;
      case 'entertainment':
        return <Music className="w-4 h-4 text-purple-500" />;
      case 'ai-insight':
        return <Lightbulb className="w-4 h-4 text-indigo-500" />;
      default:
        return <TrendingUp className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTimeframeIcon = (timeframe: string) => {
    switch (timeframe) {
      case 'today':
        return <Clock className="w-4 h-4 text-red-500" />;
      case 'this-week':
        return <Target className="w-4 h-4 text-yellow-500" />;
      case 'next-week':
        return <Calendar className="w-4 h-4 text-green-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const filterActionsByTimeframe = (timeframe: string) => {
    return actions.filter(action => action.timeframe === timeframe);
  };

  const getTimeframeTitle = (timeframe: string) => {
    switch (timeframe) {
      case 'today':
        return "Today's Actions";
      case 'this-week':
        return "This Week's Goals";
      case 'next-week':
        return "Next Week Prep";
      default:
        return timeframe;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Add Action Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Action List</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Turn data insights into strategic bets. Collaborate with AI analysis or create your own data-driven actions.
          </p>
        </div>
        <button
          onClick={() => setShowNewActionForm(true)}
          className="flex items-center space-x-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Action</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            Action Overview
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'timeline'
                ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            Timeline View
            <span className="ml-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">
              {actions.filter(a => !a.completed).length}
            </span>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* New Action Form */}
          {showNewActionForm && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create New Action</h3>
                <button
                  onClick={() => setShowNewActionForm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Action Title
                  </label>
                  <input
                    type="text"
                    value={newAction.title}
                    onChange={(e) => setNewAction({ ...newAction, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                    placeholder="What needs to be done?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Target Date
                  </label>
                  <input
                    type="date"
                    value={newAction.targetDate}
                    onChange={(e) => setNewAction({ ...newAction, targetDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={newAction.description}
                  onChange={(e) => setNewAction({ ...newAction, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Describe the action and expected outcome..."
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    value={newAction.priority}
                    onChange={(e) => setNewAction({ ...newAction, priority: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="opportunity">Opportunity</option>
                    <option value="important">Important</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeframe
                  </label>
                  <select
                    value={newAction.timeframe}
                    onChange={(e) => setNewAction({ ...newAction, timeframe: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Source
                  </label>
                  <select
                    value={newAction.source}
                    onChange={(e) => setNewAction({ ...newAction, source: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="manager-initiated">Manager Initiated</option>
                    <option value="ai-recommendation">AI Recommendation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Data Source
                  </label>
                  <select
                    value={newAction.dataSource}
                    onChange={(e) => setNewAction({ ...newAction, dataSource: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="historical">Historical Data</option>
                    <option value="weather">Weather Forecast</option>
                    <option value="holiday">Holiday/Event</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="ai-insight">AI Insight</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => setShowNewActionForm(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={addAction}
                  className="flex items-center justify-center space-x-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Add Action</span>
                </button>
              </div>
            </div>
          )}

          {/* AI Recommendations Quick Adopt */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6 border border-indigo-200 dark:border-indigo-700">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-100">Data-Driven Bets - Collaborate with AI</h3>
            </div>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-3 lg:p-4 rounded-lg border border-indigo-200 dark:border-indigo-600 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(rec.category)}`}>
                        {getCategoryTitle(rec.category)}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                        rec.priority === 'urgent' ? 'bg-red-100 text-red-800 border-red-200' :
                        rec.priority === 'important' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        'bg-green-100 text-green-800 border-green-200'
                      }`}>
                        {rec.priority}
                      </span>
                    </div>
                    <button
                      onClick={() => adoptAIRecommendation(rec)}
                      className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors w-full sm:w-auto text-center"
                    >
                      Make This Bet
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{rec.title}</h4>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Insight:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{rec.insight}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proposed Bet:</span>
                      <p className="text-sm text-gray-900 dark:text-white mt-1 font-medium">{rec.action}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Expected Impact:</span>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{rec.impact}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Bet Duration:</span>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{rec.timeframe}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional context */}
                    {(rec.weatherFactor || rec.loyaltyData || rec.complianceRisk) && (
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                        {rec.weatherFactor && (
                          <p className="text-xs text-blue-600 mb-1">
                            <strong>Weather Data:</strong> {rec.weatherFactor}
                          </p>
                        )}
                        {rec.loyaltyData && (
                          <p className="text-xs text-purple-600 mb-1">
                            <strong>Customer Data:</strong> {rec.loyaltyData}
                          </p>
                        )}
                        {rec.complianceRisk && (
                          <p className="text-xs text-red-600">
                            <strong>Risk Factor:</strong> {rec.complianceRisk}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'timeline' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {['today', 'this-week', 'next-week'].map((timeframe) => (
            <div key={timeframe} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6">
              <div className="flex items-center space-x-2 mb-4">
                {getTimeframeIcon(timeframe)}
                <h3 className="font-semibold text-gray-900 dark:text-white">{getTimeframeTitle(timeframe)}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  timeframe === 'today' ? 'bg-red-100 dark:bg-red-800/50 text-red-800 dark:text-red-200' :
                  timeframe === 'this-week' ? 'bg-yellow-100 dark:bg-yellow-800/50 text-yellow-800 dark:text-yellow-200' :
                  'bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200'
                }`}>
                  {filterActionsByTimeframe(timeframe).filter(a => !a.completed).length}
                </span>
              </div>
              
              <div className="space-y-3">
                {filterActionsByTimeframe(timeframe).map(action => (
                  <div
                    key={action.id}
                    className={`p-4 border rounded-lg transition-all duration-200 ${
                      action.completed 
                        ? 'opacity-60 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600' 
                        : `${getPriorityColor(action.priority)} hover:shadow-md`
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2 flex-1">
                        <button
                          onClick={() => toggleComplete(action.id)}
                          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            action.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                          }`}
                        >
                          {action.completed && <CheckCircle2 className="w-3 h-3" />}
                        </button>
                        <div className="flex items-center space-x-1 flex-wrap">
                          {getPriorityIcon(action.priority)}
                          {getDataSourceIcon(action.dataSource)}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => setEditingAction(action.id)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteAction(action.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <h4 className={`font-medium text-sm mb-2 leading-tight ${action.completed ? 'line-through' : ''}`}>
                      {action.title}
                    </h4>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {action.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <span className={`px-2 py-1 rounded-full border ${
                          action.source === 'ai-recommendation' 
                            ? 'bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700'
                            : 'bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700'
                        }`}>
                          {action.source === 'ai-recommendation' ? 'AI' : 'Manager'}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 capitalize">
                          {action.dataSource?.replace('-', ' ')}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-right">
                        Due: {new Date(action.targetDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                
                {filterActionsByTimeframe(timeframe).length === 0 && (
                  <div className="text-center py-6 lg:py-8 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No actions scheduled</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}