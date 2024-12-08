import React from 'react';
import { Home, Layout, Box, Settings, Users, FileText } from 'lucide-react';
import { SidebarNavItem } from './SidebarNavItem';

interface NavItem {
  icon: any;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Layout, label: 'Components', id: 'components' },
  { icon: Box, label: 'Elements', id: 'elements' },
  { icon: FileText, label: 'Documentation', id: 'docs' },
  { icon: Users, label: 'Team', id: 'team' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

interface SidebarNavProps {
  activeItem: string;
  onItemClick: (id: string) => void;
}

export function SidebarNav({ activeItem, onItemClick }: SidebarNavProps) {
  return (
    <nav className="flex-1">
      <ul className="space-y-1">
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
}