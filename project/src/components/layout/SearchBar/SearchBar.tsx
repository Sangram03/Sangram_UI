import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../../hooks/useSearch';
import { SearchResults } from './SearchResults';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { results, isLoading } = useSearch(query);

  const handleSelect = (result: any) => {
    console.log('Selected:', result);
    setQuery('');
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 
                   dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                   placeholder-gray-500 dark:placeholder-gray-400"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>
      {isFocused && (
        <SearchResults
          results={results}
          isLoading={isLoading}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}