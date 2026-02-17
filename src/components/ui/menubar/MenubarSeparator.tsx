import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarSeparatorVariants } from './types';

export interface MenubarSeparatorProps
  extends React.ComponentProps<typeof MenubarPrimitive.Separator> {}

function MenubarSeparator({ className, ...props }: MenubarSeparatorProps) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn(menubarSeparatorVariants(), className)}
      {...props}
    />
  );
}

export { MenubarSeparator };
