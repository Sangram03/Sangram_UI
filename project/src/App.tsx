import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { TopBar } from './components/layout/TopBar/TopBar';
import { ThemeProvider } from './context/ThemeContext';
import { DashboardPage } from './components/pages/Dashboard/DashboardPage';
import { ComponentsPage } from './components/pages/Components/ComponentsPage';
import { ElementsPage } from './components/pages/Elements/ElementsPage';
import { DocumentationPage } from './components/pages/Documentation/DocumentationPage';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <DashboardPage />;
      case 'components':
        return <ComponentsPage />;
      case 'elements':
        return <ElementsPage />;
      case 'docs':
        return <DocumentationPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 p-8 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;