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
        'peer data-[state=checked]:bg-lsd-primary data-[state=unchecked]:bg-lsd-surface-secondary focus-visible:border-lsd-border focus-visible:ring-lsd-text/50 dark:data-[state=unchecked]:bg-lsd-surface-secondary/80 inline-flex h-[18px] w-9 shrink-0 items-center rounded-full border border-lsd-border shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-lsd-surface-primary border border-lsd-border dark:data-[state=unchecked]:bg-lsd-text dark:data-[state=checked]:bg-lsd-surface-primary pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
