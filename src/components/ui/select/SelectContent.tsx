import * as SelectPrimitive from '@radix-ui/react-select';
import 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

import { SelectScrollDownButton } from './SelectScrollDownButton';
import { SelectScrollUpButton } from './SelectScrollUpButton';

export function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:border-lsd-border lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2 lsd:relative lsd:z-50 lsd:max-h-(--radix-select-content-available-height) lsd:min-w-[8rem] origin-(--radix-select-content-transform-origin) lsd:overflow-x-hidden lsd:overflow-y-auto lsd:border',
          position === 'popper' &&
            'lsd:data-[side=bottom]:translate-y-1 lsd:data-[side=left]:-translate-x-1 lsd:data-[side=right]:translate-x-1 lsd:data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'lsd:p-1',
            position === 'popper' &&
              'lsd:h-[var(--radix-select-trigger-height)] lsd:w-full lsd:min-w-[var(--radix-select-trigger-width)] lsd:scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
