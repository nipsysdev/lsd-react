import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'lsd:bg-lsd-surface-primary lsd:text-lsd-text lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2 lsd:z-50 lsd:w-72 origin-(--radix-popover-content-transform-origin) lsd:border lsd:border-lsd-border lsd:p-4 lsd:shadow-md lsd:outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { PopoverContent };
