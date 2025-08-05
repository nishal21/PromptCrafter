
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/pages/LandingPage';
import GeneratorPage from './components/pages/GeneratorPage';
import AdvantagesPage from './components/pages/AdvantagesPage';
import CoreFeaturesPage from './components/pages/CoreFeaturesPage';
import BenchmarksPage from './components/pages/BenchmarksPage';
import { Page } from './types';
import ApiKeyModal from './components/ApiKeyModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [apiKey, setApiKey] = useState<string>('');
  const [isApiKeyModalOpen, setApiKeyModalOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === 'generator') {
      if (apiKey) {
        setCurrentPage('generator');
      } else {
        setApiKeyModalOpen(true);
      }
    } else {
      setCurrentPage(page);
    }
  };

  const handleSaveApiKey = (newKey: string) => {
    setApiKey(newKey);
    setApiKeyModalOpen(false);
    setCurrentPage('generator');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'generator':
        return <GeneratorPage apiKey={apiKey} />;
      case 'advantages':
        return <AdvantagesPage />;
      case 'core-features':
        return <CoreFeaturesPage />;
      case 'benchmarks':
        return <BenchmarksPage />;
      case 'home':
      default:
        return <LandingPage onStartCrafting={() => handleNavigate('generator')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header currentPage={currentPage} setCurrentPage={handleNavigate} />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
          {renderPage()}
        </main>
      </div>
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setApiKeyModalOpen(false)}
        onSave={handleSaveApiKey}
      />
    </div>
  );
};

export default App;