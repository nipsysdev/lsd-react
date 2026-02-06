import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        'lsd:text-lg lsd:font-semibold lsd:text-lsd-text',
        className,
      )}
      {...props}
    />
  );
}

export { AlertDialogTitle };
