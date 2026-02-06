import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronUpIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectScrollUpButton({
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
