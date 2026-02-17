import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

export { MenubarSub };
