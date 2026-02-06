import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type * as React from 'react';
import { TooltipContent } from './TooltipContent';
import { TooltipProvider } from './TooltipProvider';
import { TooltipTrigger } from './TooltipTrigger';

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
