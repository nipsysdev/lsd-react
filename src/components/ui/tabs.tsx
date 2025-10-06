import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const tabsVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    fullWidth: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'lg',
    fullWidth: false,
  },
});

const tabsListVariants = cva(
  'bg-lsd-surface-primary border-b border-lsd-border flex flex-row',
  {
    variants: {
      size: {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

const tabsTriggerVariants = cva(
  'text-lsd-text border border-transparent border-b-0 hover:underline data-[state=active]:border-lsd-text data-[state=active]:bg-lsd-surface-primary data-[state=active]:font-medium disabled:opacity-34 disabled:pointer-events-none flex items-center justify-center whitespace-nowrap transition-colors',
  {
    variants: {
      size: {
        sm: 'px-3 py-1.5 text-sm [&>svg]:ml-2 [&>svg]:h-4 [&>svg]:w-4',
        md: 'px-4 py-2 text-base [&>svg]:ml-3 [&>svg]:h-5 [&>svg]:w-5',
        lg: 'px-5 py-2.5 text-lg [&>svg]:ml-3.5 [&>svg]:h-6 [&>svg]:w-6',
      },
      fullWidth: {
        true: 'flex-1',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {}

function Tabs({ className, size, fullWidth, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(tabsVariants({ size, fullWidth }), className)}
      {...props}
    />
  );
}

interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({ className, size, fullWidth, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ size, fullWidth }), className)}
      {...props}
    />
  );
}

interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

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

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('mt-4 outline-none', className)}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsVariants,
  tabsListVariants,
  tabsTriggerVariants,
};
