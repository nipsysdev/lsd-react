import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ProgressProps } from './types';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      indeterminate,
      speed = 'normal',
      variant = 'default',
      showLabel = false,
      labelPosition = 'top',
      paused = false,
      size = 'md',
      ...props
    },
    ref,
  ) => {
    // Color variant mapping
    const variantClasses = {
      default: 'lsd:bg-lsd-primary',
      success: 'lsd:bg-lsd-success',
      warning: 'lsd:bg-lsd-warning',
      destructive: 'lsd:bg-lsd-destructive',
    };

    // Size mapping
    const sizeClasses = {
      sm: 'lsd:h-2',
      md: 'lsd:h-3',
      lg: 'lsd:h-4',
    };

    // Animation classes for indeterminate state
    const indeterminateAnimationClasses = indeterminate
      ? cn(
          'lsd:w-1/3',
          'lsd:animate-indeterminate-progress',
          speed === 'slow' && 'lsd:animate-indeterminate-progress-slow',
          speed === 'fast' && 'lsd:animate-indeterminate-progress-fast',
          paused && 'lsd:animation-paused',
        )
      : 'lsd:w-full';

    // Label text is always percentage
    const labelText = showLabel ? `${value ?? 0}%` : null;

    return (
      <div className="lsd:w-full">
        {showLabel && labelText && labelPosition === 'top' && (
          <div className="lsd:mb-0.5 lsd:text-sm lsd:font-medium lsd:text-lsd-text-primary lsd:text-center">
            {labelText}
          </div>
        )}
        <ProgressPrimitive.Root
          ref={ref}
          data-slot="progress"
          className={cn(
            'lsd:relative lsd:w-full lsd:overflow-hidden lsd:rounded-none lsd:bg-lsd-surface lsd:border lsd:border-lsd-border',
            sizeClasses[size],
            className,
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className={cn(
              'lsd:h-full lsd:flex-1',
              !indeterminate && 'lsd:transition-all',
              variantClasses[variant],
              indeterminateAnimationClasses,
            )}
            style={
              indeterminate
                ? undefined
                : { transform: `translateX(-${100 - (value || 0)}%)` }
            }
          />
        </ProgressPrimitive.Root>
        {showLabel && labelText && labelPosition === 'bottom' && (
          <div className="lsd:mt-0.5 lsd:text-sm lsd:font-medium lsd:text-lsd-text-primary lsd:text-center">
            {labelText}
          </div>
        )}
      </div>
    );
  },
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
