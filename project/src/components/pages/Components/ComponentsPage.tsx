import React, { useState } from 'react';
import { ChevronRight, Copy } from 'lucide-react';

export function ComponentsPage() {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const [copiedComponent, setCopiedComponent] = useState(null); // Tracks the last copied component

  const codeSnippets = {
    Buttons: `<button className="btn btn-primary">Button</button>`,
    Forms: `<form><input type="text" placeholder="Form Input" /></form>`,
    Cards: `<div className="card">Card Content</div>`,
    Navigation: `<nav>Navigation Bar</nav>`,
    Modals: `<div className="modal">Modal Content</div>`,
    Tables: `<table><tr><td>Table Content</td></tr></table>`,
  };

  // Copy to clipboard function
  const copyToClipboard = (text, component) => {
    navigator.clipboard.writeText(text);
    setCopiedComponent(component);
    setTimeout(() => setCopiedComponent(null), 2000); // Clear the success message after 2 seconds
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-black dark:text-white">Components</h1>
        <p className="mt-2 text-black dark:text-gray-300">
          Explore our collection of pre-built components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(codeSnippets).map((component) => (
          <div
            key={component}
            className="bg-white dark:bg-black p-6 rounded-xl shadow-sm border border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-lg font-medium text-black dark:text-white">
              {/* Added symbol before component title */}
              <span className="mr-2">🔧</span>
              {component}
            </h3>
            <p className="mt-2 text-sm text-black dark:text-gray-300">
              Essential {component.toLowerCase()} components with various styles and states.
            </p>
            <button
              className="mt-4 flex items-center text-sm text-indigo-600 dark:text-indigo-400"
              onClick={() =>
                setVisibleComponent(visibleComponent === component ? null : component)
              }
            >
              {visibleComponent === component ? 'Hide Details' : 'View Details'}
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>

            {/* Details Section */}
            {visibleComponent === component && (
              <div className="mt-4 p-4 bg-black dark:bg-black rounded-lg">
                <pre className="overflow-auto max-w-full text-sm text-black dark:text-gray-200">
                  <code>{codeSnippets[component]}</code>
                </pre>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="flex items-center text-sm bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-400 p-2 rounded-md border-2 border-white"
                    onClick={() => copyToClipboard(codeSnippets[component], component)}
                  >
                    Copy Code
                    <Copy className="h-4 w-4 ml-1" />
                  </button>
                  {copiedComponent === component && (
                    <span className="text-xs text-green-600 dark:text-green-400">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
