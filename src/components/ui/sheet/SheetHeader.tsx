import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SheetHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('lsd:flex lsd:flex-col lsd:gap-1.5 lsd:p-4', className)}
      {...props}
    />
  );
}
