import React from 'react';
import { FileText, Box, Layout } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  type: 'component' | 'doc' | 'element';
  path: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  onSelect: (result: SearchResult) => void;
}

const TypeIcon: Record<SearchResult['type'], typeof FileText> = {
  component: Layout,
  doc: FileText,
  element: Box,
};

export function SearchResults({ results, isLoading, onSelect }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="animate-pulse space-y-2 p-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
      <ul className="py-2">
        {results.map((result) => {
          const Icon = TypeIcon[result.type];
          return (
            <li key={result.id}>
              <button
                onClick={() => onSelect(result)}
                className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-900 dark:text-gray-100">{result.title}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                  {result.type}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}