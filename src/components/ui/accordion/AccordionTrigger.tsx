import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type AccordionVariants, accordionTriggerVariants } from './types';

export interface AccordionTriggerProps
  extends React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    AccordionVariants {}

function AccordionTrigger({
  className,
  children,
  size = 'md',
  ...props
}: AccordionTriggerProps) {
  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'lsd:size-3';
      case 'lg':
        return 'lsd:size-5';
      default:
        return 'lsd:size-4';
    }
  };

  return (
    <AccordionPrimitive.Header className="lsd:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ size }), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            'lsd:text-lsd-icon-primary lsd:pointer-events-none lsd:shrink-0 lsd:translate-y-0.5 lsd:transition-transform lsd:duration-200',
            getIconSize(),
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export { AccordionTrigger };
