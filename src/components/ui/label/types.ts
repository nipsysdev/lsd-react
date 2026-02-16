import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export type LabelVariant = 'default' | 'secondary';

export const labelVariants = cva(
  'lsd:flex lsd:items-center lsd:gap-2 lsd:select-none lsd:group-data-[disabled=true]:pointer-events-none lsd:group-data-[disabled=true]:opacity-50 lsd:peer-disabled:cursor-not-allowed lsd:peer-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'lsd:text-lsd-text-primary',
        secondary: 'lsd:text-lsd-text-secondary',
      },
      size: {
        sm: 'lsd:text-[0.75rem] lsd:leading-[1rem]',
        md: 'lsd:text-[0.875rem] lsd:leading-[1.25rem]',
        lg: 'lsd:text-[1rem] lsd:leading-[1.5rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export type LabelVariants = VariantProps<typeof labelVariants> & {
  variant?: LabelVariant;
  size?: SizeVariant;
};
