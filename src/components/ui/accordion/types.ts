import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export const accordionTriggerVariants = cva(
  'focus-visible:lsd:border-lsd-border-primary lsd:cursor-pointer focus-visible:lsd:ring-lsd-text/50 lsd:flex lsd:flex-1 lsd:items-start lsd:justify-between lsd:gap-4 lsd:rounded-none lsd:text-left lsd:font-medium lsd:transition-all lsd:outline-none lsd:hover:underline focus-visible:lsd:ring-[3px] lsd:disabled:pointer-events-none lsd:disabled:cursor-default lsd:disabled:opacity-34 [&[lsd:data-state=open]>svg]:rotate-180 lsd:text-lsd-text-primary lsd:bg-lsd-surface-primary',
  {
    variants: {
      size: {
        sm: 'lsd:py-2 lsd:text-xs',
        md: 'lsd:py-4 lsd:text-sm',
        lg: 'lsd:py-6 lsd:text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export const accordionContentVariants = cva(
  'lsd:data-[state=closed]:animate-accordion-up lsd:data-[state=open]:animate-accordion-down lsd:overflow-hidden lsd:text-lsd-text-primary lsd:bg-lsd-surface-primary',
  {
    variants: {
      size: {
        sm: 'lsd:text-xs',
        md: 'lsd:text-sm',
        lg: 'lsd:text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export type AccordionVariants = VariantProps<
  typeof accordionTriggerVariants
> & {
  size?: SizeVariant;
};
