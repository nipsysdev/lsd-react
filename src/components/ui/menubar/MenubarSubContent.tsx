import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarSubContentVariants } from './types';

export interface MenubarSubContentProps
  extends React.ComponentProps<typeof MenubarPrimitive.SubContent> {}

function MenubarSubContent({ className, ...props }: MenubarSubContentProps) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(menubarSubContentVariants(), className)}
      {...props}
    />
  );
}

export { MenubarSubContent };
