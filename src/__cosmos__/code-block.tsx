import type * as React from 'react';
import { cn } from '../lib/utils';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
}

export function CodeBlock({ className, code, ...props }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        'lsd:overflow-x-auto lsd:rounded-md lsd:bg-lsd-surface lsd:p-4 lsd:text-sm lsd:text-lsd-text-primary',
        className,
      )}
      {...props}
    >
      <code className="lsd:font-mono">{code}</code>
    </pre>
  );
}
