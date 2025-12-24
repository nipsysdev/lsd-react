import type * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CodeBlock } from './code-block';

interface CodeExampleProps {
  title: string;
  children?: React.ReactNode;
  code: string;
}

export function CodeExample({ title, children, code }: CodeExampleProps) {
  return (
    <div className="lsd:space-y-4">
      <div>{children}</div>
      <Accordion type="single" collapsible>
        <AccordionItem value="code">
          <AccordionTrigger>View Code</AccordionTrigger>
          <AccordionContent>
            <CodeBlock code={code} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
