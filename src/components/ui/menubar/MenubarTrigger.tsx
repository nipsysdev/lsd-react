import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarTriggerVariants } from './types';

export interface MenubarTriggerProps
  extends React.ComponentProps<typeof MenubarPrimitive.Trigger> {}

function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(menubarTriggerVariants(), className)}
      {...props}
    />
  );
}

export { MenubarTrigger };
