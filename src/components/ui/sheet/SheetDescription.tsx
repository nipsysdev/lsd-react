import * as SheetPrimitive from '@radix-ui/react-dialog';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SheetDescription({
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
