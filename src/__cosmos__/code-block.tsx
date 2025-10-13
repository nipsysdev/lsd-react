import type * as React from 'react';
import { cn } from '../lib/utils';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
}

export function CodeBlock({ className, code, ...props }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-md bg-lsd-surface-secondary p-4 text-sm text-lsd-text-primary',
        className,
      )}
      {...props}
    >
      <code className="font-mono">{code}</code>
    </pre>
  );
}
