import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export { TooltipTrigger };
