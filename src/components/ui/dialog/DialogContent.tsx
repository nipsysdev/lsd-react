import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { DialogClose } from './DialogClose';
import { DialogOverlay } from './DialogOverlay';
import { DialogPortal } from './DialogPortal';

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'lsd:bg-lsd-surface lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:fixed lsd:top-[50%] lsd:left-[50%] lsd:z-50 lsd:grid lsd:w-full lsd:max-w-[calc(100%-2rem)] lsd:translate-x-[-50%] lsd:translate-y-[-50%] lsd:gap-4 lsd:border lsd:border-lsd-border lsd:p-6 lsd:shadow-lg lsd:duration-200 lsd:sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogClose
            data-slot="dialog-close"
            className="lsd:p-2 focus:lsd:outline-hidden lsd:data-[state=open]:bg-lsd-surface lsd:data-[state=open]:text-lsd-text-primary lsd:absolute lsd:top-4 lsd:right-4 lsd:rounded-xs lsd:opacity-70 lsd:transition-opacity lsd:hover:opacity-100 lsd:disabled:pointer-events-none lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4 lsd:cursor-pointer"
          >
            <XIcon />
            <span className="lsd:sr-only">Close</span>
          </DialogClose>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export { DialogContent };
