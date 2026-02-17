import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

export { MenubarPortal };
