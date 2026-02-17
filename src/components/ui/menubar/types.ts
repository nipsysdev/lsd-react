import { cva, type VariantProps } from 'class-variance-authority';

export const menubarVariants = cva(
  'lsd:flex lsd:h-9 lsd:items-center lsd:gap-1 lsd:border lsd:border-lsd-border lsd:bg-lsd-surface lsd:p-1 lsd:shadow-xs',
);

export const menubarTriggerVariants = cva(
  'lsd:cursor-pointer lsd:flex lsd:items-center lsd:px-2 lsd:py-1 lsd:text-sm lsd:font-medium lsd:outline-none lsd:select-none lsd:text-lsd-text-primary lsd:bg-lsd-surface lsd:hover:underline lsd:focus:underline lsd:data-[state=open]:bg-lsd-surface-secondary lsd:data-[state=open]:text-lsd-text-primary lsd:transition-colors',
);

export const menubarItemVariants = cva(
  "lsd:relative lsd:flex lsd:cursor-pointer lsd:items-center lsd:gap-2 lsd:px-2 lsd:py-1.5 lsd:text-sm lsd:outline-none lsd:select-none lsd:text-lsd-text-primary lsd:bg-lsd-surface lsd:disabled:pointer-events-none lsd:disabled:opacity-50 lsd:transition-colors lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: '',
        destructive:
          'lsd:text-lsd-destructive lsd:focus:bg-lsd-destructive/10 lsd:focus:text-lsd-destructive lsd:[&_svg]:!text-lsd-destructive',
      },
      inset: {
        true: 'lsd:pl-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      inset: false,
    },
  },
);

export const menubarSeparatorVariants = cva(
  'lsd:bg-lsd-border lsd:-mx-1 lsd:my-1 lsd:h-px',
);

export const menubarLabelVariants = cva(
  'lsd:px-2 lsd:py-1.5 lsd:text-sm lsd:font-bold lsd:text-lsd-text-primary',
  {
    variants: {
      inset: {
        true: 'lsd:pl-8',
      },
    },
    defaultVariants: {
      inset: false,
    },
  },
);

export const menubarContentVariants = cva(
  'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:z-50 lsd:min-w-[12rem] lsd:overflow-hidden lsd:border lsd:border-lsd-border lsd:p-1 lsd:shadow-lg lsd:data-[state=open]:animate-in lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2',
);

export const menubarSubTriggerVariants = cva(
  'lsd:flex lsd:cursor-pointer lsd:items-center lsd:px-2 lsd:py-1.5 lsd:text-sm lsd:outline-none lsd:select-none lsd:text-lsd-text-primary lsd:bg-lsd-surface lsd:data-[state=open]:bg-lsd-surface-secondary lsd:data-[state=open]:text-lsd-text-primary lsd:transition-colors',
  {
    variants: {
      inset: {
        true: 'lsd:pl-8',
      },
    },
    defaultVariants: {
      inset: false,
    },
  },
);

export const menubarSubContentVariants = cva(
  'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:z-50 lsd:min-w-[8rem] lsd:overflow-hidden lsd:border lsd:border-lsd-border lsd:p-1 lsd:shadow-lg lsd:data-[state=open]:animate-in lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:fade-out-0 lsd:data-[state=open]:fade-in-0 lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:zoom-in-95 lsd:data-[side=bottom]:slide-in-from-top-2 lsd:data-[side=left]:slide-in-from-right-2 lsd:data-[side=right]:slide-in-from-left-2 lsd:data-[side=top]:slide-in-from-bottom-2',
);

export const menubarCheckboxItemVariants = cva(
  "lsd:relative lsd:flex lsd:cursor-pointer lsd:items-center lsd:gap-2 lsd:py-1.5 lsd:pr-2 lsd:pl-8 lsd:text-sm lsd:outline-none lsd:select-none lsd:text-lsd-text-primary lsd:bg-lsd-surface lsd:disabled:pointer-events-none lsd:disabled:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
);

export const menubarRadioItemVariants = cva(
  "lsd:relative lsd:flex lsd:cursor-pointer lsd:items-center lsd:gap-2 lsd:py-1.5 lsd:pr-2 lsd:pl-8 lsd:text-sm lsd:outline-none lsd:select-none lsd:text-lsd-text-primary lsd:bg-lsd-surface lsd:disabled:pointer-events-none lsd:disabled:opacity-50 lsd:[&_svg]:pointer-events-none lsd:[&_svg]:shrink-0 lsd:[&_svg:not([class*='size-'])]:size-4",
);

export type MenubarVariants = VariantProps<typeof menubarVariants>;
export type MenubarItemVariants = VariantProps<typeof menubarItemVariants>;
export type MenubarLabelVariants = VariantProps<typeof menubarLabelVariants>;
export type MenubarSubTriggerVariants = VariantProps<
  typeof menubarSubTriggerVariants
>;
