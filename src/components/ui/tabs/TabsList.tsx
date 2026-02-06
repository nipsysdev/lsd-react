import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import type { TabsListProps } from './types';
import { tabsListVariants } from './variants';

function TabsList({ className, size, fullWidth, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ size, fullWidth }), className)}
      {...props}
    />
  );
}

export { TabsList };
