import type * as TabsPrimitive from '@radix-ui/react-tabs';
import type { VariantProps } from 'class-variance-authority';
import type {
  tabsListVariants,
  tabsTriggerVariants,
  tabsVariants,
} from './variants';

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}
