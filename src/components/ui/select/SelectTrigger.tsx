import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectTrigger({
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
        "lsd:cursor-pointer lsd:border-lsd-border lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:data-[placeholder]:text-lsd-text-secondary lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary lsd:focus-visible:border-lsd-border aria-invalid:lsd:ring-lsd-destructive/20 dark:aria-invalid:lsd:ring-lsd-destructive/40 aria-invalid:lsd:border-lsd-destructive dark:lsd:bg-lsd-surface/30 dark:lsd:hover:bg-lsd-surface/50 lsd:flex lsd:w-fit lsd:items-center lsd:justify-between lsd:gap-2 lsd:border lsd:px-3 lsd:py-2 lsd:text-sm lsd:whitespace-nowrap lsd:transition-[color,border] lsd:outline-none lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50 lsd:data-[size=default]:h-9 lsd:data-[size=sm]:h-8 *:lsd:data-[slot=select-value]:line-clamp-1 *:lsd:data-[slot=select-value]:flex *:lsd:data-[slot=select-value]:items-center *:lsd:data-[slot=select-value]:gap-2 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
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
