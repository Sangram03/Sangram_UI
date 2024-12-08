import React from 'react';

export function ElementsPage() {
  const elements = [
    { name: 'Typography', description: 'Text styles and formatting options' },
    { name: 'Colors', description: 'Color palette and usage guidelines' },
    { name: 'Icons', description: 'Icon library and usage examples' },
    { name: 'Spacing', description: 'Margin and padding utilities' },
    { name: 'Shadows', description: 'Box shadow variations' },
    { name: 'Grid', description: 'Layout grid system' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Elements</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Core design elements and utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elements.map((element) => (
          <div
            key={element.name}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {element.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}