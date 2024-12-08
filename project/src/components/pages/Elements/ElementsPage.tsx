import React from 'react';
import { Palette, Droplet, Sun } from 'lucide-react'; // Example icons

export function ElementsPage() {
  const elements = [
    {
      name: 'Typography',
      description: 'Text styles and formatting options',
      websites: ['https://www.designbombs.com/websites-typography-driven-design/', 'fonts.example.com'],
      colorCode: '#1A202C',
    },
    {
      name: 'Colors',
      description: 'Color palette and usage guidelines',
      websites: ['https://tailwindcss.com/docs/installation', 'palettes.example.com'],
      colorCode: '#E53E3E',
      icon: Palette, // Adding an icon for Colors
    },
    {
      name: 'Icons',
      description: 'Icon library and usage examples',
      websites: ['remixicon.com', 'feathericons.com'],
      colorCode: '#2B6CB0',
    },
    {
      name: 'Spacing',
      description: 'Margin and padding utilities',
      websites: ['spacing.example.com', 'layout.example.com'],
      colorCode: '#319795',
    },
    {
      name: 'Shadows',
      description: 'Box shadow variations',
      websites: ['https://cssgenerator.org/box-shadow-css-generator.html', 'https://neumorphism.io/#e0e0e0'],
      colorCode: '#805AD5',
      icon: Sun, // Adding an icon for Shadows
    },
    {
      name: 'Grid',
      description: 'Layout grid system',
      websites: ['grid.example.com', 'layouts.example.com'],
      colorCode: '#D69E2E',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Elements</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Core design elements and utilities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elements.map((element) => (
          <div
            key={element.name}
            className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
              ['Colors', 'Icons', 'Shadows'].includes(element.name) ? 'border border-gray-300 dark:border-gray-700' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {element.icon && <element.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{element.name}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{element.description}</p>
            <div className="mt-2 space-y-1 text-sm text-indigo-600 dark:text-indigo-400">
              <span className="font-medium">Websites:</span>
              {element.websites.map((site, index) => (
                <div key={index}>
                  <a
                    href={site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline block"
                  >
                    {site}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: element.colorCode }}
                aria-label={`Color code: ${element.colorCode}`}
              ></span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{element.colorCode}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
