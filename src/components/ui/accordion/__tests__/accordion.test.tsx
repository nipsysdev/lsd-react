import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../index';

describe('Accordion', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(
      document.querySelector('[data-slot="accordion"]'),
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const accordion = document.querySelector('[data-slot="accordion"]');
    expect(accordion).toHaveAttribute('data-slot', 'accordion');
  });

  it('passes through additional props', () => {
    render(
      <Accordion
        type="single"
        collapsible
        data-testid="test-accordion"
        id="accordion-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const accordion = document.querySelector('[data-slot="accordion"]');
    expect(accordion).toHaveAttribute('data-testid', 'test-accordion');
    expect(accordion).toHaveAttribute('id', 'accordion-1');
  });

  it('renders with all subcomponents', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    // Verify parent is present
    expect(
      document.querySelector('[data-slot="accordion"]'),
    ).toBeInTheDocument();
    // Verify all items are present
    expect(
      document.querySelectorAll('[data-slot="accordion-item"]'),
    ).toHaveLength(2);
    // Verify all triggers are present
    expect(screen.getByRole('button', { name: 'Item 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Item 2' })).toBeInTheDocument();
    // Verify content elements are present (even if hidden)
    expect(
      document.querySelectorAll('[data-slot="accordion-content"]'),
    ).toHaveLength(2);
    // Verify open content is visible
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
