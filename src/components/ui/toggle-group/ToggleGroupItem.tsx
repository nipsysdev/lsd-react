'use client';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as React from 'react';
import { toggleVariants } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import { ToggleGroupContext } from './context';
import type { ToggleGroupVariants } from './types';

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleGroupVariants
>(({ className, children, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      data-slot="toggle-group-item"
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          size: context.size || size,
        }),
        'lsd:min-w-0 lsd:flex-1 lsd:shrink-0 lsd:rounded-none lsd:shadow-none focus:lsd:z-10 focus-visible:lsd:z-10 lsd:border-l-0 lsd:first:border-l lsd:cursor-pointer lsd:disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroupItem };
