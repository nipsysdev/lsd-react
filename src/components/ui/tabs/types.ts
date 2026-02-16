import type * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

export const tabsVariants = cva('', {
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

export const tabsListVariants = cva(
  'lsd:bg-lsd-surface lsd:border-b lsd:border-lsd-border lsd:flex lsd:flex-row',
  {
    variants: {
      size: {
        sm: 'lsd:h-8',
        md: 'lsd:h-10',
        lg: 'lsd:h-12',
      },
      fullWidth: {
        true: 'lsd:w-full',
        false: 'lsd:w-fit',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

export const tabsTriggerVariants = cva(
  'lsd:text-lsd-text-primary lsd:cursor-pointer lsd:border lsd:border-transparent lsd:border-b-0 lsd:hover:underline lsd:data-[state=active]:border-lsd-text-primary lsd:data-[state=active]:bg-lsd-surface lsd:data-[state=active]:font-medium lsd:disabled:opacity-34 lsd:disabled:pointer-events-none lsd:flex lsd:items-center lsd:justify-center lsd:whitespace-nowrap lsd:transition-colors',
  {
    variants: {
      size: {
        sm: 'lsd:px-3 lsd:py-1.5 lsd:text-sm lsd:[&>svg]:ml-2 lsd:[&>svg]:h-4 lsd:[&>svg]:w-4',
        md: 'lsd:px-4 lsd:py-2 lsd:text-base lsd:[&>svg]:ml-3 lsd:[&>svg]:h-5 lsd:[&>svg]:w-5',
        lg: 'lsd:px-5 lsd:py-2.5 lsd:text-lg lsd:[&>svg]:ml-3.5 lsd:[&>svg]:h-6 lsd:[&>svg]:w-6',
      },
      fullWidth: {
        true: 'lsd:flex-1',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

export type TabsVariants = VariantProps<typeof tabsVariants>;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    TabsVariants {}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    TabsListVariants {}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    TabsTriggerVariants {}
