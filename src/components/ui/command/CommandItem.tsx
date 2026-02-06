import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "lsd:data-[selected=true]:bg-lsd-surface-secondary lsd:data-[selected=true]:text-lsd-text lsd:[&_svg:not([class*='text-'])]:text-lsd-text lsd:relative lsd:flex lsd:cursor-default lsd:items-center lsd:gap-2 lsd:rounded-sm lsd:px-2 lsd:py-1.5 lsd:text-sm lsd:outline-hidden lsd:select-none lsd:data-[disabled=true]:pointer-events-none lsd:data-[disabled=true]:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}
