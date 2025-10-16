import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  indeterminate?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indeterminate, speed = 'normal', ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    data-slot="progress"
    className={cn(
      'relative w-full h-2 overflow-hidden rounded-none bg-lsd-surface-secondary border border-lsd-border-primary',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        'h-full w-full flex-1 bg-lsd-primary',
        indeterminate
          ? cn(
              'animate-indeterminate-progress',
              speed === 'slow' && 'animate-indeterminate-progress-slow',
              speed === 'fast' && 'animate-indeterminate-progress-fast',
            )
          : 'transition-all',
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
