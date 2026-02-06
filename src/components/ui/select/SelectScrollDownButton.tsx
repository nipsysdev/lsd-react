import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectScrollDownButton({
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
