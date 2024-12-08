import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DocSectionProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  onItemClick: (item: string) => void;
}

export function DocSection({ icon: Icon, title, items, onItemClick }: DocSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => onItemClick(item)}
              className="w-full text-left text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                       dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
            >
              • {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}