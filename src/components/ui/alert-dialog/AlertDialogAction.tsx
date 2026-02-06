import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

export { AlertDialogAction };
