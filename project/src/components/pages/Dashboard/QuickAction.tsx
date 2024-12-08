import React from 'react';
import { LucideIcon, Plus, UserPlus, FileText, Settings } from 'lucide-react';

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function QuickAction({ icon: Icon, label, onClick }: QuickActionProps) {
  return (
    <button
      onClick={onClick}
      className="p-4 flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300 
                bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 
                dark:hover:bg-gray-600 transition-colors group"
    >
      <Icon className="h-6 w-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}