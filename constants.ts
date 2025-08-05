import React from 'react';
import { Tone, ExpertiseLevel } from './types';
import { BeginnerIcon } from './components/icons/BeginnerIcon';
import { IntermediateIcon } from './components/icons/IntermediateIcon';
import { ExpertIcon } from './components/icons/ExpertIcon';

export const AVAILABLE_TONES: Tone[] = [
  Tone.CASUAL,
  Tone.FORMAL,
  Tone.CINEMATIC,
  Tone.POETIC,
  Tone.TECHNICAL,
  Tone.WITTY
];

export const AVAILABLE_EXPERTISE_LEVELS: { level: ExpertiseLevel; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { level: ExpertiseLevel.BEGINNER, icon: BeginnerIcon },
    { level: ExpertiseLevel.INTERMEDIATE, icon: IntermediateIcon },
    { level: ExpertiseLevel.EXPERT, icon: ExpertIcon },
];