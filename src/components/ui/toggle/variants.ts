import { cva, type VariantProps } from 'class-variance-authority';

export const toggleVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:bg-transparent lsd:text-lsd-text lsd:border-lsd-border lsd:hover:underline lsd:cursor-pointer lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline lsd:data-[state=on]:bg-lsd-primary lsd:data-[state=on]:text-lsd-surface-primary',
  {
    variants: {
      size: {
        default: 'lsd:h-10 lsd:min-w-10 lsd:px-3 lsd:py-[6px]',
        sm: 'lsd:h-8 lsd:min-w-8 lsd:px-2 lsd:py-[6px] lsd:text-[0.75rem]',
        lg: 'lsd:h-12 lsd:min-w-12 lsd:px-4 lsd:py-[10px] lsd:text-[0.875rem]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;
