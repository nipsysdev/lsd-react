import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import type { TabsProps } from './types';
import { tabsVariants } from './types';

function Tabs({ className, size, fullWidth, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(tabsVariants({ size, fullWidth }), className)}
      {...props}
    />
  );
}

export { Tabs };
