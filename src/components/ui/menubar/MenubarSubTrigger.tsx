import { ChevronRightIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import {
  type MenubarSubTriggerVariants,
  menubarSubTriggerVariants,
} from './types';

export interface MenubarSubTriggerProps
  extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger>,
    MenubarSubTriggerVariants {}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        menubarSubTriggerVariants({ inset }),
        'lsd:group',
        className,
      )}
      {...props}
    >
      <span className="lsd:group-hover:underline lsd:group-focus:underline">
        {children}
      </span>
      <ChevronRightIcon className="lsd:ml-auto lsd:h-4 lsd:w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

export { MenubarSubTrigger };
