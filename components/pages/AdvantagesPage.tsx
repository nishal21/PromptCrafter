import React from 'react';
import { TargetIcon } from '../icons/TargetIcon';
import { ZapIcon } from '../icons/ZapIcon';
import { TimeIcon } from '../icons/TimeIcon';
import { BulbIcon } from '../icons/BulbIcon';
import { SparklesIcon } from '../icons/SparklesIcon';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => (
  <div className="group bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-purple-500/10">
    <div className="p-3 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-400 mb-4 transition-colors duration-300 group-hover:bg-purple-500/30 group-hover:text-purple-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const AdvantagesPage: React.FC = () => {
  const advantages = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: 'Expert-Level Quality',
      description: 'Go beyond basic prompts. Get meticulously crafted instructions that provide context, define roles, and guide the AI towards superior, nuanced results.',
    },
    {
      icon: <ZapIcon className="w-6 h-6" />,
      title: 'Tool-Specific Optimization',
      description: 'Whether you\'re using ChatGPT, Midjourney, or a niche coding assistant, our AI generates prompts optimized for your specific tool\'s strengths and syntax.',
    },
    {
      icon: <TimeIcon className="w-6 h-6" />,
      title: 'Accelerate Your Workflow',
      description: 'Stop wasting time on trial-and-error. Get high-quality, effective prompts in seconds, allowing you to focus on creativity and execution.',
    },
    {
      icon: <BulbIcon className="w-6 h-6" />,
      title: 'Unlock Creative Potential',
      description: 'Stuck on an idea? Our AI can help you explore different angles, tones, and formats, sparking new creative pathways you hadn\'t considered.',
    },
  ];

  return (
    <div className="w-full max-w-5xl text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center gap-3">
        <SparklesIcon className="w-10 h-10" /> Why PromptCrafter?
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Our AI-powered engine transforms your simple ideas into precision-engineered prompts, ensuring you get the best possible results from any AI model.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
        {advantages.map((adv) => (
          <AdvantageCard key={adv.title} {...adv} />
        ))}
      </div>
    </div>
  );
};

export default AdvantagesPage;