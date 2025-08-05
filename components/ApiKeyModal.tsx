import React, { useState } from 'react';
import { KeyIcon } from './icons/KeyIcon';
import { CloseIcon } from './icons/CloseIcon';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [key, setKey] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 border border-gray-700/80 rounded-2xl shadow-2xl shadow-purple-900/20 w-full max-w-md m-4 p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Enter Your Gemini API Key</h2>
          <p className="mt-2 text-gray-400">
            To use the generator, please provide your own Google Gemini API key.
          </p>
        </div>

        <div className="relative">
          <KeyIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Paste your API key here"
            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
          />
        </div>
        
        <details className="text-sm text-gray-500 bg-gray-800/50 border border-gray-700/50 rounded-lg p-3">
            <summary className="cursor-pointer font-medium text-gray-300 hover:text-white">
                Where can I find my API key?
            </summary>
            <div className="mt-3 space-y-2 text-gray-400">
                <p>1. Go to <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google AI Studio</a>.</p>
                <p>2. Click on the <strong>"Get API key"</strong> button (you may need to sign in).</p>
                <p>3. Click <strong>"Create API key in new project"</strong>.</p>
                <p>4. Copy the generated key and paste it above. Your key is kept secure and is only used for this session.</p>
            </div>
        </details>

        <button
          onClick={handleSave}
          disabled={!key.trim()}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
        >
          Save & Start Crafting
        </button>
      </div>
    </div>
  );
};

export default ApiKeyModal;
