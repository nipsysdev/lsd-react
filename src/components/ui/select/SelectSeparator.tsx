import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectSeparator({
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
