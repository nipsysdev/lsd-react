import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:cursor-pointer',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-primary lsd:text-primary-foreground',
        outlined: 'lsd:bg-transparent lsd:text-foreground',
        'filled-icon':
          'lsd:bg-primary lsd:text-primary-foreground lsd:rounded-full',
        'outlined-icon':
          'lsd:bg-transparent lsd:text-foreground lsd:rounded-full',
      },
      size: {
        default: 'lsd:h-[34px] lsd:px-6 lsd:py-2 lsd:text-base',
        sm: 'lsd:h-8 lsd:px-3 lsd:py-[6px] lsd:text-sm',
        lg: 'lsd:h-12 lsd:px-8 lsd:py-[10px] lsd:text-lg',
        icon: 'lsd:w-10 lsd:h-10',
        'icon-sm': 'lsd:w-8 lsd:h-8',
        'icon-lg': 'lsd:w-12 lsd:h-12',
        'icon-xl': 'lsd:w-16 lsd:h-16',
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
          'lsd:text-foreground lsd:border lsd:hover:underline lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline',
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
