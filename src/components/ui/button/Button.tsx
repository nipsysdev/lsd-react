import * as React from 'react';

import { cn } from '@/lib/utils';
import { type ButtonVariants, buttonVariants } from './types';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean;
  fullWidth?: boolean;
}

const LoadingSpinner = ({ size }: { size?: string }) => {
  const getSpinnerSize = () => {
    switch (size) {
      case 'xs':
      case 'icon-sm':
        return 'lsd:w-3 lsd:h-3';
      case 'sm':
        return 'lsd:w-4 lsd:h-4';
      case 'md':
      case 'icon-md':
        return 'lsd:w-5 lsd:h-5';
      case 'lg':
      case 'icon-lg':
        return 'lsd:w-6 lsd:h-6';
      case 'xl':
      case 'icon-xl':
        return 'lsd:w-7 lsd:h-7';
      default:
        return 'lsd:w-5 lsd:h-5';
    }
  };

  return (
    <svg
      className={cn('animate-spin', getSpinnerSize())}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="lsd:opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="lsd:opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isLinkVariant = variant === 'link';

    return (
      <button
        className={cn(
          'lsd:text-foreground lsd:border lsd:hover:underline lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline',
          buttonVariants({ variant, size }),
          fullWidth && 'lsd:w-full',
          isLinkVariant && 'lsd:border-0',
          className,
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="lsd:flex lsd:items-center lsd:justify-center lsd:gap-2">
            <LoadingSpinner size={size} />
            {children && <span className="lsd:opacity-50">{children}</span>}
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button };
