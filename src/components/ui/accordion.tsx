import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

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

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="lsd:flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:lsd:border-lsd-border-primary lsd:cursor-pointer focus-visible:lsd:ring-lsd-text/50 lsd:flex lsd:flex-1 lsd:items-start lsd:justify-between lsd:gap-4 lsd:rounded-none lsd:py-4 lsd:text-left lsd:text-sm lsd:font-medium lsd:transition-all lsd:outline-none lsd:hover:underline focus-visible:lsd:ring-[3px] lsd:disabled:pointer-events-none lsd:disabled:cursor-default lsd:disabled:opacity-34 [&[lsd:data-state=open]>svg]:rotate-180 lsd:text-lsd-text-primary lsd:bg-lsd-surface-primary',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="lsd:text-lsd-icon-primary lsd:pointer-events-none lsd:size-4 lsd:shrink-0 lsd:translate-y-0.5 lsd:transition-transform lsd:duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

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

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
