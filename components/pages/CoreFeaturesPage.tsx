import React from 'react';
import { PromptType } from '../../types';
import { SinglePromptIcon } from '../icons/SinglePromptIcon';
import { WorkflowIcon } from '../icons/WorkflowIcon';
import { ArtIcon } from '../icons/ArtIcon';
import { CodeIcon } from '../icons/CodeIcon';
import { ZapIcon } from '../icons/ZapIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/60 hover:bg-gray-800/60 hover:shadow-lg hover:shadow-blue-500/10">
    <div className="flex items-center gap-4 mb-3">
      <div className="text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const CoreFeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <ZapIcon className="w-7 h-7" />,
      title: 'Idea Type Detection',
      description: 'Automatically understands if your idea is for writing, coding, image generation, or something else, tailoring the prompt structure accordingly.',
    },
    {
      icon: <ArtIcon className="w-7 h-7" />,
      title: 'Tone & Goal Customization',
      description: 'Choose from a variety of tones like formal, witty, or cinematic, and specify your goal to create prompts that perfectly match your intent.',
    },
    {
      icon: <SinglePromptIcon className="w-7 h-7" />,
      title: 'Quick Prompt Generation',
      description: 'Generate a single, powerful, expert-level prompt that encapsulates your entire idea with rich context and clear instructions for the AI.',
    },
    {
      icon: <WorkflowIcon className="w-7 h-7" />,
      title: 'Multi-Step Workflows',
      description: 'For complex tasks, generate a complete sequence of prompts that breaks down the problem into manageable steps, from brainstorming to final output.',
    },
     {
      icon: <CodeIcon className="w-7 h-7" />,
      title: 'Niche Tool Support',
      description: 'Get prompts optimized for specialized tools. Whether it\'s for n8n, Bubble, Replit, or Unity, we know how to speak their language.',
    },
  ];
  return (
    <div className="w-full max-w-6xl text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
        Core Features
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
        PromptCrafter AI is packed with powerful features to make prompt engineering effortless and effective.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default CoreFeaturesPage;