import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        'lsd:flex lsd:flex-col lsd:gap-2 lsd:text-center lsd:sm:text-left',
        className,
      )}
      {...props}
    />
  );
}

export { AlertDialogHeader };
