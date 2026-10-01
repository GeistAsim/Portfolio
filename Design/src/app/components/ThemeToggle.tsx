import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 rounded-full hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </Button>
  );
};