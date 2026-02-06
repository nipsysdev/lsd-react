import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Accordion, AccordionItem, AccordionTrigger } from '../index';

describe('AccordionTrigger', () => {
  it('renders without crashing', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
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
        </AccordionItem>
      </Accordion>,
    );
    const trigger = screen.getByRole('button', { name: 'Item 1' });
    const chevron = trigger.querySelector('svg');
    expect(chevron).toBeInTheDocument();
  });
});
