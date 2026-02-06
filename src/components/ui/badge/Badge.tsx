import { Slot } from '@radix-ui/react-slot';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type BadgeVariants, badgeVariants } from './variants';

export interface BadgeProps
  extends React.ComponentProps<'span'>,
    BadgeVariants {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge };
