import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

export { MenubarRadioGroup };
