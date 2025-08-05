
import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface ResultDisplayProps {
  isLoading: boolean;
  generatedPrompt: string;
  error: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, generatedPrompt, error }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (isLoading) {
    return (
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center text-gray-400">
        <div className="flex justify-center items-center">
           <svg className="animate-spin h-8 w-8 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          <span className="ml-4 text-lg">Generating your expert prompt...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 text-red-300">
        <h3 className="font-semibold text-red-200">An Error Occurred</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!generatedPrompt) {
    return null;
  }

  return (
    <div className="relative bg-gray-900/80 border border-gray-700 rounded-lg p-6">
      <button 
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white transition-all"
        title="Copy to clipboard"
      >
        {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5" />}
      </button>
      <div className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300 whitespace-pre-wrap">
        {generatedPrompt}
      </div>
    </div>
  );
};

export default ResultDisplay;
