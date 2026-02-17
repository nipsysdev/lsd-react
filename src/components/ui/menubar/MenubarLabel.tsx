import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type MenubarLabelVariants, menubarLabelVariants } from './types';

export interface MenubarLabelProps
  extends React.ComponentProps<typeof MenubarPrimitive.Label>,
    MenubarLabelVariants {}

function MenubarLabel({ className, inset, ...props }: MenubarLabelProps) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(menubarLabelVariants({ inset }), className)}
      {...props}
    />
  );
}

export { MenubarLabel };
