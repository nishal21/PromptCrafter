
import React from 'react';
import { PromptType, Tone, ExpertiseLevel } from '../types';
import { AVAILABLE_TONES, AVAILABLE_EXPERTISE_LEVELS } from '../constants';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SinglePromptIcon } from './icons/SinglePromptIcon';
import { WorkflowIcon } from './icons/WorkflowIcon';
import { ToolIcon } from './icons/ToolIcon';
import { InfoIcon } from './icons/InfoIcon';

interface PromptFormProps {
  idea: string; setIdea: (value: string) => void;
  tool: string; setTool: (value: string) => void;
  promptType: PromptType; setPromptType: (value: PromptType) => void;
  tone: Tone; setTone: (value: Tone) => void;
  expertise: ExpertiseLevel; setExpertise: (value: ExpertiseLevel) => void;
  language: string; setLanguage: (value: string) => void;
  negativePrompt: string; setNegativePrompt: (value: string) => void;
  context: string; setContext: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const FormSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-4 border-t border-gray-700/50 pt-6 first-of-type:border-t-0 first-of-type:pt-0">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    {children}
  </div>
);

const LabelWithTooltip: React.FC<{ htmlFor: string, label: string, tooltip: string }> = ({ htmlFor, label, tooltip }) => (
    <div className="flex items-center gap-2 mb-2">
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-300">{label}</label>
        <div className="group relative">
            <InfoIcon className="w-4 h-4 text-gray-500"/>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 text-xs text-center text-white bg-gray-800 border border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {tooltip}
            </div>
        </div>
    </div>
);

const PromptForm: React.FC<PromptFormProps> = (props) => {
  const { onSubmit, isLoading, ...state } = props;

  return (
    <div className="space-y-8">
      <FormSection title="Core Idea">
        <div>
          <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">What's your idea?</label>
          <textarea id="idea" rows={3} value={state.idea} onChange={(e) => state.setIdea(e.target.value)} placeholder="e.g., A marketing campaign for a new sci-fi movie" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
        </div>
        <div>
            <LabelWithTooltip htmlFor="tool" label="What tool/AI are you using? (Optional)" tooltip="Specifying a tool like Midjourney, DALL-E, or a coding model helps tailor the prompt's syntax and style."/>
            <div className="relative">
                <ToolIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="text" id="tool" value={state.tool} onChange={(e) => state.setTool(e.target.value)} placeholder="e.g., Midjourney, ChatGPT, Copilot" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
            </div>
        </div>
      </FormSection>

      <FormSection title="Refine Your Prompt">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Prompt Format</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <button onClick={() => state.setPromptType(PromptType.SINGLE)} className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold transition active:scale-95 ${state.promptType === PromptType.SINGLE ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><SinglePromptIcon className="w-4 h-4"/>Single Prompt</button>
                    <button onClick={() => state.setPromptType(PromptType.WORKFLOW)} className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold transition active:scale-95 ${state.promptType === PromptType.WORKFLOW ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}><WorkflowIcon className="w-4 h-4"/>Workflow</button>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expertise Level</label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-800/50 border border-gray-700 rounded-lg">
                    {AVAILABLE_EXPERTISE_LEVELS.map(({level, icon: Icon}) => (
                        <button key={level} onClick={() => state.setExpertise(level)} className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold transition active:scale-95 ${state.expertise === level ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
                            <Icon className="w-5 h-5" />
                            {level}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Select a Tone</label>
            <div className="flex flex-wrap gap-2">
                {AVAILABLE_TONES.map((t) => ( <button key={t} onClick={() => state.setTone(t)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition active:scale-95 ${state.tone === t ? 'bg-blue-500 text-white' : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700'}`}>{t}</button>))}
            </div>
        </div>
      </FormSection>

      <FormSection title="Advanced Options (Optional)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <LabelWithTooltip htmlFor="language" label="Output Language" tooltip="The language the generated prompt should be in. Defaults to English."/>
                <input type="text" id="language" value={state.language} onChange={(e) => state.setLanguage(e.target.value)} placeholder="e.g., Spanish, Japanese" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
            </div>
            <div>
                <LabelWithTooltip htmlFor="negative-prompt" label="Negative Prompt" tooltip="List themes, words, or concepts to exclude from the AI's response."/>
                <input type="text" id="negative-prompt" value={state.negativePrompt} onChange={(e) => state.setNegativePrompt(e.target.value)} placeholder="e.g., avoid clichés, no violence" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
            </div>
          </div>
          <div>
            <LabelWithTooltip htmlFor="context" label="Additional Context or Examples" tooltip="Provide background info, key details, or examples of the desired output style to improve accuracy."/>
            <textarea id="context" rows={3} value={state.context} onChange={(e) => state.setContext(e.target.value)} placeholder="e.g., The target audience is young adults. The mood should be optimistic." className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
          </div>
      </FormSection>

      <div className="pt-4">
        <button onClick={onSubmit} disabled={isLoading} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed active:scale-95">
          {isLoading ? ( <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Crafting...</> ) : ( <>Generate Prompt <ArrowRightIcon className="w-5 h-5" /></> )}
        </button>
      </div>
    </div>
  );
};

export default PromptForm;