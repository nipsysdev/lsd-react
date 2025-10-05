import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      // Display variants
      display1: 'text-[5.5rem] font-normal leading-[6rem]',
      display2: 'text-[4rem] font-normal leading-[4.5rem]',
      display3: 'text-[3.5rem] font-normal leading-[4rem]',
      display4: 'text-[3rem] font-normal leading-[3.5rem]',

      // Heading variants
      h1: 'text-[2.5rem] font-normal leading-[3rem]',
      h2: 'text-[2rem] font-normal leading-[2.5rem]',
      h3: 'text-[1.75rem] font-normal leading-[2.25rem]',
      h4: 'text-[1.5rem] font-normal leading-[2rem]',
      h5: 'text-[1.25rem] font-normal leading-[1.75rem]',
      h6: 'text-[1rem] font-normal leading-[1.5rem]',

      // Subtitle variants
      subtitle1: 'text-[1.125rem] font-normal leading-[1.5rem]',
      subtitle2: 'text-[1rem] font-normal leading-[1.5rem]',
      subtitle3: 'text-[0.875rem] font-normal leading-[1.25rem]',
      subtitle4: 'text-[0.75rem] font-normal leading-[1rem]',

      // Body variants
      body1: 'text-[1rem] font-normal leading-[1.5rem]',
      body2: 'text-[0.875rem] font-normal leading-[1.25rem]',
      body3: 'text-[0.75rem] font-normal leading-[1rem]',

      // Label variants
      label1: 'text-[0.875rem] font-normal leading-[1.25rem]',
      label2: 'text-[0.75rem] font-normal leading-[1rem]',
    },
    color: {
      primary: 'text-lsd-text-primary',
      secondary: 'text-lsd-text-secondary',
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
    case 'subtitle1':
    case 'subtitle2':
    case 'subtitle3':
    case 'subtitle4':
    case 'body1':
    case 'body2':
    case 'body3':
    default:
      return 'span';
  }
}

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
