import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
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

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    const Component = as || getDefaultComponent(variant);

    return (
      <Component
        className={cn(typographyVariants({ variant, color }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

function getDefaultComponent(
  variant?: VariantProps<typeof typographyVariants>['variant'],
): React.ElementType {
  switch (variant) {
    // Display variants don't have default components
    case 'display1':
    case 'display2':
    case 'display3':
    case 'display4':
      return 'div';

    // Heading variants map to corresponding heading elements
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';

    // Label variants map to label element
    case 'label1':
    case 'label2':
      return 'label';

    // All other variants default to span
    default:
      return 'span';
  }
}

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
