import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:border-lsd-icon-primary lsd:rounded-[20px] lsd:w-fit lsd:whitespace-nowrap lsd:shrink-0 lsd:[&>svg]:size-3 lsd:[&>svg]:pointer-events-none lsd:hover:underline lsd:focus:underline lsd:cursor-pointer lsd:transition-colors lsd:overflow-hidden',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-lsd-primary lsd:text-lsd-surface-primary',
        outlined: 'lsd:bg-transparent lsd:text-lsd-text-primary',
      },
      size: {
        default:
          'lsd:h-[28px] lsd:px-[11px] lsd:py-[3px] lsd:gap-[12px] lsd:text-[0.875rem]',
        sm: 'lsd:h-[24px] lsd:px-[7px] lsd:py-[3px] lsd:gap-[8px] lsd:text-[0.75rem]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'default',
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
