import * as React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function FontToggle() {
  const [font, setFont] = React.useState<'mono' | 'sans' | 'serif'>('mono');

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-mono', 'font-sans', 'font-serif');
    root.classList.add(`font-${font}`);
  }, [font]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">Font:</span>
      <ToggleGroup
        type="single"
        value={font}
        onValueChange={(value) => setFont(value as 'mono' | 'sans' | 'serif')}
        aria-label="Font toggle"
      >
        <ToggleGroupItem value="mono" aria-label="Mono font">
          Mono
        </ToggleGroupItem>
        <ToggleGroupItem value="sans" aria-label="Sans font">
          Sans
        </ToggleGroupItem>
        <ToggleGroupItem value="serif" aria-label="Serif font">
          Serif
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
