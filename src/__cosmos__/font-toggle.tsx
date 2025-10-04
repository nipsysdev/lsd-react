import * as React from 'react';

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
      <div className="flex space-x-1">
        <button
          type="button"
          onClick={() => setFont('mono')}
          className={`px-2 py-1 text-xs border ${
            font === 'mono'
              ? 'bg-[rgb(var(--lsd-surface-secondary))]'
              : 'bg-transparent'
          }`}
        >
          Mono
        </button>
        <button
          type="button"
          onClick={() => setFont('sans')}
          className={`px-2 py-1 text-xs border ${
            font === 'sans'
              ? 'bg-[rgb(var(--lsd-surface-secondary))]'
              : 'bg-transparent'
          }`}
        >
          Sans
        </button>
        <button
          type="button"
          onClick={() => setFont('serif')}
          className={`px-2 py-1 text-xs border ${
            font === 'serif'
              ? 'bg-[rgb(var(--lsd-surface-secondary))]'
              : 'bg-transparent'
          }`}
        >
          Serif
        </button>
      </div>
    </div>
  );
}
