import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:bg-transparent lsd:text-lsd-text lsd:border-lsd-border lsd:hover:underline lsd:cursor-pointer lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline lsd:data-[state=on]:bg-lsd-primary lsd:data-[state=on]:text-lsd-surface-primary',
  {
    variants: {
      size: {
        default: 'lsd:h-10 lsd:min-w-10 lsd:px-3 lsd:py-[6px]',
        sm: 'lsd:h-8 lsd:min-w-8 lsd:px-2 lsd:py-[6px] lsd:text-[0.75rem]',
        lg: 'lsd:h-12 lsd:min-w-12 lsd:px-4 lsd:py-[10px] lsd:text-[0.875rem]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ size }), className)}
        {...props}
      />
    );
  },
);
Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants };
