import * as DialogPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export { Dialog };
