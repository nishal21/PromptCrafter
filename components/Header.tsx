import React from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { Page } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const navItemClasses = "hover:text-white transition-colors cursor-pointer";
    const activeNavItemClasses = "text-white font-semibold";

    const navItems: { page: Page; label: string }[] = [
        { page: 'advantages', label: 'Advantages' },
        { page: 'core-features', label: 'Core Features' },
        { page: 'benchmarks', label: 'Benchmarks' },
    ];

    return (
        <header className="container mx-auto px-4 py-4 border-b border-gray-800/50">
            <nav className="flex items-center justify-between text-sm text-gray-400">
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => setCurrentPage('home')}
                    aria-label="Go to homepage"
                >
                    <LogoIcon className="w-7 h-7" />
                    <span className="font-semibold text-white text-lg">PromptCrafter AI</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    {currentPage !== 'home' && navItems.map(item => (
                        <button
                            key={item.page}
                            onClick={() => setCurrentPage(item.page)}
                            className={`${navItemClasses} ${currentPage === item.page ? activeNavItemClasses : ''}`}
                            aria-current={currentPage === item.page ? 'page' : undefined}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentPage('generator')}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity active:scale-95"
                >
                    Start Crafting
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </nav>
        </header>
    );
};

export default Header;