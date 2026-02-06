import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'lsd:flex lsd:flex-col-reverse lsd:gap-2 lsd:sm:flex-row lsd:sm:justify-end',
        className,
      )}
      {...props}
    />
  );
}

export { AlertDialogFooter };
