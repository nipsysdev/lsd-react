import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const labelVariants = cva(
  'lsd:flex lsd:items-center lsd:gap-2 lsd:select-none lsd:group-data-[disabled=true]:pointer-events-none lsd:group-data-[disabled=true]:opacity-50 peer-lsd:disabled:cursor-not-allowed peer-lsd:disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'lsd:text-lsd-text-primary',
        secondary: 'lsd:text-lsd-text-secondary',
      },
      size: {
        sm: 'lsd:text-[0.75rem] lsd:leading-[1rem]',
        md: 'lsd:text-[0.875rem] lsd:leading-[1.25rem]',
        lg: 'lsd:text-[1rem] lsd:leading-[1.5rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

function Label({ className, variant, size, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Label, labelVariants };
