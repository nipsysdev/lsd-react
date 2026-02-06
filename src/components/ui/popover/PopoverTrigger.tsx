import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

export { PopoverTrigger };
