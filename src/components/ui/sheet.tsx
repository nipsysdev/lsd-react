'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:fixed lsd:inset-0 lsd:z-50 lsd:bg-black/50',
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'lsd:bg-background lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:fixed lsd:z-50 lsd:flex lsd:flex-col lsd:gap-4 lsd:shadow-lg lsd:transition lsd:ease-in-out lsd:data-[state=closed]:duration-300 lsd:data-[state=open]:duration-500',
          side === 'right' &&
            'lsd:data-[state=closed]:slide-out-to-right lsd:data-[state=open]:slide-in-from-right lsd:inset-y-0 lsd:right-0 lsd:h-full lsd:w-3/4 lsd:border-l lsd:sm:max-w-sm',
          side === 'left' &&
            'lsd:data-[state=closed]:slide-out-to-left lsd:data-[state=open]:slide-in-from-left lsd:inset-y-0 lsd:left-0 lsd:h-full lsd:w-3/4 lsd:border-r lsd:sm:max-w-sm',
          side === 'top' &&
            'lsd:data-[state=closed]:slide-out-to-top lsd:data-[state=open]:slide-in-from-top lsd:inset-x-0 lsd:top-0 lsd:h-auto lsd:border-b',
          side === 'bottom' &&
            'lsd:data-[state=closed]:slide-out-to-bottom lsd:data-[state=open]:slide-in-from-bottom lsd:inset-x-0 lsd:bottom-0 lsd:h-auto lsd:border-t',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="lsd:data-[state=open]:bg-secondary lsd:absolute lsd:top-4 lsd:right-4 lsd:rounded-xs lsd:opacity-70 lsd:transition-opacity lsd:hover:opacity-100 lsd:p-2 lsd:cursor-pointer lsd:disabled:pointer-events-none">
          <XIcon className="lsd:size-4" />
          <span className="lsd:sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('lsd:flex lsd:flex-col lsd:gap-1.5 lsd:p-4', className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        'lsd:mt-auto lsd:flex lsd:flex-col lsd:gap-2 lsd:p-4',
        className,
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('lsd:text-foreground lsd:font-semibold', className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('lsd:text-muted-foreground lsd:text-sm', className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
