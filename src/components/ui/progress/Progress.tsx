import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ProgressProps } from './types';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indeterminate, speed = 'normal', ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    className={cn(
      'lsd:relative lsd:w-full lsd:h-2 lsd:overflow-hidden lsd:rounded-none lsd:bg-lsd-surface-secondary lsd:border lsd:border-lsd-border-primary',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        'lsd:h-full lsd:w-full lsd:flex-1 lsd:bg-lsd-primary',
        indeterminate
          ? cn(
              'lsd:animate-indeterminate-progress',
              speed === 'slow' && 'lsd:animate-indeterminate-progress-slow',
              speed === 'fast' && 'lsd:animate-indeterminate-progress-fast',
            )
          : 'lsd:transition-all',
      )}
      style={
        indeterminate
          ? undefined
          : { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
