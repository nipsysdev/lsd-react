import { cva, type VariantProps } from 'class-variance-authority';

export const buttonGroupVariants = cva(
  "lsd:flex lsd:w-fit lsd:items-stretch lsd:[&>*]:focus-visible:z-10 lsd:[&>*]:focus-visible:relative lsd:[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit lsd:[&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:lsd:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:lsd:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          'lsd:[&>*:not(:first-child)]:rounded-l-none lsd:[&>*:not(:first-child)]:border-l-0 lsd:[&>*:not(:last-child)]:rounded-r-none',
        vertical:
          'lsd:flex-col lsd:[&>*:not(:first-child)]:rounded-t-none lsd:[&>*:not(:first-child)]:border-t-0 lsd:[&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
