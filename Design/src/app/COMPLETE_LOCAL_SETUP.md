# Complete Local Setup Guide - From Figma Make Download

Follow these steps exactly to get your portfolio running locally.

## Step 1: Prerequisites

### Install Node.js
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version (v18 or higher)
3. Install and verify by opening terminal/command prompt:
   ```bash
   node --version
   npm --version
   ```

### Install VS Code (if not already installed)
1. Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install these helpful extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Hero

## Step 2: Create Project Structure

1. **Create a new folder** for your portfolio:
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

2. **Create the basic project structure**:
   ```
   my-portfolio/
   ├── src/
   ├── public/
   ├── package.json (we'll create this)
   ├── vite.config.ts (we'll create this)
   ├── tsconfig.json (we'll create this)
   ├── tsconfig.node.json (we'll create this)
   └── index.html (we'll create this)
   ```

## Step 3: Create Configuration Files

Create these files in your project root (my-portfolio folder):

### 3.1 Create `package.json`
```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.3.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "7.55.0",
    "sonner": "2.0.3",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.0.0-alpha.25",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "tailwindcss": "4.0.0-alpha.25",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

### 3.2 Create `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

### 3.3 Create `tsconfig.json`
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

### 3.4 Create `tsconfig.node.json`
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 3.5 Create `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 4: Move Your Downloaded Files

1. **Move your downloaded files into the `src` folder**:
   ```
   src/
   ├── App.tsx (move your downloaded App.tsx here)
   ├── components/ (move your downloaded components folder here)
   ├── styles/ (move your downloaded styles folder here)
   └── main.tsx (we'll create this)
   ```

2. **Create `src/main.tsx`**:
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

## Step 5: Install Dependencies

1. **Open terminal in your project folder**
2. **Install all dependencies**:
   ```bash
   npm install
   ```

## Step 6: Fix Import Paths

Your downloaded files might have import paths that need to be updated. Open VS Code and make these changes:

### 6.1 Update imports in your components
All component imports should use relative paths:
```typescript
// Change from:
import { Button } from "/components/ui/button"

// To:
import { Button } from "./ui/button"
```

### 6.2 Update App.tsx imports
Make sure App.tsx imports use relative paths:
```typescript
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
// ... etc
```

## Step 7: Create utils.ts (if missing)

If you get errors about missing utils.ts, create `src/components/ui/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Step 8: Run the Project

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to `http://localhost:5173`

## Common Issues and Fixes

### Issue 1: Module not found errors
**Solution**: Check that all import paths are correct and use relative paths:
```typescript
// Correct
import { Button } from "./ui/button"
import { Card } from "./ui/card"

// Incorrect
import { Button } from "/components/ui/button"
```

### Issue 2: TypeScript errors about missing types
**Solution**: Make sure all your component files have `.tsx` extension and proper exports

### Issue 3: Tailwind classes not working
**Solution**: Verify that `src/styles/globals.css` is imported in `src/main.tsx`

### Issue 4: EmailJS errors
**Solution**: Install EmailJS:
```bash
npm install @emailjs/browser
```

### Issue 5: Build errors
**Solution**: 
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Final Project Structure

Your final structure should look like this:
```
my-portfolio/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   ├── ... (all your components)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── utils.ts
│   │       └── ... (all UI components)
│   └── styles/
│       └── globals.css
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── index.html
```

## Testing Your Setup

1. Open `http://localhost:5173` in your browser
2. You should see your portfolio with:
   - Navigation working
   - Dark/light mode toggle
   - All sections visible
   - Contact form functional (if EmailJS is configured)

## Next Steps

Once everything is working:
- Customize the content with your own information
- Update the EmailJS configuration with your credentials
- Add your own images and projects
- Test the contact form
- Build for production: `npm run build`

🎉 **Congratulations!** Your portfolio should now be running locally!

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all import paths are correct
3. Make sure all files are in the right locations
4. Restart the dev server: `Ctrl+C` then `npm run dev`