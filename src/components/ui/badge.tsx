import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center border border-lsd-icon-primary rounded-[20px] w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 [&>svg]:pointer-events-none hover:underline focus:underline cursor-pointer transition-colors overflow-hidden',
  {
    variants: {
      variant: {
        filled: 'bg-lsd-primary text-lsd-surface-primary',
        outlined: 'bg-transparent text-lsd-text-primary',
      },
      size: {
        default: 'h-[28px] px-[11px] py-[3px] gap-[12px] text-[0.875rem]',
        sm: 'h-[24px] px-[7px] py-[3px] gap-[8px] text-[0.75rem]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
