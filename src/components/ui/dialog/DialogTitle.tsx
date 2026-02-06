import * as DialogPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        'lsd:text-lg lsd:leading-none lsd:font-semibold',
        className,
      )}
      {...props}
    />
  );
}

export { DialogTitle };
