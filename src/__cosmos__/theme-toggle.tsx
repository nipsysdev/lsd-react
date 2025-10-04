'use client';

import { Moon, Sun } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// No default export - this prevents it from appearing in the fixture list
export function ThemeToggle() {
  const toggleTheme = (value: string) => {
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Check if dark mode is currently active
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <ToggleGroup
      type="single"
      value={isDarkMode ? 'dark' : 'light'}
      onValueChange={toggleTheme}
      aria-label="Theme toggle"
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
