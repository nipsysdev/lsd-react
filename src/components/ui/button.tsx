import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-lsd-primary text-lsd-surface-primary',
        outlined: 'bg-transparent text-lsd-text',
      },
      size: {
        default: 'h-10 px-6 py-[6px]',
        sm: 'h-8 px-3 py-[6px] text-[0.75rem]',
        lg: 'h-12 px-8 py-[10px] text-[0.875rem]',
      },
    },
    defaultVariants: {
      variant: 'filled',
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
          'text-lsd-text border-lsd-border hover:underline disabled:opacity-34 disabled:cursor-not-allowed disabled:no-underline',
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
