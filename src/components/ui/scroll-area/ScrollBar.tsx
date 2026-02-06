import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'lsd:flex lsd:touch-none lsd:p-px lsd:transition-colors lsd:select-none',
        orientation === 'vertical' &&
          'lsd:h-full lsd:w-2.5 lsd:border-l lsd:border-l-transparent',
        orientation === 'horizontal' &&
          'lsd:h-2.5 lsd:flex-col lsd:border-t lsd:border-t-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="lsd:bg-lsd-border lsd:relative lsd:flex-1"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollBar };
