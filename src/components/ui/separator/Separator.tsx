import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentProps<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'lsd:bg-border lsd:shrink-0 lsd:data-[orientation=horizontal]:h-px lsd:data-[orientation=horizontal]:w-full lsd:data-[orientation=vertical]:h-full lsd:data-[orientation=vertical]:w-px',
          className,
        )}
        {...props}
      />
    );
  },
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
