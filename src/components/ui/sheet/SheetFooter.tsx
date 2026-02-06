import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SheetFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        'lsd:mt-auto lsd:flex lsd:flex-col lsd:gap-2 lsd:p-4',
        className,
      )}
      {...props}
    />
  );
}
