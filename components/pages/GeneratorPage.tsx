
import React, { useState, useCallback } from 'react';
import { PromptType, Tone, ExpertiseLevel } from '../../types';
import { craftPrompt } from '../../services/geminiService';
import PromptForm from '../PromptForm';
import ResultDisplay from '../ResultDisplay';
import { SparklesIcon } from '../icons/SparklesIcon';

interface GeneratorPageProps {
    apiKey: string;
}

const GeneratorPage: React.FC<GeneratorPageProps> = ({ apiKey }) => {
    const [idea, setIdea] = useState('');
    const [tool, setTool] = useState('');
    const [promptType, setPromptType] = useState<PromptType>(PromptType.SINGLE);
    const [tone, setTone] = useState<Tone>(Tone.CASUAL);
    const [expertise, setExpertise] = useState<ExpertiseLevel>(ExpertiseLevel.INTERMEDIATE);
    const [language, setLanguage] = useState('');
    const [negativePrompt, setNegativePrompt] = useState('');
    const [context, setContext] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [generatedPrompt, setGeneratedPrompt] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePrompt = useCallback(async () => {
        if (!idea.trim()) {
            setError('Please enter an idea to get started.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedPrompt('');

        try {
            const result = await craftPrompt(apiKey, idea, tool, promptType, tone, expertise, language, negativePrompt, context);
            setGeneratedPrompt(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred. Please check the console.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [apiKey, idea, tool, promptType, tone, expertise, language, negativePrompt, context]);

    return (
        <div className="w-full animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                AI Prompt Generator
            </h1>
            <p className="mt-4 text-lg md:text-xl text-center text-gray-400 max-w-2xl mx-auto">
                Fill out the details below to turn your raw ideas into powerful, ready-to-use prompts.
            </p>

            <div className="w-full max-w-4xl mt-10 mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
                <PromptForm
                    idea={idea} setIdea={setIdea}
                    tool={tool} setTool={setTool}
                    promptType={promptType} setPromptType={setPromptType}
                    tone={tone} setTone={setTone}
                    expertise={expertise} setExpertise={setExpertise}
                    language={language} setLanguage={setLanguage}
                    negativePrompt={negativePrompt} setNegativePrompt={setNegativePrompt}
                    context={context} setContext={setContext}
                    onSubmit={handleGeneratePrompt}
                    isLoading={isLoading}
                />
            </div>

            {(isLoading || generatedPrompt || error) && (
                <div className="w-full max-w-4xl mt-8 mx-auto">
                    <h2 className="text-2xl font-semibold text-white flex items-center mb-4">
                        <SparklesIcon className="w-6 h-6 mr-2 text-purple-400" />
                        Generated Prompt
                    </h2>
                    <ResultDisplay
                        isLoading={isLoading}
                        generatedPrompt={generatedPrompt}
                        error={error}
                    />
                </div>
            )}
        </div>
    );
};

export default GeneratorPage;