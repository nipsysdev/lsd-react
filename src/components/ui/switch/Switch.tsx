import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer lsd:data-[state=checked]:bg-lsd-primary lsd:data-[state=unchecked]:bg-lsd-surface focus-visible:lsd:border-lsd-border focus-visible:lsd:ring-lsd-text/50 dark:lsd:data-[state=unchecked]:bg-lsd-surface/80 lsd:inline-flex lsd:shrink-0 lsd:items-center lsd:rounded-full lsd:border lsd:border-lsd-border lsd:shadow-xs lsd:transition-all lsd:outline-none focus-visible:lsd:ring-[3px] lsd:cursor-pointer lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'lsd:h-[14px] lsd:w-7',
        md: 'lsd:h-[18px] lsd:w-9',
        lg: 'lsd:h-[24px] lsd:w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const thumbVariants = cva(
  'lsd:bg-lsd-surface lsd:border lsd:border-lsd-border dark:lsd:data-[state=unchecked]:bg-lsd-text-primary dark:lsd:data-[state=checked]:bg-lsd-surface lsd:pointer-events-none lsd:block lsd:rounded-full lsd:ring-0 lsd:transition-transform',
  {
    variants: {
      size: {
        sm: 'lsd:size-3 lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
        md: 'lsd:size-5 lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
        lg: 'lsd:size-6 lsd:data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={thumbVariants({ size })}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
