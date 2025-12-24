'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import type * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'lsd:bg-lsd-surface-primary lsd:text-lsd-text lsd:flex lsd:h-full lsd:w-full lsd:flex-col lsd:overflow-hidden lsd:rounded-md',
        className,
      )}
      {...props}
    />
  );
}

function CommandDialog({
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

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="lsd:flex lsd:h-9 lsd:items-center lsd:gap-2 lsd:border-b lsd:border-lsd-border lsd:px-3"
    >
      <SearchIcon className="lsd:size-4 lsd:shrink-0 lsd:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-lsd-text/50 lsd:flex lsd:h-10 lsd:w-full lsd:rounded-md lsd:bg-transparent lsd:py-3 lsd:text-sm lsd:outline-hidden lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'lsd:max-h-[300px] lsd:scroll-py-1 lsd:overflow-x-hidden lsd:overflow-y-auto',
        className,
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="lsd:py-6 lsd:text-center lsd:text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'lsd:text-lsd-text lsd:[&_[cmdk-group-heading]]:text-lsd-text lsd:overflow-hidden lsd:p-1 lsd:[&_[cmdk-group-heading]]:px-2 lsd:[&_[cmdk-group-heading]]:py-1.5 lsd:[&_[cmdk-group-heading]]:text-xs lsd:[&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('lsd:bg-lsd-border lsd:-mx-1 lsd:h-px', className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "lsd:data-[selected=true]:bg-lsd-surface-secondary lsd:data-[selected=true]:text-lsd-text lsd:[&_svg:not([class*='text-'])]:text-lsd-text lsd:relative lsd:flex lsd:cursor-default lsd:items-center lsd:gap-2 lsd:rounded-sm lsd:px-2 lsd:py-1.5 lsd:text-sm lsd:outline-hidden lsd:select-none lsd:data-[disabled=true]:pointer-events-none lsd:data-[disabled=true]:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'lsd:text-lsd-text lsd:ml-auto lsd:text-xs lsd:tracking-widest',
        className,
      )}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
