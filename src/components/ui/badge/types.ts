import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export type BadgeVariant =
  | 'filled'
  | 'outlined'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info'
  | 'dot';

export const badgeVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:border-lsd-border lsd:rounded-[20px] lsd:w-fit lsd:whitespace-nowrap lsd:shrink-0 lsd:[&>svg]:size-3 lsd:[&>svg]:pointer-events-none lsd:hover:underline lsd:focus:underline lsd:cursor-pointer lsd:transition-colors lsd:overflow-hidden',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-lsd-primary lsd:text-lsd-surface',
        outlined: 'lsd:bg-transparent lsd:text-lsd-text-primary',
        destructive:
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive',
        success: 'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success',
        warning: 'lsd:bg-lsd-warning lsd:text-white lsd:border-lsd-warning',
        info: 'lsd:bg-lsd-info lsd:text-white lsd:border-lsd-info',
        dot: 'lsd:rounded-full lsd:w-fit lsd:h-fit lsd:p-0',
      },
      size: {
        xs: 'lsd:h-[20px] lsd:px-[5px] lsd:py-[3px] lsd:gap-[4px] lsd:text-[0.625rem] [&>svg]:size-[10px]',
        sm: 'lsd:h-[24px] lsd:px-[7px] lsd:py-[3px] lsd:gap-[4px] lsd:text-[0.75rem] [&>svg]:size-3',
        md: 'lsd:h-[28px] lsd:px-[11px] lsd:py-[3px] lsd:gap-[6px] lsd:text-[0.875rem] [&>svg]:size-3',
        lg: 'lsd:h-[32px] lsd:px-[13px] lsd:py-[3px] lsd:gap-[8px] lsd:text-[1rem] [&>svg]:size-[14px]',
        xl: 'lsd:h-[36px] lsd:px-[15px] lsd:py-[3px] lsd:gap-[10px] lsd:text-[1.125rem] [&>svg]:size-[16px]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants> & {
  variant?: BadgeVariant;
  size?: SizeVariant;
};
