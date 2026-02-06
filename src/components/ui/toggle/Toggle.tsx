import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { type ToggleVariants, toggleVariants } from './variants';

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    ToggleVariants {}

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

export { Toggle };
