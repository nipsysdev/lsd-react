import { CircleIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarRadioItemVariants } from './types';

export interface MenubarRadioItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.RadioItem> {}

function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(menubarRadioItemVariants(), 'lsd:group', className)}
      {...props}
    >
      <span className="lsd:pointer-events-none lsd:absolute lsd:left-2 lsd:flex lsd:size-3.5 lsd:items-center lsd:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="lsd:size-2 lsd:fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      <span className="lsd:group-hover:underline lsd:group-focus:underline">
        {children}
      </span>
    </MenubarPrimitive.RadioItem>
  );
}

export { MenubarRadioItem };
