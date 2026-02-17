import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type MenubarItemVariants, menubarItemVariants } from './types';

export interface MenubarItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.Item>,
    MenubarItemVariants {
  shortcut?: string;
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  shortcut,
  children,
  ...props
}: MenubarItemProps) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        menubarItemVariants({ variant, inset }),
        'lsd:group',
        className,
      )}
      {...props}
    >
      <span className="lsd:group-hover:underline lsd:group-focus:underline">
        {children}
      </span>
      {shortcut && (
        <span className="lsd:text-lsd-text-secondary lsd:ml-auto lsd:text-xs lsd:tracking-widest">
          {shortcut}
        </span>
      )}
    </MenubarPrimitive.Item>
  );
}

export { MenubarItem };
