import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertDialogOverlay } from './AlertDialogOverlay';
import { AlertDialogPortal } from './AlertDialogPortal';

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'lsd:bg-lsd-surface-primary lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:fixed lsd:top-[50%] lsd:left-[50%] lsd:z-50 lsd:grid lsd:w-full lsd:max-w-[calc(100%-2rem)] lsd:translate-x-[-50%] lsd:translate-y-[-50%] lsd:gap-4 lsd:border lsd:border-lsd-border lsd:p-6 lsd:shadow-lg lsd:duration-200 lsd:sm:max-w-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

export { AlertDialogContent };
