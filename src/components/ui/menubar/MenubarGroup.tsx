import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

export { MenubarGroup };
