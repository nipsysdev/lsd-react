import * as DialogPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export { DialogClose };
