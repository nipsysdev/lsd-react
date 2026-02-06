import * as LabelPrimitive from '@radix-ui/react-label';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type LabelVariants, labelVariants } from './types';

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    LabelVariants {}

function Label({ className, variant, size, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Label };
