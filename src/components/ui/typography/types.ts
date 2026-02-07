import { cva, type VariantProps } from 'class-variance-authority';

// Component-specific variant types
export type TypographyVariant =
  // Display variants
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  // Heading variants
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  // Subtitle variants
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'
  // Body variants
  | 'body1'
  | 'body2'
  | 'body3'
  // Label variants
  | 'label1'
  | 'label2';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      // Display variants
      display1: 'lsd:text-[5.5rem] lsd:font-normal lsd:leading-[6rem]',
      display2: 'lsd:text-[4rem] lsd:font-normal lsd:leading-[4.5rem]',
      display3: 'lsd:text-[3.5rem] lsd:font-normal lsd:leading-[4rem]',
      display4: 'lsd:text-[3rem] lsd:font-normal lsd:leading-[3.5rem]',

      // Heading variants
      h1: 'lsd:text-[2.5rem] lsd:font-normal lsd:leading-[3rem]',
      h2: 'lsd:text-[2rem] lsd:font-normal lsd:leading-[2.5rem]',
      h3: 'lsd:text-[1.75rem] lsd:font-normal lsd:leading-[2.25rem]',
      h4: 'lsd:text-[1.5rem] lsd:font-normal lsd:leading-[2rem]',
      h5: 'lsd:text-[1.25rem] lsd:font-normal lsd:leading-[1.75rem]',
      h6: 'lsd:text-[1rem] lsd:font-normal lsd:leading-[1.5rem]',

      // Subtitle variants
      subtitle1: 'lsd:text-[1.125rem] lsd:font-normal lsd:leading-[1.5rem]',
      subtitle2: 'lsd:text-[1rem] lsd:font-normal lsd:leading-[1.5rem]',
      subtitle3: 'lsd:text-[0.875rem] lsd:font-normal lsd:leading-[1.25rem]',
      subtitle4: 'lsd:text-[0.75rem] lsd:font-normal lsd:leading-[1rem]',

      // Body variants
      body1: 'lsd:text-[1rem] lsd:font-normal lsd:leading-[1.5rem]',
      body2: 'lsd:text-[0.875rem] lsd:font-normal lsd:leading-[1.25rem]',
      body3: 'lsd:text-[0.75rem] lsd:font-normal lsd:leading-[1rem]',

      // Label variants
      label1: 'lsd:text-[0.875rem] lsd:font-normal lsd:leading-[1.25rem]',
      label2: 'lsd:text-[0.75rem] lsd:font-normal lsd:leading-[1rem]',
    },
    color: {
      primary: 'lsd:text-lsd-text-primary',
      secondary: 'lsd:text-lsd-text-secondary',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'primary',
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    TypographyVariants {
  as?: React.ElementType;
}
