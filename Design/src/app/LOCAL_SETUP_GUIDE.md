# Portfolio Website - Local Setup Guide

This guide will help you set up and run your portfolio website locally on your computer using VS Code.

## Prerequisites

### 1. Install Node.js
- Go to [https://nodejs.org/](https://nodejs.org/)
- Download the LTS version (recommended)
- Run the installer and follow the setup wizard
- Verify installation by opening terminal/command prompt and running:
  ```bash
  node --version
  npm --version
  ```

### 2. Install VS Code
- Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Download and install VS Code
- Install helpful extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Auto Rename Tag
  - Bracket Pair Colorizer

## Step-by-Step Setup

### Step 1: Create a New React Project
1. Open your terminal/command prompt
2. Navigate to where you want to create your project:
   ```bash
   cd Desktop  # or wherever you want the project
   ```
3. Create a new React project with Vite:
   ```bash
   npm create vite@latest my-portfolio -- --template react-ts
   ```
4. Navigate into the project directory:
   ```bash
   cd my-portfolio
   ```

### Step 2: Install Dependencies
Install the required packages for your portfolio:

```bash
# Install base dependencies
npm install

# Install additional UI and utility packages
npm install lucide-react class-variance-authority clsx tailwind-merge

# Install form handling
npm install react-hook-form@7.55.0

# Install EmailJS for contact form
npm install @emailjs/browser

# Install toast notifications
npm install sonner@2.0.3

# Install Tailwind CSS v4 (alpha)
npm install tailwindcss@next @tailwindcss/vite@next
```

### Step 3: Configure Tailwind CSS v4
1. Create/update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
})
```

2. Update `tsconfig.json` to include path mapping:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Step 4: Set Up File Structure
1. In VS Code, open your project folder
2. Create the following folder structure in the `src` directory:

```
src/
├── components/
│   ├── ui/
│   └── figma/
├── styles/
└── App.tsx (replace existing)
```

### Step 5: Copy Project Files
1. Delete the default `src/App.tsx`, `src/App.css`, and `src/index.css`
2. Copy all the files from this Figma Make project:
   - Copy `App.tsx` to `src/App.tsx`
   - Copy all components from `components/` to `src/components/`
   - Copy `styles/globals.css` to `src/styles/globals.css`

### Step 6: Update Main Entry Point
Update `src/main.tsx`:
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Step 7: Configure EmailJS (Optional)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Set up an email service and template
4. Get your public key, service ID, and template ID
5. Update the Contact.tsx component with your credentials

### Step 8: Run the Development Server
1. In your terminal, make sure you're in the project directory
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173`

## Common Issues and Solutions

### Issue: Module not found errors
**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

### Issue: Tailwind classes not working
**Solution**: 
1. Check that `globals.css` is imported in `main.tsx`
2. Verify Tailwind is configured in `vite.config.ts`

### Issue: TypeScript errors
**Solution**: 
1. Check that all imports have correct file extensions (.tsx)
2. Verify the `tsconfig.json` paths configuration

### Issue: Build errors
**Solution**: 
1. Run `npm run build` to see specific errors
2. Check that all components are properly exported

## Building for Production

When you're ready to deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. The built files will be in the `dist` folder, ready for deployment to platforms like Vercel, Netlify, or GitHub Pages.

## VS Code Tips

### Useful Shortcuts:
- `Ctrl + Shift + P` (Windows) / `Cmd + Shift + P` (Mac): Command palette
- `Ctrl + `` ` (Windows) / `Cmd + `` ` (Mac): Open terminal
- `Ctrl + P` (Windows) / `Cmd + P` (Mac): Quick file search

### Recommended Settings:
Add to VS Code settings.json:
```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version** (should be 16+ for Vite):
   ```bash
   node --version
   ```

3. **Restart VS Code and terminal**

4. **Check browser console** for runtime errors

## Next Steps

Once everything is running:
- Customize the content in each component
- Update the images and links to your own
- Set up EmailJS for the contact form
- Deploy to your preferred hosting platform

Happy coding! 🚀