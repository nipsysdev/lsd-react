import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accordion, AccordionItem } from '../index';

describe('AccordionItem', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" />
      </Accordion>,
    );
    expect(
      document.querySelector('[data-slot="accordion-item"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" />
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass('lsd:border-b');
    expect(item).toHaveClass('lsd:border-lsd-border');
  });

  it('applies data-slot attribute', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" />
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveAttribute('data-slot', 'accordion-item');
  });

  it('merges custom className with component classes', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="custom-item-class" />
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass('custom-item-class');
  });

  it('passes through additional props', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" data-testid="test-item" id="item-1" />
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });
});
