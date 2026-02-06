import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('lsd:border-b lsd:border-lsd-border-primary', className)}
      {...props}
    />
  );
}

export { AccordionItem };
