import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:border-lsd-icon-primary lsd:rounded-[20px] lsd:w-fit lsd:whitespace-nowrap lsd:shrink-0 lsd:[&>svg]:size-3 lsd:[&>svg]:pointer-events-none lsd:hover:underline lsd:focus:underline lsd:cursor-pointer lsd:transition-colors lsd:overflow-hidden',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-lsd-primary lsd:text-lsd-surface-primary',
        outlined: 'lsd:bg-transparent lsd:text-lsd-text-primary',
      },
      size: {
        default:
          'lsd:h-[28px] lsd:px-[11px] lsd:py-[3px] lsd:gap-[12px] lsd:text-[0.875rem]',
        sm: 'lsd:h-[24px] lsd:px-[7px] lsd:py-[3px] lsd:gap-[8px] lsd:text-[0.75rem]',
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
