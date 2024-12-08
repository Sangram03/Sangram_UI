import React from 'react';
import { Button, ChevronRight } from 'lucide-react';

export function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Components</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Explore our collection of pre-built components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Buttons', 'Forms', 'Cards', 'Navigation', 'Modals', 'Tables'].map((component) => (
          <div key={component} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{component}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Essential {component.toLowerCase()} components with various styles and states.
            </p>
            <button className="mt-4 flex items-center text-sm text-indigo-600 dark:text-indigo-400">
              View Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}