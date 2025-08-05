
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="url(#paint0_linear_1_2)"
      strokeWidth="1.5"
    />
    <path
      d="M12 7V17M7 12H17"
      stroke="url(#paint1_linear_1_2)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7L17 17"
      stroke="url(#paint2_linear_1_2)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_2"
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_2"
        x1="7"
        y1="12"
        x2="17"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_2"
        x1="7"
        y1="12"
        x2="17"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6366F1" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
);
