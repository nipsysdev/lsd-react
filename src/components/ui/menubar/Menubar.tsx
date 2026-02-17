import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarVariants } from './types';

export interface MenubarProps
  extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(menubarVariants(), className)}
      {...props}
    />
  );
}

export { Menubar };
