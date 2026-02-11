import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="lsd:flex lsd:h-9 lsd:items-center lsd:gap-2 lsd:border-b lsd:border-lsd-border lsd:px-3"
    >
      <SearchIcon className="lsd:size-4 lsd:shrink-0 lsd:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-lsd-text/50 lsd:flex lsd:h-10 lsd:w-full lsd:bg-transparent lsd:py-3 lsd:text-sm lsd:outline-hidden lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}
