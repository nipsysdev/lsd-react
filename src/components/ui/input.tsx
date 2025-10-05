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
          return 'w-52';
        case 'medium':
          return 'w-44';
        case 'small':
          return 'w-40';
        default:
          return 'w-52';
      }
    };

    const getPaddingClasses = () => {
      switch (size) {
        case 'large':
          return 'px-4 py-4';
        case 'medium':
          return 'px-3 py-3';
        case 'small':
          return 'px-3 py-3';
        default:
          return 'px-4 py-4';
      }
    };

    return (
      <div className={cn('flex flex-col box-border', className)}>
        {label && (
          <label htmlFor={finalId} className="pb-1.5 text-sm font-medium">
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center justify-between',
            variant === 'outlined'
              ? 'border border-lsd-border-primary rounded'
              : 'border border-transparent border-b-lsd-border-primary',
            error && 'border-lsd-destructive',
            getSizeClasses(),
          )}
        >
          <input
            ref={ref}
            type={type}
            id={finalId}
            className={cn(
              'file:text-lsd-text placeholder:text-lsd-text-primary placeholder:opacity-30 selection:bg-lsd-primary selection:text-lsd-surface-primary border-none outline-none bg-transparent text-lsd-text-primary w-full h-full text-base file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-base file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-34',
              'focus-visible:outline-none',
              error && 'line-through',
              getPaddingClasses(),
            )}
            {...props}
          />
        </div>
        {supportingText && (
          <div className="pt-1.5 w-fit">
            <p
              className={cn(
                'text-sm',
                size === 'large' ? 'text-base' : 'text-sm',
                error && 'text-lsd-destructive',
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
