import React from 'react';
import { Layers } from 'lucide-react';

export function SidebarLogo() {
  return (
    <div className="flex items-center gap-2 px-6 py-4">
      <Layers className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      <span className="text-xl font-bold text-gray-900 dark:text-white">Sangram UI</span>
    </div>
  );
}