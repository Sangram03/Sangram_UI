import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export function TopBar() {
  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <div className="flex-1 max-w-2xl">
        <SearchBar />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </div>
  );
}