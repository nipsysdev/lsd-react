import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-primary text-primary-foreground',
        outlined: 'bg-transparent text-foreground',
      },
      size: {
        default: 'h-[34px] px-6 py-2 text-base',
        sm: 'h-8 px-3 py-[6px] text-sm',
        lg: 'h-12 px-8 py-[10px] text-lg',
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
          'text-foreground border hover:underline disabled:opacity-34 disabled:cursor-not-allowed disabled:no-underline',
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
