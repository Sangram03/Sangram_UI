import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({ icon: Icon, label, isActive = false, onClick }: SidebarNavItemProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors
          ${isActive
            ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
      >
        <Icon className="h-5 w-5" />
        {label}
      </button>
    </li>
  );
}