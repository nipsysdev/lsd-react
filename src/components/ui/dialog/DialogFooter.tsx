import type * as React from 'react';

import { cn } from '@/lib/utils';

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'lsd:flex lsd:flex-col-reverse lsd:gap-2 lsd:sm:flex-row lsd:sm:justify-end',
        className,
      )}
      {...props}
    />
  );
}

export { DialogFooter };
