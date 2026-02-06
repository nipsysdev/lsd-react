import * as React from 'react';

import { cn } from '@/lib/utils';
import type { TypographyProps } from './types';
import { getDefaultComponent } from './utils';
import { typographyVariants } from './variants';

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

Typography.displayName = 'Typography';

export { Typography };
