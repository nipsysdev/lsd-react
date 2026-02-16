'use client';

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  const toggleTheme = (value: string | undefined) => {
    // Prevent untoggling - ignore undefined values
    if (!value) return;

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMode(value as 'light' | 'dark');
  };

  return (
    <ToggleGroup
      type="single"
      value={mode}
      onValueChange={toggleTheme}
      aria-label="Theme toggle"
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <Sun className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <Moon className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ThemeAccentToggle() {
  const [theme, setTheme] = useState<'monochrome' | 'teal'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('theme-teal')
        ? 'teal'
        : 'monochrome';
    }
    return 'monochrome';
  });

  const toggleAccentTheme = (value: string | undefined) => {
    // Prevent untoggling - ignore undefined values
    if (!value) return;

    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('theme-teal');

    // Add new theme class if not monochrome
    if (value === 'teal') {
      root.classList.add('theme-teal');
    }
    setTheme(value as 'monochrome' | 'teal');
  };

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={toggleAccentTheme}
      aria-label="Accent theme toggle"
    >
      <ToggleGroupItem
        value="monochrome"
        aria-label="Monochrome theme"
        className="lsd:group"
      >
        <div className="lsd:flex lsd:gap-1 lsd:items-center">
          <div className="lsd:w-3 lsd:h-3 lsd:bg-black dark:lsd:bg-white lsd:rounded-full lsd:border lsd:group-aria-checked:border-lsd-surface" />
          <div className="lsd:w-3 lsd:h-3 lsd:bg-white dark:lsd:bg-black lsd:rounded-full lsd:border lsd:border-black lsd:group-aria-checked:border-lsd-surface" />
        </div>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="teal"
        aria-label="Teal theme"
        className="lsd:group"
      >
        <div className="lsd:flex lsd:gap-1 lsd:items-center">
          <div className="lsd:w-3 lsd:h-3 lsd:bg-lsd-theme-teal lsd:rounded-full lsd:border lsd:border-lsd-theme-teal lsd:group-aria-checked:border-lsd-theme-teal-border" />
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
