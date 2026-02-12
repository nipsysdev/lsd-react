import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ButtonGroupTextProps } from './types';

const ButtonGroupText = React.forwardRef<HTMLDivElement, ButtonGroupTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        ref={ref}
        className={cn(
          "lsd:bg-secondary lsd:flex lsd:items-center lsd:gap-2 lsd:rounded-md lsd:border lsd:px-4 lsd:text-sm lsd:font-medium lsd:shadow-xs lsd:[&_svg]:pointer-events-none lsd:[&_svg:not([class*='size-'])]:size-4 lsd:disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);
ButtonGroupText.displayName = 'ButtonGroupText';

export { ButtonGroupText };
