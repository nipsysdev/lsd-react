import { cva, type VariantProps } from 'class-variance-authority';
import type { IconSize, SizeVariant } from '@/lib/types';

export type ButtonVariant =
  | 'filled'
  | 'outlined'
  | 'filled-icon'
  | 'outlined-icon';

export const buttonVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:cursor-pointer',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-primary lsd:text-primary-foreground',
        outlined: 'lsd:bg-transparent lsd:text-foreground',
        'filled-icon':
          'lsd:bg-primary lsd:text-primary-foreground lsd:rounded-full',
        'outlined-icon':
          'lsd:bg-transparent lsd:text-foreground lsd:rounded-full',
      },
      size: {
        xs: 'lsd:h-7 lsd:px-2 lsd:py-1 lsd:text-xs',
        sm: 'lsd:h-8 lsd:px-3 lsd:py-[6px] lsd:text-sm',
        md: 'lsd:h-[34px] lsd:px-6 lsd:py-2 lsd:text-base',
        lg: 'lsd:h-12 lsd:px-8 lsd:py-[10px] lsd:text-lg',
        xl: 'lsd:h-14 lsd:px-10 lsd:py-3 lsd:text-xl',
        'icon-sm': 'lsd:w-8 lsd:h-8',
        'icon-md': 'lsd:w-10 lsd:h-10',
        'icon-lg': 'lsd:w-12 lsd:h-12',
        'icon-xl': 'lsd:w-16 lsd:h-16',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants> & {
  variant?: ButtonVariant;
  size?: SizeVariant | IconSize;
};
