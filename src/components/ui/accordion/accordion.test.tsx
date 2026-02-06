import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './index';

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
});

describe('AccordionItem', () => {
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
      document.querySelector('[data-slot="accordion-item"]'),
    ).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass('lsd:border-b');
    expect(item).toHaveClass('lsd:border-lsd-border-primary');
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
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveAttribute('data-slot', 'accordion-item');
  });

  it('merges custom className with component classes', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="custom-item-class">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveClass('custom-item-class');
  });

  it('passes through additional props', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" data-testid="test-item" id="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item).toHaveAttribute('data-testid', 'test-item');
    expect(item).toHaveAttribute('id', 'item-1');
  });
});

describe('AccordionTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByRole('button', { name: 'Item 1' })).toBeInTheDocument();
  });

  it('renders as a button', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByRole('button', { name: 'Item 1' })).toBeInTheDocument();
  });

  it('applies base classes correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    expect(trigger).toHaveClass('lsd:flex');
    expect(trigger).toHaveClass('lsd:flex-1');
    expect(trigger).toHaveClass('lsd:items-start');
    expect(trigger).toHaveClass('lsd:justify-between');
    expect(trigger).toHaveClass('lsd:text-left');
    expect(trigger).toHaveClass('lsd:text-sm');
    expect(trigger).toHaveClass('lsd:font-medium');
    expect(trigger).toHaveClass('lsd:cursor-pointer');
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
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    expect(trigger).toHaveAttribute('data-slot', 'accordion-trigger');
  });

  it('merges custom className with component classes', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="custom-trigger-class">
            Item 1
          </AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    expect(trigger).toHaveClass('custom-trigger-class');
  });

  it('passes through additional props', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="test-trigger" id="trigger-1">
            Item 1
          </AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    expect(trigger).toHaveAttribute('data-testid', 'test-trigger');
    expect(trigger).toHaveAttribute('id', 'trigger-1');
  });

  it('forwards ref to underlying button element', () => {
    const ref = vi.fn();
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger ref={ref}>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement);
  });

  it('renders chevron icon', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    const chevron = trigger.querySelector('svg');
    expect(chevron).toBeInTheDocument();
  });
});

describe('AccordionContent', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
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
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const innerDiv = document.querySelector(
      '[data-slot="accordion-content"] > div',
    );
    expect(innerDiv).toHaveClass('lsd:pt-0');
    expect(innerDiv).toHaveClass('lsd:pb-4');
    expect(innerDiv).toHaveClass('lsd:text-lsd-text-primary');
    expect(innerDiv).toHaveClass('lsd:bg-lsd-surface-primary');
  });
});
