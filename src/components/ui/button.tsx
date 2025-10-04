import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        secondary: 'bg-[rgb(var(--lsd-surface-secondary))]',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 px-3 py-1.5 text-sm',
        lg: 'h-12 px-8 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          'text-[rgb(var(--lsd-text))] border-[rgb(var(--lsd-border))] hover:underline disabled:opacity-34 disabled:cursor-not-allowed disabled:no-underline',
          buttonVariants({ variant, size }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
