import React from 'react';
import { Book, Code, Lightbulb, Rocket } from 'lucide-react';
import { DocSection } from './DocSection';

const sections = [
  {
    icon: Book,
    title: 'Getting Started',
    items: ['Installation', 'Basic Usage', 'Configuration', 'Theming', 'Project Structure', 'Customization'],
  },
  {
    icon: Code,
    title: 'Components API',
    items: ['Props', 'Events', 'Styling', 'Examples', 'TypeScript Usage', 'Best Practices'],
  },
  {
    icon: Lightbulb,
    title: 'Best Practices',
    items: ['Patterns', 'Performance', 'Accessibility', 'SEO', 'Testing', 'Security'],
  },
  {
    icon: Rocket,
    title: 'Resources',
    items: ['Tutorials', 'Examples', 'Templates', 'Support', 'Community', 'Contributing'],
  },
];

export function DocumentationPage() {
  const handleItemClick = (item: string) => {
    console.log('Clicked:', item);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Documentation</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Learn how to use and customize Sangram UI components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <DocSection
            key={section.title}
            icon={section.icon}
            title={section.title}
            items={section.items}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
}