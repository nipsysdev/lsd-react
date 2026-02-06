import * as React from 'react';

import { cn } from '@/lib/utils';
import type { InputProps } from './types';
import {
  getLabelSizeClasses,
  getTextSizeClasses,
  getVerticalPaddingClasses,
} from './utils';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'underlined',
      size = 'medium',
      label,
      supportingText,
      error,
      id,
      type,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();
    const finalId = id || inputId;

    return (
      <div className={cn('lsd:flex lsd:flex-col lsd:box-border', className)}>
        {label && (
          <label
            htmlFor={finalId}
            className={cn('lsd:font-medium', getLabelSizeClasses(size))}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            'lsd:flex lsd:items-center lsd:justify-between',
            variant === 'outlined'
              ? 'lsd:border lsd:border-lsd-border-primary lsd:rounded'
              : 'lsd:border lsd:border-transparent lsd:border-b-lsd-border-primary',
            error && 'lsd:border-lsd-destructive',
          )}
        >
          <input
            ref={ref}
            type={type}
            id={finalId}
            className={cn(
              'file:lsd:text-lsd-text placeholder:lsd:text-lsd-text-primary placeholder:lsd:opacity-30 selection:lsd:bg-lsd-primary selection:lsd:text-lsd-surface-primary lsd:border-none lsd:outline-none lsd:bg-transparent lsd:text-lsd-text-primary lsd:w-full lsd:h-full file:lsd:inline-flex file:lsd:h-7 file:lsd:border-0 file:lsd:bg-transparent file:lsd:font-medium lsd:disabled:pointer-events-none lsd:disabled:cursor-not-allowed lsd:disabled:opacity-34',
              'focus-visible:lsd:outline-none lsd:px-4',
              error && 'lsd:line-through',
              getTextSizeClasses(size),
              getVerticalPaddingClasses(size),
            )}
            {...props}
          />
        </div>
        {supportingText && (
          <div className="lsd:pt-1.5 lsd:w-fit">
            <p
              className={cn(
                'lsd:text-sm',
                size === 'large' ? 'lsd:text-base' : 'lsd:text-sm',
                error && 'lsd:text-lsd-destructive',
              )}
            >
              {supportingText}
            </p>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
