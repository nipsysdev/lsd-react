import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "lsd:focus:bg-lsd-surface lsd:focus:text-lsd-text-primary lsd:[&_svg:not([class*='text-'])]:text-lsd-icon-primary lsd:relative lsd:flex lsd:w-full lsd:cursor-pointer lsd:items-center lsd:gap-2 lsd:py-1.5 lsd:pr-8 lsd:pl-2 lsd:text-sm lsd:outline-hidden lsd:select-none lsd:data-[disabled]:pointer-events-none lsd:data-[disabled]:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4 lsd:*:[span]:last:flex lsd:*:[span]:last:items-center lsd:*:[span]:last:gap-2 lsd:hover:underline lsd:focus:underline lsd:data-highlighted:underline",
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
