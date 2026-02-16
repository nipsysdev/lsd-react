import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'lsd:text-lsd-text-primary lsd:[&_[cmdk-group-heading]]:text-lsd-text-primary lsd:overflow-hidden lsd:p-1 lsd:[&_[cmdk-group-heading]]:px-2 lsd:[&_[cmdk-group-heading]]:py-1.5 lsd:[&_[cmdk-group-heading]]:text-xs lsd:[&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}
