import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'lsd:max-h-[300px] lsd:scroll-py-1 lsd:overflow-x-hidden lsd:overflow-y-auto',
        className,
      )}
      {...props}
    />
  );
}
