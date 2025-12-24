import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outlined' | 'underlined';
  size?: 'large' | 'medium' | 'small';
  label?: React.ReactNode;
  supportingText?: React.ReactNode;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'underlined',
      size = 'large',
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

    const getSizeClasses = () => {
      switch (size) {
        case 'large':
          return 'lsd:w-52';
        case 'medium':
          return 'lsd:w-44';
        case 'small':
          return 'lsd:w-40';
        default:
          return 'lsd:w-52';
      }
    };

    const getPaddingClasses = () => {
      switch (size) {
        case 'large':
          return 'lsd:px-4 lsd:py-4';
        case 'medium':
          return 'lsd:px-3 lsd:py-3';
        case 'small':
          return 'lsd:px-3 lsd:py-3';
        default:
          return 'lsd:px-4 lsd:py-4';
      }
    };

    return (
      <div className={cn('lsd:flex lsd:flex-col lsd:box-border', className)}>
        {label && (
          <label
            htmlFor={finalId}
            className="lsd:pb-1.5 lsd:text-sm lsd:font-medium"
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
            getSizeClasses(),
          )}
        >
          <input
            ref={ref}
            type={type}
            id={finalId}
            className={cn(
              'file:lsd:text-lsd-text placeholder:lsd:text-lsd-text-primary placeholder:lsd:opacity-30 selection:lsd:bg-lsd-primary selection:lsd:text-lsd-surface-primary lsd:border-none lsd:outline-none lsd:bg-transparent lsd:text-lsd-text-primary lsd:w-full lsd:h-full lsd:text-base file:lsd:inline-flex file:lsd:h-7 file:lsd:border-0 file:lsd:bg-transparent file:lsd:text-base file:lsd:font-medium lsd:disabled:pointer-events-none lsd:disabled:cursor-not-allowed lsd:disabled:opacity-34',
              'focus-visible:lsd:outline-none',
              error && 'lsd:line-through',
              getPaddingClasses(),
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
