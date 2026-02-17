import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { MenubarPortal } from './MenubarPortal';
import { menubarContentVariants } from './types';

export interface MenubarContentProps
  extends React.ComponentProps<typeof MenubarPrimitive.Content> {
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(menubarContentVariants(), className)}
        {...props}
      />
    </MenubarPortal>
  );
}

export { MenubarContent };
