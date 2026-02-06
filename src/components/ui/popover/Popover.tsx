import * as PopoverPrimitive from '@radix-ui/react-popover';
import type * as React from 'react';

import { PopoverAnchor } from './PopoverAnchor';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

export { Popover, PopoverContent, PopoverTrigger, PopoverAnchor };
