import type * as React from 'react';

import { cn } from '@/lib/utils';

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        'lsd:flex lsd:flex-col lsd:gap-2 lsd:text-center lsd:sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

export { DialogHeader };
