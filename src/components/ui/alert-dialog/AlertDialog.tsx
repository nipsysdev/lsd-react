import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export { AlertDialog };
