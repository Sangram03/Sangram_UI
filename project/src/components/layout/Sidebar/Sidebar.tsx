import React, { useState } from 'react';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNav } from './SidebarNav';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (id: string) => void;
}

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative flex flex-col h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-4 right-[-12px] z-10 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Logo Section */}
      <div className={`${isOpen ? 'px-6 py-4' : 'px-2 py-4'} transition-all duration-300`}>
        <SidebarLogo />
      </div>
      <div className="h-px bg-black dark:bg-gray-700" />

      {/* Navigation */}
      <SidebarNav isOpen={isOpen} activeItem={activeItem} onItemClick={onItemClick} />

      {/* Footer (User Info) */}
      <div className={`p-4 mt-auto border-t border-gray-200 dark:border-gray-700 ${isOpen ? '' : 'hidden'}`}>
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">SU</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-black dark:text-white">Sangram UI</p>
            <p className="text-xs text-black dark:text-gray-400">v1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
