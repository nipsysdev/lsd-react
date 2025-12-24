import * as SwitchPrimitive from '@radix-ui/react-switch';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer lsd:data-[state=checked]:bg-lsd-primary lsd:data-[state=unchecked]:bg-lsd-surface-secondary focus-visible:lsd:border-lsd-border focus-visible:lsd:ring-lsd-text/50 dark:lsd:data-[state=unchecked]:bg-lsd-surface-secondary/80 lsd:inline-flex lsd:h-[18px] lsd:w-9 lsd:shrink-0 lsd:items-center lsd:rounded-full lsd:border lsd:border-lsd-border lsd:shadow-xs lsd:transition-all lsd:outline-none focus-visible:lsd:ring-[3px] lsd:cursor-pointer lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'lsd:bg-lsd-surface-primary lsd:border lsd:border-lsd-border dark:lsd:data-[state=unchecked]:bg-lsd-text dark:lsd:data-[state=checked]:bg-lsd-surface-primary lsd:pointer-events-none lsd:block lsd:size-5 lsd:rounded-full lsd:ring-0 lsd:transition-transform lsd:data-[state=checked]:translate-x-[calc(100%-2px)] lsd:data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
