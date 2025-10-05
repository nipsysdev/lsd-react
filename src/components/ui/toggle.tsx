import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center border transition-colors bg-transparent text-lsd-text border-lsd-border hover:underline cursor-pointer disabled:opacity-34 disabled:cursor-not-allowed disabled:no-underline data-[state=on]:bg-lsd-primary data-[state=on]:text-lsd-surface-primary',
  {
    variants: {
      size: {
        default: 'h-10 min-w-10 px-3 py-[6px]',
        sm: 'h-8 min-w-8 px-2 py-[6px] text-[0.75rem]',
        lg: 'h-12 min-w-12 px-4 py-[10px] text-[0.875rem]',
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
