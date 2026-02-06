import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('lsd:text-lsd-text-secondary lsd:text-sm', className)}
      {...props}
    />
  );
}

export { AlertDialogDescription };
