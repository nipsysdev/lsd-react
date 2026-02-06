import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="lsd:data-[state=closed]:animate-accordion-up lsd:data-[state=open]:animate-accordion-down lsd:overflow-hidden lsd:text-sm"
      {...props}
    >
      <div
        className={cn(
          'lsd:pt-0 lsd:pb-4 lsd:text-lsd-text-primary lsd:bg-lsd-surface-primary',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { AccordionContent };
