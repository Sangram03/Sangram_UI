import React from 'react';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNav } from './SidebarNav';

interface SidebarProps {
  activeItem: string;
  onItemClick: (id: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <aside className="flex flex-col w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <SidebarLogo />
      <div className="h-px bg-gray-200 dark:bg-gray-700" />
      <SidebarNav activeItem={activeItem} onItemClick={onItemClick} />
      <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">SU</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Sangram UI</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">v1.0.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
}