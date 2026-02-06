'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ToggleGroupContext } from './context';
import type { ToggleGroupVariants } from './types';

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupVariants
>(({ className, size, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      data-slot="toggle-group"
      data-size={size}
      className={cn(
        'group/toggle-group lsd:flex lsd:w-fit lsd:items-center',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = 'ToggleGroup';

export { ToggleGroup };
