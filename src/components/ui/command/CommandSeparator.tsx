import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('lsd:bg-lsd-border lsd:-mx-1 lsd:h-px', className)}
      {...props}
    />
  );
}
