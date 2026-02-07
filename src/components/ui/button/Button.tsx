import * as React from 'react';

import { cn } from '@/lib/utils';
import { type ButtonVariants, buttonVariants } from './types';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

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

export { Button };
