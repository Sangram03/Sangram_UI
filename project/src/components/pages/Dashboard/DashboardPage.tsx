import React from 'react';
import { Users, ShoppingBag, Activity, TrendingUp, Plus, UserPlus, FileText, Settings } from 'lucide-react';
import { StatCard } from './StatCard';
import { QuickAction } from './QuickAction';

const quickActions = [
  { icon: Plus, label: 'New Project', action: () => console.log('New Project') },
  { icon: UserPlus, label: 'Add User', action: () => console.log('Add User') },
  { icon: FileText, label: 'View Reports', action: () => console.log('View Reports') },
  { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Welcome to your dashboard overview.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,543"
          icon={Users}
          trend={{ value: "+12.5% from last month", positive: true }}
        />
        <StatCard
          title="Sales"
          value="$45,234"
          icon={ShoppingBag}
          trend={{ value: "+23.1% from last month", positive: true }}
        />
        <StatCard
          title="Active Projects"
          value="12"
          icon={Activity}
          trend={{ value: "Same as last month", positive: true }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          icon={TrendingUp}
          trend={{ value: "-2.1% from last month", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  New user registration #{i}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quick Actions</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <QuickAction
                key={action.label}
                icon={action.icon}
                label={action.label}
                onClick={action.action}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}