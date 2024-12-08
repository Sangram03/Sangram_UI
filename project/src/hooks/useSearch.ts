import { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  type: 'component' | 'doc' | 'element';
  path: string;
}

const searchData: SearchResult[] = [
  { id: '1', title: 'Buttons', type: 'component', path: '/components/buttons' },
  { id: '2', title: 'Installation Guide', type: 'doc', path: '/docs/installation' },
  { id: '3', title: 'Typography', type: 'element', path: '/elements/typography' },
  // Add more searchable items
];

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Simulate API delay
    setTimeout(() => {
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  }, [query]);

  return { results, isLoading };
}