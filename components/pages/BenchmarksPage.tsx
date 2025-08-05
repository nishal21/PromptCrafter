import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { SparklesIcon } from '../icons/SparklesIcon';

const BenchmarksPage: React.FC = () => {
  const benchmarkData = [
    {
      metric: 'AI Comprehension & Accuracy',
      basic: 'Often requires re-phrasing; may misinterpret ambiguous requests.',
      crafted: 'High accuracy on first try; clear context minimizes AI confusion.',
      improvement: '+75%',
    },
    {
      metric: 'Output Relevance & Depth',
      basic: 'Generic, surface-level content.',
      crafted: 'Detailed, nuanced, and highly relevant outputs.',
      improvement: '+90%',
    },
    {
      metric: 'User Time & Effort',
      basic: 'Multiple attempts and edits needed to refine the output.',
      crafted: 'Near-final result in a single generation, minimal edits required.',
      improvement: '-80%',
    },
    {
      metric: 'Creative & Unexpected Results',
      basic: 'Predictable and formulaic responses.',
      crafted: 'Prompts designed to encourage novel connections and creative outputs.',
      improvement: '+60%',
    },
  ];

  return (
    <div className="w-full max-w-5xl text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Performance Benchmarks
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        See the tangible difference between a basic query and a prompt engineered by PromptCrafter AI.
      </p>
      <div className="mt-12 overflow-x-auto">
        <div className="min-w-full bg-gray-900/50 border border-gray-700/50 rounded-xl">
          <table className="w-full text-left">
            <thead className="border-b border-gray-700">
              <tr>
                <th className="p-4 text-sm font-semibold text-white">Metric</th>
                <th className="p-4 text-sm font-semibold text-gray-400">Basic Prompt</th>
                <th className="p-4 text-sm font-semibold text-white flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-purple-400"/>
                  Crafted Prompt
                </th>
                <th className="p-4 text-sm font-semibold text-green-400 text-right">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {benchmarkData.map((row, index) => (
                <tr key={row.metric} className={`transition-colors duration-200 hover:bg-gray-800/60 ${index < benchmarkData.length - 1 ? 'border-b border-gray-800' : ''}`}>
                  <td className="p-4 font-semibold text-white">{row.metric}</td>
                  <td className="p-4 text-gray-500">{row.basic}</td>
                  <td className="p-4 text-gray-300">{row.crafted}</td>
                  <td className="p-4 text-green-400 font-bold text-xl text-right">{row.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BenchmarksPage;