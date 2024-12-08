import React, { useState } from 'react';
import { Book, Code, Lightbulb, Rocket, Copy } from 'lucide-react';

const sections = [
  {
    icon: Book,
    title: 'React.js',
    items: [
      { name: 'Installation', code: 'npx create-react-app my-app' },
      { name: 'Basic Usage', code: `function App() {\n  return <h1>Hello, React!</h1>;\n}` },
      { name: 'JSX Syntax', code: `<div className="app">Hello, JSX!</div>` },
      { name: 'State Management', code: 'const [count, setCount] = useState(0);' },
      { name: 'Hooks', code: 'useEffect(() => {\n  console.log("Component Mounted");\n}, []);' },
      { name: 'Component Props', code: '<Button text="Click Me" />' },
    ],
  },
  {
    icon: Code,
    title: 'Next.js',
    items: [
      { name: 'Setup', code: 'npx create-next-app@latest my-next-app' },
      { name: 'Pages', code: 'export default function Home() {\n  return <h1>Welcome to Next.js</h1>;\n}' },
      { name: 'Routing', code: '/about → <a href="/about">About</a>' },
      { name: 'API Routes', code: 'export default function handler(req, res) {\n  res.status(200).json({ message: "Hello, API!" });\n}' },
      { name: 'Image Optimization', code: '<Image src="/logo.png" width={200} height={200} />' },
      { name: 'Static Props', code: 'export async function getStaticProps() {\n  return { props: { data: "Hello, Static Props" } };\n}' },
    ],
  },
  {
    icon: Lightbulb,
    title: 'Best Practices',
    items: [
      { name: 'Component Organization', code: '/components/Button.js, /pages/index.js' },
      { name: 'Performance Optimization', code: 'useMemo, Lazy Loading, Code Splitting' },
      { name: 'Accessibility', code: '<button aria-label="Submit">Submit</button>' },
      { name: 'Testing', code: 'test("renders a button", () => {\n  render(<Button />);\n  expect(screen.getByRole("button")).toBeInTheDocument();\n});' },
      { name: 'Security', code: 'sanitizeInput(userInput);\nuse HTTPS everywhere.' },
      { name: 'SEO', code: '<meta name="description" content="Learn React and Next.js" />' },
    ],
  },
  {
    icon: Rocket,
    title: 'Resources',
    items: [
      { name: 'React Docs', code: 'https://reactjs.org/docs/getting-started.html' },
      { name: 'Next.js Docs', code: 'https://nextjs.org/docs' },
      { name: 'React Tutorials', code: 'https://react-tutorials.com/' },
      { name: 'Next.js Examples', code: 'https://github.com/vercel/next.js/tree/canary/examples' },
      { name: 'Community Support', code: 'https://reactiflux.com/' },
      { name: 'GitHub', code: 'https://github.com/facebook/react' },
    ],
  },
];

export function DocumentationPage() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000); // Clear the copied message after 2 seconds
  };

  const handleItemClick = (item: string) => {
    console.log('Clicked:', item);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Documentation</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Explore documentation for React.js, Next.js, and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <section.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>
            <ul className="mt-4 space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <button
                    onClick={() => handleItemClick(item.name)}
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {item.name}
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-400"
                      onClick={() => handleCopy(item.code)}
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    {copiedText === item.code && (
                      <span className="text-xs text-green-600 dark:text-green-400">Copied!</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
