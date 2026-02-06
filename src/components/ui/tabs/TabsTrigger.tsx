import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import type { TabsTriggerProps } from './types';
import { tabsTriggerVariants } from './types';

function TabsTrigger({
  className,
  size,
  fullWidth,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ size, fullWidth }), className)}
      {...props}
    />
  );
}

export { TabsTrigger };
