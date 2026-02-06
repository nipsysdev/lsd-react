import type * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { Command } from './Command';

export function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="lsd:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('lsd:overflow-hidden lsd:p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="lsd:[&_[cmdk-group-heading]]:text-lsd-text lsd:[&_[cmdk-group-heading]]:px-2 lsd:[&_[cmdk-group-heading]]:font-medium lsd:[&_[cmdk-group]]:px-2 lsd:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 lsd:[&_[cmdk-input-wrapper]_svg]:h-5 lsd:[&_[cmdk-input-wrapper]_svg]:w-5 lsd:[&_[cmdk-input]]:h-12 lsd:[&_[cmdk-item]]:px-2 lsd:[&_[cmdk-item]]:py-3 lsd:[&_[cmdk-item]_svg]:h-5 lsd:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}
