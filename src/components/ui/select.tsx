import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "lsd:cursor-pointer lsd:border-lsd-border lsd:bg-lsd-surface-secondary lsd:text-lsd-text lsd:data-[placeholder]:text-lsd-text-secondary lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary lsd:focus-visible:border-lsd-border aria-invalid:lsd:ring-lsd-destructive/20 dark:aria-invalid:lsd:ring-lsd-destructive/40 aria-invalid:lsd:border-lsd-destructive dark:lsd:bg-lsd-surface-secondary/30 dark:lsd:hover:bg-lsd-surface-secondary/50 lsd:flex lsd:w-fit lsd:items-center lsd:justify-between lsd:gap-2 lsd:border lsd:px-3 lsd:py-2 lsd:text-sm lsd:whitespace-nowrap lsd:transition-[color,border] lsd:outline-none lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50 lsd:data-[size=default]:h-9 lsd:data-[size=sm]:h-8 *:lsd:data-[slot=select-value]:line-clamp-1 *:lsd:data-[slot=select-value]:flex *:lsd:data-[slot=select-value]:items-center *:lsd:data-[slot=select-value]:gap-2 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="lsd:size-4 lsd:text-lsd-icon-primary" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
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
          'lsd:bg-lsd-surface-primary lsd:text-lsd-text lsd:border-lsd-border lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2 lsd:relative lsd:z-50 lsd:max-h-(--radix-select-content-available-height) lsd:min-w-[8rem] origin-(--radix-select-content-transform-origin) lsd:overflow-x-hidden lsd:overflow-y-auto lsd:border',
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

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        'lsd:text-lsd-text-secondary lsd:px-2 lsd:py-1.5 lsd:text-xs',
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "lsd:focus:bg-lsd-surface-secondary lsd:focus:text-lsd-text lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary lsd:relative lsd:flex lsd:w-full lsd:cursor-default lsd:items-center lsd:gap-2 lsd:py-1.5 lsd:pr-8 lsd:pl-2 lsd:text-sm lsd:outline-hidden lsd:select-none lsd:data-[disabled]:pointer-events-none lsd:data-[disabled]:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4 lsd:*:[span]:last:flex lsd:*:[span]:last:items-center lsd:*:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="lsd:absolute lsd:right-2 lsd:flex lsd:size-3.5 lsd:items-center lsd:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="lsd:size-4 lsd:text-lsd-icon-primary" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        'lsd:bg-lsd-border lsd:pointer-events-none lsd:-mx-1 lsd:my-1 lsd:h-px',
        className,
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'lsd:flex lsd:cursor-default lsd:items-center lsd:justify-center lsd:py-1 lsd:text-lsd-icon-primary',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="lsd:size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'lsd:flex lsd:cursor-default lsd:items-center lsd:justify-center lsd:py-1 lsd:text-lsd-icon-primary',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="lsd:size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
