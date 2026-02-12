import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accordion, AccordionContent, AccordionItem } from '../index';

describe('AccordionContent', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const content = document.querySelector('[data-slot="accordion-content"]');
    expect(content).toHaveClass('lsd:overflow-hidden');
    expect(content).toHaveClass('lsd:text-sm');
  });

  it('applies animation classes', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const content = document.querySelector('[data-slot="accordion-content"]');
    expect(content).toHaveClass('lsd:data-[state=closed]:animate-accordion-up');
    expect(content).toHaveClass('lsd:data-[state=open]:animate-accordion-down');
  });

  it('applies data-slot attribute', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const content = document.querySelector('[data-slot="accordion-content"]');
    expect(content).toHaveAttribute('data-slot', 'accordion-content');
  });

  it('merges custom className with component classes', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent className="custom-content-class">
            Content 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    // className is applied to the inner div, not the Radix content element
    const innerDiv = document.querySelector(
      '[data-slot="accordion-content"] > div',
    );
    expect(innerDiv).toHaveClass('custom-content-class');
  });

  it('passes through additional props', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent data-testid="test-content" id="content-1">
            Content 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const content = document.querySelector('[data-slot="accordion-content"]');
    expect(content).toHaveAttribute('data-testid', 'test-content');
    expect(content).toHaveAttribute('id', 'content-1');
  });

  it('renders children correctly', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>
            <p>Nested content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText('Nested content')).toBeInTheDocument();
  });

  it('applies inner div classes', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const innerDiv = document.querySelector(
      '[data-slot="accordion-content"] > div',
    );
    expect(innerDiv).toHaveClass('lsd:pt-0');
    expect(innerDiv).toHaveClass('lsd:pb-4');
  });
});
