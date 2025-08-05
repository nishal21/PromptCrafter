# PromptCrafter AI ✨

An advanced prompt engineering assistant that transforms raw ideas into clear, powerful, and highly contextual prompts for various AI tools. Built with React, TypeScript, and powered by the Gemini API.

![PromptCrafter AI](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2+-646CFF?logo=vite&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini-API-4285F4?logo=google&logoColor=white)

## 🚀 Features

### Core Capabilities
- **Smart Prompt Generation**: Transform simple ideas into sophisticated prompts
- **Multi-Tool Support**: Generate prompts optimized for different AI platforms
- **Flexible Output Types**: Support for single prompts and multi-step workflows
- **Tone Customization**: Choose from 6 different tones (Casual, Formal, Cinematic, Poetic, Technical, Witty)
- **Expertise Levels**: Adapt prompts for Beginner, Intermediate, or Expert users
- **Multi-language Support**: Generate prompts in any language
- **Negative Prompting**: Specify what to exclude from generated content
- **Context Enhancement**: Add additional context for more specific results

### User Experience
- **Modern UI**: Clean, responsive design with animated elements
- **Interactive Canvas**: Dynamic particle effects on the landing page
- **API Key Management**: Secure local storage of your Gemini API key
- **Real-time Generation**: Fast prompt crafting with loading states
- **Copy to Clipboard**: One-click copying of generated prompts
- **Error Handling**: Comprehensive error messages and validation

## 🛠️ Tech Stack

- **Frontend**: React 19+ with TypeScript
- **Build Tool**: Vite 6+
- **AI Integration**: Google Gemini API (@google/genai)
- **Styling**: Tailwind CSS (via utility classes)
- **State Management**: React Hooks (useState, useCallback)
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gemini API key from Google AI Studio

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/promptcrafter-ai.git
   cd promptcrafter-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 Getting a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env` file or enter it in the application

## 🎯 Usage

### Basic Workflow

1. **Enter Your Idea**: Describe what you want to achieve
2. **Select Target Tool**: Choose the AI platform you'll use the prompt with
3. **Configure Settings**:
   - **Prompt Type**: Single prompt or multi-step workflow
   - **Tone**: Match your desired communication style
   - **Expertise Level**: Adjust complexity for your audience
   - **Language**: Generate prompts in any language
4. **Add Context** (Optional): Provide additional details or examples
5. **Set Exclusions** (Optional): Specify what to avoid
6. **Generate**: Click "Craft My Prompt" to create your optimized prompt

### Example Use Cases

- **Content Creation**: "Create a blog post about sustainable living"
- **Code Generation**: "Build a React component for user authentication"
- **Creative Writing**: "Write a sci-fi short story with time travel"
- **Business Analysis**: "Analyze market trends for electric vehicles"
- **Educational Content**: "Explain quantum physics for high school students"

## 📁 Project Structure

```
promptcrafter/
├── components/
│   ├── icons/              # SVG icon components
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx
│   │   ├── GeneratorPage.tsx
│   │   ├── AdvantagesPage.tsx
│   │   ├── CoreFeaturesPage.tsx
│   │   └── BenchmarksPage.tsx
│   ├── ApiKeyModal.tsx     # API key input modal
│   ├── Header.tsx          # Navigation header
│   ├── PromptForm.tsx      # Main form component
│   └── ResultDisplay.tsx   # Generated prompt display
├── services/
│   └── geminiService.ts    # Gemini API integration
├── App.tsx                 # Main application component
├── types.ts                # TypeScript type definitions
├── constants.ts            # Application constants
├── index.tsx              # Application entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Adding New Tones
Edit `types.ts` to add new tone options:
```typescript
export enum Tone {
  CASUAL = 'Casual',
  FORMAL = 'Formal',
  // Add your custom tone here
  CREATIVE = 'Creative'
}
```

### Modifying the Meta-Prompt
The core prompt engineering logic is in `services/geminiService.ts`. You can customize the meta-prompt to change how prompts are generated.

### Styling
The project uses Tailwind CSS utility classes. Modify component files to change the appearance.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Upload the dist/ folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini API for powerful AI capabilities
- React team for the excellent framework
- Vite for lightning-fast development experience
- The open-source community for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/promptcrafter-ai/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🔮 Roadmap

- [ ] Support for more AI providers (OpenAI, Claude, etc.)
- [ ] Prompt templates and presets
- [ ] Prompt history and favorites
- [ ] Team collaboration features
- [ ] Advanced prompt optimization analytics
- [ ] Integration with popular AI tools

---

**Made with ❤️ by the PromptCrafter team**

*Transform your ideas into powerful prompts with PromptCrafter AI*
